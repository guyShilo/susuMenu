import React, { useHistory, useState, useContext, useEffect } from "react";
import Dish from './Dish'
import './dishLogic.css'
import { Link } from 'react-router-dom'
import DishesContext from '../Context/DishesContext'
import Search from '../../Search'

const DishLogic = () => {
    // Get dishes data from DishesContext.
    const newDishes = useContext(DishesContext)
    // Initiate dishes state
    const [dishesState, setDishesStorage] = useState({
        dishesStorage: []
    })
    // Initiate filtered dishes state.
    const [filteredState, setFilteredState] = useState({
        filteredStorage: []
    })
    // Setting data from context to the states.
    const getDataFromContext = () => {
        newDishes.dishesStorage.then(data => {
            setDishesStorage({
                dishesStorage: data
            });
            setFilteredState({
                filteredStorage: data.filter(dish => dish.isExtra != true )
            });
        })
    }
    // Getting the search term from the Search component and setting it to filtered dishes.
    const searchSomething = (term) => {
        const result = dishesState.dishesStorage.filter(dish => dish.dishTitle.indexOf(term) != -1);
        if (!term[0]) {
            console.log('changed back')
            setFilteredState({
                filteredStorage: dishesState.dishesStorage.filter(dish => dish.isExtra != true )
            })
        } else {
            setFilteredState({
                filteredStorage: result
            })
        }
    }
    // Run the getDataFromContext function once.
    useEffect(() => {
        getDataFromContext()
        return () => {
            getDataFromContext()
        };
    }, [])
    const loader = () => {
        return <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    }
    console.log(dishesState)
    return (
        <>
        <div className="container">
            <div className="bounceInRight delay-1s animated">
                <Search
                    searchSomething={searchSomething}
                    searchColor={'gold'}
                />
            </div>
            <div className="row d-flex justify-content-center p-1 bounceInDown animated">
                <Link to="/DishExtras">
                    <button className="btn btn-dark btn-sm">תוספות</button>
                </Link>
            </div>/
            {filteredState.filteredStorage.length >= 1 ? filteredState.filteredStorage.map(dish => (
                <Dish
                    dishObj={dish}
                    key={dish._id}
                />
            )) : null}
            <hr />
        </div>
        </>
    )

}

export default DishLogic