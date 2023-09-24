//import React from "react";
import style from './NewsItem.module.css'
import {domainToHostName, unixToDate, openExternalUrl} from "../../utils/utils";
import {Link} from 'react-router-dom'
export function NewsItem (props){
   const {className ='',title,date,username,score,url} = props
    const scoreClassArr = [style.score]
    if (props.score>100)
    {scoreClassArr.push(style.highScore)}
    else if (props.score>30)
    { scoreClassArr.push(style.midScore)}
    else
    {scoreClassArr.push(style.lowScore)}

    return (
        <div className={`${style.container} ${className}`}>
            <Link to={`comments/${props.id}`} className={style.link}>{title}</Link>
           {/* <a className={style.link} href="example.com">{title}</a>*/}
            <div className={style.info}>
            <div className={style.userData}>
                <span>{username} | </span>
                <span>{unixToDate(date)}</span>
            </div>
                {
                    url ? (
                        <div className={style.externalLink} onClick={() => openExternalUrl(url)}>{domainToHostName(url)}</div>
                    ) :
                        (
                            <div className={scoreClassArr.join(' ')}>
                                {score} points
                            </div>
                        )
                }
            </div>
        </div>
    )
}