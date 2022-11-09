import {Link} from "react-router-dom";
import {Formik} from "formik";
import * as Yup from "yup"
import axios from "axios";
import toast from "admin-lte/plugins/toastr/toastr.min";


const Login = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Please enter a valid email")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(6, "Password too short! Must be at least 6 characters."),
        remember: Yup.bool().oneOf(
            [true,false],
            "You Remember!"
        ),
    });

    const handleSubmit = async (values, setFieldError) => {
        console.log("Success! Call the API Now!", 'Values are');
        try {
            const response = await axios.post(process.env.REACT_APP_API_URL+'auth/login',values)
            console.log(values)
            console.log(response.data);

        }catch (e){
            console.log(e.response.data.message)
            setFieldError('server',e.response.data.message);
            toast.options = {
                "closeButton": true,
                "preventDuplicates": true
            }
            toast.error("Something went wrong!! Please try again..")
        }
    };
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                remember : false,
            }}
            onSubmit={(values,{ errors,setFieldError,setErrors}) => {
                handleSubmit(values, setFieldError);
            }}
            validationSchema = {validationSchema}
        >
            {({ values,errors,touched,handleSubmit, handleChange }) => {

                return (
                    <div className={'login-page'}>
                        <div className="login-box">
                            <div className="login-logo">
                                <Link to={'/'}><b>Admin</b>LTE</Link>
                            </div>

                            <div className="card">
                                <div className="card-body login-card-body">
                                    <p className="login-box-msg">Sign in to start your session</p>
                                    <form onSubmit={handleSubmit} method="post">
                                        <div className={'mb-3'}>
                                            <div className="input-group ">
                                                <input value={values.email} onChange={handleChange("email")} type="email" className="form-control" placeholder="Email"/>
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <span className="fas fa-envelope"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={'text-danger'}>{touched.email && errors.email}</div>
                                        </div>

                                        <div className="mb-3">
                                            <div className="input-group">
                                                <input value={values.password} onChange={handleChange("password")} type="password" className="form-control" placeholder="Password"/>
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <span className="fas fa-lock"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={'text-danger'}>{touched.password && errors.password}</div>
                                        </div>

                                        <div className="row">

                                            <div className="col-8">
                                                <div className="icheck-primary">
                                                    <input checked={values.remember} onChange={handleChange("remember")} type="checkbox" id="remember"/>
                                                        <label htmlFor="remember">
                                                            Remember Me
                                                        </label>
                                                </div>

                                            </div>
                                            <div className="col-4">
                                                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                            </div>
                                            <div className={'text-danger'}>
                                                {touched.remember && errors.remember}
                                            </div>
                                        </div>

                                        {errors.server !== '' && <div className="py-2 my-2 text-danger error"> {errors.server} </div>}
                                    </form>

                                    <div className="social-auth-links text-center mb-3">
                                        <p>- OR -</p>
                                        <a href="#" className="btn btn-block btn-primary">
                                            <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                                        </a>
                                        <a href="#" className="btn btn-block btn-danger">
                                            <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                                        </a>
                                    </div>

                                    <p className="mb-1">
                                        <Link to={'/Guest/forgot-password'}>Forgot Password</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            )}}
        </Formik>
    )
}
export default Login