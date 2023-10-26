import React from 'react';

const AsyncTest2 = () => {

    function test1(n1,n2,callbackFunction) {
        // setTimeout은 JS에서 제공되는 async comm function
        // setTimeout(callbackFunction,delayTime)
        setTimeout(() => {
            let result = n1+n2;
            callbackFunction(result);
            console.log("test1 task")
        }, 2000);
    }

    const callbackFunction = (result) => { 
        console.log("result of asynchronized communication=> ",result)
     }

    function synctest() {
        test1(1000,2000,callbackFunction);
        console.log("task done");
    }

    return (
        <div>
            <button onClick={synctest}>JS Synchronized communication</button>
        </div>
    );
};

export default AsyncTest2;