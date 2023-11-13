"use strict";
function detectType(value) {
    if (typeof value === "string") {
        return value.toLowerCase();
    }
    return value + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide an ID");
        return;
    }
    id.toLocaleLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const str of strs) {
                console.log(str);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin; //account is Admin HundredPercent 
    }
}
///////////Type narowing
///     instanceof 
//It is more  like the typeOf but that is for the default variables 
//this is for checking an instance of any class etc
function logvalue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toLocaleLowerCase());
    }
}
//we are making the func for the fish conformation then we ake the return value as ":pet is fish" --->TypeCasting
function isFish(pet) {
    return pet.swim !== undefined;
    //pet as a fish ? if .swim is not undefined then it is trure 
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        pet;
        return "Return Food";
    }
}
function getTrureShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    if (shape.kind === "rectangle") {
        return shape.length * shape.width;
    }
    else {
        return shape.side * shape.side;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
