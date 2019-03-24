// var username=prompt('Please Log in. Username:',' ');
// if((typeof fruit) = "string"){
//     var value=prompt("Enter value");
// }
function myFunction(){
    var fruits = [];
    var name=document.getElementById("name").value;
    var value=document.getElementById("value").value;
    var fruit = {};
    fruit['Name'] = name;
    fruit['value'] = value;
    fruits.push(fruit)


    document.getElementById("fruit").innerHTML = fruit.Name;
    alert(fruits[0].Name);
}

