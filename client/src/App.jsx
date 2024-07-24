import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
// import Publications from "./pages/Publications"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Work from "./pages/Work";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from "./pages/Signin";
import Footnote from "./components/Footnote";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import CreatePost from "./pages/CreatePost";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import { createContext, useEffect, useState } from "react";


export const VisitCountContext = createContext();
export default function App() {

  const [visitCount, setVisitCount] = useState(0);
  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        const response = await fetch('/api/visit/visit-count');
        const data = await response.json();
        setVisitCount(data.count);
      } catch (error) {
        console.error('Error fetching visit count:', error);
      }
    };

    fetchVisitCount();
  }, []);
console.log();

  return (
    <VisitCountContext.Provider value={[visitCount, setVisitCount]}>
      <div className="flex flex-col bg-dark_gray min-h-screen">
    <BrowserRouter >
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route element={<PrivateRoute/>}>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        </Route>
        <Route element={<OnlyAdminPrivateRoute/>}>
        <Route path ='/create-post' element={<CreatePost/>}/>
        <Route path ='/update-post/:postId' element={<UpdatePost/>}/>
        </Route>
        {/* <Route path="/Publications" element={<Publications/>} /> */}
        <Route path="/Work" element={<Work/>}/>
        <Route path="/Sign-up" element={<Signup/>}/>
        <Route path="/Sign-in" element={<Signin/>}/>
        <Route path='/post/:postSlug' element={<PostPage/>}/>
      </Routes>
      <Footnote/>
    </BrowserRouter>
   </div>
    </VisitCountContext.Provider>
    

  )
}


