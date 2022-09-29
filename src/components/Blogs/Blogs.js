import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h2 className='blogs-header' >Questions & Answers</h2>
            <div className='QuestionOne'>
                <h4>How React Works?</h4>
                <p>React basically maintains a tree. This tree is able to do efficient diff computations on the nodes. That is exactly how the browser treats your DOM. React allows us to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>
            </div>

            <div className='QuestionOne'>
                <h4>Difference Between Props And State?</h4>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>

            <div className='QuestionOne'>
                <h4>What are The Uses of useEffect Besides Loading Data From APIs?</h4>
                <p>Besides Loading data from API useEffect changes DOM in react, state values are defined and updated inside a component, props values are passed to the component.</p>
            </div>
        </div>
    );
};

export default Blogs;