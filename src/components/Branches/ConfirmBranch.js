import * as React from 'react';
import { List, ListItem } from 'material-ui/List'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import '.././confirmForm.css'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'


const ConfirmBranch = ({ values, state, prevStep }) => {

    const { branchName, branchAddress, branchOpening, branchIsKosher, branchCBTB, branchLunchPrice } = values;
    const history = useHistory()

    // Executing post request to NodeJS server.
    const postToBranchDB = () => {
        axios
            .post(`https://susu-menu.herokuapp.com/branches/createBranch`,
                {
                    branchName: branchName,
                    branchAddress: branchAddress,
                    branchOpening: branchOpening,
                    branchIsKosher: branchIsKosher,
                    branchCBTB: branchCBTB,
                    branchLunchPrice: branchLunchPrice,
                })
            .then(res => { console.log(res) })
            .catch(error => {
                if (error) {
                    console.log(error)
                }
            });
        Swal.fire(
            'המנה התווספה בהצלחה',
            'הועברת לרשימת המנות',
            'success',
        )
        history.push('/branches')
        setTimeout(() => {
            window.location.reload(true);
        }, 500)
    }
    // Defining styles.
    const styles = {
        listItemText: {
            color: 'springgreen'
        }
    }
    return (
        <MuiThemeProvider>
            <div className="container">
                <div className="confirm-div m-3 p-3  text-right  bg-dark fadeIn animated ">
                <small className="text-light p-1">חזור אחורה</small>
                <button onClick={prevStep}
                className="btn btn-sm">
                    <i className="material-icons text-light">exit_to_app</i>
                    </button>
                    <List>
                        <ListItem
                            style={styles.listItemText}
                            primaryText="שם הסניף"
                            secondaryText={values.branchName}
                        />
                        <ListItem
                            style={styles.listItemText}
                            primaryText="כתובת הסניף"
                            secondaryText={values.branchAddress}
                        />
                        <ListItem
                            style={styles.listItemText}
                            primaryText="שעות פתיחת הסניף"
                            secondaryText={values.branchOpening}
                        />
                        <ListItem
                            style={styles.listItemText}
                            primaryText="כשר או לא"
                            secondaryText={values.branchIsKosher}
                        />
                        <ListItem
                            style={styles.listItemText}
                            primaryText="סיבוס / תן ביס"
                            secondaryText={values.branchCBTB}
                        />
                        <ListItem
                            style={styles.listItemText}
                            primaryText="עסקיות"
                            secondaryText={values.branchLunchPrice}
                        />
                        <div className="text-center d-flex justify-content-center">
                            <RaisedButton
                                label="אשר נתונים"
                                primary={false}
                                type="submit"
                                onClick={postToBranchDB}
                            />
                        <br />
                        </div>
                    </List>
            </div>
            </div>
        </MuiThemeProvider >
    )
}


export default ConfirmBranch