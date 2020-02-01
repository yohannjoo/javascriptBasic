var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
//Print John's age
console.log(users[1].name);
//Print the name of first object
console.log(users[0]);
//Print name and age of each using a for loop
for(var object in users){
    console.log(users[object].name + users[object].age)
}