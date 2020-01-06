import React, { useEffect, useState, useContext } from 'react'
import './login.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import { white } from "material-ui/styles/colors";
import axios from 'axios'
import Swal from 'sweetalert2'
import { withRouter, useHistory } from 'react-router';
import UserContext from './Context/UserContext'


const Login = (props) => {
    document.title = 'Susu & Sons | התחברות'
    let loggedIn = false
    const loginContext = useContext(UserContext)
    const history = useHistory()
    const [userState, setuserState] = useState({
        loginDetails: {
            email: null,
            dbPassword: null,
            loggedIn: false,
        },
    })
    const [initialState, setinitialState] = useState({
        initialEmail: null,
        initialPassword: null
    })
    const fetchData = async () => {
        let request = axios.get(`https://susu-menu.herokuapp.com/users`);
        let response = await request;
        setuserState({
            loginDetails: {
                email: response.data.data[0].email,
                dbPassword: response.data.data[0].password,
                loggedIn: false,
            }
        })
        console.log('Data FETCHED')
    }

    const handleChange = (evt) => {
        const value = evt.target.value;
        setinitialState({
            ...initialState,
            [evt.target.name]: value,
        });
    }

    const handleClick = (e) => {
        e.preventDefault();
        let checkPassword = () => {
            if (userState.loginDetails.email === initialState.initialEmail
                && userState.loginDetails.dbPassword === initialState.initialPassword) {
                // setuserState({
                //     loginDetails: {
                //         email: userState.loginDetails.email,
                //         dbPassword: userState.loginDetails.password,
                //         loggedIn: true
                //     }
                // })
                loggedIn = true;
            } if (loggedIn) {
                loginContext.loggedIn = true;
                history.push('/dishes')
                Swal.fire(
                    'התחברת בהצלחה',
                    'הועברת לעמוד הראשי',
                    'success',
                )
                localStorage.setItem('loggedIn', true)
            } else {
                Swal.fire(
                    'הפרטים שגויים',
                    'נסה שוב',
                    'error',
                )
            }
        }
        checkPassword()
    }

    useEffect(() => {
        fetchData()
        return () => {
            fetchData()
        };
    }, [])

    return (
        <>
            <LoginFalse
                values={userState}
                initialValues={initialState}
                handleChange={handleChange}
                handleClick={handleClick} />
        </>
    )
}

export const LoginFalse = ({ values, handleChange, handleClick, initialValues }) => {
    return (
        <div>
            <MuiThemeProvider>
                <div className="">
                    <div className="loginPage " style={{ height: '100vh' }}>
                        <div className="loginForm d-flex flex-row-reverse ml-auto" style={{ width: '70%' }}>
                            {/* <div className="loginMain ml-auto justify-content-center" style={{width: '70%'}}>ddd</div> */}
                            <div className="leftSide col-sm-4 flex-shrink-1" style={{ width: '70%', }}></div>
                            <div className="rightSide col-sm-8 text-center" style={{ width: '70%', }}>
                                <form>
                                    <div className="form-group">
                                        <h2 className="text-light bounceInRight animated ">SUSU AND SONS</h2>
                                        <hr className="bg-secondary bounceInRight animated delay-1s" />
                                        <label className="text-light" htmlFor="exampleInputEmail1">שם משתמש (כתובת דוא״ל)</label>
                                        <input type="email"
                                            name="initialEmail"
                                            className="form-control text-center"
                                            placeholder="כתובת דואר אלקטרוני"
                                            dir="ltr"
                                            required={true}
                                            defaultValue={initialValues.initialEmail}
                                            onChange={handleChange}
                                        />
                                        <small id="emailHelp" className="form-text text-light">לא לדאוג! לא משתפים את הפרטים שלכם עם אף אחד</small>
                                        <hr className="bg-secondary bounceInRight animated delay-1s" />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-light" htmlFor="exampleInputPassword1">סיסמה</label>
                                        <input type="password"
                                            name="initialPassword"
                                            className="form-control text-center"
                                            placeholder="הזן סיסמה"
                                            dir="ltr"
                                            required={true}
                                            defaultValue={initialValues.initialPassword}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <RaisedButton
                                        label="התחבר"
                                        backgroundColor='white'
                                        labelColor='steelblue'
                                        labelStyle={{ fontWeight: 'bold', fontFamily: 'Rubik, sans-serif' }}
                                        className="buttonForm m-2"
                                        onClick={handleClick}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        </div>
    )
}
export default withRouter(Login)
