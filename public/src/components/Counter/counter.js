class MyCounter extends HTMLElement {
    constructor () {
        super();
        this.attachShadow ({mode: "open"});
        this.onButtonClicked = this.onButtonClicked.bind(this);

    }

    static get observedAttributes(){
        return ["count"];
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.mount();
    }

    connectedCallback() {
        console.log("HTML added");
        this.mount();

    }

    disconnectedCallback () {
        console.log("HTML deleted");
        this.removeEventListener();
    }

    mount () {
        this.render();
        this.addEventListener();
    }

    render(){
        this.shadowRoot.innerHTML += `
        <link href="./src/components/Counter/style.css" rel="stylesheet">

        <section class = "counter">
        ${this.count || 0}
        </section>
        <button class= "button"></button>
        `;
    }

    addEventListener(){
        this.shadowRoot.querySelector("button").addEventListener("click",this.onButtonClicked);
    }

    removeEventListener () {
        this.shadowRoot.querySelector("button").removeEventListener("click",this.onButtonClicked);

    }

    onButtonClicked(){
        const currentValue = Number(this.getAttribute("count"));
        this.setAttribute("count", currentValue + 1);
    }
}

customElements.define("my-counter", MyCounter);
export default MyCounter;
