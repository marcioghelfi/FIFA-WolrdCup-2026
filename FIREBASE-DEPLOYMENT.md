# Firebase Hosting Deployment Guide

How to deploy a static web app (HTML/CSS/JS) to Firebase Hosting with GitHub Actions auto-deploy.
This is the exact process used for the FIFA World Cup 2026 project.

---

## Prerequisites

- Node.js installed
- A GitHub repository with your code
- A Google account (gmail)

---

## Step 1 — Install Firebase CLI

```
npm install -g firebase-tools
```

Verify:
```
firebase --version
```

---

## Step 2 — Log in to Firebase

Run this in a terminal (not through Claude Code / non-interactive shells):

```
firebase login
```

This opens a browser tab for Google sign-in. After signing in it redirects to localhost to complete.

**If you are on a corporate network and the browser shows "Firebase CLI Login Failed"**, use the CI token flow instead:

```
firebase login:ci
```

This prints a reusable token. You can then deploy with:
```
firebase deploy --token "YOUR_TOKEN_HERE"
```

---

## Step 3 — Create a Firebase project

### Option A: Via CLI
```
firebase projects:create YOUR-PROJECT-ID
```

If you get a 403 error adding Firebase to the project, use Option B.

### Option B: Via Firebase Console (recommended if CLI gives 403)
1. Go to console.firebase.google.com
2. Click "Get started by setting up a Firebase project"
3. At the bottom of the dialog, click **"Add Firebase to a Google Cloud project"**
4. Select the existing Google Cloud project (created in Option A) or create a new one
5. Complete the wizard (disable Google Analytics if not needed)

---

## Step 4 — Create firebase.json in your project root

```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      ".firebaserc",
      ".vscode/**",
      "projectplan.md",
      "README.md",
      "**/.*"
    ],
    "headers": [
      {
        "source": "**/*.js",
        "headers": [{ "key": "Cache-Control", "value": "public, max-age=3600" }]
      },
      {
        "source": "**/*.css",
        "headers": [{ "key": "Cache-Control", "value": "public, max-age=3600" }]
      },
      {
        "source": "index.html",
        "headers": [{ "key": "Cache-Control", "value": "no-cache" }]
      }
    ]
  }
}
```

Notes:
- `"public": "."` means the project root is the hosting root. Change to `"public": "public"` if your files are in a `public/` subfolder.
- Add any files/folders you do NOT want deployed to the `ignore` array.

---

## Step 5 — Link your local folder to the Firebase project

```
firebase use --add
```

Select your project from the list, then give it the alias `default`.

This creates a `.firebaserc` file — commit it to your repo.

---

## Step 6 — Deploy manually (first time)

```
firebase deploy --only hosting
```

Your site will be live at `https://YOUR-PROJECT-ID.web.app`.

---

## Step 7 — Set up GitHub Actions auto-deploy

Run in your project folder:

```
firebase init hosting:github
```

When prompted:
- **GitHub repo:** `your-github-username/your-repo-name`
- **Set up build script before deploy?** → `n` (static site, no build needed)
- **Auto-deploy on PR merge?** → `y`
- **Auto-deploy on PR preview?** → optional (`y` creates preview URLs per PR)

This will:
- Create `.github/workflows/firebase-hosting-merge.yml` — deploys on every push to `main`
- Create `.github/workflows/firebase-hosting-pull-request.yml` — deploys previews on PRs
- Store `FIREBASE_SERVICE_ACCOUNT_*` as a GitHub Actions secret automatically

Commit and push the new files:

```
git add .github/ .gitignore .firebaserc firebase.json
git commit -m "ci: add Firebase Hosting GitHub Actions auto-deploy workflow"
git push origin main
```

---

## Step 8 — Verify the pipeline

Go to `https://github.com/YOUR-USERNAME/YOUR-REPO/actions` and confirm the workflow runs green.

From this point on:
- Every `git push` to `main` = automatic deploy to the live site
- No need to run `firebase deploy` manually

---

## Adding a Custom Domain (optional)

1. Go to Firebase Console → your project → Hosting → "Add custom domain"
2. Enter your domain (e.g. `app.yourbusiness.com`)
3. Firebase provides DNS records (A records or CNAME)
4. Add those records at your domain registrar (GoDaddy, Cloudflare, Namecheap, etc.)
5. Wait for DNS propagation (up to 24 hours)
6. Firebase automatically provisions a free SSL certificate

---

## Updating the Site After Initial Deployment

Manual:
```
firebase deploy --only hosting
```

Automated (after Step 7): just `git push origin main` — GitHub Actions handles the rest.

---

## Project-Specific Notes (FIFA World Cup 2026)

- Project ID: `worldcup2026-app`
- Live URL: `https://worldcup2026-app.web.app`
- GitHub repo: `https://github.com/marcioghelfi/FIFA-WolrdCup-2026`
- Hosting root: project root (`.`)
- Data file: `data/worldcup2026.js` — excluded from cache (loaded fresh each visit via `index.html` no-cache header)
