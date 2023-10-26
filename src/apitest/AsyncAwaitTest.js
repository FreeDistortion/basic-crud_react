import React from 'react';

const AsyncAwaitTest = () => {

const hello = () => { return "result" }

// async function: automaticllay made as asynchronized function
// async를 추가한 function의 return은 Promise object의 resolve()의 결과값.
// http 통신을 하는 async 처리 명령문 앞에 await를 추가한다.

// async function asyncHello()
const asyncHello = async () => { return "result" }
console.log(hello());
console.log(asyncHello())

    return (
        <div>
            
        </div>
    );
};

export default AsyncAwaitTest;