import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const standaloneDir = path.join(rootDir, '.next', 'standalone');
const staticDir = path.join(rootDir, '.next', 'static');
const publicDir = path.join(rootDir, 'public');

const destStatic = path.join(standaloneDir, '.next', 'static');
const destPublic = path.join(standaloneDir, 'public');

// Copy .next/static
if (fs.existsSync(staticDir)) {
    fs.cpSync(staticDir, destStatic, { recursive: true });
    console.log('✅ Copied .next/static to .next/standalone/.next/static');
}

// Copy public
if (fs.existsSync(publicDir)) {
    fs.cpSync(publicDir, destPublic, { recursive: true });
    console.log('✅ Copied public to .next/standalone/public');
}

console.log('🎉 Standalone build is ready for deployment!');
