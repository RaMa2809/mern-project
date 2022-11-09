import "admin-lte/plugins/fontawesome-free/css/all.css"
import "admin-lte/dist/css/adminlte.css"
import "admin-lte/plugins/toastr/toastr.min.css"
import Header from "./pageComponents/Header";
import SideBar from "./pageComponents/Sidebar";
import Footer from "./pageComponents/Footer";
import ContentComponent from "./pageComponents/ContentComponent";

const LoggedInUser  = (props)=> {
    return (
        <div className={'wrapper'}>
            <Header/>
            <SideBar/>
            <ContentComponent/>
            <Footer/>
        </div>
    );
}

export default LoggedInUser