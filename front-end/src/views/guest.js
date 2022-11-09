import "admin-lte/plugins/fontawesome-free/css/all.css"
import "admin-lte/dist/css/adminlte.css"
import "admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css"
import Login from "../components/login";
import ForgotPassword from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword";

const GuestPage  = (props)=> {
    console.log(props);
    switch (props.page){
        case "login":
            return (
                <Login/>
            )
        case 'ForgotPassword':
            return (
                <ForgotPassword/>
            )
        case 'ResetPassword':
            return (
                <ResetPassword/>
            )
    }

}

export default GuestPage;