import React from "react";

const CallBackHellTest = () => {
  const test1 = (num1, num2, callbackFunction) => {
    setTimeout(() => {
      let result = num1 + num2;
      callbackFunction(result);
    }, 3000);
  };
  const test2 = (result, callbackFunction) => {
    setTimeout(() => {
      let test2_result = result * 1000;
      callbackFunction(test2_result);
    }, 5000);
  };

  const test3 = (result, callbackFunction) => {
    setTimeout(() => {
      let test3_result = result * 1000;
      callbackFunction(test3_result);
    }, 2000);
  };

  function run() {
    test1(1000, 2000, (a_result) => {
        console.log("A 실행 후 결과를 B 로", a_result);
        test2(a_result, (b_result) => {
            console.log("B 실행 후 결과를 C로", b_result);
            test3(b_result, (c_result) => {
                console.log("C", c_result);
        });
      });
    });
  }

  return (
    <div>
      <button onClick={run}>WELCOME TO CALLBACK HELL</button>
    </div>
  );
};

export default CallBackHellTest;
