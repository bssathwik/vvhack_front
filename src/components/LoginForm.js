import React from 'react';
import './Style.css';
import { IonIcon } from 'react-ion-icon';

const LoginForm = ({ onClose }) => {
    return (
        <div className="wrapper">
            <span className="icon-close" onClick={onClose}>
                <IonIcon name="close" />
            </span>
            <div className="form-box">
                <h2>Login</h2>
                <form action="#">
                    <div className="input-box">
                        <div className="label-align">
                            <span className="icon">
                                <IonIcon name="mail" />
                            </span>
                            <label>Email</label>
                        </div>
                        <input className="input" type="email" required />
                    </div>
                    <div className="input-box">
                        <div className="label-align">
                            <span className="icon">
                                <IonIcon name="lock-closed" />
                            </span>
                            <label>Password</label>
                        </div>
                        <input className="input" type="password" required />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#">Forget password?</a>
                    </div>
                    <button type="submit" id="btn">Login</button>
                    <div className="login-register">
                        <p>
                            Don't have an account?{"/resgister "}
                            <a href="#" className="register-link">
                                Register
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
