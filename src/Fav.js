/*
Name : Lovepreet Singh
Assignment : Frontend Programing 
Programm: Adavanced Web Framework 
Date : 25-02-2022
Description: This file is use to contain genral code of Favourites page 
 */
import {Link} from 'react-router-dom';
function Fav() {
    return(
        <div className="fav">
            <h2>My Favourites </h2>
            <Link to ="/"> Home </Link>
        </div>
    );
}

export default Fav;