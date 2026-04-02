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

// Create Hostinger cPanel ready folder
const hostingerPublicHtmlDir = path.join(rootDir, 'hostinger_deploy', 'public_html');
if (!fs.existsSync(hostingerPublicHtmlDir)) fs.mkdirSync(hostingerPublicHtmlDir, { recursive: true });

// Hostinger LiteSpeed serves static files from public_html. 
// We must place _next/static inside it to prevent 404 missing styles.
if (fs.existsSync(staticDir)) {
    fs.cpSync(staticDir, path.join(hostingerPublicHtmlDir, '_next', 'static'), { recursive: true });
}
if (fs.existsSync(publicDir)) {
    fs.cpSync(publicDir, hostingerPublicHtmlDir, { recursive: true });
}

// Write a .htaccess for public_html to route Node.js correctly
const htaccessContent = `RewriteEngine On
# Bypasses the Node.js app for static files
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
`;
fs.writeFileSync(path.join(hostingerPublicHtmlDir, '.htaccess'), htaccessContent);

console.log('🎉 Standalone build is ready for deployment!');
console.log('👉 Upload the contents of .next/standalone to your main app folder on Hostinger.');
console.log('👉 Upload the contents of hostinger_deploy/public_html to your public_html folder to fix missing CSS styles.');

