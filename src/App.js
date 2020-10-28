import React from 'react';
import Quote from "./Quote"
import AuthorName from "./AuthorName"
import Quotedata from "./Quotedata.js";
import './App.css';
import NewQuote from "./actions/NewQuote"
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"



function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter);
  const url = "https://twitter.com/intent/tweet?text="
 
  return (
    <div className="App" id="quote-box">
     <h1> My Random Quote Website</h1>
  <h2 id="text"><Quote /></h2>
     <p id ="author"><AuthorName /></p>
     <a id="tweet-quote" class="twitter-share-button"
  href={url+Quotedata[counter].text+"%0D%0A"+"%0D%0A"+Quotedata[counter].author}>
Tweet</a>
     <br></br>
     
      <button id="new-quote"  onClick = {() => dispatch(NewQuote())}>New Quote Button</button>
      
      
    </div>
  );
}



export default App
 