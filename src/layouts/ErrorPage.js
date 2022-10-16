import { useRouteError } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ErrorPage ()
{
    const error = useRouteError();
    console.error( error );

    return (
        <motion.div
            initial={ { x: 5, opacity: 0 } }
            animate={ { x: 0, opacity: 1 } }
            exit={ { x: -5, opacity: 0 } } >
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-3"> <span className="text-danger">Opps!</span> Không tìm thấy trang.</p>
                    <p className="lead">
                        Trang bạn đang tìm kiếm không tồn tại.
                    </p>
                    <Link to="/" className="btn btn-primary">Trang chủ</Link>
                </div>
            </div>
        </motion.div>
    );
}