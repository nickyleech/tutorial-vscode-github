# VS Code GitHub Tutorial Examples

This directory contains practical examples to accompany the VS Code and GitHub tutorial.

## Contents

- **index.js** - Simple Express.js API server
- **auth.test.js** - Jest unit tests for authentication
- **package.json** - Node.js project configuration
- **.github/workflows/ci.yml** - GitHub Actions CI/CD pipeline
- **.gitignore** - Git ignore patterns

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation
```bash
npm install
```

### Running the Application
```bash
# Development mode
npm run dev

# The server will start on http://localhost:3000
```

### Testing
```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage
```

### Linting and Formatting
```bash
# Check code style
npm run lint

# Format code
npm run format
```

## API Endpoints

### GET /
Returns welcome message and available endpoints.

### GET /health
Health check endpoint for monitoring.

### POST /auth/login
Authenticate user with username and password.

**Request Body:**
```json
{
  "username": "admin",
  "password": "password"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "mock-jwt-token-123",
  "user": {
    "id": 1,
    "username": "admin"
  }
}
```

### GET /users
Returns list of all users.

## Using with Claude Code

Try these Claude Code commands with this example:

```bash
# Analyze the code
claude "Explain what this Express.js application does"

# Add a new feature
claude "Add a new endpoint for user registration"

# Improve security
claude "Review this code for security vulnerabilities"

# Write more tests
claude "Add integration tests for the user endpoints"

# Optimize performance
claude "Suggest performance improvements for this API"
```

## GitHub Workflow

This example demonstrates a complete GitHub workflow:

1. **Feature Development**
   ```bash
   git checkout -b feature/user-registration
   # Make changes
   git commit -m "feat: add user registration endpoint"
   git push origin feature/user-registration
   ```

2. **Pull Request**
   - Create PR using GitHub extension in VS Code
   - Review changes with team
   - Merge when approved

3. **CI/CD Pipeline**
   - Tests run automatically on push
   - Code is built and deployed
   - Notifications sent to team

## Best Practices Demonstrated

- **Conventional Commits** - Consistent commit message format
- **Testing** - Unit tests with Jest
- **CI/CD** - Automated testing and deployment
- **Code Quality** - ESLint and Prettier configuration
- **Security** - Input validation and error handling
- **Documentation** - Clear README and code comments

## Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>
```

**Dependencies not installing:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Tests failing:**
```bash
# Run tests in verbose mode
npm test -- --verbose

# Run specific test file
npm test auth.test.js
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Ensure all tests pass
6. Submit a pull request

## License

MIT License - see LICENSE file for details.