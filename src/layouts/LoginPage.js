import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function Login ()
{
    return (
        <motion.div
            initial={ { x: 5, opacity: 0 } }
            animate={ { x: 0, opacity: 1 } }
            exit={ { x: -5, opacity: 0 } } >
            <div className="container vh-100">
                <div className="row h-100 mx-auto align-items-center">
                    <div className="col-md-6">
                        <img src="images/login-page.jpg" className="img-fluid img-thumbnail" alt="login-img"></img>
                    </div>
                    <div className="col-md-6 px-5">
                        <h1 className="display-6 mb-4 text-center">Đăng nhập</h1>
                        <form className="px-3">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required></input>
                                <label htmlFor="floatingInput">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Mật khẩu" required></input>
                                <label htmlFor="floatingPassword">Mật khẩu</label>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="form-check w-50">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Lưu truy cập
                                    </label>
                                </div>
                                <a href="/" className="link-primary text-decoration-none float-end w-50 text-end">Quên mật khẩu?</a>

                            </div>
                            <button type="submit" className="btn btn-primary w-100 mb-3">Đăng nhập</button>
                            <p className="text-center">hoặc</p>
                            <button type="button" className="btn btn btn-secondary w-100 mb-3">Đăng nhập với Google <i className="bi bi-google"></i></button>
                            <p className="text-center">Chưa có tài khoản? <Link to="/register" className="link-primary text-decoration-none">Đăng ký ngay</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}

export default Login