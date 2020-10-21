import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import googleLogo from '../../assets/svg/google.svg'
import banner from '../../assets/img/login-banner.jpg'

import {auth, createUserProfileDocument, signInWithGoogle } from '../../firebase/firebase.utils'

class SignUp extends React.Component {

    constructor(props){
        super(props);


        this.state= {
            name: "",
            email:"",
            password:"",
            confirmPassword:"",
        }
    }
    handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]:value});
    }
    handleSubmit = async (event) =>{
        event.preventDefault();
        const { name, email, password, confirmPassword} = this.state;

        if (password !==confirmPassword){
            alert("Passwords don't match");
            return;
        } try{
            //create new user
        const { user} = await auth.createUserWithEmailAndPassword(
            email,password
        );

        await createUserProfileDocument (user, {name});

        this.setState({
            name: "",
            email:"",
            password:"",
            confirmPassword:"",
        });
    }
    catch(error){
console.log(error)    }
}

   

    render(){
        const { name, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
      
        <div className="left">
            <div className="group">
                 <h2>Sign Up</h2>
                    <FormInput type = "text" placeholder= "Full Name" value = {name}/>
                    <FormInput type = "email" placeholder= "Email" value = {email}/>
                    <FormInput type = "password" placeholder= "Password" value = {password}/>
                    <FormInput type = "password" placeholder= "Confirm Password" value = {confirmPassword}/>

                    <CustomButton type= "submit" >Signup</CustomButton>
                    Or
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
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