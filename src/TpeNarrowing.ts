function detectType(value: number | string) {
    if (typeof value === "string") {
        return value.toLowerCase();
    }
    return value + 3;
}

function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide an ID")
        return
    }
    id.toLocaleLowerCase();
}

function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const str of strs) {
                console.log(str);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}


////////Type narowing
//firstly we are using so much if else statements to check that the comming parameter is what Type ?
//Now we can USe   "in"   operator in the TS
//It compare the key value that is specific in only one Interface 
//If we are getting two interfaces and we are sure that one interface have this property of isAdmin and that is admin only 
//then we can check that if the "account" have Key-Property "isAdmin "  -->>>Then we are sure that it is hundred percent admin


interface User {
    name: string,
    email: string
}
interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin; //account is Admin HundredPercent 
    }
}


///////////Type narowing
///     instanceof 
//It is more  like the typeOf but that is for the default variables 
//this is for checking an instance of any class etc
function logvalue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());

    } else {
        console.log(x.toLocaleLowerCase());
    }
}




///////////Type narowing
///     type predicates
type Fish = {
    swim: () => void
}
type Bird = {
    fly: () => void
}
//we are making the func for the fish conformation then we ake the return value as ":pet is fish" --->TypeCasting
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
    //pet as a fish ? if .swim is not undefined then it is trure 

}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "Fish Food"
    } else {
        pet
        return "Return Food"
    }
}


//descriminated Unions
interface Circle {
    kind: "circle",
    radius: number,
}
interface Square {
    kind: "square",
    side: number,
}
interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number,
}

type Shape = Circle | Square | Rectangle;
function getTrureShape(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    } if (shape.kind === "rectangle") {
        return shape.length * shape.width
    } else {
        return shape.side * shape.side
    }
}

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}

