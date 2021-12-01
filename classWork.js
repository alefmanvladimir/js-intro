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
        res[ar[i]] = 0
    }
    for(let i=0; i<ar.length; i++){
        res[ar[i]]++
    }
    Object.entries(res).sort((a,b)=>b[1]-a[1]).forEach(s=>console.log(`${s[0]} - ${s[1]}`))
}

displayOccurences(array)
