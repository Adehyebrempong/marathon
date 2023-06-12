import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { globalColors } from '../../GlobalStyle/globalcolors';
import { Form, Formik } from 'formik';
import { close_form, logo } from '../../../assets';
import Button from '../../libs/Button';



const initialValues = {
    fullName: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    gender: "",
    age: "",
    t_shirt_size: "",
    emergency_name: "",
    emergency_number: "",
    part_of_a_team: "",
    team_name: "",
};

const FormHeader = ({ closeModal }) => {

    return (
        <FormHeaderStyle className="form-header">
            <img src={logo} alt="logo" className='logo' />
            <h3>Registration</h3>
            <img src={close_form} alt="close" className='close' onClick={closeModal} />
        </FormHeaderStyle>
    )
}


function RegisterForm({ closeModal }) {
    const [runningTeam, setRunningTeam] = useState(false);
    const [heardAboutUsColor, setHeardAboutUs] = useState(0);
    const [content, setContent] = useState(1)
    const heardAboutUs = [
        { name: "Social media", heardAboutUsNumber: 1 },
        { name: "Word of mouth", heardAboutUsNumber: 2 },
        { name: "Online Search", heardAboutUsNumber: 3 },
        { name: "Advertisement", heardAboutUsNumber: 4 },
        { name: "Other(please specify):", heardAboutUsNumber: 5 }
    ]

    const handleSubmit = useCallback(
        (values, { setSubmitting, setFieldError }) => {
            console.log(values, setFieldError, setSubmitting);
        },
        []
    );
    function changeForm() {
        setContent((prevNumber) => prevNumber + 1)
    }
    return (
        <>

            <FormikStyle>

                <FormHeader closeModal={closeModal}></FormHeader>
                <div className="form-container">
                    <Formik
                        initialValues={initialValues}
                        // validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <FormStyle className="formik-form">
                                {/* First Form */}
                                {content === 1 && <><div className="input-container">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input
                                        name="fullName"
                                        type="fullName"
                                        id="fullName"
                                        placeholder="Enter here"
                                        required
                                    />
                                </div>

                                    <div className="input-container">
                                        <label htmlFor="address">Address</label>
                                        <input
                                            name="address"
                                            type="address"
                                            id="address"
                                            placeholder="Enter here"
                                            required
                                        />
                                    </div>

                                    <div className="grid-input">
                                        <div>
                                            <label htmlFor="city">City</label>
                                            <input
                                                name="city"
                                                type="city"
                                                id="city"
                                                placeholder="Enter here"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="state">State</label>
                                            <input
                                                name="state"
                                                type="state"
                                                id="state"
                                                placeholder="Enter here"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="zip_code">Zip Code</label>
                                            <input
                                                name="zip_code"
                                                type="zip_code"
                                                id="zip_code"
                                                placeholder="Enter here"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid-input">
                                        <div className="input-container">
                                            <label htmlFor="gender">Gender</label>
                                            <select name="gender" id="gender" required>
                                                <option value="">Gender*</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="female">Other</option>
                                            </select></div>
                                        <div>
                                            <label htmlFor="age">Age</label>
                                            <input
                                                name="age"
                                                type="age"
                                                id="age"
                                                placeholder="Enter here"
                                                required
                                            />
                                        </div>
                                        <div className="input-container">
                                            <label htmlFor="t_shirt">T-Shirt size</label>
                                            <select name="t_shirt" id="t_shirt" required>
                                                <option value="">Select size*</option>
                                                <option value="small">Small</option>
                                                <option value="medium">Medium</option>
                                                <option value="large">Large</option>
                                                <option value="extra_large">Extra Large</option>
                                            </select></div>
                                    </div>

                                    <div className="grid-input">
                                        <div>
                                            <label htmlFor="emergency_name">Emergency Contact Name</label>
                                            <input
                                                name="emergency_name"
                                                type="text"
                                                id="emergency_name"
                                                placeholder="Enter here"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="emergency_number">Emergency Contact Number</label>
                                            <input
                                                name="emergency_number"
                                                type="text"
                                                id="emergency_number"
                                                placeholder="Enter here"
                                                required
                                            />
                                        </div>

                                    </div>

                                    <Button title={'Next'} function={changeForm} /></>}
                                {/* First Form End */}
                                {
                                    content === 2 && <>
                                        <div className="input-container">
                                            <p>Are you running as part of a team?</p>
                                            <div className="checkbox-container">
                                                <div className="checkbox-box">
                                                    <input type="radio" name="team" id="yes" />
                                                    <label htmlFor="yes">Yes</label>
                                                </div>
                                                <div className="checkbox-box">
                                                    <input type="radio" name="team" id="no" />
                                                    <label htmlFor="no">No</label>
                                                </div>
                                            </div>
                                            <p className="if-yes">If yes, please specify team name:</p>
                                            <input
                                                name="if_yes"
                                                type="text"
                                                id="if_yes"
                                                placeholder="Enter here..."
                                                required
                                            />
                                        </div>
                                        <div className="input-container">
                                            <p>How did you hear about this marathon?</p>

                                            {heardAboutUs.map((option) => (

                                                <div className="checkbox-container">
                                                    <div className="checkbox-box">
                                                        <input type="checkbox" name="team-find" id={option.name} />
                                                        <p htmlFor={option.name} style={{
                                                            width: '100%',
                                                        }} >{option.name}</p>
                                                    </div>

                                                </div>

                                            ))}



                                            <input
                                                name="if_yes"
                                                type="text"
                                                id="if_yes"
                                                placeholder="Enter here..."
                                                required
                                            />
                                        </div>
                                        <Button title={'Next'} function={changeForm} />
                                    </>

                                }
                                {
                                    content === 3 && <>
                                        <div className="input-container">
                                            <p>Have you participated in a marathon before?</p>
                                            <div className="checkbox-container">
                                                <div className="checkbox-box">
                                                    <input type="radio" name="team" id="yes" />
                                                    <label htmlFor="yes">Yes</label>
                                                </div>
                                                <div className="checkbox-box">
                                                    <input type="radio" name="team" id="no" />
                                                    <label htmlFor="no">No</label>
                                                </div>
                                            </div>
                                            <p className="if-yes">If yes, please specify team name:</p>
                                            <input
                                                name="if_yes"
                                                type="text"
                                                id="if_yes"
                                                placeholder="Enter here..."
                                                required
                                            />
                                        </div>
                                        <div className="input-container">
                                            <p>Do you have any medical conditions we should be aware of?</p>
                                            <div className="checkbox-container">
                                                <div className="checkbox-box">
                                                    <input type="radio" name="team" id="yes" />
                                                    <label htmlFor="yes">Yes</label>
                                                </div>
                                                <div className="checkbox-box">
                                                    <input type="radio" name="team" id="no" />
                                                    <label htmlFor="no">No</label>
                                                </div>
                                            </div>
                                            <p className="if-yes">If yes, please specify team name:</p>
                                            <input
                                                name="if_yes"
                                                type="text"
                                                id="if_yes"
                                                placeholder="Enter here..."
                                                required
                                            />
                                        </div>
                                        <div className="input-container" style={{

                                            marginTop: '1rem'
                                        }}>
                                            <p>Registration Fee: $ <input type="number" className='amount-input' /> (Please note that e-levy and other service charges apply) I hereby certify that I am physically fit and have trained sufficiently for this event. I release the [marathon organization name], its directors, officers, employees, volunteers, sponsors, and agents from all liability arising from my participation in this event.</p>
                                        </div>
                                        <Button title={'submit'} function={changeForm} />
                                    </>
                                }

                            </FormStyle>
                        )}
                    </Formik>
                </div>
            </FormikStyle>
        </>

    );
}



const FormHeaderStyle = styled.div`
  
    width: 100%;
    border-bottom: 1px solid #BBBBBB;
    
    .logo{
        width: 6rem;
        height: 1.8rem;
    }
    .close{
        width: 2rem;
        height: 2rem;
        cursor: pointer;
    }
    padding:.5rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3{
        font-weight: 500;
        text-align: center;
        justify-self: center;
    }

`
const FormikStyle = styled.div`
box-shadow: 0px 0px 15px rgba(0,0,0,0.4);
background-color: white;
border-radius: 24px;
position: relative;
font-family: 'SF Pro Display',sans-serif;


.form-container{
    padding: 5%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .card{
        padding: .5rem;
        background-color: #8080809e;
        cursor: pointer;
        transition: all .2s ease;
        &:hover{
            transform: scale(1.05);
        }
        &-content{
img{
    width: 20rem;
    height: 22rem;
    object-fit: cover;
    object-position: center;
}
.service{
    background-color: ${globalColors.main};
    width: 100%;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    padding: 1rem;
    color: white;
    margin-top: -1rem;
}
        }
    }
    }
`;

const FormStyle = styled(Form)`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap:.5rem ;
    
    &>*{
        width: 100%;
    }
    input,select{
        width:100%;
        padding:0.5rem 1rem ;
        border: none;
        outline: none;
        font-size: 1rem;
        font-weight: 100;
        background: #FFFFFF;
        border: 0.6px solid #D6D6D6;
        border-radius: 4px;
        transition: all .2s ease;
        &:focus{
            outline: none !important;
          
        }
        ::placeholder{
            color: #E0E0E0;
            font-size: 0.8rem;
        }
    }
    label{
        font-size: 0.9rem;
       
    }

    .grid-input{
        display: flex;
        width: 100%;
        gap: 10px;
    }
    select{
        font-size: 0.8rem;
    }

    input[type=checkbox] {
    width: 15px;
    height: 15px;
}

    .checkbox-container{
        display: flex;
      
       gap: 10px;
       margin-top: 0.2rem;
        .checkbox-box{
            display: flex;
        
            gap:2px;
            input[type=text]{
                margin-top: 0.5rem;
            }
        }
        
        
    }
    .hear-box{
        
    }
    .if-yes{
            color: #5E5E5E;
            margin-top: 0.75rem;
        }
        .amount-input{
            border: none;
            border-bottom: 1px solid black;
            width: 4rem;
            padding: 0;
            border-radius: 0;
        }
   
`
export default RegisterForm;