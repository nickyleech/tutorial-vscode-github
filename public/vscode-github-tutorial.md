# VS Code & GitHub Tutorial

A beginner's guide to coding with VS Code, GitHub, and Claude Code

## What You'll Learn

1. [Getting Started](#getting-started)
2. [Your First Project](#your-first-project)
3. [Working with Git](#working-with-git)
4. [GitHub Basics](#github-basics)
5. [Claude Code Integration](#claude-code-integration)
6. [Next Steps](#next-steps)

---

## Getting Started

### What You Need
- A computer (Windows, Mac, or Linux)
- Internet connection
- 15 minutes to get set up

### Step 1: Install VS Code

1. Go to [code.visualstudio.com](https://code.visualstudio.com)
2. Click "Download"
3. Install the downloaded file
4. Open VS Code

### Step 2: Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Choose a username and password
4. Verify your email address

### Step 3: Install Git

**Windows:**
1. Download from [git-scm.com](https://git-scm.com)
2. Run the installer with default settings

**Mac:**
1. Open Terminal
2. Type: `git --version`
3. If not installed, follow the prompts

**Linux:**
```bash
sudo apt install git  # Ubuntu/Debian
sudo yum install git  # CentOS/RHEL
```

### Step 4: Set Up Git

Open VS Code's terminal (`Ctrl+`` or `Cmd+``) and type:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**🤖 Claude Code Tip:** Once you've got these basics sorted, Claude Code can help you configure everything else. Just ask: "Help me set up my development environment"

---

## Your First Project

### Create a New Folder

1. Open VS Code
2. Click "Open Folder" or press `Ctrl+K Ctrl+O`
3. Create a new folder called "my-first-project"
4. Select it and click "Open"

### Create Your First File

1. Click "New File" or press `Ctrl+N`
2. Save it as `hello.txt` (`Ctrl+S`)
3. Type: "Hello, world! This is my first project."
4. Save the file

### Essential VS Code Extensions

Click the Extensions icon (or press `Ctrl+Shift+X`) and install:

- **GitHub Pull Requests and Issues** - Work with GitHub directly
- **GitLens** - See Git information in your code
- **Live Server** - Preview web pages instantly

**🤖 Claude Code Tip:** Ask Claude Code to recommend extensions for your specific programming language: "What VS Code extensions do I need for Python development?"

---

## Working with Git

### What is Git?

Git tracks changes to your files so you can:
- See what you changed and when
- Go back to previous versions
- Work with others without conflicts

### Your First Git Repository

1. Open the terminal in VS Code (`Ctrl+`` or `Cmd+``)
2. Type: `git init`
3. You've just created a Git repository!

### Making Your First Commit

A "commit" is like saving a snapshot of your project.

1. **Stage your changes:**
   - Click the Source Control icon (looks like a branch)
   - Click "+" next to `hello.txt`

2. **Write a commit message:**
   - Type: "Add hello world file"
   - Press `Ctrl+Enter` or click the tick mark

3. **Done!** You've made your first commit

### Understanding the Source Control Panel

- **Changes** - Files you've modified
- **Staged Changes** - Files ready to commit
- **Commits** - History of your project snapshots

**🤖 Claude Code Tip:** Not sure what to commit? Ask Claude: "Should I commit these changes?" and it will review your modifications and suggest what to include.

---

## GitHub Basics

### What is GitHub?

GitHub is like Google Drive for code. It stores your projects online so you can:
- Access them from anywhere
- Share them with others
- Keep a backup of your work

### Put Your Project on GitHub

1. **Sign in to GitHub in VS Code:**
   - Press `Ctrl+Shift+P`
   - Type "GitHub: Sign in"
   - Follow the prompts

2. **Publish your project:**
   - Click Source Control icon
   - Click "Publish to GitHub"
   - Choose a name for your repository
   - Click "Publish"

3. **Done!** Your project is now on GitHub

### Making Changes and Syncing

1. **Make changes** to your files
2. **Commit changes** (as you learnt earlier)
3. **Sync with GitHub:**
   - Click the sync button in the bottom-left
   - Or press `Ctrl+Shift+P` and type "Git: Sync"

### Working with Others

**Clone someone else's project:**
1. Press `Ctrl+Shift+P`
2. Type "Git: Clone"
3. Paste the GitHub URL
4. Choose where to save it

**Share your project:**
1. Go to your repository on GitHub
2. Click the green "Code" button
3. Copy the URL
4. Share it with others!

### Basic GitHub Workflow

1. **Make changes** to your code
2. **Commit** with a clear message
3. **Push** to GitHub
4. **Pull** to get others' changes
5. **Repeat**

**🤖 Claude Code Tip:** New to Git commands? Ask Claude: "What's the difference between git pull and git push?" and it will explain Git concepts in simple terms.

---

## Claude Code Integration

### What is Claude Code?

Claude Code is an AI assistant that helps you write and understand code directly in VS Code. Think of it as having an expert programmer sitting next to you, ready to help 24/7.

### Getting Claude Code

1. **Install Claude Code:**
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```

2. **Start using it:**
   - Open VS Code terminal
   - Type: `claude`
   - Start asking questions!

### What Claude Code Can Do

**Help you understand code:**
- "What does this function do?"
- "Explain this error message"
- "How does this code work?"

**Write code for you:**
- "Create a function that calculates the average of numbers"
- "Write a simple HTML page"
- "Fix this bug in my code"

**Review your work:**
- "Is this code correct?"
- "How can I improve this?"
- "Are there any security issues?"

### Quick Start with Claude Code

1. **Ask for help:**
   ```bash
   claude "How do I create a new HTML file?"
   ```

2. **Get code explanations:**
   ```bash
   claude "Explain what this JavaScript function does"
   ```

3. **Debug problems:**
   ```bash
   claude "My code isn't working, can you help?"
   ```

### Claude Code Keyboard Shortcuts

- **Mac:** `Cmd+Esc` - Quick launch
- **Windows/Linux:** `Ctrl+Esc` - Quick launch
- **Any system:** Type `claude` in terminal

### Best Practices

**Be specific:**
- ❌ "Help me with my code"
- ✅ "Help me fix this JavaScript error: Cannot read property 'length' of undefined"

**Ask for explanations:**
- ❌ Just copy code blindly
- ✅ "Can you explain how this code works?"

**Use it for learning:**
- "What's the difference between let and const?"
- "How do I use Git branches?"
- "What are the best practices for this?"

**🤖 Claude Code Tip:** Claude Code learns from your project context. The more you use it in your specific project, the better it becomes at helping you with your particular code style and requirements.

---

## Next Steps

### Keep Learning

**Practice with a real project:**
1. Create a simple website
2. Track changes with Git
3. Put it on GitHub
4. Use Claude Code to help improve it

**Useful resources:**
- [GitHub's Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [VS Code Documentation](https://code.visualstudio.com/docs)
- [Claude Code Documentation](https://docs.anthropic.com/claude-code)

### Common Beginner Mistakes (and how to avoid them)

**Mistake 1: Not committing often enough**
- ✅ Commit every time you complete a small task
- ✅ Write clear commit messages like "Fix login bug" or "Add contact form"

**Mistake 2: Working directly on main branch**
- ✅ Create a new branch for each feature: `git checkout -b feature-name`
- ✅ Merge back to main when done

**Mistake 3: Not backing up work**
- ✅ Push to GitHub regularly
- ✅ Don't keep work only on your local machine

### Quick Reference

**Essential Git Commands:**
```bash
git status          # See what's changed
git add .           # Stage all changes
git commit -m "msg" # Commit with message
git push            # Send to GitHub
git pull            # Get latest changes
```

**VS Code Shortcuts:**
- `Ctrl+`` - Open terminal
- `Ctrl+Shift+P` - Command palette
- `Ctrl+S` - Save file
- `Ctrl+N` - New file
- `Ctrl+O` - Open file

**Claude Code Basics:**
```bash
claude "question here"           # Ask anything
claude "explain this code"       # Understand code
claude "fix this error: [error]" # Debug problems
```

### Getting Help

**When you're stuck:**
1. **Ask Claude Code** - It can help with almost any coding question
2. **Check Stack Overflow** - Huge community of developers
3. **Read the documentation** - VS Code and Git have excellent docs
4. **Join communities** - Reddit's r/learnprogramming, Discord servers

### What's Next?

Once you're comfortable with the basics:
- Learn a programming language (Python, JavaScript, etc.)
- Explore advanced Git features (branches, merging, rebasing)
- Try GitHub Actions for automation
- Build and deploy your own projects

**🤖 Claude Code Tip:** As you grow as a developer, Claude Code grows with you. It can help with everything from beginner questions to advanced architecture decisions. Don't hesitate to ask for help - that's what it's there for!

---

## Summary

You now know how to:
- ✅ Set up VS Code and GitHub
- ✅ Create and manage projects with Git
- ✅ Share your work on GitHub
- ✅ Use Claude Code as your AI programming assistant
- ✅ Follow best practices for beginners

**Remember:** Every expert was once a beginner. The key is to practice regularly, ask questions, and never stop learning. With VS Code, GitHub, and Claude Code, you have everything you need to start your coding journey.

**Happy coding! 🚀**

---

*This tutorial was created to help absolute beginners get started with modern development tools. For questions or suggestions, visit the [GitHub repository](https://github.com/nickyleech/tutorial-vscode-github).*

