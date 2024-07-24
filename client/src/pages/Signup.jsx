import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import art_img from '../assets/WEBSITE_Pics/Art.png'

export default function Signup() {
const [formData, setFormData]=useState({});
const [errorMessage, setErrorMessage] =useState(null);
const [loading,setLoading]=useState(false);
const navigate=useNavigate();
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()})
  };

  const handleSubmit =async (e)=>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage('Please fill all fields')
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res= await fetch('/api/auth/signup',{
        method:'POST',
        headers:{'Content-Type' : 'application/json'},
        body:JSON.stringify(formData),
      });
      const data =await res.json();
      if(data.success === false){
        return setErrorMessage(data.message)
      }
      setLoading(false);
      if(res.ok){
        navigate('/Sign-in')
      }
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
        }
  }
  
  return (
    <div className='my-auto'>
      <div className='flex justify-start1 p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-8'>
        {/* left Side */}
        <div className='flex-1'>
          <img src={art_img} alt=""  className="h-full"/>
        </div>
        {/* Right Side  */}
        <div className='flex-1 mb-12'>
          <form className='flex flex-col gap-4 mt-8' onSubmit={handleSubmit}>
            <div>
              <Label value='Username' className='font-semibold ml-2 tracking-wider text-teal' />
              <TextInput
                type='text'
                placeholder='Enter Your Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Email' className='font-semibold ml-2 tracking-wider text-teal' />
              <TextInput
                type='email'
                placeholder='Enter Your Email'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Create Password' className='font-semibold ml-2 tracking-wider text-teal' />
              <TextInput
                type='password'
                placeholder='Enter Your password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                  <span className="pl-3">Loading....</span>
                  </>
                ):'Sign up'
              }
            </Button>
            <OAuth/>
          </form>
          <div className="flex gap-2 text-sm mt-4 ml-16">
            <span className="text-whiteText">Already have an account </span>
            <Link to="/Sign-in" className="text-teal">Sign in
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className="mt-5" color='failure'>
                  {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}
