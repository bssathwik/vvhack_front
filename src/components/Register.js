import React from 'react';
import { IonIcon } from 'react-ion-icon';

const Register = ({ onClose }) => {
    return (
        <div className="wrapper2">
            <span className="icon-close" onClick={onClose}>
                <IonIcon name="close" />
            </span>
            <div className="form-box">
                <h2>Register</h2>
                <form>
                    <div className="input-box">
                        <div className="label-align">
                            <span className="icon">
                                <IonIcon name="person-circle-outline" />
                            </span>
                            <label>User Name</label>
                        </div>
                        <input className="input" type="text" required />
                    </div>
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
                    <button type="submit" id="btn">Register</button>
                    <div className="login-register">
                        <p>
                            Already have an account?{" "}
                            <a href="#" className="register-link">
                                Login
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;