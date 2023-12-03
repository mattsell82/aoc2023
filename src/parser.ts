const fs = require('fs');
const path = require('path');

export function parseTextFile(filePath: string): string[] {
    try {
        const absolutePath = path.join(__dirname, filePath);

        const fileContent: string = fs.readFileSync(absolutePath, 'utf-8');

        const lines: string[] = fileContent.split('\n');

        return lines.filter(line => line.trim() !== '');
    } catch (error: any) {
        console.error(`Error reading file: ${error.message}`);
        return [];
    }
}