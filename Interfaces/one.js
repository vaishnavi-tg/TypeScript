function greet(user) {
    console.log("Good Morning ".concat((user.firstname, user.lastname)));
}
function islegal(user) {
    if (user.age > 18) {
        console.log("Yes,Legal");
    }
    else {
        console.log("No,Not legal");
    }
}
islegal({
    firstname: "vaishnavi",
    lastname: "TG",
    age: 70
});
