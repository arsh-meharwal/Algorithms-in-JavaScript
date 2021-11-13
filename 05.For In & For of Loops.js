// Working of for of loop
// for...of statement creates a loop iterating over iterable objects, including: String, Array

const a = ['arsh','rgrg','regrh']
for(b of a){
    console.log(b);
}
// Output -
// arsh
// rgrg
// regrh


// Working of for in loop
// The for/in statement loops through the properties of an object.


const object = {
key1 : "Youtube",
key2 : "Instagram",
key3 : "Github",
}
for(variable in object){
    console.log(`The key is ${variable} and Value is ${object[variable]}`)
}

// Output-
// The key is key1 and Value is Youtube
// The key is key2 and Value is Instagram
// The key is key3 and Value is Github
