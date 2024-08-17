import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/NavBar/Navbar";

import About from "../About/About";
import MyProjects from "../About/MyProjects/MyProjects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#fffefe] scroll-smooth ">
      <Navbar></Navbar>

      <Banner></Banner>
      <About></About>
      <MyProjects></MyProjects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
