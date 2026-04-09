Follow these steps exactly, in order, using the Bash tool for all shell commands. Work from the project root directory.

## Step 1: Create .gitignore if missing

```bash
test -f .gitignore && echo "EXISTS" || echo "MISSING"
```

If MISSING, create it:

```bash
cat > .gitignore << 'EOF'
.DS_Store
node_modules/
*.log
.env
Thumbs.db
EOF
```

If EXISTS, leave it untouched.

## Step 2: Initialize git if not already initialized

```bash
test -d .git && echo "EXISTS" || echo "MISSING"
```

If MISSING:

```bash
git init && git checkout -b main
```

If EXISTS, skip.

## Step 3: Stage all files

```bash
git add .
```

Check what is staged:

```bash
git diff --cached --stat
```

If the output is empty (nothing staged), tell the user "Nothing to commit — working tree is clean." and stop here.

## Step 4: Generate a commit message and commit

Inspect what changed:

```bash
git diff --cached --name-status
```

Based on the file names and types, write a short, meaningful commit message in the imperative mood (e.g. "Add grid layout and mouse interaction logic", "Update reset button and color picker"). Avoid generic messages like "update files".

```bash
git commit -m "<your generated message>"
```

## Step 5: Ensure a GitHub remote exists

```bash
git remote get-url origin 2>&1
```

If the output is a valid URL (starts with `https://` or `git@`), remote already exists — skip to Step 6.

If missing or errors, create a new public GitHub repo using the project folder name:

```bash
REPO_NAME=$(basename "$PWD")
gh repo create "$REPO_NAME" --public --source=. --remote=origin
```

If that fails because the repo already exists on GitHub (error contains "already exists"), add the remote manually:

```bash
GITHUB_USER=$(gh api user --jq '.login')
REPO_NAME=$(basename "$PWD")
git remote add origin "https://github.com/${GITHUB_USER}/${REPO_NAME}.git"
```

## Step 6: Push to origin

```bash
git push -u origin $(git branch --show-current)
```

If push is rejected because the remote has commits not in local history, pull with rebase first:

```bash
git pull --rebase origin $(git branch --show-current)
git push -u origin $(git branch --show-current)
```

## Step 7: Enable GitHub Pages (only if index.html exists at project root)

```bash
test -f index.html && echo "EXISTS" || echo "MISSING"
```

If MISSING, skip this step entirely.

If EXISTS:

```bash
GITHUB_USER=$(gh api user --jq '.login')
REPO_NAME=$(basename "$PWD")
BRANCH=$(git branch --show-current)

gh api "repos/${GITHUB_USER}/${REPO_NAME}/pages" \
  -X POST \
  -f "source[branch]=${BRANCH}" \
  -f "source[path]=/" \
  2>&1
```

If successful, fetch and display the Pages URL:

```bash
GITHUB_USER=$(gh api user --jq '.login')
REPO_NAME=$(basename "$PWD")
gh api "repos/${GITHUB_USER}/${REPO_NAME}/pages" --jq '.html_url'
```

Tell the user: "GitHub Pages is live at: <url> (may take 1–2 minutes to build on first deploy)"

If the call fails with a 409 (Pages already enabled), just fetch and display the existing URL:

```bash
GITHUB_USER=$(gh api user --jq '.login')
REPO_NAME=$(basename "$PWD")
gh api "repos/${GITHUB_USER}/${REPO_NAME}/pages" --jq '.html_url'
```

Tell the user: "GitHub Pages was already enabled. URL: <url>"
