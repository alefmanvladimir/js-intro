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
    const res = {}
    for(let i=0; i<ar.length; i++){
        res[ar[i]] = res[ar[i]]!=undefined?++res[ar[i]]:1
    }
    Object.entries(res).sort((a,b)=>b[1]-a[1]).forEach(s=>console.log(`${s[0]} - ${s[1]}`))
}

displayOccurences(array)
