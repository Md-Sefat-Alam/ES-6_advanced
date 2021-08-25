class Support {
    name;
    designation = 'Support Web Developer';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, "Start a Session");
    }
}
// const amir = new Support();
// console.log(amir);

const amir = new Support("Amir Khan", 'BD');
const salman = new Support("Solaiman Khan", 'Dubai');
console.log(amir, salman);


amir.startSession();
salman.startSession();