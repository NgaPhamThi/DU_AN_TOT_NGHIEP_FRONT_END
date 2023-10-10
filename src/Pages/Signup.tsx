import React from 'react'

import { RiMailLine,RiLockPasswordLine } from 'react-icons/ri';


const Signup = () => {
    return (
        <section>
          <div className="logincontrol">
        <div className="loginform-box">
          <div className="loginform-value">
            <form action="">
              <h2 className="h2">signup</h2>
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
              <div className="logininputbox">
              <div className="loginicons"><RiLockPasswordLine /></div>
                <input type="checkpassword" required />
                <label htmlFor="">checkpassword</label>
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
    )
}

export default Signup