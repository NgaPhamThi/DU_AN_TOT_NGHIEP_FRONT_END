import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signin } from '../api/auth';
const Signin = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = (e:any) => {
  //   e.preventDefault();

  //   // Kiểm tra điều kiện
  //   if (!email || !password) {
  //     alert('Vui lòng điền đầy đủ email và mật khẩu');
  //     return;
  //   }

  //   // Lấy thông tin từ Local Storage
  //   const storedEmail = localStorage.getItem('email');
  //   const storedPassword = localStorage.getItem('password');

  //   // Kiểm tra thông tin đăng nhập
  //   if (email === storedEmail && password === storedPassword) {
  //     setIsLoggedIn(true);
  //     alert('Đăng nhập thành công!');
  //   } else {
  //     setIsLoggedIn(false);
  //     alert('Email hoặc mật khẩu không đúng!');
  //   }
  // };

  // if (isLoggedIn) {
  //   // Hiển thị nội dung sau khi đăng nhập thành công
  //   return <div>Đăng nhập thành công!</div>;
  // }
  const { register, handleSubmit, formState: { errors } } = useForm<{ email: string, password: string }>();
  const onHandleSubmit = async (data: { email: string, password: string }) => {
    try {
        const response = await signin(data);
        console.log(response)
        localStorage.setItem("token", JSON.stringify(response.data.accessToken))

    } catch (error) {
        console.log(error);
    }
  }
  return (
    <section>
      <div className="grid__item large--one-half medium--one-half small--one-whole pd-left110 text-left br-right">
        <div className="width-80">
          <h1 className="text-2xl font-bold leading-9 text-black">Đăng nhập</h1>
          <div className="desc_login">Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên và nhận được những ưu đãi tốt hơn!</div>
          <form className="form-vertical" onSubmit={handleSubmit(onHandleSubmit)}>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              id="Email"
              className="input-full"
              placeholder="Email"
              {...register("email")}
            />

            <label htmlFor="Password">Mật khẩu</label>
            <input
              type="password"
              id="Password"
              className="input-full"
              placeholder="Mật khẩu"
              {...register("password")}
            />
            <a href="">Quên mật khẩu</a>
            <p>
              <input
                type="submit"
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