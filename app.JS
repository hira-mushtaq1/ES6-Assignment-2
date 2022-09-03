let arr=[
 
    newarr=[1,2,3],
    nested=[4,5,6],
    subnested=[0,6,5]

]
let obj={
    firstObj:{
        name:"hira",
        age: 20
    },
    secObj:{
        name:"abuzar",
        age:20
    },
    thrd:{
        name: "heer",
        age: 20
    }
}

let lastArr=[...subnested]
let data=document.getElementById('data')
data.innerHTML=`<span>The value of last array is   : ${lastArr.join(" ")}</span>` 
console.log(lastArr)

let newLast=[...arr.slice(-1)]   //if there were so many array and we don't know the last array then we can use array name with slice...........
let dataNew=document.getElementById('dataNew')
dataNew.innerHTML=`<span>The value of last array when we dont know the actual name of last array then we use slice(-1) method and it returns the last array that is   : ${lastArr.join(" ")}</span>` 

console.log(newLast) 


//for object
let name=Object.keys(obj) // it will return the name of third obj
let lastObj=Object.values(obj)

console.log(...lastObj.slice(-1)) 








