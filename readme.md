AngularJS Example Web App
===

How to run this application
---
### Requirements:
1. Node JS (npm)
- GruntJS

### Build/Run:
1. cd to project root directory
- run `npm install` to install npm dependencies
- run `grunt build` to build the `dist` folder
- run `grunt` to start the web server at `localhost:7777`

Improvements
---
1. Create directive for each post
	- Scoped functionality (ex: toggling comments)
	- Handle text vs media posts
- Use vector images or font icons for the icon system
- Condense non-icon images into a sprite where needed to reduce HTTP requests
- Use smaller background image on the hero section for smaller screens
- Use ngTemplateCache to cache the partial views
- Add placeholder/label for 'All Posts' hero input field for IE 9