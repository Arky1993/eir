// To debug this code, open wixDefaultCustomElement.js in Developer Tools.

// const IMAGE_URL = 'https://static.wixstatic.com/media/61f01a_122f0c1dff054fe1966f27c639ca213e~mv2.jpg';

// const createImage = () => {
//     const imageElement = document.createElement('img');
//     imageElement.src = IMAGE_URL;
//     imageElement.id = 'wdce-image';
//     //imageElement.style.position = 'block';
//     return imageElement;
// };


const createStyle = () => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
    welcome-custom-element {
        background-color: #ffffff;
        height: 100vh;
        //width: 100vw;
        width: document.documentElement.clientWidth;
        overflow: hidden;
      }

    // #wdce-image {
    //     width: 100vw;
    //     height: 100vh;
    //     display:block;
    //     overflow: hidden;
    //     object-position: center;
    //     resize: holizontal;
    //     object-fit: cover;
    // }  
    //  #wdce-image-container {
    //     width: 100vw;
    //     height: 100vh;
    //     display: inline-flex;
    //     //overflow: hidden;
    //     justify-items: stretch;
    //     padding: -50px;        
        
    // }
    `;
    return styleElement;
};

class WelcomeCustomElement extends HTMLElement {
    constructor() {
        super();
        console.log("Text");
    }

    connectedCallback() {
        this.appendChild(createStyle());
    }
}
customElements.define('welcome-custom-element', WelcomeCustomElement);