const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val;
    //we dont know what it is returnig
}
function identityTwo(val: any): any {
    return val;
    //we dont know what it is returnig
}

// function identityThree<H> (val:H): H{ 
//We can give any name 
function identityThree<Type>(val: Type): Type {
    return val;
    //Now when it get the parameter it Automatically detect the type and also retrun the same type 
}

identityThree(3);
identityThree("3");
identityThree(true);


function identityFour<Type>(val: Type): Type {
    return val;
}

interface bootle {
    brand: string;
    type: number;
}
//For Our Own Type we have to pass the param like this
identityFour<bootle>({
    brand: "brand",
    type: 3213,
});


//////////////////////////////////////////////////////////
//GEnerics for arrays
//Most dev do this <T,> use this comma --> This is not gonna do anything ---> this just tell that this is not an ordinary tag ---> this is generic   
//////////////////////////////////////////////////////////

function getSearchProducts<T,>(products: T[]): T[] {
    return products //return whole array product :T [] 
}
function getSearchProduct<T,>(products: T[]): T {
    return products[2]; //return single product /element  : T
}

//function expression
const getMoreSearchProducts = <T,>(products: T[]): T => {
    return products[2]
}


//////////////////////////////////////////////////////////
//GEnerics as paramters
//////////////////////////////////////////////////////////

function anotherFunction<T, U>(valOne: T, valTwo: U): object {
    // valOne = T type
    // valTwo = U type
    return {
        valOne,
        valTwo
    }
}
anotherFunction(3, 4);

//U extends number --> U generic should be a number not anyOther value
function anotherFunctionWithOneExtend<T, U extends number>(valOne: T, valTwo: U): object {
    // valOne = T type
    // valTwo = U type That should be number only 
    return {
        valOne,
        valTwo
    }
}
anotherFunctionWithOneExtend("3", 4);


interface DataBase {
    connection: string;
    username: string;
    password: string;
}

// making U restrickto the Database interface
function customFunction<T, U extends DataBase>(valOne: T, valTwo: U): object {
    // valOne = T type
    // valTwo = U type That should be number only 
    return {
        valOne,
        valTwo
    }
}
customFunction("3",
    {
        connection: "testConnection",
        username: "ajs",
        password: "sasa"
    }
);