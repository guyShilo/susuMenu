import React, { useContext, useRef } from "react";
import "./header.css"
import { Link, useHistory } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { white } from "material-ui/styles/colors";
import UserContext from '../components/Context/UserContext'
import Swal from 'sweetalert2'
import Search from '../Search'
import { HardwareDesktopWindows } from "material-ui/svg-icons";


const Header = (props) => {
    const loginContext = useContext(UserContext)
    const history = useHistory()

    const mainTitle = useRef()

    const logOut = () => {
        localStorage.removeItem('loggedIn');
        Swal.fire(
            'התנתקת מהמערכת',
            'מועבר לדף הראשי',
            'info',
        )
        setTimeout(() => {
            window.location.reload()
        }, 200)
    }

    const logIn = () => {
        setTimeout(() => {
            history.push('/login')
        }, 200)
    }

    const checkPath = () => {
        let path = history.location.pathname
        let color = ''
        if (path == '/branches') {
            return color = 'springgreen' 
        } else {
            return color = '#ffc107'
        }
    }

    const styles = {
        currentColor: {
            color: checkPath()
        },
        logOutButton: {
            display: 'none',
            backgroundColor: checkPath()
        },
        currentButtonBackground: {
            backgroundColor: checkPath()
        }
    }
    return (
        <MuiThemeProvider>
            <section className="header-flex">
                <list className="list-inline header-flex">
                    <ul className="d-flex justify-content-between p-0 col-sm-12">
                        <li className="list-inline-item mt-2 row col-sm-2" >
                            <Link to="/dishes">
                                <button
                                    className="btn-menu btn-grad m-1 text-dark"
                                    style={{ backgroundColor: checkPath() }}
                                >מנות</button>
                            </Link>
                            <Link to="/branches">
                                <button
                                    className="btn-menu btn-grad m-1 text-dark"
                                    style={{ backgroundColor: checkPath() }}
                                >סניפים</button>
                            </Link>
                        </li>
                        <h1 ref={mainTitle} className="mt-2 list-inline-item col-sm-8 text-center"
                            style={{ color: checkPath() }}>SUSU AND SONS</h1>
                        <li className="list-inline-item col-sm-2">
                            <button onClick={logOut} className="btn btn-sm text-center"
                                style={!loginContext.loggedIn ? styles.logOutButton : null}>
                                <small className="row m-1" style={styles.currentColor}>התנתק</small>
                                <i className="material-icons text-center" style={styles.currentColor}>exit_to_app</i></button>
                            <button onClick={logIn} className="btn btn-sm text-center"
                                style={loginContext.loggedIn ? styles.logOutButton : null}>
                                <i className="material-icons text-center" style={styles.currentColor}>supervised_user_circle</i>
                                <small className="row m-1" style={styles.currentColor}>התחבר</small>
                            </button>
                        </li>
                    </ul>
                </list>
            </section>
        </MuiThemeProvider>
    )
}

export default Header