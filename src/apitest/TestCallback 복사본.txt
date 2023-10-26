import React, { useEffect, useState } from "react";
// 전달받은 숫자를 평가해서 양수 또는 음수 평가, 비동기
// setTimeout을 이용해 5초 후 평가.
// 숫자면 성공, 양수인지 음수인지 평가해서 return
// 숫자 이외면 에러 msg
// 숫자 여부 판단은 numberCheck(param) define, 값은 입력 받음
// 성공 시(숫자인 경우), 실패시 실행될 function
// numberCheck function will execute when button clicked (eHandler name: test)

const TestCallback = () => {
  const [chnb, setChnb] = useState();

//   useEffect(
//     checkNP,chnb
//   )

  const checkNP = (p) => {
    if (Number(p) > 0) {
      console.log("POSITIVE");
    } else if (Number(p) < 0) {
      console.log("NEGATIVE");
    } else {
      console.log("ZERO");
    }
  };

  const errmsg = () => {
    throw new Error(`Input type is not NUMBER`);
  };

  const event = () => {
    numberCheck();
  };

  const numberCheck = () => {
    setChnb(document.getElementById("nch").value);
    setTimeout(() => {
      if (Number(chnb) % 1 === 0) {
        // console.log("TYPE: number");
        checkNP(chnb);
      } else {
        // console.log("TYPEL: text");
        errmsg();
      }
    }, 1000);
  };

  return (
    <div>
      <input type="text" id="nch"></input>
      <button onClick={event}>test</button>
    </div>
  );
};

export default TestCallback;
