import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    subscribe: false,
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Kiểm tra các trường bắt buộc
    if (!formData.first_name.trim()) {
      newErrors.first_name = 'Họ không được để trống';
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Tên không được để trống';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email không được để trống';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Số điện thoại không được để trống';
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Số điện thoại chỉ được chứa chữ số';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Mật khẩu không được để trống';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Bạn phải đồng ý với các điều khoản';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Gửi dữ liệu đăng ký lên server hoặc xử lý theo yêu cầu của bạn
      console.log('Đăng ký thành công:', formData);
    } else {
      console.log('Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.');
    }
  };

  return (
    <section>
      <div className="login-container">
        <div className="grid__item large--one-half medium--one-half small--one-whole pd-left110 text-left ">
          <div className="width-80">
            <h1 className="text-2xl font-bold leading-9 text-black">Đăng ký</h1>
            <div className="desc_login">
              Hãy đăng ký ngay để tích lũy điểm thành viên và nhận được những ưu đãi tốt hơn!
            </div>
            <div className="form-vertical">
              <form acceptCharset="UTF-8" action="/account" id="create_customer" method="post">
                <input name="form_type" type="hidden" value="create_customer" />
                <input name="utf8" type="hidden" value="✓" />

                <label htmlFor="FirstName">Họ</label>
                <input
                  type="text"
                  name="first_name"
                  id="FirstName"
                  className={`input-full ${errors.first_name ? 'error' : ''}`}
                  placeholder="Họ"
                  onChange={handleChange}
                  value={formData.first_name}
                />
                {errors.first_name && <span className="error-message">{errors.first_name}</span>}

                <label htmlFor="LastName">Tên</label>
                <input
                  type="text"
                  name="last_name"
                  id="LastName"
                  className={`input-full ${errors.last_name ? 'error' : ''}`}
                  placeholder="Tên"
                  onChange={handleChange}
                  value={formData.last_name}
                />
                {errors.last_name && <span className="error-message">{errors.last_name}</span>}

                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="Email"
                  className={`input-full ${errors.email ? 'error' : ''}`}
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}

                <label htmlFor="Phone">Số điện thoại</label>
                <input
                  type="text"
                  name="phone"
                  id="Phone"
                  className={`input-full ${errors.phone ? 'error' : ''}`}
                  placeholder="Số điện thoại"
                  onChange={handleChange}
                  value={formData.phone}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}

                <label htmlFor="CreatePassword">Mật khẩu</label>
                <input
                  type="password"
                  name="password"
                  id="CreatePassword"
                  className={`input-full ${errors.password ? 'error' : ''}`}
                  placeholder="Mật khẩu"
                  onChange={handleChange}
                  value={formData.password}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}

                <div id="verified_email" className="clearfix large_form">
                  <input
                    type="checkbox"
                    name="subscribe"
                    id="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                  />
                  Đăng ký nhận bản tin
                </div>

                <div id="verified_policy" className="clearfix large_form">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                  />
                  Tôi đồng ý với các <a href="#">điều khoản</a> của TND
                </div>

                <p>
                  <input
                    type="submit"
                    className="bg-black text-white w-full py-2 px-4 rounded-none"
                    value="Đăng ký"
                    onClick={handleSubmit}
                  />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
