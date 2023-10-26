import React from "react";

const PromiseExam = () => {
  const test1 = (num1, num2) => {
    const myr = (resolve, reject) => {
      setTimeout(() => {
        let result = num1 + num2;
        resolve(result);
      }, 100);
    };
    let obj = new Promise(myr);
    return obj;
  };
  const test2 = (result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let test2_result = result * 1000;
        resolve(test2_result);
      }, 1000);
    });
  };

  const test3 = (result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let test3_result = result / 1000;
        resolve(test3_result);
      }, 100);
    });
  };

  function run() {
    test1(1000, 2000)
    .then((testResult) => { 
        console.log(testResult);
        return test2(testResult);
     })
    .then((testResult) => { 
        console.log(testResult);
        return test3(testResult);
     })
    .then((testResult) => { 
        console.log(testResult);
     })
    ;
  }

  return (
    <div>
      <button onClick={run}>WELCOME to PROMISE HEAVEN</button>
    </div>
  );
};

export default PromiseExam;
