import React from 'react'
import { ToastContainer } from 'react-toastify';

const Edituser = () => {
    return (
        <section>
          <div className="grid__item large--one-half medium--one-half small--one-whole pd-left110 text-left ">
          <ToastContainer />
            <div className="width-80">
              <h1 className="text-2xl font-bold leading-9 text-black">Thay đổi quản trị</h1>
           
              <div className="form-vertical">
                <form acceptCharset="UTF-8" id="create_customer" >
                  <input name="form_type" type="hidden" value="create_customer" />
                  <input name="utf8" type="hidden" value="✓" />
                  <label htmlFor="username">Tên</label>
                  <input
                    type="text"
                    name="last_name"
                    id="username"
                    className="input-full"
                    placeholder="Tên"
                    // value={lastName}
                    // onChange={(e) => setLastName(e.target.value)}
                  />
    
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-full"
                    placeholder="Email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
    
              
    
                  <label htmlFor="CreatePassword">Mật khẩu</label>
                  <input
                    type="password"
                    name="password"
                    id="CreatePassword"
                    className="input-full"
                    placeholder="Mật khẩu"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
    
              
    
                  {/* <div id="verified_email" className="clearfix large_form">
                    <input type="checkbox" /> Đăng ký nhận bản tin
                  </div> */}
    
                  
    
     
    
                  <p>
                  <input
                  type="submit"
                  className="bg-black text-white w-full py-2 px-4 rounded-none"
                  value="Update"
                
                  />
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
}
export default Edituser;