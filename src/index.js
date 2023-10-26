import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MovieApp from './movie-exam/MovieApp';
import LifeCycleTest from './LifeCycleTest';
import AsyncTest from './apitest/AsyncTest';
import AsyncTest2 from './apitest/AsyncTest2';
import TestCallback from './apitest/TestCallback';
import TestCallbackAns from './apitest/TestCallbackAns';
import CallBackHellTest from './apitest/CallBackHellTest';
import PromiseExam from './apitest/PromiseExam';
import AsyncAwaitTest from './apitest/AsyncAwaitTest';
import FetchTest from './apitest/FetchTest';
import FetchExam from './apitest/FetchExam';
import CommentApp from './CommentApp'
import CommentMain from './comment/CommentMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <CommentMain />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals