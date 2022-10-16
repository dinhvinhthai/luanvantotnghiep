import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function Register ()
{
    return (
        <motion.div
            initial={ { x: 5, opacity: 0 } }
            animate={ { x: 0, opacity: 1 } }
            exit={ { x: -5, opacity: 0 } } >
            <div className="container vh-100">
                <div className="row h-100 mx-auto align-items-center">
                    <div className="col-md-6 px-5">
                        <h1 className="display-6 mb-4 text-center">Tạo tài khoản</h1>
                        <form className="px-3">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="Email" required></input>
                                <label htmlFor="floatingInput">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Tên của bạn" required></input>
                                <label htmlFor="floatingInput">Tên của bạn</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Mật khẩu" required></input>
                                <label htmlFor="floatingPassword">Mật khẩu</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Nhập lại mật khẩu" required></input>
                                <label htmlFor="floatingPassword">Nhập lại mật khẩu</label>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required></input>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Chấp nhận tất cả <a href="/" className="link-primary text-decoration-none">điều khoản sử dụng</a>
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mb-3">Đăng ký</button>
                            <p className="text-center">hoặc</p>
                            <button type="button" className="btn btn btn-secondary w-100 mb-3">Đăng nhập với Google <i className="bi bi-google"></i></button>
                            <p className="text-center">Đã có tài khoản? <Link to="/" className="link-primary text-decoration-none">Đăng nhập ngay</Link></p>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <img src="images/register-page.jpg" className="img-fluid img-thumbnail" alt="login-img"></img>
                    </div>
                </div >
            </div>
        </ motion.div>
    )
}

export default Register