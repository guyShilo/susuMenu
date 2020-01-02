import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../Dishes/form.css'
import GoBack from '../goBack';

const AddBranch = ({ nextStep, handleChange, values }) => {
    // Defining the styles of the Inputs
    const inputStyle = {
        underlineStyle: {
            borderColor: 'springgreen',
        },
        underlineFocusStyle: {
            borderColor: 'springgreen',
        },
        floatingTextColor: {
            color: 'springgreen'
        },
        textColor: {
            color: 'white'
        }
    }

    const handleValidation = () => {
        if(values.dishTitle === ''){
            return true
        }
        else {
           return false
        }
    }

    return (
        <MuiThemeProvider>
            <>
                <form noValidate autoComplete="off">
                    <div className=" mainFormDiv bg-dark fadeIn animated row ">
                        <GoBack/>
                        <div className="col-sm-12">
                            <TextField
                                className="w-100"
                                floatingLabelStyle={inputStyle.floatingTextColor}
                                required={true}
                                underlineStyle={inputStyle.underlineStyle}
                                underlineFocusStyle={inputStyle.underlineFocusStyle}
                                inputStyle={inputStyle.textColor}
                                floatingLabelText="הכנס שם סניף"
                                onChange={handleChange('branchName')}
                                defaultValue={values.branchName} />
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
                                floatingLabelText="הכנס את כתובת הסניף"
                                onChange={handleChange('branchAddress')}
                                defaultValue={values.branchAddress} />
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
                                floatingLabelText="הכנס את שעות הפתיחה"
                                onChange={handleChange('branchOpening')}
                                defaultValue={values.branchOpening}
                            />
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
                                floatingLabelText="הכנס כשרות"
                                onChange={handleChange('branchIsKosher')}
                                defaultValue={values.branchIsKosher} />
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
                                floatingLabelText="הכנס סיבוס תן ביס"
                                onChange={handleChange('branchCBTB')}
                                defaultValue={values.branchCBTB} />
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
                                floatingLabelText="הכנס את שעות העסקיות"
                                onChange={handleChange('branchLunchPrice')}
                                defaultValue={values.branchLunchPrice} />
                        </div>
                        <div className="text-center col-sm-12 p-3">
                            <RaisedButton
                                label="המשך"
                                primary={false}
                                onClick={nextStep}
                                disabled={handleValidation()}
                                className="buttonForm"
                            />
                        </div>
                    </div>
                </form>
            </>
        </MuiThemeProvider>
    )
}



export default AddBranch