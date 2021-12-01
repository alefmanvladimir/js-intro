const array = [
    "abc",
    "ab",
    "a",
    "lpm",
    "abc",
    "lpm",
    "lpm"
]

const displayOccurences = (ar)=>{

    Object.entries(( ()=> {ar.forEach(element=>ar[element] = ar[element]!==undefined ? ++ar[element] : 1); return ar})() ).sort((a,b)=>b[1]-a[1]).filter(elem=>isNaN(+elem[0]) ).forEach(s=>console.log(`${s[0]} - ${s[1]}`))
}

displayOccurences(array)
