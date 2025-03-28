function identity<T>(arg:T){
    return arg
}

let output1=identity<string>("vaishnavi")
let output2=identity<number>(67)
console.log(output1)
console.log(output2)