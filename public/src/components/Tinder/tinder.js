class Tinder extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});

    }

    static get observedAttributes () {
        return ["pic", "name", "age", "occupation", "location", "distance"];
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.mount;
    }
    connectedCallback(){
        this.mount();
    }
    mount (){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML += `
        <link href="./src/components/Tinder/tinder.css" rel="stylesheet">
    
    <section> 
    <div class="imgs">
    <img src="./img/icons/tinder.png" alt="tinder" class="tinder">
    <img src="./img/icons/bar.png" alt="bar" class="bar">
    <div class="infoPic" style="background-image: url(${this.pic})">
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <h1 class="name"> ${this.name} ${this.age} </h1>
        <p class="occupation"> ${this.occupation} </p>
        <p class="location"> ${this.location} </p>
        <p class="distance"> ${this.distance} Km away </p>
        <img src="./img/icons/homeBttns.png" alt="homeBttns" class="homeBttns">
        <img src="./img/icons/circleBttns.png" alt="circleBttns" class="circleBttns">
    </div>
    <img src="./img/icons/LowBttns.png" alt="LowBttns" class="LowBttns">
    </section>
        `
    }
}
customElements.define("my-tinder", Tinder)
export default Tinder;