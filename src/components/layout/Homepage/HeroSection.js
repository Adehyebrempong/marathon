import React, { useCallback } from 'react';
import styled from 'styled-components';
import { touristone, touristtwo, travel, marathon } from '../../../assets';
import { globalColors } from '../../GlobalStyle/globalcolors';
import { Form, Formik } from 'formik';


const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: '',
    birthDate: "",
    gender: "",
    medicalDiscomfort: false,
    runningSkill: '',
    joinNumber: '',
    emergency_phone: '',
    emergency_email: '',
    emergency_name: ''



};

function HeroSection(props) {
    const handleSubmit = useCallback(
        (values, { setSubmitting, setFieldError }) => {
            console.log(values, setFieldError, setSubmitting);
        },
        []
    );
    return (
        <>
            <HeroSectionStyle>
                <div className='header'>
                    <h2>Registration Page</h2>
                    {/* <p>Travel to any destination of your choice without worrying about delays.</p> */}
                </div>
            </HeroSectionStyle>
            <HeroMiniStyle>
                <div className="hero-mini">
                    <div className="hero-mini_container">
                        {/* <div className="card">
                            <div className="card-content">

                                <img src={touristone} alt="tour" />
                                <div className="service">
                                    Visa
                                </div>
                            </div>
                        </div> */}
                        <Formik
                            initialValues={initialValues}
                            // validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <FormStyle className="formik-form">
                                    <div className="input-container">
                                        <input
                                            name="firstName"
                                            type="firstName"
                                            id="firstName"
                                            placeholder="First Name*"
                                            required
                                        />
                                    </div>
                                    <div className="input-container">
                                        <input
                                            name="lastName"
                                            type="lastName"
                                            id="lastName"
                                            placeholder="Last Name*"
                                            required
                                        />
                                    </div>

                                    <div className="input-container">

                                        <input
                                            name="email"
                                            type="email"
                                            id="email"
                                            placeholder="Email*"
                                            required
                                        /></div>
                                    <div className="input-container">
                                        <input
                                            name="phoneNumber"
                                            type="text"
                                            id="phoneNumber"
                                            placeholder="Phone Number*"
                                            required
                                        /></div>



                                    <div className="input-container">
                                        <input
                                            name="birthDate"
                                            type="text"
                                            id="birthDate"
                                            placeholder='Date of Birth'
                                            required
                                        /></div>
                                    <div className="input-container">
                                        <input
                                            name="emergency_name"
                                            type="text"
                                            id="emergency_name"
                                            placeholder='Emergency Contact Name'
                                            required
                                        /></div>
                                    <div className="input-container">
                                        <input
                                            name="emergency_phone"
                                            type="text"
                                            id="emergency_phone"
                                            placeholder='Emergency Contact Phone*'
                                            required
                                        /></div>
                                    <div className="input-container">
                                        <input
                                            name="emergency_email"
                                            type="email"
                                            id="emergency_email"
                                            placeholder='Emergency Contact Email*'
                                            required
                                        /></div>

                                    <div className="input-container">
                                        <select name="gender" id="gender" required>
                                            <option value="">Gender*</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="female">Other</option>
                                        </select></div>


                                    <button type="submit" status={isSubmitting ? "loading" : "idle"}>
                                        Register
                                    </button>

                                </FormStyle>
                            )}
                        </Formik>
                    </div>
                </div>
            </HeroMiniStyle>
        </>

    );
}
const HeroSectionStyle = styled.section`
    width: 100%;
    height:120vh;
    background-image:linear-gradient(#f1c33a60,#f1c33a60),url(${marathon});
    background-repeat:no-repeat;
    background-size:cover;
   clip-path: polygon(0px 0px, 100% 0px, 100% 80%, 0px 100%);
   display: flex;
   justify-content: center;
   position: relative;
   z-index: 20;
   margin-top: 3rem;
 
   .header{
margin-top: 4rem;
color: white;
text-align: center;
text-shadow:2px 2px 5px rgba(0,0,0,0.1);
h2{
    font-size: 3rem;
    border-bottom: 1px solid white;
    padding-bottom: 0.1rem;
}
p{
    margin-top: 2rem;
}
   }
  
`
const HeroMiniStyle = styled.div`
transform: translateY(-35rem);
 position: relative;
    z-index: 40000;
     .hero-mini{

    width: 100%;
    display: flex;
    justify-content: center;
   
    
&_container{
    width: 70%;
    background-color: white;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.4);
    padding: 5%;
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

   }
`;

const FormStyle = styled(Form)`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap:.5rem ;
    
    &>*{
        width: 48%;
    }
    input,select{
        width:100%;
        padding:0.5rem 1rem ;
        background-color: #dddcdc;
        border: none;
        outline: none;
        font-size: 1.1rem;
        font-weight: 100;
        border-radius: 5px;
        transition: all .2s ease;
        &:focus{
            outline: none !important;
            border: none;
            background: ${globalColors.main};
            color: white;
            ::placeholder{
                color: white;
            }
        }
    }
    button{
        width: 100%;
        background-color: ${globalColors.main};
        border: none;
        border-radius: 5px;
        padding: .75rem;
        font-size: 1.5rem;
        font-weight: 600;
        color: white;
        cursor: pointer;

    }
`
export default HeroSection;