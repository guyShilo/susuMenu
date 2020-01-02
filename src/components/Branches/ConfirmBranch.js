import * as React from 'react';
import { List, ListItem } from 'material-ui/List'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import '.././confirmForm.css'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import EachBranch from './EachBranch'
import GoBack from '../goBack';


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
        <MuiThemeProvider >
            <div className="container mt-3" >
                <div className="confirm-div p-1 bg-dark fadeIn animated">
                    <div className="text-center">
                        <GoBack
                            goBack={prevStep} />
                    </div>
                    <div className="col-sm-12">
                        <EachBranch
                            branchObj={values} />
                    </div>
                    <div className="text-center mb-3">
                        <RaisedButton
                            label="אשר נתונים"
                            primary={false}
                            type="submit"
                            onClick={postToBranchDB}
                        />
                    </div>
                </div>
            </div>
        </MuiThemeProvider >
    )
}


export default ConfirmBranch