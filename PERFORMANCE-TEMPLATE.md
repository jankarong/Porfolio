# Performance Optimization Template

This template outlines the changes made to improve page loading speed across the portfolio website.

## Head Section Optimizations

```html
<!-- Preload critical assets -->
<link rel="preload" href="../css/style.min.css" as="style">
<link rel="preload" href="../js/bundle.min.js" as="script">
<link rel="preload" href="../image/RJlogo.webp" as="image" type="image/webp">

<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://cdnjs.cloudflare.com">
<link rel="preconnect" href="https://www.googletagmanager.com">
<link rel="preconnect" href="https://www.clarity.ms">

<!-- Critical CSS -->
<link href="../css/style.min.css" rel="stylesheet">

<!-- Non-critical CSS with media="print" and onload -->
<link rel="stylesheet" href="../css/zoomable.css" media="print" onload="this.media='all'">
<link rel="stylesheet" href="../css/scroll-indicator.css" media="print" onload="this.media='all'">
<link rel="stylesheet" href="../css/remove-mobile-nav.css" media="print" onload="this.media='all'">
<link rel="stylesheet" href="../css/mobile-nav-fix.css" media="print" onload="this.media='all'">
<link rel="stylesheet" href="../css/backToTop.css" media="print" onload="this.media='all'">

<!-- Google fonts with display=swap for better performance -->
<link href="https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;600;700&family=Urbanist:wght@300;400;500;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
<noscript>
    <link href="https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;600;700&family=Urbanist:wght@300;400;500;700&display=swap" rel="stylesheet">
</noscript>

<!-- Font awesome - defer loading -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" media="print" onload="this.media='all'">
<noscript>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</noscript>
```

## Image Optimizations

1. Convert all images to WebP format
2. Add width and height attributes to prevent layout shifts
3. Add lazy loading to images below the fold

```html
<!-- Example of optimized image -->
<img src="../image/example.webp" alt="Example image" class="w-full" loading="lazy" width="600" height="400">
```

## JavaScript Optimizations

1. Use minified and bundled JavaScript
2. Add defer attribute to non-critical scripts
3. Load scripts at the end of the body

```html
<!-- AOS Library - Loaded with defer -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js" defer></script>

<!-- Minified and bundled JavaScript -->
<script src="../js/bundle.min.js" defer></script>
```

## Performance Checklist

- [x] Minify CSS files
- [x] Minify JavaScript files
- [x] Convert images to WebP format
- [x] Add width and height attributes to images
- [x] Add lazy loading to images below the fold
- [x] Preload critical assets
- [x] Preconnect to external domains
- [x] Defer non-critical CSS loading
- [x] Defer non-critical JavaScript loading
- [x] Bundle JavaScript files
- [x] Use font-display: swap for web fonts
- [x] Provide fallbacks for browsers that don't support JavaScript

## How to Apply These Optimizations

1. Run `npm run optimize-images` to convert images to WebP format
2. Run `npm run minify-css` to minify CSS files
3. Run `npm run minify-js` to minify JavaScript files
4. Update HTML files to use the optimized resources
5. Add width and height attributes to images
6. Add lazy loading to images below the fold
7. Update CSS and JavaScript references to use minified versions
8. Add preload, preconnect, and defer attributes as needed
