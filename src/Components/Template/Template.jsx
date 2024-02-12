import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styleT from "./template.module.css"

function Template(props){
    const {footerCourseName, footerCourseLink, logo, navItems, children} = props;
    return(
        <div className={styleT.templateApp}>
            <Header
                logo={logo}
                navItems={navItems}/>
            <main>
                {children}
            </main>
            <Footer
                courseName = {footerCourseName}
                courseLink = {footerCourseLink}
                logo={logo}
                navItems={navItems}/>
        </div>
    )
}

export default Template;