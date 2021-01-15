import React from 'react';
import './App.css';
import Citation from './Citation.js';

var list = require('./quotes.json')
// Pour voir le contenu des citations
// console.log(list)

function App() {
    let i = Math.floor(Math.random() * list.quotes.length);
    let j = Math.floor(Math.random() * list.quotes.length);
    let k = Math.floor(Math.random() * list.quotes.length);
    return (
        <div className="App">
            <header className="App-header">
                <Citation quote={list.quotes[i].quote} author={list.quotes[i].author}/>
                <Citation quote={list.quotes[j].quote} author={list.quotes[j].author}/>
                <Citation quote={list.quotes[k].quote} author={list.quotes[k].author}/>

            </header>
        </div>
    );
}

export default App;
