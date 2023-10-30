import React from 'react';


const Signin = () => {
  return (
    <section>
      <div className="login-container">
      <div className="grid__item large--one-half medium--one-half small--one-whole pd-left110 text-left br-right">
        <div className="width-80">
          <h1 className="text-2xl font-bold leading-9 text-black">Đăng nhập</h1>
          <div className="desc_login">Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên và nhận được những ưu đãi tốt hơn!</div>
          <form className="form-vertical">
            <label htmlFor="Email">Email</label>
            <input type="email" id="Email" className="input-full" placeholder="Email"  />

            <label htmlFor="Password">Mật khẩu</label>
            <input type="password" id="Password" className="input-full" placeholder="mật khẩu" />
            <a href="">Quên mật khẩu</a>
           <p>
           <input type="submit" className="bg-black text-white w-full py-2 px-4 rounded-none" value="Đăng nhập"/>
           </p>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Signin;