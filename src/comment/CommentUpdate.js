import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Commnet from './Commnet';

const CommentUpdate = () => {
     // `${}`값 읽기
     const {commentNo} = useParams();

     // 객체 생성
     // DB에서 조회한 comment object의 data를 담은 state value(JS object)
     const [comment,setComment]=useState({
         commentNo:"",
         writer:"",
         content:"",
         rank:1,
         writeDate:""
     });

     // back 에서 갖고오기
     useEffect(() => {
        // 해당하는 번호로 상세 조회
       fetch("http://localhost:9000/comment/read/" + commentNo)
         .then(res => res.json())
         .then(res => {setComment(res)})
     }, [])

     const updateSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:9000/comment/update/"+commentNo,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json; charset=utf-8"
            },
            body:JSON.stringify(comment)
        }
        ).then(res=>res.json()).then(res=>console.log(res));
        window.location.href="/list"

     }

    // 변경 감지
    const changeState = (e) => {
        console.log(e)
        setComment({
        ...comment,
        [e.target.name]:e.target.value
    })
    }

    return (
        <div>
            <h1>수정하기</h1>
            <hr/>
            <div>
                <h2>번호:{comment.commentNo}</h2>
                <h2>작성자:{comment.writer}</h2>
                <h2>내용:</h2><input type="text"
                            value={comment.content}
                            name="content"
                            onChange={changeState}/>
                <h2>날짜:{comment.writeDate}</h2>
                <h2>별점:</h2><input type="text"
                                value={comment.rank}
                                name="rank"
                                onChange={changeState}/>
            </div>
            <div>
                <button onClick={updateSubmit}>수정하기</button>
            </div>
        </div>
    );
};

export default CommentUpdate;