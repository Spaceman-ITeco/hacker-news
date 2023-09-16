import {NewsItem} from "./NewsItem/NewsItem";
import {useEffect, useState} from "react";

const initNews =
    [
      { title:  'first news',
        url: 'example.com',
        username: 'User',
        date:'23.08.2023',
        scope: 100,
        id: 1
      },
      { title:  'second news',
        url: 'example.com',
        username: 'User 2',
        date:'29.08.2023',
        scope: 120,
        id: 2
      }
    ]

function App() {
  //let newsCount = 0
  const checkStorage = () =>  JSON.parse(window.localStorage.getItem('newsKey')) || initNews
  const [news, setNews] = useState(checkStorage)
  const [count, setCount] = useState(0)

  useEffect(() => {
  window.localStorage.setItem('newsKey',JSON.stringify(news))
  },[news]);
  
  const newNews=  {
    title:  'third news',
    url: 'example.com',
    username: 'User 3',
    date:'31.08.2023',
    scope: 107,
    id: 3
  }
  const newsCountHandler = () =>
  {
   // newsCount += 1
    setNews(prevState => [...prevState,newNews])
    console.log(news)
  }
  return (<>
    <button onClick={()=>setCount(count+1)}>{count}</button>
    <div>Quantity of news: {news.length}</div>
    <button onClick={newsCountHandler}>add news</button>
    {
      news.map(item =>{
        return <NewsItem
            key={item.id}
            title={item.title}
            url={item.url}
            username = {item.username}
            date = {item. date}
            score = {item.scope}

        />
      }
      )
    }
  </>);
}

export default App;
