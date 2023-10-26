import React, { useState } from 'react';

const CommnetWrite = () => {

    // 변경 감지된 쓰기 객체
    const [commentState,setCommentState] = useState({
        writer:"",
        content:"",
        rank:1
    })
    
    // 변경 감지
    const changeState = (e) => {
        console.log(e)
        setCommentState({
        ...commentState,
        [e.target.name]:e.target.value
    })
    }
    
    const createSubmit = (e) => {
        // submit button이 action을 실행하지 못 하게
        e.preventDefault();
        console.log(commentState);

        // REST server에 data를 json으로 넘겨주기
        fetch("http://localhost:9000/comment/create",
        // 통신할 때 필요한 정보 기입
        {
            method:"POST",
            headers:{
                "Content-type":"application/json;charset=utf-8"
            },
            // JS object를 JSON으로 변환해서 넣기
            body:JSON.stringify(commentState)
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
        })
     }

    return (
        <form onSubmit={createSubmit}>
        <div className="commentEditor">
            <h2>댓글</h2>
            <div>
                <input
                name="writer"
                placeholder="작성자"
                type="text"
                value={commentState.writer}
                onChange={changeState}
                // onChange={function(e){
                //     setCommentState({
                //         writer:e.target.value,
                //         content:commentState.content
                //     })
                // }}
                />
            </div>
            <div>
                <textarea
                value={commentState.content}
                onChange={changeState}
                name="content"
                placeholder="내용"
                type="text"
                />
            </div>
            <div>
                <span>별점평가 : </span>
                <select
                name="rank"
                value={commentState.rank}
                onChange={changeState}
                >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={createSubmit}>저장하기</button>
            </div> 
        </div>
        </form>
    );
};

export default CommnetWrite;