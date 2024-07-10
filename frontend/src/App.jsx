import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Publications from "./pages/Publications"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
// import Dashboard from "./pages/Dashboard"
import Work from "./pages/Work";

import Signin from "./pages/Signin";
import Footnote from "./components/Footnote";
import Signup from "./pages/Signup";
export default function App() {


  return (
    <div className="flex flex-col bg-dark_gray h-screen">
    <BrowserRouter >
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Publications" element={<Publications/>} />
        {/* <Route path="/Dashboard" element={<Dashboard/>}/> */}
        <Route path="/Work" element={<Work/>}/>
        <Route path="/Sign-up" element={<Signup/>}/>
        <Route path="/Sign-in" element={<Signin/>}/>
      </Routes>
      <Footnote/>
    </BrowserRouter>
   </div>

  )
}


