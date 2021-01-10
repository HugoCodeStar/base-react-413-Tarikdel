import React from 'react';
import './App.css';

var list = require('./quotes.json')
// Pour voir le contenu des citations
// console.log(list)

function Citation(){
    let len=list.quotes.length;
    let i=Math.floor(Math.random() * len);

    return(
        <div>
            <p>{list.quotes[i].quote}</p>
            <p>{list.quotes[i].author}</p>

        </div>
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Citation/>
                <Citation/>
                <Citation/>

            </header>
        </div>
    );
}

export default App;
