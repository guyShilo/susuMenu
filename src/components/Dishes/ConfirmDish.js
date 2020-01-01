import * as React from 'react';
import { List, ListItem } from 'material-ui/List'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import '.././confirmForm.css'
import {useHistory } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import Dish from './Dish'


const Confirm = ({ values, state, prevStep }) => {
    const { dishTitle, dishDescription, dishPrice, dishImage, dishAllergic, dishDelivery, step } = values;
    const history = useHistory()
    // Initializing isExtra is false by default.
    let isExtra = false
    // Executing post request to NodeJS server.
    const postToDB = async () => {
        axios
            .post(`https://susu-menu.herokuapp.com/dishes/createDish`,
                {
                    dishTitle: dishTitle,
                    dishDescription: dishDescription,
                    dishAllergic: dishAllergic,
                    dishDelivery: dishDelivery,
                    dishPrice: dishPrice,
                    dishImage: dishImage,
                    isExtra: isExtra
                })
            .then(res => { console.log(res) })
            .catch(error => {
                if (error) {
                    console.log(error.data)
                }
            });
        Swal.fire(
            'המנה התווספה בהצלחה',
            'הועברת לרשימת המנות',
            'success',
        )
        history.push('/dishes')
        // setTimeout(() => {
        //     window.location.reload(true);
        // }, 500)
    }

    // Setting isExtra as true / false.
    const handleExtraChange = (e) => {
        isExtra = e.target.value
    }

    // Defining styles for list
    const styles = {
        listItemText: {
            color: 'springgreen'
        }
    }
    return (
        <MuiThemeProvider>
            <div className="container">
                <div className="confirm-div m-2 text-right bg-dark jackInTheBox animated  ">
                    <small className="text-light p-1">חזור אחורה</small>
                    <button onClick={prevStep}
                        className="btn btn-sm">
                        <i className="material-icons text-light">exit_to_app</i>
                    </button>
                    {/* <List>
                        <ListItem
                            style={styles.listItemText}
                            primaryText="שם המנה"
                            secondaryText={values.title}
                        />
                        <ListItem
                            style={styles.listItemText}
                            primaryText="תיאור המנה"
                            secondaryText={values.description}
                        />
                        <ListItem
                            style={styles.listItemText}
                            primaryText="רכיבים אלרגניים"
                            secondaryText={values.allergic}
                        />
                        <ListItem
                            style={styles.listItemText}
                            primaryText="צורת הגשה במשלוחים"
                            secondaryText={values.delivery}
                        />
                        <ListItem
                            style={styles.listItemText}
                            primaryText="מחיר המנה"
                            secondaryText={values.price}
                        />
                        <ListItem
                            style={styles.listItemText}
                            primaryText="תמונה"
                            secondaryText={values.img}
                        /> */}
                    <Dish
                        dishObj={values} />
                    <form className="p-2">
                        <fieldset id="group1">
                            <legend className="form-check-legend" style={styles.listItemText}>האם המנה היא תוספת?</legend>
                            <div className="d-flex">
                                <div className="p-3">
                                    <label className="form-check-label p-2" style={styles.listItemText}>כן</label>
                                    <input type="radio" value={true} name="group1" onChange={handleExtraChange} required />
                                    <label className="form-check-label p-2" style={styles.listItemText}>לא</label>
                                    <input type="radio" value={false} name="group1" onChange={handleExtraChange} required />
                                </div>
                            </div>
                        </fieldset>
                    </form>
                    <div className="text-center mb-3">
                        <RaisedButton
                            label="אשר נתונים"
                            primary={false}
                            onClick={postToDB}
                        />
                    </div>
                    {/* </List> */}
                </div>
            </div>
        </MuiThemeProvider>
    )
}

export default Confirm;