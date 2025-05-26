import "./styles.css";
import odinImage from "./images/odin.png";
   
const logo = document.createElement("img");
logo.src = odinImage;

logo.setAttribute('id','logo');
document.body.appendChild(logo);

const logoText = document.createElement('p');
logoText.textContent = 'DoMe';
logoText.setAttribute('id','logoText');

document.body.appendChild(logoText);