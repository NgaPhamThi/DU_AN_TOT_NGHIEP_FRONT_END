import React, { useState } from 'react';
import { signin } from '../api/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [products, setproducts] = useState([])
  
  const handleLogin = async (e: any) => {
    e.preventDefault();


    if (!email || !password) {
      alert('Vui lòng điền đầy đủ email và mật khẩu');
      return;
    }
    const data={
      email: email,
      password: password
    }
   
    // console.log(data);
    try {
      const res = await signin(data)
      const token= res.data.accessToken
      const user = res.data.user
      localStorage.setItem('token', token)
      toast.success('Đăng nhập thành công ', { autoClose: 2000 })
      //   console.error('Error registering user', error);
      console.log(token);
      console.log(user.role);
      if(user.role=='admin') {
        setTimeout(() => {
              navigate('/admin');
            }, 3000);
      }else{
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }

    } catch (error) {
      toast.success('Đăng nhập không thành công vui lòng kiểm tra email hoặc mật khẩu', { autoClose: 2000 })
      console.error('Error registering user', error);
    }
    
    
    
    
    
    
   
   
  };



  return (
    <section>
      <div className="grid__item large--one-half medium--one-half small--one-whole pd-left110 text-left br-right">
      <ToastContainer />
        <div className="width-80">
          <h1 className="text-2xl font-bold leading-9 text-black">Đăng nhập</h1>
          <div className="desc_login">Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên và nhận được những ưu đãi tốt hơn!</div>
          <form className="form-vertical" onSubmit={handleLogin}>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              id="Email"
              className="input-full"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="Password">Mật khẩu</label>
            <input
              type="password"
              id="Password"
              className="input-full"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="">Quên mật khẩu</a>
            <p>
              <input
                type="submit"
                onClick={()=>"onhandSignin"}
                className="bg-black text-white w-full py-2 px-4 rounded-none"
                value="Đăng nhập"
              />
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signin;