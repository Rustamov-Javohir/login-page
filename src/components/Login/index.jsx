import Button from "../Button";
import Input from "../Input";
import Paragraph from "../Paragraph";
import { FcGoogle } from "react-icons/fc";
import "./login.css";
import LoginLink from "../LoginLink";

const Login = () => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
    };
    return (
        <div className='login'>
            <div className='container'>
                <div className='login__content'>
                    <div className='login__wrapper'>
                        <div className='login__start'>
                            <h3 className='login__title'>Welcome back</h3>
                            <Paragraph className='paragraph login__desc'>
                                Welcome back! Please enter your details.
                            </Paragraph>
                            <form
                                method='POST'
                                onSubmit={(evt) => handleSubmit(evt)}>
                                <label>Email</label>
                                <Input
                                    className='input'
                                    type='email'
                                    name='email'
                                    placeholder='Enter your email'
                                />
                                <label>Password</label>
                                <Input
                                    className='input'
                                    type='password'
                                    name='password'
                                    placeholder='Enter your password'
                                />
                                <div className='d-flex login__checkbox-wrapper'>
                                    <div className='login__checkbox'>
                                        <input type='checkbox' />
                                        <span className='login__checkbox-title'>
                                            Remember for 30 days
                                        </span>
                                    </div>
                                    <LoginLink
                                        to='/forgot-password'
                                        className='login-link login__forgot-password'>
                                        Forgot Password
                                    </LoginLink>
                                </div>
                                <Button
                                    className='login__btn button'
                                    type='submit'>
                                    Sign in
                                </Button>
                            </form>
                            <Button className='login__google-btn button'>
                                <FcGoogle className='login__google-btn--icon' />
                                Sign in with Google
                            </Button>
                            <div className='d-flex login__desc--wrapper'>
                                <Paragraph className='paragraph'>
                                    Don’t have an account?
                                </Paragraph>
                                <LoginLink
                                    to='/register'
                                    className='login-link login__register-link'>
                                    Sign up
                                </LoginLink>
                            </div>
                        </div>
                        <div className='login__end'>
                            <div className='login__img'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
