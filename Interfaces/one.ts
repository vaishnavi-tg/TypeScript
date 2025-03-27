interface User{
    firstname:string,
    lastname:string,
    age:number
    email?:string
}

function greet(user:User){
    console.log(`Good Morning ${user.firstname,user.lastname}`)
}


function islegal(user:User){
    if(user.age>18){
        console.log("Yes,Legal")
    }
    else{
        console.log("No,Not legal")
    }
}

islegal({
    firstname:"vaishnavi",
    lastname:"TG",
    age:70
})

greet({
    firstname:"vaishnavi",
    lastname:"TG",
    age:70
})