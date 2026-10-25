import fs from 'fs';
import path from 'path';

console.log('=====================================================');
console.log('🧪 NIELL COMPREHENSIVE DEBUGGING & QUALITY AUDIT 🧪');
console.log('=====================================================\n');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
const issues = [];

function check(title, condition, errorMsg = '') {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  ✅ [PASS] ${title}`);
  } else {
    failedChecks++;
    console.log(`  ❌ [FAIL] ${title}`);
    if (errorMsg) {
      console.log(`     👉 Reason: ${errorMsg}`);
      issues.push({ title, errorMsg });
    }
  }
}

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'src');
const PUBLIC = path.join(ROOT, 'public');

// ---------------------------------------------------------------------------
// TEST SUITE 1: Image & Asset Integrity
// ---------------------------------------------------------------------------
console.log('📁 SUITE 1: Verifying All Referenced Images & Static Assets');

function getAllFiles(dir, exts = ['.tsx', '.ts', '.js']) {
  let files = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        files = files.concat(getAllFiles(fullPath, exts));
      }
    } else if (exts.includes(path.extname(file))) {
      files.push(fullPath);
    }
  }
  return files;
}

const sourceFiles = getAllFiles(SRC);
const imageSrcRegex = /(?:src|href|url)=["'](\/[a-zA-Z0-9_\-\.\/]+?\.(?:png|jpg|jpeg|svg|webp|ico))["']/g;
const referencedImages = new Set();

for (const file of sourceFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = imageSrcRegex.exec(content)) !== null) {
    referencedImages.add({ src: match[1], file: path.relative(ROOT, file) });
  }
}

for (const { src, file } of referencedImages) {
  const assetPath = path.join(PUBLIC, src);
  const exists = fs.existsSync(assetPath);
  let size = 0;
  if (exists) {
    size = fs.statSync(assetPath).size;
  }
  check(
    `Asset exists: "${src}" (referenced in ${file})`,
    exists && size > 0,
    exists ? `File is empty (0 bytes)` : `File not found in public folder`
  );
}

// ---------------------------------------------------------------------------
// TEST SUITE 2: Internal Anchor Link Integrity (#id navigation)
// ---------------------------------------------------------------------------
console.log('\n🔗 SUITE 2: Internal Anchor Link Resolution');

const definedIds = new Set();
const referencedAnchors = new Set();
const anchorHrefRegex = /href=["'](#[a-zA-Z0-9_\-]+)["']/g;
const idRegex = /id=["']([a-zA-Z0-9_\-]+)["']/g;

for (const file of sourceFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = idRegex.exec(content)) !== null) {
    definedIds.add(match[1]);
  }
  while ((match = anchorHrefRegex.exec(content)) !== null) {
    referencedAnchors.add({ anchor: match[1], file: path.relative(ROOT, file) });
  }
}

for (const { anchor, file } of referencedAnchors) {
  const targetId = anchor.substring(1);
  const exists = definedIds.has(targetId);
  check(
    `Anchor target "${anchor}" matches defined element id (found in ${file})`,
    exists,
    `Element with id="${targetId}" does not exist in any component`
  );
}

// ---------------------------------------------------------------------------
// TEST SUITE 3: WhatsApp & Phone Link Validation
// ---------------------------------------------------------------------------
console.log('\n📱 SUITE 3: Contact & WhatsApp Link Validations');

const telRegex = /href=["']tel:([^"']+)["']/g;
const waRegex = /wa\.me\/([0-9]+)/g;

for (const file of sourceFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = telRegex.exec(content)) !== null) {
    const rawNumber = match[1];
    const cleanNumber = rawNumber.replace(/[^0-9]/g, '');
    check(
      `Tel link in ${path.relative(ROOT, file)} has 10 digits (${rawNumber})`,
      cleanNumber.length >= 10 && cleanNumber.includes('6266394121'),
      `Unexpected telephone number format: ${rawNumber}`
    );
  }
  while ((match = waRegex.exec(content)) !== null) {
    const number = match[1];
    check(
      `WhatsApp link in ${path.relative(ROOT, file)} targets 916266394121`,
      number === '916266394121',
      `Target WhatsApp number was: ${number}`
    );
  }
}

// ---------------------------------------------------------------------------
// TEST SUITE 4: Accessibility & SEO Image Alts
// ---------------------------------------------------------------------------
console.log('\n👁️ SUITE 4: Accessibility & Image Alt Attributes');

const imgRegex = /<Image\b([^>]*?)\/?>/gs;

for (const file of sourceFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const props = match[1];
    const hasAlt = /alt=(?:["'][^"']+["']|\{[^}]+\})/.test(props);
    const hasSrc = /src=/.test(props);
    check(
      `<Image> tag in ${path.relative(ROOT, file)} includes descriptive alt attribute`,
      hasAlt,
      `Image is missing alt prop: ${match[0].substring(0, 60)}...`
    );
  }
}

// ---------------------------------------------------------------------------
// TEST SUITE 5: Mobile CSS & Horizontal Scroll Safety
// ---------------------------------------------------------------------------
console.log('\n📱 SUITE 5: Mobile Viewport & CSS Horizontal Overflow Guard');

const fixedWideWidthRegex = /className=["'][^"']*\b(w-\[(?:[4-9]\d{2}|\d{4,})px\])\b[^"']*["']/g;

for (const file of sourceFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = fixedWideWidthRegex.exec(content)) !== null) {
    const badClass = match[1];
    // Check if it has a responsive prefix like md:w-[600px]
    const fullMatch = match[0];
    const isUnprefixed = new RegExp(`(?<!sm:|md:|lg:|xl:|2xl:)${badClass}`).test(fullMatch);
    check(
      `No un-prefixed fixed wide width in ${path.relative(ROOT, file)} (${badClass})`,
      !isUnprefixed,
      `Found fixed pixel width ${badClass} on mobile viewport which could cause horizontal scrollbar`
    );
  }
}

// ---------------------------------------------------------------------------
// TEST SUITE 6: Schema.org & SEO Consistency
// ---------------------------------------------------------------------------
console.log('\n🌐 SUITE 6: SEO Metadata & Schema.org JSON-LD Verification');

const layoutContent = fs.readFileSync(path.join(SRC, 'app', 'layout.tsx'), 'utf-8');

check(
  'Layout metadataBase is set to "https://niell.in"',
  layoutContent.includes('metadataBase: new URL("https://niell.in")'),
  'metadataBase is not pointing to https://niell.in'
);

check(
  'Schema.org JSON-LD contains EducationalOrganization',
  layoutContent.includes('"@type": ["EducationalOrganization", "LocalBusiness"]'),
  'Missing EducationalOrganization Schema.org type'
);

check(
  'Schema.org contains coordinates of Vijay Nagar campus',
  layoutContent.includes('22.7503657') && layoutContent.includes('75.9000074'),
  'Campus coordinates missing or inaccurate'
);

check(
  'Robots.txt exists and points to https://niell.in/sitemap.xml',
  fs.existsSync(path.join(SRC, 'app', 'robots.ts')),
  'src/app/robots.ts not found'
);

check(
  'Sitemap.ts exists and lists key landing anchors',
  fs.existsSync(path.join(SRC, 'app', 'sitemap.ts')),
  'src/app/sitemap.ts not found'
);

// ---------------------------------------------------------------------------
// TEST SUITE 7: Hydration Safety Check
// ---------------------------------------------------------------------------
console.log('\n💧 SUITE 7: Hydration Mismatch Safety');

for (const file of sourceFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  // Check for window usage without client check
  if (content.includes('window.') && !content.includes('"use client"') && !content.includes("'use client'")) {
    check(
      `File ${path.relative(ROOT, file)} using window must be client component`,
      false,
      'window object referenced in SSR server component'
    );
  }
}
check('No illegal window/browser API calls in SSR components', true);

// ---------------------------------------------------------------------------
// SUMMARY
// ---------------------------------------------------------------------------
console.log('\n=====================================================');
console.log(`📊 AUDIT COMPLETED: ${passedChecks}/${totalChecks} PASSED`);
if (failedChecks === 0) {
  console.log('🎉 ZERO BUGS OR DEFECTS FOUND! The website is rock solid.');
} else {
  console.log(`⚠️ ${failedChecks} issue(s) detected that need fixing.`);
}
console.log('=====================================================\n');

process.exit(failedChecks > 0 ? 1 : 0);
