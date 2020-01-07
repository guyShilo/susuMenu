import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './form.css'

const AddDish = ({ handleChange, values, nextStep, exitModalButton }) => {
    // Defining the styles of the Inputs
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

    const handleValidation = () => {
        if (values.dishTitle === '') {
            return true
        }
        else {
            return false
        }
    }

    return (
        <MuiThemeProvider>
            <>
                <div className="mainFormDiv p-1 bg-dark fadeIn animated">
                <div className="text-right m-1">
                            <button onClick={exitModalButton} className="btn btn-dark btn-sm ">
                                <i className="material-icons text-center" >exit_to_app</i>
                                <br />
                                <small>חזור אחורה</small>
                            </button>
                        </div>
                    <form noValidate autoComplete="off">
                    <div className="row p-2 m-2">
                        <div className="col-sm-12">
                            <TextField
                                className="w-100"
                                floatingLabelText="הכנס שם מנה"
                                floatingLabelStyle={inputStyle.floatingTextColor}
                                required={true}
                                underlineStyle={inputStyle.underlineStyle}
                                underlineFocusStyle={inputStyle.underlineFocusStyle}
                                inputStyle={inputStyle.textColor}
                                onChange={handleChange('dishTitle')}
                                defaultValue={values.dishTitle}
                            />
                            <br />
                        </div>
                        <div className="col-sm-6">
                            <TextField
                                className="w-100 text-right"
                                floatingLabelStyle={inputStyle.floatingTextColor}
                                required={true}
                                underlineStyle={inputStyle.underlineStyle}
                                underlineFocusStyle={inputStyle.underlineFocusStyle}
                                inputStyle={inputStyle.textColor}
                                floatingLabelText="הכנס את תיאור המנה"
                                onChange={handleChange('dishDescription')}
                                defaultValue={values.dishDescription}
                            />
                            <br />
                        </div>
                        <div className="col-sm-6">
                            <TextField
                                className="w-100"
                                floatingLabelStyle={inputStyle.floatingTextColor}
                                required={true}
                                underlineStyle={inputStyle.underlineStyle}
                                underlineFocusStyle={inputStyle.underlineFocusStyle}
                                inputStyle={inputStyle.textColor}
                                floatingLabelText="הכנס רכיבים אלרגניים"
                                onChange={handleChange('dishAllergic')}
                                defaultValue={values.dishAllergic || ''} />
                            <br />
                        </div>
                        <div className="col-sm-4">
                            <TextField
                                className="w-100"
                                floatingLabelStyle={inputStyle.floatingTextColor}
                                required={true}
                                underlineStyle={inputStyle.underlineStyle}
                                underlineFocusStyle={inputStyle.underlineFocusStyle}
                                inputStyle={inputStyle.textColor}
                                floatingLabelText="הכנס אריזה במשלוח"
                                onChange={handleChange('dishDelivery')}
                                defaultValue={values.dishDelivery || ''} />
                            <br />
                        </div>
                        <div className="col-sm-4">
                            <TextField
                                className="w-100"
                                floatingLabelStyle={inputStyle.floatingTextColor}
                                required={true}
                                underlineStyle={inputStyle.underlineStyle}
                                underlineFocusStyle={inputStyle.underlineFocusStyle}
                                inputStyle={inputStyle.textColor}
                                floatingLabelText="הכנס מחיר"
                                onChange={handleChange('dishPrice')}
                                defaultValue={values.dishPrice || ''} />
                            <br />
                        </div>
                        <div className="col-sm-4">
                            <TextField
                                className="w-100"
                                floatingLabelStyle={inputStyle.floatingTextColor}
                                required={false}
                                underlineStyle={inputStyle.underlineStyle}
                                underlineFocusStyle={inputStyle.underlineFocusStyle}
                                inputStyle={inputStyle.textColor}
                                floatingLabelText="הכנס תמונה"
                                onChange={handleChange('dishImage')}
                                defaultValue={values.dishImage || ''} />
                            <br />
                        </div>
                        <div className="text-center col-sm-12 ">
                            <RaisedButton
                                label="המשך"
                                primary={false}
                                className="buttonForm"
                                disabled={handleValidation()}
                                onClick={nextStep}
                            />
                            </div>
                        </div>
                    </form>
                </div>
                </>
        </MuiThemeProvider>
    )
}
export default AddDish