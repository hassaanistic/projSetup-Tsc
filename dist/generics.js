"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
    //we dont know what it is returnig
}
function identityTwo(val) {
    return val;
    //we dont know what it is returnig
}
// function identityThree<H> (val:H): H{ 
//We can give any name 
function identityThree(val) {
    return val;
    //Now when it get the parameter it Automatically detect the type and also retrun the same type 
}
identityThree(3);
identityThree("3");
identityThree(true);
function identityFour(val) {
    return val;
}
//For Our Own Type we have to pass the param like this
identityFour({
    brand: "brand",
    type: 3213,
});
//////////////////////////////////////////////////////////
//GEnerics for arrays
//Most dev do this <T,> use this comma --> This is not gonna do anything ---> this just tell that this is not an ordinary tag ---> this is generic   
//////////////////////////////////////////////////////////
function getSearchProducts(products) {
    return products; //return whole array product :T [] 
}
function getSearchProduct(products) {
    return products[2]; //return single product /element  : T
}
//function expression
const getMoreSearchProducts = (products) => {
    return products[2];
};
//////////////////////////////////////////////////////////
//GEnerics as paramters
//////////////////////////////////////////////////////////
function anotherFunction(valOne, valTwo) {
    // valOne = T type
    // valTwo = U type
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, 4);
//U extends number --> U generic should be a number not anyOther value
function anotherFunctionWithOneExtend(valOne, valTwo) {
    // valOne = T type
    // valTwo = U type That should be number only 
    return {
        valOne,
        valTwo
    };
}
anotherFunctionWithOneExtend("3", 4);
// making U restrickto the Database interface
function customFunction(valOne, valTwo) {
    // valOne = T type
    // valTwo = U type That should be number only 
    return {
        valOne,
        valTwo
    };
}
customFunction("3", {
    connection: "testConnection",
    username: "ajs",
    password: "sasa"
});
