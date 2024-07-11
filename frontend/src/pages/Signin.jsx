import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from "../redux/user/userSlice";
// import OAuth from "../components/OAuth";

export default function Signin() {
  const [formData, setFormData]=useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
// const [errorMessage, setErrorMessage] =useState(null);
// const [loading,setLoading]=useState(false);
const navigate=useNavigate();
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()})
  };

  const handleSubmit =async (e)=> {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/Dashboard');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  
  return (
    <div className='mt-12'>
      <div className='flex justify-start mt-3 p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-16'>
        {/* left Side */}
        <div className='flex-1'>
          
          <p className='text-sm  font-serif font-semibold text-center text-whiteText tracking-wider'>
            Sign in form for Neel&apos;s Blog website for the admin Lorem ipsum
            dolor, sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
        {/* Right Side  */}
        <div className='flex-1'>
        <form className='flex flex-col gap-4 mt-20' onSubmit={handleSubmit}>
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
              <Label value='Password' className='font-semibold ml-2 tracking-wider text-teal' />
              <TextInput
                type='password'
                placeholder='Enter password *****'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
            {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign In'
              )}
            </Button>
            {/* <OAuth/> */}
          </form>
          <div className="flex gap-2 text-sm mt-4 ml-16">
            <span className="text-whiteText">Dont have an account </span>
            <Link to="/Sign-up" className="text-teal">Sign up
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
