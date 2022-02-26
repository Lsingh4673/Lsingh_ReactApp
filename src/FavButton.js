/*
Name : Lovepreet Singh
Assignment : Frontend Programing 
Programm: Adavanced Web Framework 
Date : 25-02-2022
Description: This file use to switch the My Favourites page using link 
 */

//Imports
import Fav from './Fav'; 
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import App from './App';


function FavButton() {
  return (
    //Router 
    <Router>
    <div className="App">
      <Switch>
        <Route path ="/" exact component={App}/> 
        <Route  path ="/fav" exact component={Fav}/>
      </Switch>
      <Link to= "/fav">
        My Favourites
      </Link>
    </div>
    </Router>
  );
}

export default FavButton;

