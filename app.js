let s = "World"
console.log(`Hello ${s} ${2+6}`)

//Primitives
let a = 2.5
a = "hello"
a = true
//Wrapper classes
let b = new String("Hello")
b = new Number(12.5)
b = new Boolean(true)
//Classes
let d = new Date()
d = new Object()
d = new Function()
//Primitives values
console.log(`new Number(12.5) == new Number(12.5) is ${new Number(12.5) == new Number(12.5)}`)
console.log(`new Number(12.5) == 12.5 is ${new Number(12.5) == 12.5}`)
console.log('12'==12)
console.log('12'===12)

console.log(JSON.stringify({number: new Number(12.5)}))
console.log(`new Number(12.5) == new Number(12.5) is ${JSON.stringify(new Number(12.5)) === JSON.stringify(new Number(12.5))}`)

console.log(`20 + '20' is ${20 + '20'}`)
console.log(`20 * '20' is ${20 * '20'}`)
console.log(`20 * 'a' is ${20 * 'a'}`)
console.log(NaN + 'lala')
console.log(Number.MAX_VALUE)
console.log((Infinity+Infinity) ==Infinity)


console.log(('b' + 'a' + + '.' + 'a').toUpperCase())

console.log(parseInt('abc2'))

console.log(("a" + + "a" + "a" + "s").toUpperCase())

// conversion to boolean
let aa = new Number(0)

// console.log(aa ? aa: 'no')

function func(num){
    if(typeof num == "number"){
        console.log('some task is performed with ' + num)
    } else {
        console.log('task is not performed')
    }
}

func(0)

console.log(true + true)

console.log(!![])

console.log(!!(true/false))
console.log(!!(true - true))
// 
const ar = []
ar[100000000] = 1

ar['Andrey'] = 2
ar.Andrey = 2
console.log(ar.length)
ar[10000000000000000] = "lalal"
ar.length = 0;
console.log(ar[10])
console.log(ar.length)
console.log(ar)
console.log(ar['10000000000000000'])

console.log(typeof NaN)

const func2 = function(){

}

console.log(typeof func2)

func2.name = "func2"

console.log(typeof func2)
console.log(typeof [])

let person = createPerson('Vasya', 30)

function createPerson(name, age){
    return {name, age, getName: ()=>{
        return this.name;
    }}
}

console.log(person.getName())

console.log(typeof null)

let ar2 = []

ar2[100] = 0
ar2[1] = 10

ar2.sort((a, b)=>a-b)

console.log(ar2)

//distinquit function properties
function sum(op1=10, op2=20){
    return op1+op2
}

function sum2(op1, op2){
    op1 = op1===undefined? 10: op1
    op2 = op2===undefined? 20: op2
    return op1+op2
}

function sum3(op1, op2){
    op1 = op1 ?? 10
    op2 = op2 ?? 20
    return op1+op2
}

console.log(sum2(5, null))
console.log(sum3(5, null))

console.log(sum3(5, NaN))

// console.log(sum())
// console.log(sum(1))
// console.log(sum(undefined,1))

// console.log(sum2(0,0))
// console.log(sum3(0,0))

//Objects

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
person.undefined = "xxx"
let x
console.log(person[x])