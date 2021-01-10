import React from 'react';
import './App.css';

var list = require('./quotes.json')
// Pour voir le contenu des citations
// console.log(list)

function Citation(){
    let len=list.quotes.length;
    let i=Math.floor(Math.random() * len);
    let j=Math.floor(Math.random() * len);
    let k=Math.floor(Math.random() * len);
    return(
        <div>
            <p>{list.quotes[i].quote}</p>
            <p>{list.quotes[i].author}</p>
            <p>{list.quotes[j].quote}</p>
            <p>{list.quotes[j].author}</p>
            <p>{list.quotes[k].quote}</p>
            <p>{list.quotes[k].author}</p>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Citation/>

            </header>
        </div>
    );
}

export default App;
