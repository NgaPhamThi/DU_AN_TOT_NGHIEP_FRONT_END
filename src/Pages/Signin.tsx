import React, { useState } from 'react';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
    setError('');
  };

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
    setError('');
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Kiểm tra điều kiện đăng nhập ở đây
    if (email === '' || password === '') {
      setError('Vui lòng nhập đầy đủ email và mật khẩu');
    } else {
      // Thực hiện xử lý đăng nhập ở đây, ví dụ: gọi API đăng nhập
      // Nếu có lỗi, đặt lỗi vào state và hiển thị
      // Nếu đăng nhập thành công, chuyển hướng hoặc thực hiện hành động mong muốn
    }
  };

  return (
    <section>
      <div className="login-container">
        <div className="grid__item large--one-half medium--one-half small--one-whole pd-left110 text-left br-right">
          <div className="width-80">
            <h1 className="text-2xl font-bold leading-9 text-black">Đăng nhập</h1>
            <div className="desc_login">Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên và nhận được những ưu đãi tốt hơn!</div>
            <form className="form-vertical" onSubmit={handleSubmit}>
              <label htmlFor="Email">Email</label>
              <input type="email" id="Email" className="input-full" placeholder="Email" value={email} onChange={handleEmailChange} />

              <label htmlFor="Password">Mật khẩu</label>
              <input type="password" id="Password" className="input-full" placeholder="Mật khẩu" value={password} onChange={handlePasswordChange} />
              <a href="">Quên mật khẩu</a>
              <p>
                <input type="submit" className="bg-black text-white w-full py-2 px-4 rounded-none" value="Đăng nhập" />
              </p>
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
