import { Outlet } from "react-router-dom";
import "./index.scss";
import Footer from "../Footer";
import Nav from "../Nav";

const Layout = () => {
  return (
    <section className="app" >
          <div className="page">
             <Nav/>
            <Outlet/>
            <Footer/>
          </div>
        </section>
    
  )
    
};

export default Layout;

