# Complete VS Code & GitHub Tutorial with Claude Code Integration

## Table of Contents
1. [Getting Started](#getting-started)
2. [Git Integration in VS Code](#git-integration-in-vs-code)
3. [GitHub Workflows](#github-workflows)
4. [Advanced Features](#advanced-features)
5. [Claude Code Integration](#claude-code-integration)
6. [Practical Examples](#practical-examples)
7. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Prerequisites
- Basic understanding of programming concepts
- Administrative access to install software
- GitHub account (free)

### Installing VS Code

1. **Download VS Code**
   - Visit [code.visualstudio.com](https://code.visualstudio.com)
   - Download the appropriate version for your operating system
   - Install using the default settings

2. **Initial Setup**
   - Launch VS Code
   - Sign in with your GitHub account for settings sync
   - Enable settings sync for a consistent experience across devices

### Essential Extensions

Install these extensions for the best GitHub integration experience:

```bash
# Install via Command Palette (Cmd+Shift+P / Ctrl+Shift+P)
# Search for "Extensions: Install Extensions"
```

**Must-Have Extensions:**
- **GitHub Pull Requests and Issues** - Official GitHub integration
- **GitHub Actions** - Workflow management
- **GitLens** - Enhanced Git capabilities
- **GitHub Copilot** - AI pair programming (requires subscription)
- **GitHub Repositories** - Browse remote repositories

**Additional Useful Extensions:**
- **Git History** - View git log and file history
- **Git Graph** - Visual git graph
- **Conventional Commits** - Standardized commit messages

### Installing Git

**Windows:**
```bash
# Download from git-scm.com or use package manager
winget install Git.Git
```

**macOS:**
```bash
# Using Homebrew
brew install git

# Or download from git-scm.com
```

**Linux:**
```bash
# Ubuntu/Debian
sudo apt install git

# CentOS/RHEL
sudo yum install git
```

### Git Configuration

Configure Git with your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global init.defaultBranch main
```

**🤖 Claude Code Tip:** Claude Code automatically detects your Git configuration and can help you set up additional configurations like GPG signing, aliases, and more. Just ask: "Help me configure Git for best practices"

---

## Git Integration in VS Code

### Source Control Panel

VS Code's built-in Git support is accessed through the Source Control panel:

1. **Open Source Control** - Click the Source Control icon (⌃⇧G / Ctrl+Shift+G)
2. **Initialize Repository** - Click "Initialize Repository" or use `git init`
3. **Clone Repository** - Use "Clone Repository" for existing projects

### Making Your First Commit

1. **Stage Changes**
   - Click the "+" next to files to stage them
   - Or use "Stage All Changes" (+ icon next to "Changes")

2. **Write Commit Message**
   - Enter a descriptive commit message in the text box
   - Use conventional commits format: `feat: add user authentication`

3. **Commit**
   - Click the checkmark (✓) or use Cmd+Enter / Ctrl+Enter
   - Or use `git commit -m "your message"` in the terminal

### Branch Management

**Creating Branches:**
```bash
# Command line
git checkout -b feature/new-feature

# Or use VS Code's branch selector in the status bar
```

**Switching Branches:**
- Click the branch name in the status bar
- Select from the dropdown or create a new branch

**Merging Branches:**
```bash
git checkout main
git merge feature/new-feature
```

### Conflict Resolution

When merge conflicts occur:

1. **VS Code highlights conflicts** with colored sections
2. **Choose options:**
   - "Accept Current Change"
   - "Accept Incoming Change"
   - "Accept Both Changes"
   - "Compare Changes"

3. **Manual resolution** - Edit the file directly if needed
4. **Stage the resolved file** and commit

**🤖 Claude Code Tip:** Claude Code excels at resolving merge conflicts. Try: "Help me resolve this merge conflict" and it will analyze both versions and suggest the best resolution.

### Git History and Blame

**View File History:**
- Right-click any file → "Open Timeline"
- Use GitLens extension for enhanced history viewing

**Git Blame:**
- GitLens shows inline blame information
- See who changed each line and when

---

## GitHub Workflows

### Repository Creation and Cloning

**Create New Repository:**
1. In VS Code, open Command Palette (Cmd+Shift+P / Ctrl+Shift+P)
2. Type "Git: Clone"
3. Select "Clone from GitHub"
4. Choose "Create new repository"

**Clone Existing Repository:**
```bash
git clone https://github.com/username/repository.git
```

Or use VS Code's "Clone Repository" command.

### Push/Pull Operations

**First Push:**
```bash
git remote add origin https://github.com/username/repository.git
git push -u origin main
```

**Regular Push/Pull:**
- Use the sync button in the status bar
- Or use Source Control panel buttons
- Keyboard shortcuts: Cmd+Shift+P / Ctrl+Shift+P → "Git: Push/Pull"

### Working with Remote Branches

**Track Remote Branch:**
```bash
git checkout -b feature/new-feature origin/feature/new-feature
```

**Push New Branch:**
```bash
git push -u origin feature/new-feature
```

### Branch Protection Rules

Set up branch protection in GitHub:

1. Go to repository → Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - Require pull request reviews
   - Require status checks
   - Require branches to be up to date
   - Restrict pushes to matching branches

### Pull Request Workflow

**Creating Pull Requests:**
1. Push your feature branch to GitHub
2. In VS Code, use GitHub Pull Requests extension
3. Click "Create Pull Request" in Source Control panel
4. Fill in title and description
5. Request reviewers and assign labels

**Reviewing Pull Requests:**
1. Open GitHub Pull Requests panel
2. Select the PR to review
3. View changes inline in VS Code
4. Add comments and suggestions
5. Approve or request changes

**🤖 Claude Code Tip:** Claude Code can help write better PR descriptions. Try: "Generate a pull request description for my recent commits" and it will analyze your changes and create a comprehensive description.

### Issue Tracking Integration

**Link Issues to PRs:**
- Use keywords in commit messages: `fixes #123`, `closes #456`
- Reference issues in PR descriptions

**Create Issues from VS Code:**
- Use GitHub Issues extension
- Create issues directly from TODO comments
- Link issues to specific code lines

---

## Advanced Features

### GitHub Actions Integration

**GitHub Actions Extension Features:**
- Syntax highlighting for workflow files
- IntelliSense for action names and parameters
- Validation and error checking
- Workflow run monitoring

**Example Workflow (.github/workflows/ci.yml):**
```yaml
name: CI
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
    - run: npm ci
    - run: npm test
```

### Code Reviews in VS Code

**Review Features:**
- Inline comments on specific lines
- Suggestion mode for code changes
- Threaded conversations
- Batch review submission

**Best Practices:**
- Review small, focused changes
- Provide constructive feedback
- Use suggestion mode for minor fixes
- Approve only when truly ready

### GitHub Copilot Integration

**Setup:**
1. Install GitHub Copilot extension
2. Sign in to GitHub account
3. Accept suggestions with Tab
4. View alternatives with Ctrl+Enter

**Best Practices:**
- Write clear, descriptive comments
- Review suggestions before accepting
- Use Copilot for boilerplate code
- Maintain code quality standards

### Remote Repository Browsing

**GitHub Repositories Extension:**
- Browse repositories without cloning
- Quick file searches
- View and edit files directly
- Commit changes back to GitHub

**Usage:**
1. Command Palette → "GitHub Repositories: Open Repository"
2. Enter repository URL or search
3. Browse and edit files
4. Commit changes directly

### Collaboration Best Practices

**Repository Management:**
- Use clear, consistent naming conventions
- Maintain comprehensive README files
- Set up proper .gitignore files
- Use semantic versioning for releases

**Code Quality:**
- Implement code formatting (Prettier, ESLint)
- Use pre-commit hooks
- Maintain test coverage
- Document code thoroughly

**Communication:**
- Write clear commit messages
- Use descriptive PR titles
- Provide context in issue descriptions
- Respond promptly to reviews

---

## Claude Code Integration

### Installation and Setup

**Install Claude Code:**
```bash
# Install globally
npm install -g @anthropic-ai/claude-code

# Verify installation
claude --version
```

**VS Code Integration:**
1. Open VS Code
2. Navigate to your project directory
3. Open integrated terminal (Ctrl+` / Cmd+`)
4. Run `claude` to start

### Key Features

**Quick Launch:**
- **macOS:** Cmd+Esc
- **Windows/Linux:** Ctrl+Esc
- Opens Claude Code directly from VS Code

**Diff Viewing:**
- Code changes display in VS Code's diff viewer
- Side-by-side comparison of proposed changes
- Accept/reject changes with one click

**Selection Context:**
- Automatically shares current selection with Claude
- Understands context of current file and project
- Provides relevant suggestions

**Terminal Integration:**
- Run `claude` from any terminal
- Use `/ide` command to connect to VS Code
- Seamless workflow integration

### Best Practices for AI-Assisted Development

**Effective Prompting:**
```bash
# Be specific about what you want
claude "Add error handling to the user authentication function"

# Ask for planning first
claude "Plan the architecture for a user dashboard component"

# Request explanations
claude "Explain this regex pattern and suggest improvements"
```

**Test-Driven Development:**
```bash
# Ask Claude to write tests first
claude "Write unit tests for the calculateTotal function based on these requirements"

# Be explicit about TDD approach
claude "Follow TDD: write failing tests, then implement the feature"
```

**Code Review Assistance:**
```bash
# Get code review suggestions
claude "Review this pull request and suggest improvements"

# Security analysis
claude "Check this code for security vulnerabilities"
```

**🤖 Claude Code Pro Tips:**

1. **Visual Integration:** Take screenshots (Cmd+Ctrl+Shift+4 on macOS) and drag them into Claude for UI/UX feedback

2. **File Navigation:** Use tab-completion to reference files quickly:
   ```bash
   claude "Fix the bug in src/components/[TAB]"
   ```

3. **Web Integration:** Paste URLs for Claude to fetch and analyze:
   ```bash
   claude "Implement this API based on the documentation: https://api.example.com/docs"
   ```

4. **Automation:** Use Unix pipes for advanced workflows:
   ```bash
   tail -f app.log | claude -p "Alert me if you see any errors"
   ```

### Advanced Claude Code Features

**Codebase Understanding:**
- Claude analyzes your entire project structure
- Understands existing patterns and conventions
- Suggests changes that fit your codebase style

**External Integrations:**
- MCP (Model Context Protocol) support
- Connect to Google Drive, Figma, Slack
- Pull information from external datasources

**Background Tasks:**
- GitHub Actions integration
- Automated testing and deployment
- Continuous monitoring and alerts

---

## Practical Examples

### Complete Project Workflow

Let's walk through creating a complete project from start to finish:

**1. Project Setup:**
```bash
# Create new directory
mkdir my-awesome-project
cd my-awesome-project

# Initialize Git
git init

# Create initial files
echo "# My Awesome Project" > README.md
echo "node_modules/" > .gitignore

# Start Claude Code
claude
```

**2. Using Claude for Initial Setup:**
```bash
# Ask Claude to set up the project
claude "Set up a Node.js project with Express, testing, and CI/CD"

# Let Claude create the file structure
claude "Create a standard folder structure for a React application"
```

**3. First Commit:**
```bash
# Stage all files
git add .

# Commit with conventional commits
git commit -m "feat: initial project setup with Express and React"
```

**4. GitHub Repository Creation:**
```bash
# Use VS Code's GitHub integration
# Command Palette → "GitHub: Publish to GitHub"
```

**5. Feature Development:**
```bash
# Create feature branch
git checkout -b feature/user-authentication

# Ask Claude to implement the feature
claude "Implement user authentication with JWT tokens"

# Review Claude's suggestions in VS Code diff viewer
# Accept/modify as needed
```

**6. Testing:**
```bash
# Ask Claude to write tests
claude "Write comprehensive tests for the authentication system"

# Run tests
npm test
```

**7. Pull Request:**
```bash
# Push feature branch
git push -u origin feature/user-authentication

# Create PR using GitHub extension in VS Code
# Ask Claude to generate PR description
claude "Generate a pull request description for my authentication feature"
```

### Real-World Scenarios

**Scenario 1: Bug Fix**
```bash
# Identify the bug
claude "Help me debug this login error: [paste error message]"

# Fix the issue
claude "Fix the null reference error in the login component"

# Write regression test
claude "Write a test to prevent this login bug from happening again"
```

**Scenario 2: Code Refactoring**
```bash
# Analyze current code
claude "Analyze this component and suggest refactoring opportunities"

# Implement improvements
claude "Refactor this component to use modern React patterns"

# Ensure no breaking changes
claude "Verify that this refactoring doesn't break existing functionality"
```

**Scenario 3: Performance Optimization**
```bash
# Identify performance issues
claude "Analyze this code for performance bottlenecks"

# Implement optimizations
claude "Optimize the database queries in this service"

# Measure improvements
claude "Help me set up performance monitoring for this optimization"
```

### Common Commands and Shortcuts

**VS Code Shortcuts:**
- `Cmd+Shift+P / Ctrl+Shift+P` - Command Palette
- `Cmd+Esc / Ctrl+Esc` - Launch Claude Code
- `Ctrl+`` - Toggle Terminal
- `Cmd+Shift+G / Ctrl+Shift+G` - Source Control
- `Cmd+K Cmd+M / Ctrl+K Ctrl+M` - Change Language Mode

**Git Commands:**
```bash
# Status and information
git status
git log --oneline
git branch -a

# Common operations
git add .
git commit -m "message"
git push origin main
git pull origin main

# Branch operations
git checkout -b new-branch
git merge feature-branch
git branch -d old-branch
```

**Claude Code Commands:**
```bash
# Start Claude
claude

# Connect to IDE
claude /ide

# One-off commands
claude "command here"

# Pipe operations
command | claude "analyze this output"
```

### Template Configurations

**VS Code Settings (settings.json):**
```json
{
  "git.autofetch": true,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,
  "github.copilot.enable": {
    "*": true,
    "yaml": false,
    "plaintext": false
  },
  "gitlens.currentLine.enabled": true,
  "gitlens.codeLens.enabled": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

**Git Configuration (.gitconfig):**
```ini
[user]
    name = Your Name
    email = your.email@example.com

[core]
    editor = code --wait
    autocrlf = input

[push]
    default = current

[pull]
    rebase = true

[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    lg = log --oneline --graph --decorate --all
```

---

## Troubleshooting

### Common Issues and Solutions

**1. Authentication Problems**

*Issue:* "Permission denied (publickey)"
```bash
# Solution: Set up SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"
cat ~/.ssh/id_ed25519.pub
# Add to GitHub → Settings → SSH Keys
```

*Issue:* VS Code asking for password repeatedly
```bash
# Solution: Use credential manager
git config --global credential.helper store
# Or for macOS:
git config --global credential.helper osxkeychain
```

**2. Merge Conflicts**

*Issue:* Complex merge conflicts
```bash
# Use VS Code's merge editor
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'

# Or ask Claude Code for help
claude "Help me resolve this merge conflict"
```

**3. Performance Issues**

*Issue:* VS Code slow with large repositories
```bash
# Exclude unnecessary files
echo "node_modules/" >> .gitignore
echo "dist/" >> .gitignore
echo "*.log" >> .gitignore

# Use Git LFS for large files
git lfs track "*.zip"
git lfs track "*.tar.gz"
```

**4. Extension Conflicts**

*Issue:* Extensions interfering with each other
- Disable extensions one by one to identify conflicts
- Use VS Code profiles for different project types
- Check extension compatibility in marketplace

**5. Claude Code Issues**

*Issue:* Claude Code not connecting to VS Code
```bash
# Ensure VS Code is running
# Run from integrated terminal
claude /ide

# Check installation
which claude
claude --version
```

*Issue:* Claude Code responses slow
```bash
# Check network connection
# Verify API key is set correctly
# Try reducing context size
```

### Performance Optimization

**Git Performance:**
```bash
# Clean up repository
git gc --aggressive

# Remove unused references
git remote prune origin

# Shallow clone for large repos
git clone --depth 1 https://github.com/user/repo.git
```

**VS Code Performance:**
```json
{
  "files.watcherExclude": {
    "**/node_modules/**": true,
    "**/.git/objects/**": true,
    "**/dist/**": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true
  }
}
```

### Debugging Git Issues

**Check Git Status:**
```bash
git status
git log --oneline -10
git remote -v
```

**Reset Operations:**
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Reset to remote state
git reset --hard origin/main
```

**🤖 Claude Code Troubleshooting:**
When you encounter issues, Claude Code can often provide immediate solutions:

```bash
# General troubleshooting
claude "I'm getting this error: [paste error message]"

# Git-specific issues
claude "Help me fix this git problem: [describe issue]"

# VS Code issues
claude "My VS Code is behaving strangely: [describe symptoms]"
```

---

## Conclusion

This comprehensive tutorial covers everything you need to know about using VS Code and GitHub together effectively. The integration of Claude Code adds a powerful AI assistant to your development workflow, helping you code faster and more efficiently.

### Key Takeaways:

1. **VS Code + GitHub** provides a seamless development experience
2. **Proper Git workflow** is essential for professional development
3. **Claude Code integration** supercharges your productivity
4. **Best practices** ensure maintainable, collaborative code
5. **Troubleshooting skills** keep you productive when issues arise

### Next Steps:

- Practice these workflows with your own projects
- Explore advanced GitHub features like Actions and Packages
- Experiment with Claude Code's advanced capabilities
- Join the VS Code and GitHub communities for continued learning

Remember: The best way to learn is by doing. Start with a simple project and gradually incorporate more advanced features as you become comfortable with the basics.

**Happy coding! 🚀**

---

*This tutorial was created with assistance from Claude Code, demonstrating the power of AI-assisted development workflows.*