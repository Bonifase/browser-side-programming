// var username=prompt('Please Log in. Username:',' ');
// if((typeof fruit) = "string"){
//     var value=prompt("Enter value");
// }
function myFunction(){
    var fruits = [];
    var name=prompt('Enter the fruit of your choice. Username:',' ');
    var value=prompt('Enter a value. Please type it now:',' ');
    var fruit = {};
    fruit['Name'] = name;
    fruit['value'] = value;
    fruits.push(fruit)


    document.getElementById("fruit").innerHTML = [...fruits];
    alert(fruits[0].Name);
}

