/*
Name : Lovepreet Singh
Assignment : Frontend Programing 
Programm: Adavanced Web Framework 
Date : 25-02-2022
Description: This file is use to contain genral code of article that fetches from reddit website
 */
import React from "react";

function Article(props){
    return(
        <article>
            <a href = {"https://reddit.com" + props.article.permalink} target ="_blank">
                <h3>{props.article.title}</h3>
            </a>


        </article>
    )
}

export default Article