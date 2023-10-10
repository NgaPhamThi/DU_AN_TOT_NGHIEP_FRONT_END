import React from 'react';
import { RiMailLine,RiLockPasswordLine } from 'react-icons/ri';


const Signin = () => {
  return (
    <section>
          <div className="logincontrol">
      <div className="loginform-box">
        <div className="loginform-value">
          <form action="">
          <h2 className="h2">signin</h2>
            <div className="logininputbox">
            <div className="loginicons"><RiMailLine /></div>
              <input type="email" required />
              <label htmlFor="">Email</label>
            </div>
            <div className="logininputbox">
            <div className="loginicons"><RiLockPasswordLine /></div>
              <input type="password" required />
              <label htmlFor="">Password</label>
            </div>
            <div className="loginforget">
              <label htmlFor="">
                <input type="checkbox" />
                Remember Me <a href="#">Forget Password</a>
              </label>
            </div>
            <button className="loginlogin">login</button>
            <div className="register">
              <p>
                Don't have an account <a href="#">register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Signin;