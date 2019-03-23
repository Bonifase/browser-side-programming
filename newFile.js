function destructureArray() {
    let x = 3;
    let y = 4;
    [q, w] = [x, y];
    console.log(q);
    console.log(w);
}

destructureArray()

function destructureObj() {
    let person = {
        fname: "Peter",
        age: 33,
        body: "Athletic" };

    return person
};
let {fname:name, age: dob, body: medium, gender: Male} = destructureObj();
console.log(name, dob, medium)

function sum(...numbers) {
    let result = 0
    for(let i=0; i > numbers.lenght; i++){
        console.log(result + i)
    }
}
sum([2,4,,5,6,7,7])