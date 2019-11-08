function newPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomBoolean = Math.round(Math.random() * 10) % 2 === 0;
        return resolve(randomBoolean);
      }, 1000);
    });
  };

  var results = {
    response:[], 
    _true: 0, 
    _false:0   
  };

for (let i = 0; i < 10; i++) {
    newPromise().then((resolve)=>{
        if(resolve){
            results._true++
        }else{
            results._false++
        }
        results.response[i] = resolve;
        if(results.response.length === 10){
            console.log(results);
            localStorage.setItem('promisesResults', JSON.stringify(results));
        }
    });
}
