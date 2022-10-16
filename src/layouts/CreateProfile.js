import React from 'react'

function CreateProfile ()
{
    return (
        <div className="container vh-100">
            <div className="row h-100 mx-auto align-items-center">
                <div className="col-md-6">
                    <form>
                        <h1 className="display-6 mb-4 text-center">Thông tin của bạn</h1>
                        <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-3 col-form-label">Họ và tên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"></input>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="birthdate" className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9 mx-auto">
                                <input id="birthdate" className="form-control" type="date" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="birthdate" className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9 d-flex align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked></input>
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Nam
                                    </label>
                                </div>
                                <div className="form-check  mx-3">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        Nữ
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        Khác
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="birthdate" className="col-sm-3 col-form-label">Quốc gia</label>
                            <div className="col-sm-9">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected></option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-3 col-form-label">Số điện thoại</label>
                            <div className="col-sm-9">
                                <input type="tel" className="form-control"></input>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary w-100 mb-3">Đăng ký</button>
                        <p className="text-center">hoặc</p>
                        <button type="button" className="btn btn btn-secondary w-100 mb-3">Đăng ký với Google <i className="bi bi-google"></i></button>
                        <p className="text-center">Đã có tài khoản? <a href="/" className="link-primary text-decoration-none">Đăng nhập ngay</a></p>
                    </form>
                </div>
                <div className="col-md-6">
                    <img src="images/login-page.jpg" className="img-fluid img-thumbnail" alt="login-img"></img>
                </div>
            </div >
        </div>
    )
}

export default CreateProfile