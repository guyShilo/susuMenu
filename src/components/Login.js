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
                <div className="fadeIn animated">
                    <div className="loginPage " style={{ height: '100vh' }}>
                        <div className="loginForm d-flex flex-row-reverse ml-auto" style={{ width: '70%' }}>
                            {/* <div className="loginMain ml-auto justify-content-center" style={{width: '70%'}}>ddd</div> */}
                            <div className="leftSide col-sm-4 flex-shrink-1" style={{ width: '70%', }}></div>
                            <div className="rightSide col-sm-8 text-center" style={{ width: '70%', }}>
                                <form>
                                    <div className="form-group">
                                        <h2 className="text-dark">SUSU AND SONS</h2>
                                        <hr className="bg-dark" />
                                        <label className="text-dark" htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email"
                                            name="initialEmail"
                                            className="form-control"
                                            placeholder="enter your mail"
                                            dir="ltr"
                                            defaultValue={initialValues.initialEmail}
                                            onChange={handleChange}
                                        />
                                        <small id="emailHelp" className="form-text text-dark">We'll never share your email with anyone else</small>
                                        <hr className="bg-dark" />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-dark" htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password"
                                            name="initialPassword"
                                            className="form-control"
                                            placeholder="enter your password"
                                            dir="ltr"
                                            defaultValue={initialValues.initialPassword}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <RaisedButton
                                        label="Sign In"
                                        backgroundColor='rgba(30,33,48,1)'
                                        labelColor={white}
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

export const LoginTrue = (props) => {
    console.log(props)
    return (
        <div>
            <MuiThemeProvider>
                <div className="bounceInUp animated">
                    <div className="loginPage " style={{ height: '100vh' }}>
                        <div className="loginForm d-flex flex-row-reverse ml-auto" style={{ width: '70%' }}>
                            {/* <div className="loginMain ml-auto justify-content-center" style={{width: '70%'}}>ddd</div> */}
                            <div className="leftSide col-sm-4 flex-shrink-1" style={{ width: '70%', }}></div>
                            <div className="rightSide col-sm-8 text-center" style={{ width: '70%', }}>
                                <div style={{ height: '20%' }}>
                                    <RaisedButton
                                        label="Sign In"
                                        backgroundColor='rgba(30,33,48,1)'
                                        labelColor={white}
                                        className="buttonForm"
                                        onClick={null}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        </div>
    )
}



export default withRouter(Login)
