import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Signup() {
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
          <form className='flex flex-col gap-4 mt-20'>
            <div>
              <Label value='Username' className='font-semibold ml-2 tracking-wider text-teal' />
              <TextInput
                type='text'
                placeholder='Enter Your Username'
                id='username'
              />
            </div>
            <div>
              <Label value='Email' className='font-semibold ml-2 tracking-wider text-teal' />
              <TextInput
                type='email'
                placeholder='Enter Your Email'
                id='email'
              />
            </div>
            <div>
              <Label value='Create Password' className='font-semibold ml-2 tracking-wider text-teal' />
              <TextInput
                type='password'
                placeholder='Enter Your password'
                id='password'
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-4 ml-16">
            <span className="text-whiteText">Already have an account </span>
            <Link to="/Sign-in" className="text-teal">Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
