import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import googleLogo from '../../assets/svg/google.svg'
import banner from '../../assets/img/login-banner.jpg'
class SignUp extends React.Component {

    constructor(props){
        super(props);


        this.state= {
            email:"",
            password:""
        }
    }

    render(){
        return(
            <div className="sign-up">
      
        <div className="left">
            <div className="group">
                 <h2>Sign Up</h2>
                    <FormInput type = "text" placeholder= "Full Name"/>
                    <FormInput type = "email" placeholder= "Email"/>
                    <FormInput type = "password" placeholder= "Password"/>

                    <CustomButton >Signup</CustomButton>
                    Or
                    <CustomButton  isGoogleSignIn>
                        <div className="container">
                            <img src={googleLogo} alt=""/>
                            <span className= "btn-txt">Continue with Google</span>
                        </div>
                    </CustomButton>
            </div>
        </div>

        
        <div className="right" style = {{
            backgroundImage: `url(${banner})`,
            backgroundSize:"cover",
            width:"50%"
        }}
        />
    </div>
        )
    }
}
    


export default SignUp;