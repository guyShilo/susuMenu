import React, { useState, useRef } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../components/Dishes/form.css'

export const RegisterUser = () => {

    const [registerState, setRegisterState] = useState({
        userName: null, userPassword: ''
    })

    const userNameRef = useRef(registerState.userName)
    const userPasswordRef = useRef(registerState.userPassword)
    const verifyPasswordRef = useRef()

    const inputStyle = {
        underlineStyle: {
            borderColor: 'gold',
        },
        underlineFocusStyle: {
            borderColor: 'gold',
        },
        floatingTextColor: {
            color: 'gold'
        },
        textColor: {
            color: 'white'
        }
    }
    const handleChange = input => e => {
        let value = e.target.value
        if(registerState.userPassword === verifyPasswordRef.current.input.value){
            setRegisterState({
                [input]: value,
            });
        }
    }
    const verifyAndRegister = e => { 
        e.preventDefault()
        console.log(verifyPasswordRef.current.input.value)
        console.log(registerState.userPassword)
        if(registerState.userPassword === verifyPasswordRef.current.input.value && registerState.userName !== ''){
            console.log('verfiied')
        } else {
            console.log('error')
        }
    }
    return (
        <MuiThemeProvider>
            <div className="container mt-3">
                <div className="mainFormDiv p-3 bg-dark fadeIn animated row justify-content-center">
                    <form>
                        <TextField
                            className="w-100"
                            floatingLabelText="הכנס שם משתמש"
                            floatingLabelStyle={inputStyle.floatingTextColor}
                            required={true}
                            ref={userNameRef}
                            underlineStyle={inputStyle.underlineStyle}
                            underlineFocusStyle={inputStyle.underlineFocusStyle}
                            inputStyle={inputStyle.textColor}
                            onChange={handleChange('userName')}
                            defaultValue={registerState.userName || null}
                        />
                        <TextField
                            className="w-100"
                            floatingLabelText="הכנס סיסמא"
                            floatingLabelStyle={inputStyle.floatingTextColor}
                            required={true}
                            ref={userPasswordRef}
                            underlineStyle={inputStyle.underlineStyle}
                            underlineFocusStyle={inputStyle.underlineFocusStyle}
                            inputStyle={inputStyle.textColor}
                            onChange={handleChange('userPassword')}
                            defaultValue={registerState.userPassword}
                        />
                        <TextField
                            className="w-100"
                            floatingLabelText="הקלד סיסמא פעם נוספת לאישור"
                            floatingLabelStyle={inputStyle.floatingTextColor}
                            required={true}
                            ref={verifyPasswordRef}
                            underlineStyle={inputStyle.underlineStyle}
                            underlineFocusStyle={inputStyle.underlineFocusStyle}
                            inputStyle={inputStyle.textColor}
                            // onChange={checkPassword}
                            defaultValue={null}
                        />
                        <button onClick={verifyAndRegister}>lelelelel</button>
                    </form>
                </div>
            </div>
        </MuiThemeProvider>
    )
}
