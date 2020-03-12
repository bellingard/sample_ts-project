class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return `<h1>${this.greeting}</h1>`;
    }
};

var greeter = new Greeter("Hello, world!");

if (1==1) {}
    
document.body.innerHTML = greeter.greet();
