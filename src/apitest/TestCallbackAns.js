import React from 'react';

const TestCallbackAns = () => {

    const numberCheck = (mynum, resolve, reject) => { 
        // JS가 지원하는 async function 호출
        setTimeout(() => {
            // type check
            if(typeof mynum === "number"){
                // 성공
                resolve(mynum)
            }else{
                // 실패
                reject("PLEASE send me NUMBER. Got it?")
            }
        }, 5000);
     }

     function test() {
        // call numberCheck() when button clicked
        numberCheck(
            //mynum
            1000,

            // resolve functiton
            (value) => { console.log(value,":",value>0?"POSITIVE":"NEGATIVE") },

            // reject function
            (err) => { console.log(err) }
            )
     }



    // change upper tasks by sing Promise object
    // Promise는 async에서 callback을 분리해 사용 가능.
    // 이를 사용하는 경우 async를 실행하는 부분을 function으로 내부에서 정의하고 사용.
    function myUsePromise(mynum){
        // 1. async 할 수 있는 function 별도 정의
        const myrun = (resolve, reject) => { 
            setTimeout(() => {
                // type check
                if(typeof mynum === "number"){
                    // success
                    console.log("success");
                    resolve(mynum);
                }else{
                    // fail
                    console.log("fail");
                    reject("PLEASE give me NUMBER.")
                }
            }, 5000);
        }

        // 2. Promise object return - Promise를 만들 때 실제 async을 하는 function을 parameter로 넘긴다.
        // 어떤 function을 정의할 때 return Promise를 하면 이 function이 async communication 한다는 의미.
        // async의 결과를 Promise로 만들어서 return
        // Promise에 전달하면 자동으로 myrun이 실행
        const asyncObject = new Promise((myrun));
        return asyncObject;
    }
    const test2 = () => { 
        // return Promise obejct
        const resultObject = myUsePromise(100);

        // Promise의 성공 유무에 따라 사용할 수 있는 기능
        resultObject
        .then((result) => { console.log("Task succeed: ",result,"is", result>0?"POSITIVE":"NEGATIVE") })
        .catch((err) => { console.log("Task failure: ",err) })
        ;
        // resultObject.catch((err) => { console.log("Task failure: ",err) });
        // 위를 안 쓰고 method chaining 가능.
     }



    return (
        <div>
            <button onClick={test}>work without using Promise object</button>
            <button onClick={test2}>work with using Promise object</button>
        </div>
    );
};

export default TestCallbackAns;