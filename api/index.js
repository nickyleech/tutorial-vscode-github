module.exports = (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Simple API for demonstration
  if (req.method === 'GET' && req.url === '/api') {
    res.json({
      message: 'VS Code GitHub Tutorial API',
      version: '1.0.0',
      endpoints: {
        status: '/api/status',
        tutorial: '/api/tutorial',
        examples: '/api/examples'
      }
    });
  } else if (req.method === 'GET' && req.url === '/api/status') {
    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      tutorial: 'VS Code & GitHub with Claude Code',
      deployed: true
    });
  } else if (req.method === 'GET' && req.url === '/api/tutorial') {
    res.json({
      title: 'Complete VS Code & GitHub Tutorial',
      description: 'A comprehensive guide to VS Code, GitHub, and Claude Code integration',
      sections: [
        'Getting Started',
        'Git Integration in VS Code',
        'GitHub Workflows',
        'Advanced Features',
        'Claude Code Integration',
        'Practical Examples',
        'Troubleshooting'
      ],
      github: 'https://github.com/nickyleech/tutorial-vscode-github'
    });
  } else if (req.method === 'GET' && req.url === '/api/examples') {
    res.json({
      examples: [
        {
          name: 'Express.js API',
          description: 'Simple REST API with authentication',
          files: ['index.js', 'package.json']
        },
        {
          name: 'Unit Tests',
          description: 'Jest test suite for TDD approach',
          files: ['auth.test.js']
        },
        {
          name: 'CI/CD Pipeline',
          description: 'GitHub Actions workflow',
          files: ['ci.yml', '.gitignore']
        }
      ]
    });
  } else {
    res.status(404).json({
      error: 'Not found',
      message: 'API endpoint not found'
    });
  }
};