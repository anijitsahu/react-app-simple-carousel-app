# react-app-simple-carousel-app
A Simple Carousel Application using [React JS](https://reactjs.org/docs/getting-started.html), a JavaScript library to make awesome UI by Facebook and [HTML5](https://www.w3schools.com/html/html5_intro.asp), [CSS3](https://www.w3schools.com/css/).

This application uses [React JS](https://reactjs.org/docs/getting-started.html) component oriented UI creation paradigm. All components are written in [JSX](https://reactjs.org/docs/jsx-in-depth.html) and ES6 style and are
combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/). 

ES6 `module` creation along with `import /export` is used. [Babel](https://babeljs.io/docs/en/babel-preset-react) is used to *transpile* all [JSX](https://reactjs.org/docs/jsx-in-depth.html) code to vanilla JavaScript code. To install all the dependecies `npm` is used.

For UI creation [HTML5](https://www.w3schools.com/html/html5_intro.asp) and [CSS3](https://www.w3schools.com/css/) are used. [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), the new feature of [CSS3](https://www.w3schools.com/css/) is used for layout creation purpose. [Fontawesome](https://fontawesome.com/) icons are added for aesthetic purpose.

This is a *responsive web application* for viewing in both Mobile and Desktop.


## Features
- Code is rewritten with [React JS 17](https://reactjs.org/docs/getting-started.html)
- Latest features of JavaScript i.e. ES6, ES7, ES8 is used
- [React JS Hooks](https://reactjs.org/docs/hooks-intro.html) are used with Functional components

<br/>

- This is just a Simple Carousel program
- Next image can be seen by clicking `>` button
  - Next button will not be shown when the last image is reached
- Previous image can be seen clicking `<` button
  - While loading the first image previous button will not be there for obvious reason 
  
 <br>
 <ul>
  <li> This follows responsive web design paradigm </li>
  <li> Mobile view is supported </li>
  <li> No database / storage is there. So changes are <i> not persistant</i> </li>
  <li> Images are served from the local file system. No <i>external</i> URLs are there </li>
 </ul> 


## Installation

Clone the repository:
```
git clone https://github.com/anijitsahu/react-app-simple-carousel-app.git 
```
Navigate inside the directory:
```
cd react-app-simple-carousel-app/dist
```
Open `index.html` page in a web browser and have fun with the carousel
 
*tested with <img src="screenshots/chrome.png" width="20px" title="Google Chrome">[Google Chrome 89](https://www.google.com/chrome/) and <img src="screenshots/firefox.png" width="25px" title="Firefox Developer edition">[Mozilla Firefox 86](https://www.mozilla.org/en-US/firefox/new/)*  

## Screenshots

Some screens of the application is given below for better understanding. 

Desktop as well as Mobile version of the screenshots are given side by side.

<p> Initial screen <br/> 
 <img src="screenshots/desktop 1.png" width="590px" title="initial screen"/>
 <img src="screenshots/mobile 1.png" width="190px" title="initial screen"/> 
</p>

<p> After clicking the next button <br/> 
 <img src="screenshots/desktop 2.png" width="590px" title="After clicking the next button screen"/>
 <img src="screenshots/mobile 2.png" width="190px" title="After clicking the next button screen"/> 
</p>

<p> Last image <br/> 
 <img src="screenshots/desktop 3.png" width="590px" title="Last image screen"/>
 <img src="screenshots/mobile 3.png" width="190px" title="Last image screen"/> 
</p>
 


