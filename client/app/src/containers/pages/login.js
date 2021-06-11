import React from 'react'
import logo from '../../images/logo.svg'
import register from '../../images/register.svg'
import './style2.css'

const login = props => {

    function addClick()
    {   
        const container = document.querySelector('.container');
        container.classList.add("sign-up-mode");
    }
    function removeClick()
    {   
        const container = document.querySelector('.container');
        container.classList.remove("sign-up-mode");
    }
    return (
        <div className="login">
            <script src="https://kit.fontawesome.com/64d58efce2.js" crossOrigin="anonymous"> </script>
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="" className="sign-in-form">
                            <h2 className="title-signin">Sign in </h2>
                            <div className="input-field">
                                <i className="fas fa-user"/>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"/>
                                <input type="password" placeholder="password" />
                            </div>
                            <input type="submit" value="Login" class="btn solid"/>
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fa fa-google"></i>
                                </a>
                            </div>
                        </form>
                        <form action="#" className="sign-up-form">
                            <h2 className="title-signin">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" className="btn" value="Sign up" />
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fa fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fa fa-google"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button onClick={addClick} className="btn transparent" id="sign-up-btn" >
                                Sign up
                            </button>
                        </div>
                        <img src={logo} className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button onClick={removeClick} className="btn transparent" id="sign-in-btn">
                                Sign in
                            </button>
                        </div>
                        <img src={register} className="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login;
