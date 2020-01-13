import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { EachProduct } from './EachProduct'
import DishesContext from '../Context/DishesContext'

export const EditDishes = () => {
    const [currentState, setCurrentState] = useState(0)
    const newDishes = useContext(DishesContext)
    const [dishesState, setDishesState] = useState({
        dishesStorage: []
    })
    const getDataFromContext = () => {
        newDishes.dishesStorage.then(data => {
            setDishesState({
                dishesStorage: data
            });
        })
    }
    useEffect(() => {
        getDataFromContext()
        return () => {
            getDataFromContext()
        };
    }, [])

    return (
        <div className="">
            <div className="text-right text-light">
                <h4>{`כמות המנות בתפריט:  ${dishesState.dishesStorage.length}`}</h4>
                {dishesState.dishesStorage.map(dish =>
                    <EachProduct obj={dish} key={dish._id}
                    />)}
            </div>
        </div>
    )
}
