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
  getSumNum(4,7);