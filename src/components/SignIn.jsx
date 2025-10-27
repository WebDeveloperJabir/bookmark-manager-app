import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [jsonError, setJsonError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function fetchData(email, password) {
    let res;
    try {
      res = await fetch(`/database/users/${email}.json`);
    } catch (error) {
      return null;
    }
    if (!res.ok) {
      setJsonError(true);
      return null;
    }
    let data;
    try {
      data = await res.json();
    } catch (error) {
      setJsonError(true);
      return null;
    }
    return data;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const email = encodeURIComponent(emailRef.current.value.trim());
    const password = passwordRef.current.value;
    const data = await fetchData(email, password);
    setLoading(false);
    if (!data) return;
    if (data.password && data.password === password) {
      setJsonError(false);
      const userData = await fetch(`/database/bookmarks/${email}.json`);
      if (!userData.ok) return;
      const userDataJson = await userData.json();
      navigate("/dashboard", { state: { userData: userDataJson } });
    } else {
      setJsonError(true);
    }
  }

  function guestMode() {
    navigate("/dashboard", { state: { userData: { name: "Guest", image: "/images/icon-guest-mode.svg", email: "You're in Guest Mode" } } });
  }

  return (
    <div className='sign-in-container flex justify-center items-center min-h-screen'>
      <div className='sign-in shadow-xl p-[30px] min-w-[200px] w-[400px] rounded-2xl bg-white'>
        <img src='/images/logo-light-theme.svg' alt='Logo' />
        <div className='title mt-[25px]'>
          <h2 className='text-[22px] font-medium'>Log in to your account</h2>
          <p className='text-[13px] mt-[3px]'>Welcome back! Please enter your details.</p>
        </div>
        <form onSubmit={handleSubmit} className='mt-[15px]'>
          <label
            htmlFor='email'
            className='
        text-[13px] font-medium'
          >
            Email
          </label>
          <br />
          <input
            type='email'
            id='email'
            name='email'
            ref={emailRef}
            required
            className={`w-full border-1 rounded-[5px] p-[6px] mt-0.5 mb-2 text-[14px] hover:bg-[#E8F0EF] ${
              jsonError ? "border border-red-500" : "border border-[#C4C9C8]"
            } focus:outline-offset-2 focus:outline-[2px] outline-0 outline-[#014745]`}
          />
          <br />
          <label
            htmlFor='password'
            className='
        text-[13px] font-medium'
          >
            Password
          </label>
          <br />
          <input
            type='password'
            id='password'
            name='password'
            ref={passwordRef}
            required
            className={`w-full border-1 rounded-[5px] p-[6px] mt-0.5 mb-2 text-[14px] hover:bg-[#E8F0EF] ${
              jsonError ? "border border-red-500" : "border border-[#C4C9C8]"
            } focus:outline-offset-2 focus:outline-[2px] outline-0 outline-[#014745]`}
          />
          <br />
          {jsonError && (
            <div className='bg-[#e9e9e9] p-2 mt-4 mb-1 rounded-[7px] flex items-center gap-[7px]'>
              <img src='/images/icon-error.svg' alt='error' className='block w-[14px] mt-[1px]' />
              <p className='font-[500] text-[14px]'>Incorrect email or password. Please try again.</p>
            </div>
          )}
          <button type='submit' className='w-full bg-[#014745] text-white p-2.5 rounded-[7px] mt-4 text-[14px] hover:bg-[#013C3B]'>
            Log in
          </button>
        </form>
        <div className='mt-6 leading-6 text-center'>
          <p className='text-[13px] text-[#62716E]'>
            Forgot password?{" "}
            <a href='#' className='font-medium text-black hover:text-[#014745]'>
              Reset it
            </a>
          </p>
          <p className='text-[13px] text-[#62716E]'>
            Don't have an account?{" "}
            <a href='#' className='font-medium text-black hover:text-[#014745]'>
              Sign up
            </a>
          </p>
          <p className='text-[13px] text-[#62716E]'>
            Want to browse as a guest?{" "}
            <a href='' onClick={guestMode} className='font-medium text-black hover:text-[#014745]'>
              Continue
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
