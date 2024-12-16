const fs = require('fs');
const path = require('path');

module.exports.customCssResolver = () => {
  return {
    name: 'css-resolver',
    generateBundle(options, bundle) {
      // Copy CSS files to dist
      const srcDir = path.resolve(__dirname, 'src');
      const distDir = path.resolve(__dirname, 'dist');

      function copyCSS(dir) {
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
          const srcPath = path.join(dir, file);
          const stat = fs.statSync(srcPath);
          
          if (stat.isDirectory()) {
            copyCSS(srcPath);
          } else if (file.endsWith('.css')) {
            const relativePath = path.relative(srcDir, dir);
            const destDir = path.join(distDir, relativePath);
            
            if (!fs.existsSync(destDir)) {
              fs.mkdirSync(destDir, { recursive: true });
            }
            
            fs.copyFileSync(
              srcPath,
              path.join(destDir, file)
            );
          }
        });
      }

      copyCSS(srcDir);
    }
  };
};