import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, signup } from '../api/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IUser } from '../interfaces/cart';



const Signup = () => {
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

 const [user, setUser] = useState([])
 useEffect(() => {
  async function fetchuser() {
    const { data } = await getUser();
    setUser(data);
    // console.log(data);
  }
  fetchuser()
 }, [])
console.log(user);

  const navigate = useNavigate();
  const handleSignup = async (e: any) => {
    e.preventDefault();
    
    if (!lastName || !email || !confirmPassword || !password) {
      setError('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    if(password.length<6){
      toast.success('Mật khẩu ít nhất 6 ký tự', { autoClose: 2000 })
      return;
    }
    
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!email.match(emailRegex)) {
      setError('Định dạng email không hợp lệ');
      return;
    }
   

   const data={
    username: lastName,
    email: email,
    password: password,
    confirmPassword: confirmPassword
   }

  //  console.log(data);
    const adduser= await signup(data)
    .then(() => {
      // Đăng ký thành công
      toast.success('Đăng ký thành công', { autoClose: 2000 })
    })
    .then(() => {
      setTimeout(() => {
        navigate('/signin');
      }, 3000);
    })
    .catch((error) => {
      toast.success('Đăng ký không thành công vui lòng kiểm tra lại thông tin đăng ký', { autoClose: 2000 })
      console.error('Error registering user', error);
    });   
    
  };

  return (
    <section>
      <div className="grid__item large--one-half medium--one-half small--one-whole pd-left110 text-left ">
      <ToastContainer />
        <div className="width-80">
          <h1 className="text-2xl font-bold leading-9 text-black">Đăng ký</h1>
          <div className="desc_login">
            Hãy đăng ký ngay để tích lũy điểm thành viên và nhận được những ưu đãi tốt hơn!
          </div>
          <div className="form-vertical">
            <form acceptCharset="UTF-8" id="create_customer" onSubmit={handleSignup}>
              <input name="form_type" type="hidden" value="create_customer" />
              <input name="utf8" type="hidden" value="✓" />
              <label htmlFor="username">Tên</label>
              <input
                type="text"
                name="last_name"
                id="username"
                className="input-full"
                placeholder="Tên"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="input-full"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

          

              <label htmlFor="CreatePassword">Mật khẩu</label>
              <input
                type="password"
                name="password"
                id="CreatePassword"
                className="input-full"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            <label htmlFor="CreatePassword">Nhập lại mật khẩu</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="input-full"
                placeholder="Mật khẩu"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {/* <div id="verified_email" className="clearfix large_form">
                <input type="checkbox" /> Đăng ký nhận bản tin
              </div> */}

              <div id="verified_policy" className="clearfix large_form">
                <input type="checkbox" /> Tôi đồng ý với các <a href="">điều khoản</a> của TND
              </div>

              {error && <p className="error">{error}</p>}

              <p>
              <input
              type="submit"
              className="bg-black text-white w-full py-2 px-4 rounded-none"
              value="Đăng ký"
            
              />
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;