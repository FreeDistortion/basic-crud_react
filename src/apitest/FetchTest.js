import React from 'react';

// https://jsonplaceholder.typicode.com/comments 접속
const FetchTest = () => {

    const getData = async () => { 
        // 외부 서버에 제공하는 api 호출 - 기본 function fetch
        // Promise object 앞에 await 정의하면, 이 작업이 끝날 때까지 기다렸다가 다른 작업으로 넘어감.
        let response = await fetch("https://jsonplaceholder.typicode.com/comments");

        let jsonData = response.json();

        console.log(response)
        console.log(jsonData)
     }
     getData()

    return (
        <div>
        </div>
    );
};

export default FetchTest;