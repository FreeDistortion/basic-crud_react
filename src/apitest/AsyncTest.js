import React from 'react';

function test1() {
    console.log("function test1");
}
function test2() {
    test1();
    console.log("function test2");
}
function test3() {
    test2();
    console.log("function test3");
}
function synctest() {
    test1();
    test2();
    test3();

}

const AsyncTest = () => {
    return (
        <div>
            <button onClick={synctest}>JS Synchronized communication</button>
        </div>
    );
};

export default AsyncTest;