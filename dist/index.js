"use strict";
// class User{
//     public email :string; //public by default in js 
//     name :string;
//     private readonly city: string = "sahiwal";
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "sahiwal";
    }
    // Private member
    deletToken() {
        console.log("deleting token");
    }
    //getter
    get getAppleEmail() {
        return `Apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //setter //we can't use " :void" with setter
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("courseNum must be greater than");
        }
        this._courseCount = courseNum;
    }
}
const hassaan = new User("Hassaan", "Hassaan");
