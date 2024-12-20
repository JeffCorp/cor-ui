const fs = require('fs');
const path = require('path');

function toCamelCase(str) {
    // Remove .svg extension and convert to camel case
    return str.slice(0, -4)
        .split('-')
        .map((word, index) => 
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
}

function generateSvgImports(directoryPath = './files') {
    try {
        // Ensure the directory path exists
        if (!fs.existsSync(directoryPath)) {
            throw new Error(`Directory not found: ${directoryPath}`);
        }

        // Read SVG files
        const svgFiles = fs.readdirSync(directoryPath)
            .filter(file => path.extname(file).toLowerCase() === '.svg');

        // Generate import statements
        const importStatements = [];
        const iconMapEntries = [];

        svgFiles.forEach(svgFile => {
            // Convert filename to camel case
            const varName = toCamelCase(svgFile);
            
            // Create import statement
            const importStatement = `import ${varName} from "${path.join(directoryPath, svgFile).replace(/\\/g, '/')}";`;
            importStatements.push(importStatement);

            // Create IconMap entry
            const iconMapEntry = `    '${path.basename(svgFile, '.svg')}': ${varName}`;
            iconMapEntries.push(iconMapEntry);
        });

        // Combine import statements
        const importsStr = importStatements.join('\n');

        // Create IconMap
        const iconMapStr = `export const IconMap = {\n${iconMapEntries.join(',\n')}\n};`;

        return { importsStr, iconMapStr };
    } catch (error) {
        console.error('Error generating SVG imports:', error);
        return null;
    }
}

function writeImportsToFile(directoryPath = './src/components/Icons/outline', outputFile = 'icons.js') {
    try {
        const result = generateSvgImports(directoryPath);
        
        if (!result) {
            console.error('Failed to generate imports');
            return;
        }

        const { importsStr, iconMapStr } = result;

        // Write to file
        fs.writeFileSync(outputFile, `${importsStr}\n\n${iconMapStr}`);
        
        console.log(`Successfully generated ${outputFile}`);
    } catch (error) {
        console.error('Error writing imports to file:', error);
    }
}

// Example usage
function main() {
    // Customize these paths as needed
    writeImportsToFile();
}

// Only run main if this file is being run directly
if (require.main === module) {
    main();
}

module.exports = {
    generateSvgImports,
    writeImportsToFile
};