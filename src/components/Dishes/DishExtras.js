import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Dish from '../Dishes/Dish'
import GoBack from '../goBack';


const DishExtras = () => {
    document.title = 'Susu & Sons | תוספות'
    const [ExtraDishes, setExtraDishes] = useState([])

    const fetchByQuery = async () => {
        const dishes = axios.get(`https://susu-menu.herokuapp.com/dishes/getExtra?isExtra=${true}`);
        const response = await dishes
        setExtraDishes(response.data.data)
    }

    useEffect(() => {
        fetchByQuery()
        return () => {
            fetchByQuery()
        };
    }, [])

    return (
        <div>
            <div className="text-center bounceInUp animated m-3">
                <GoBack />
            </div>
            {ExtraDishes.map(dish => (<Dish dishObj={dish} key={dish._id}/>))}
        </div>
    )
}

export default DishExtras
