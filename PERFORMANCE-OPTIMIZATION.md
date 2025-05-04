# Performance Optimization Guide

This document outlines the steps taken to improve the performance of the portfolio website and provides instructions for further optimization.

## Performance Issues Addressed

1. **Render-blocking Resources**
   - Moved non-critical JavaScript to the end of the body
   - Added defer attributes to scripts
   - Optimized CSS loading with media="print" and onload attributes

2. **Image Optimization**
   - Added width and height attributes to prevent layout shifts
   - Added script to convert images to WebP format

3. **JavaScript Optimization**
   - Consolidated duplicate JavaScript code
   - Added minification script

4. **CSS Optimization**
   - Added CSS minification with cssnano
   - Improved loading of CSS files

## How to Run Optimization Scripts

### Install Dependencies
```bash
npm install
```

### Optimize Images
This script converts PNG, JPG, and JPEG images to WebP format for better performance:
```bash
npm run optimize-images
```

### Minify JavaScript
This script minifies all JavaScript files:
```bash
npm run minify-js
```

### Minify CSS
This script minifies the CSS files:
```bash
npm run minify-css
```

### Build for Production
This script builds the CSS for production:
```bash
npm run build:prod
```

## Additional Recommendations

1. **Serve Images in Next-Gen Formats**
   - Use WebP images instead of PNG/JPG where possible
   - Update HTML to reference WebP images

2. **Properly Size Images**
   - Resize large images to the dimensions they're displayed at
   - Use responsive images with srcset for different screen sizes

3. **Eliminate Render-Blocking Resources**
   - Continue to defer non-critical JavaScript
   - Consider using the async attribute for scripts that don't depend on DOM

4. **Minify JavaScript and CSS**
   - Use the provided scripts to minify all assets
   - Consider code splitting for larger JavaScript files

5. **Implement Lazy Loading**
   - Add loading="lazy" to images below the fold
   - Consider lazy loading for JavaScript components not needed immediately

6. **Use a Content Delivery Network (CDN)**
   - Consider using a CDN for static assets
   - This can significantly improve load times for users around the world

7. **Enable Text Compression**
   - Enable GZIP or Brotli compression on your server
   - This can reduce the size of text-based resources by 70-90%

8. **Implement Browser Caching**
   - Set appropriate cache headers for static resources
   - This prevents unnecessary downloads for returning visitors
