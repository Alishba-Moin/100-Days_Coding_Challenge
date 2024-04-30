// Q61 - Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["cars"] = 0] = "cars";
    Vehicles[Vehicles["trucks"] = 1] = "trucks";
    Vehicles[Vehicles["motorcycles"] = 2] = "motorcycles";
})(Vehicles || (Vehicles = {}));
;
console.log(Vehicles.trucks);
