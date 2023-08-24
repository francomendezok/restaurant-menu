import './style.css';
import Icon from './huge.jpg';


 // Add the image to our existing div.
 const content = document.getElementById("content")
 const myIcon = new Image();
 myIcon.src = Icon;

 document.body.appendChild(content);
 content.appendChild(myIcon)

console.log("Hello Guys!");