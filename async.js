const add=(a,b)=>{
    console.log("inside the async");
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(a<0 || b<0){
                return reject("Rejected:numbers are must be negative");
            }
            resolve(a+b);
        }, 5000);
        console.log("Some processing in background ,,Please wait");
    })
}

const doAsync = async()=>{
    const sum = await add(4,5);
    console.log("takes extra 5 second");
    const sum2 = await add(sum,5);
    return sum2;
}

doAsync().then(data=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})