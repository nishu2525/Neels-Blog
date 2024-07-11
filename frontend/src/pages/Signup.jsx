import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
// import OAuth from "../components/OAuth";

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
    <div className='mt-12'>
      <div className='flex justify-start mt-3 p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-16'>
        {/* left Side */}
        <div className='flex-1'>
          
          <p className='text-sm  font-serif font-semibold text-center text-whiteText tracking-wider'>
            Sign up form for Neel&apos;s Blog website for the admin Lorem ipsum
            dolor, sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
        {/* Right Side  */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4 mt-20' onSubmit={handleSubmit}>
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
            {/* <OAuth/> */}
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
