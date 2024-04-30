// Q52 - Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

interface Object {
    brand: string,
    model: string,
    storage: string,
    screenSize: string,
    batteryLife: string
}
let smartphone : Object = {
    brand: "Vivo",
    model: "Vivo Y21",
    storage: "128GB",
    screenSize: "6.5 inches",
    batteryLife: "24 hours"
}
console.log("MY SMART PHONE DETAILS:",smartphone);