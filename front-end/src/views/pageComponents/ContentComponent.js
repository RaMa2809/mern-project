import {Outlet} from "react-router-dom";

const ContentComponent = (props) => {

    return (
        <section className={'content-wrapper'}>
            <div className={"container-fluid"}>
                <Outlet></Outlet>
            </div>
        </section>
    )
}

export default ContentComponent