import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signin } from '../api/auth';

const DangNhap = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');


  // const handleEmailChange = (e:any) => {
  //   setEmail(e.target.value);
  //   setError('');
  // };


  // const handlePasswordChange = (e:any) => {
  //   setPassword(e.target.value);
  //   setError('');
  // };

 
  // const authenticateUser = async (email:string, password:string) => {
  //   try {
     
  //     const response = await fetch('http://localhost:8080/api', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       return { success: true, data };
  //     } else {
  //       return { success: false, error: data.message || 'Xác thực thất bại' };
  //     }
  //   } catch (error) {
  //     console.error('Lỗi trong quá trình xác thực:', error);
  //     throw new Error('Đã xảy ra lỗi trong quá trình xác thực');
  //   }
  // };


  // const handleSubmit = async (e:any) => {
  //   e.preventDefault();

 
  //   if (email === '' || password === '') {
  //     setError('Vui lòng nhập đầy đủ email và mật khẩu');
  //   } else {
  //     try {
      
  //       const response = await authenticateUser(email, password);

  //       if (response.success) {
      
  //         console.log('Đăng nhập thành công!');
  //       } else {

  //         setError(response.error);
  //       }
  //     } catch (error) {
  
  //       setError('Đã xảy ra lỗi trong quá trình xác thực');
  //     }
  //   }
  // };
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
console.log(errors);
  return (
    <section>
      <div className="login-container">
        <div className="grid__item large--one-half medium--one-half small--one-whole pd-left110 text-left br-right">
          <div className="width-80">
            <h1 className="text-2xl font-bold leading-9 text-black">Đăng nhập</h1>
            <div className="desc_login">
              Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên và nhận được những ưu đãi tốt hơn!
            </div>
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
                <input type="submit" className="bg-black text-white w-full py-2 px-4 rounded-none" value="Đăng nhập" />
              </p>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DangNhap;
