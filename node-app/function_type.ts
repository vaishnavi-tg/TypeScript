function runafter1s (fn:()=>void){
    setTimeout(fn,1000)
}

const a=runafter1s(function (){
    console.log("hiiiii")
})

console.log(a)