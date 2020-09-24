import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch,} from "react-router-dom"
import Home from "./Components/Home/Home";
import FirstDishes from "./Components/FirstDishes/FirstDishes";
import Deserts from "./Components/Deserts/Deserts";
import MainDishes from "./Components/MainDishes/MainDishes";
import * as firebase from "firebase";
import Header from "./Components/Header/Header";

const App = () => {
    const [data, dataHandler] = useState(0)
    const [dbRefresh, dbRefreshHandler] = useState(0)

    useEffect(() => {
        fetch('https://katya-recipe.firebaseio.com/.json')
            .then(response => response.json())
            .then(
                json => {
                    dataHandler(json)
                }
            );
    }, [dbRefresh]);

    const DBSetter = (path, value) => {
        firebase.database().ref(path).set(value)
            .then(r => dbRefreshHandler(Math.random()));
    };
    return (
        <div className={'App'}>
            <BrowserRouter>

                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home
                            data={data}
                            dbRefreshHandler={dbRefreshHandler}
                            DBSetter={(path, value) => DBSetter(path, value)}
                        />
                    </Route>
                    <Route path="/firstDishes">
                        <FirstDishes
                            data={data}
                            dbRefreshHandler={dbRefreshHandler}
                            DBSetter={(path, value) => DBSetter(path, value)}
                        />
                    </Route>
                    <Route path="/mainDishes">
                        <MainDishes
                            data={data}
                            dbRefreshHandler={dbRefreshHandler}
                            DBSetter={(path, value) => DBSetter(path, value)}
                        />
                    </Route>
                    <Route path="/deserts">
                        <Deserts
                            data={data}
                            dbRefreshHandler={dbRefreshHandler}
                            DBSetter={(path, value) => DBSetter(path, value)}
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;

//Deserts
//Hot Dishes
