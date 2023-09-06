function getSumNum(a, b) {
    const customPromise = new Promise((resolve, reject) => {
      const sum = a + b;
        console.log(sum)
      if(sum <= 5){
        resolve("Let's go!!")
        console.log("success")
      } else {
        reject(new Error('Oops!.. Number must be less than 5'))
      }
    })
  
    return customPromise
  }
  getSumNum(1, 3).then(data => {
    console.log("initial data"+data)
    const value=data+1;
    return value;

  }).then(newData=>{
    console.log("modified data--"+newData);
  })
  .catch(err => {
    console.log(err)
  })