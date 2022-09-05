
let data=document.getElementById('data')


let arr=["Hira", ["Heer",["Abuzar", "Usama", "Bilal","Zaigham"],"Laveezah"],"Ansa"]
let lastArr=[...arr[1][1]]
console.log(lastArr)
data.innerHTML=`The value of last array is ${lastArr.join("  ")}`

let obj={
    nestedObj:{
        name: "Hira",
        age: 20,
        subObj:{
            name:"Abuzar",
            age:20,}
    }
}



let lastObj=Object.keys(obj.nestedObj.subObj)
let lastObj1=Object.values(obj.nestedObj.subObj)
let res= {...lastObj}
console.log(res)
let val={...lastObj1}
console.log(val)





