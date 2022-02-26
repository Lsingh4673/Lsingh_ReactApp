/*
Name : Lovepreet Singh
Assignment : Frontend Programing 
Programm: Adavanced Web Framework 
Date : 25-02-2022
Description: This file is use to contain genral code of app which help to get title from reddit website using useEffect 
             useState
 */
import React, {useState, useEffect} from 'react';
import Article from './components/Article';

function Clickme()
{
  alert("Post is added to The Favourites");
}

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('Conestoga');

  useEffect(() => {
    fetch("https://www.reddit.com/r/"+subreddit+".json").then(res=>{
      if(res.status!==200){
        console.log("EROREREOR");
        return;
      }

      res.json().then(data =>{
        if(data!= null){
          setArticles(data.data.children);
        }
      });
    })
  }, [subreddit]);

  return (
    <div className="App">

      <header className="App-header">
       <input type ="text" className='input' value={subreddit} onChange ={e => setSubreddit(e.target.value)} />
      </header>
      
      <div className='articles' >
        {
          (articles != null) ? articles.map((article, index) => <Article key = {index} article={article.data}/>) : ''
        }

        <button onClick={Clickme}>
           Add to Favourites
        </button>
      </div>
    </div>
  );
}

export default App;
