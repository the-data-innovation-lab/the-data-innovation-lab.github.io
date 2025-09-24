# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a research lab website built as a static site. The project structure follows a simple HTML/CSS/JavaScript approach for a professional academic website.

## Architecture

The website is organized as a multi-page static site with the following core pages:

- Home page (index.html) - Lab overview and introduction
The home page is simple with the name "Data Innovation and AI Lab" - we can add a marquee image or logo as needed.
Write a description of what the lab is - we're interested in understanding the implications of big data and AI technologies for the economy. In particular, we are focused on understanding the impact of these technologies on innovation, creativity and productivity. Lab is based at Berkeley (Haas) and Penn (Wharton) - co directed by Abhishek Nagaraj and Matteo Tranchero.

- Team page
this is the next most important page. this first lists the two directors of the lab, Abhishek and Matteo along with short bios. We can also link to their homepages.

Then there is a hierarchy of team members.
Post-doc fellow: Tim Sels. 
Pre-doc fellows: Min Min Fong, Charlie Guthmann and Jacob Synder
Phd Students: Kris Gulati, Srikanth Prasad, Gaveal Fan, Dan Scheismann
Research Assistants: Arul Murugan, Shreyas Krishnan,
Past collaborators and alumni: look up this info from https://www.abhishekn.com/lab/students

this page should also have some info on "work with me" - where we provide some info on how prospective students can engage with us. again this can come from: https://www.abhishekn.com/lab/work-with-us

this page needs a nice rolodex of images of lab meetups and the entire group. 

- Research page - this is a short page that highlight different research streams within the lab along with associated papers. look up abhishek and matteo's CVs to figure this out. 

- Publications page - Academic papers and outputs
this is a simple listing of all published and working papers

- Contact page - Location and contact information

The site uses:
- Semantic HTML5 structure
- Responsive CSS Grid/Flexbox layouts
- Vanilla JavaScript for interactive elements
- Mobile-first responsive design approach

## Development Commands

Since this is a static site, development is straightforward:
- Open `index.html` directly in browser for local preview
- Use a local server for more accurate testing: `python -m http.server 8000`
- For live reload during development, consider using Live Server extension or similar tools

## Technical Implementation

The site uses a modern, responsive design approach:

- **CSS Framework**: Custom CSS with CSS Grid and Flexbox for layouts
- **Typography**: Google Fonts (Inter for body text, Playfair Display for headings)
- **Color Scheme**: Primary colors are #2c3e50 (dark blue-gray) and #3498db (blue)
- **Responsive Breakpoints**: Mobile-first design with breakpoint at 768px
- **Navigation**: Sticky navigation with mobile hamburger menu
- **JavaScript**: Vanilla JS for mobile menu toggle, smooth scrolling, and active nav states

## Code Organization

- Root level contains main pages (index.html, research.html, etc.)
- `/css/` directory for stylesheets
  - `style.css` - Main stylesheet with comprehensive styling
- `/js/` directory for JavaScript files
  - `main.js` - Mobile navigation, smooth scrolling, and active nav state management
- `/images/` directory for media assets
  - Contains lab logo and university logos
- `/docs/` directory for downloadable resources (PDFs, papers, etc.)

## Key Components and Features

- **Responsive Navigation**: Mobile-first navigation with hamburger menu (`js/main.js:1-26`)
- **Team Cards**: Reusable card components for team member display (`css/style.css:172-230`)
- **Publication Layout**: Structured publication display with academic formatting (`css/style.css:231-257`)
- **Logo Grid**: University affiliation display section (`css/style.css:339-379`)
- **Utility Classes**: Helper classes for common styling patterns (`css/style.css:381-409`)

## Design Patterns

- Use consistent navigation across all pages
- Maintain academic/professional visual hierarchy
- Ensure accessibility with proper semantic markup and alt text
- Keep mobile responsiveness as primary consideration
- Follow consistent naming conventions for CSS classes using BEM methodology where applicable
- take inspiration from other scientific lab websites - e.g. https://www.comp-culture.org/ and https://www.pascl.stanford.edu/

## Deployment

This static site can be deployed to:
- GitHub Pages (recommended for academic sites)
- Netlify
- Vercel
- Traditional web hosting

The repository is set up for easy GitHub Pages deployment from the main branch. It is mapped to the https://thedatainnovationlab.com/ domain. 