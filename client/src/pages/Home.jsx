import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/User/header/Header";
import Hero from "../components/User/Hero/Hero";
import Mid from "../components/User/Mid-level/Mid";
import Footer from "../components/User/Footer/Footer";
import Course from "../components/User/Course/Course";


const Home = () => {

  
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [open,setOpen] = useState(false)
  const [activeItem,setActiveItem] = useState(0)
  useEffect(() => {
    const verifyCookie = async () => {
      let user1,status1
      if (!cookies.token) {
        navigate("/login");
      }
      const data = await axios.post(
        "http://localhost:3000",
        {},
        { withCredentials: true }
      ).then((data) => { 
        console.log('this is inside then',data)
        console.log('Home page in') })
        .catch((err) => { console.log('error occured during going to Homepage',err) })
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
          position: "top-right",
        })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };
  return (
    <>
      <Header />
      <Hero/>
      <Mid/>
      <Course/>
      <Footer/>
      {/* <div className="home_page">
        <h4>
          
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div> */}
      <ToastContainer />
    </>
  );
};

export default Home;