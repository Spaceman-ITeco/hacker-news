//import React, {useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {NewsItem} from "./components/NewsItem/NewsItem";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
//const divElement = React.createElement('div', {className: 'text'}, 'hello frontend')
//root.render(divElement);
//root.render(<div className={'text'}>hello frontend div</div>);
//root.render(<App/>);
root.render(<>
   {
       <App/>
       /* <NewsItem
        title='First news'
        url='www.example.com'
        username='User'
        date='11.09.2023'
        score={10}/>
    <NewsItem
        title='Second news'
        url='www.example.com'
        username='User 2'
        date='11.09.2023'
        score={12}/>*/}
</>);
/*
function App()
{
    const [state, setState] = useState(false)
    return(
        <div>
            <p>Текущее состояние: {String (state)}</p>
            <button onClick={()=>setState(!state)}>Переключить</button>
        </div>
    )
}*/
