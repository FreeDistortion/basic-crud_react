import React, { useEffect, useState } from 'react';
import Commnet from './Commnet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CommentRead from './CommentRead';
const CommentList = () => {
    //DB에서 조회한 data를 받아와서 저장할 배열
    const [datalist, setDataList] = useState([]);
    
     console.log(datalist);
    
    useEffect(() => {
        //비동기 통신을 하는 지원되는 function≈
        fetch("http://127.0.0.1:9000/comment/list")
            .then((res) =>  res.json() )
            .then((res) =>  {console.log(res); setDataList(res) })
     },[])

    return (
        <div>
            <h1>댓글리스트(개)</h1>
            <div>
                {datalist.map(comment =>
                        <Commnet key={comment.commentNo} {...comment} ></Commnet>
                    )}
            </div> 
        </div>
    );
};
//속성이 전달되지 않는 경우 기본속성을 정의할 수 있다.
CommentList.defaultProps={
    commnetlist:[]
}
export default CommentList;