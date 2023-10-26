import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import CommentList from './CommentList';
import CommentRead from './CommentRead';
import CommnetWrite from './CommnetWrite';
import CommentUpdate from './CommentUpdate';

const CommentMain = () => {
    return (
        <BrowserRouter>
        <div className='commentList'>
            <Menu></Menu>

            <Routes>
                <Route path='/write' element={<CommnetWrite/>}/>
                <Route path='/list' element={<CommentList/>}/>
                <Route path='/read/:commentNo' element={<CommentRead/>}/>
                <Route path='/update/:commentNo' element={<CommentUpdate/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
};

export default CommentMain;