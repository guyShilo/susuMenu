import React, { useContext } from "react";
import "./header.css"
import { Link, useHistory } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { white } from "material-ui/styles/colors";
import UserContext from '../components/Context/UserContext'
import Swal from 'sweetalert2'
import Search from '../Search'


const Header = (props) => {
    const loginContext = useContext(UserContext)
    const history = useHistory()
    const logOut = () => {
        localStorage.removeItem('loggedIn');
        Swal.fire(
            'התנתקת מהמערכת',
            'מועבר לדף הראשי',
            'info',
        )
        setTimeout(() => {
            history.push('/login')
        }, 500)
    }

    const logIn = () => {
        setTimeout(() => {
            history.push('/login')
        }, 200)
    }

    const styles = {
        logOutButton: {
            display: 'none'
        }
    }
    return (
        <MuiThemeProvider>
            <div className="header-flex d-flex w-100">
                <button onClick={logOut} className="btn btn-sm text-center"
                    style={!loginContext.loggedIn ? styles.logOutButton : null}>
                    <small className="row m-1">התנתק 👇 </small>
                    <i className="material-icons text-center">exit_to_app</i></button>
                <button onClick={logIn} className="btn btn-sm  text-center"
                    style={loginContext.loggedIn ? styles.logOutButton : null}>
                    <i className="material-icons text-center" style={{ fontSize: '30px' }}>supervised_user_circle</i>
                    <small className="row m-1">התחבר</small>
                </button>
                <div className="p-1 mt-2">
                    <Link to="/dishes">
                        <button
                            className="btn-menu btn-grad p-1 m-1 text-dark"
                        >לרשימת המנות</button>
                    </Link>
                    <Link to="/branches">
                        <button
                            className="btn-menu btn-grad p-1 m-1 text-dark"
                        >סניפים</button>
                    </Link>
                </div>
                <div className="title-flex mr-auto bounceInUp animated">
                    <h1 className="m-2 text-warning">SUSU AND SONS</h1>
                </div>
            </div>
        </MuiThemeProvider>
    )
}

export default Header