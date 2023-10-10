import React from 'react'

import { RiMailLine,RiLockPasswordLine } from 'react-icons/ri';


const Signup = () => {
    return (
        <section>
          <div className="control">
        <div className="form-box">
          <div className="form-value">
            <form action="">
              <h2>Login</h2>
              <div className="inputbox">
                <div className="icons"><RiMailLine /></div>
                <input type="email" required />
                <label htmlFor="">Email</label>
              </div>
              <div className="inputbox">
               <div className="icons"><RiLockPasswordLine /></div>
                <input type="password" required />
                <label htmlFor="">Password</label>
              </div>
              <div className="inputbox">
              <div className="icons"><RiLockPasswordLine /></div>
                <input type="checkpassword" required />
                <label htmlFor="">checkpassword</label>
              </div>
              <button className="login">login</button>
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