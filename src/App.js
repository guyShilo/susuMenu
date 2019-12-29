import React, { useContext, useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import DishLogic from './components/Dishes/DishLogic';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import DishForm from './components/Dishes/DishForm'
import Branches from './components/Branches/Branches'
import BranchForm from './components/Branches/BranchForm';
import DishExtras from './components/Dishes/DishExtras'
import Login from './components/Login'
import history from './history'
import ConfirmDish from './components/Dishes/ConfirmDish';
import NoMatch from './NoMatch';
import GoBack from './components/goBack';
import { BurgerTops } from './components/Dishes/BurgerTops';


function App() {
  return (
    <Router history={history}>
      <div className="App app-container">
        <Switch>
          <Route path="/DishExtras" component={DishExtras} />
          <Route path="/addDish" component={DishForm} />
          <Route path="/confirmDish" component={ConfirmDish} />
          <Route path="/BurgerTops" component={BurgerTops} />
          <Route path="/dishes" render={() => {
            return (<>
              <Header />
              <DishLogic />
            </>
            )
          }} />
          <Route path="/branches" exact strict render={() => {
            return (<>
              <Header />
              <Branches />
            </>
            )
          }} />
          <Route path="/addBranch" component={BranchForm} />
          <Route path="/login" exact strict render={() => {
            return (<Login />)
          }} />
          <NoMatch />
        </Switch>
      </div>
    </Router>
  );
}

export default App;