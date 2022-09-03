import * as components from "./components/indexComponents.js"
import data from "./components/data.js"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((element)=> {
            this.shadowRoot.innerHTML += `
            <my-tinder
            pic = "${element.pic}"
            name = "${element.name}"
            age = "${element.age}"
            occupation = "${element.occupation}"
            location = "${element.location}"
            distance = "${element.distance}"
            </my-tinder>
            <my-counter></my-counter>
            `;
        })
        
    }
}
customElements.define("app-container", AppContainer);