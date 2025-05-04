const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Function to convert images to WebP
async function convertToWebP(inputPath, outputPath, quality = 80) {
    try {
        await sharp(inputPath)
            .webp({ quality })
            .toFile(outputPath);
        console.log(`Converted: ${inputPath} -> ${outputPath}`);
    } catch (error) {
        console.error(`Error converting ${inputPath}:`, error);
    }
}

// Function to process a directory recursively
async function processDirectory(directory) {
    try {
        const files = fs.readdirSync(directory);
        
        for (const file of files) {
            const filePath = path.join(directory, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory()) {
                // Recursively process subdirectories
                await processDirectory(filePath);
            } else {
                // Check if file is an image (png, jpg, jpeg, gif)
                const ext = path.extname(file).toLowerCase();
                if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                    const outputPath = path.join(
                        path.dirname(filePath),
                        `${path.basename(file, ext)}.webp`
                    );
                    
                    // Skip if WebP version already exists
                    if (!fs.existsSync(outputPath)) {
                        await convertToWebP(filePath, outputPath);
                    }
                }
            }
        }
    } catch (error) {
        console.error(`Error processing directory ${directory}:`, error);
    }
}

// Main function
async function main() {
    const imageDir = './image';
    
    // Create the image directory if it doesn't exist
    if (!fs.existsSync(imageDir)) {
        console.error(`Directory ${imageDir} does not exist.`);
        return;
    }
    
    console.log('Starting image conversion...');
    await processDirectory(imageDir);
    console.log('Image conversion complete!');
}

main().catch(console.error);
