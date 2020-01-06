import React, { useState, useContext, useEffect } from "react";
import Dish from './Dish'
import './dishLogic.css'
import { Link } from 'react-router-dom'
import DishesContext from '../Context/DishesContext'
import Search from '../../Search'
import DishForm from "./DishForm";

const DishLogic = () => {
    document.title = 'Susu & Sons | מנות'
    const [addClicked, setAddClicked] = useState(false)
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
                filteredStorage: data.filter(dish => dish.isExtra != true)
            });
        })
    }
    // Getting the search term from the Search component and setting it to filtered dishes.
    const searchSomething = (term) => {
        const result = dishesState.dishesStorage.filter(dish => dish.dishTitle.indexOf(term) != -1);
        if (!term[0]) {
            setFilteredState({
                filteredStorage: dishesState.dishesStorage.filter(dish => dish.isExtra != true)
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

    const floatingComponent = () => {
        if (addClicked) {
            return { display: 'block' }
        } else {
            return { display: 'none' }
        }
    }
    
    const exitModalButton = () => {
        setAddClicked(!addClicked)
    }

    return (
        <>
            <div className="basicModal p-5 " style={floatingComponent()}>
                <DishForm
                exitModalButton={exitModalButton}
                />
            </div>
            <div className="container">
                <div className="bounceInRight delay-1s animated">
                    <Search
                        searchSomething={searchSomething}
                        searchColor={'gold'}
                    />
                </div>
                <div className="row d-flex justify-content-center p-1 bounceInDown animated">
                    <Link to="/DishExtras">
                        <button className="btn btn-warning btn-sm m-1">תוספות</button>
                    </Link>
                    <button onClick={() => { setAddClicked(!addClicked) }} className="btn btn-warning btn-sm m-1">הוסף מנה</button>
                </div>/
            {filteredState.filteredStorage.length >= 1 ? filteredState.filteredStorage.map(dish => (
                    <Dish
                        floatingComponent={floatingComponent}
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