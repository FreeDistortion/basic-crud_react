import { useEffect, useRef, useState } from "react";
import "./App.css";
import CommentWrite from "./component/CommentWrite";
import CommnetList from "./component/CommnetList";

function App() {
  const [datalist, setDatalist] = useState([]);
  const dataId = useRef(0);
  const getData = async () => {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((result) => result.json());
    console.log(response);

    // 외부 서버에서 받아온 데이터 가공
    // 1. 20개만 받기
    const initdata = response.slice(0, 19).map((comment) => {
      // 2. state에 맞게 수정
      return {
        writer: comment.id,
        content: comment.body,
        id: dataId.current++,
        write_date: new Date().toLocaleString(),
      };
    });
    // 3. state 변경
    setDatalist(initdata);
  }

   // component가 mount될 때 호출
   useEffect(
    () => { getData() },[]
   )


  const createData = (writer, content, rank) => {
    const write_date = new Date().toLocaleString();
    const newComment = {
      writer,
      content,
      rank,
      write_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setDatalist([...datalist, newComment]);
  };

  const commentDelete = (targetId) => {
    const newCommentlist = datalist.filter(
      (comment) => comment.id !== targetId
    );
    console.log(newCommentlist);

    setDatalist(newCommentlist);
  };

  return (
    <div>
      <CommentWrite createDataProp={createData}></CommentWrite>

      <CommnetList
        commentlist={datalist}
        deleteRun={commentDelete}
      ></CommnetList>
    </div>
  );
}

export default App;
