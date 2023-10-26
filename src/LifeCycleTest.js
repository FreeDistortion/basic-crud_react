import React, { useEffect, useState } from 'react';

const MountTest = () => {
    console.log("MountTest Function")

useEffect(
    () => { 
        console.log("execute useEffect")
        // execute function when return
        // unmount 시점에 실행될 작업이 있는 경우 하단부 처리
        return () => { 
            console.log("Component Disappeared(execution when return)")
         }
    }
)

    return(
        <div><h1>test component's lifecycle</h1></div>
    )
 }


const LifeCycleTest = () => {
    const [checked,setChecked]=useState(false);
    const toggle = () => { setChecked(!checked) }
    console.log("React Component LifeCycle Test...")
    return (
        <div>
            <h1>React LifeCycle</h1>
            <hr/>
            <button onClick={toggle}>change state value</button>
            {checked && <MountTest></MountTest>}
        </div>
    );
};

export default LifeCycleTest;