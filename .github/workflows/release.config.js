module.exports = {
  repositoryURL: "https://github.com/Chubaker/my-app",
  plugins: [
    '@semantic-release/commit-analyzer', 
    '@semantic-release/release-notes-generator', 
    ['@semantic-release/github', {
        'assets': [
            { 'path': "build.zip", label: "Build" },
            { 'path': "coverage.zip", label: "Coverage" }
        ]
     }
   ]  
  ]
}