import React, { useState } from "react";

export default function TopBar({ avatar, name, email, logOut, className }) {
  const [showUserDetails, setShowUserDetails] = useState(false);

  function UserDetails() {
    return (
      <div className={`absolute right-0 mt-10 w-[300px] bg-white rounded-lg shadow-xl border border-[#F4F6F5] z-50 ${className}`}>
        <div className='p-[13px] flex gap-[7px] items-center'>
          <div className='max-w-[70px]'>
            <img src={avatar} alt='' className='rounded-full' />
          </div>
          <div className=''>
            <p className='font-semibold'>{name}</p>
            <p className='text-[#4C5C59] text-[13px] break-words'>{email}</p>
          </div>
        </div>
        <hr className='border-[#ECECED]' />
        <div className='p-[13px] flex justify-between items-center text-[#4C5C59] font-semibold'>
          <div className='flex gap-[10px]'>
            <img src='/images/icon-theme.svg' alt='' />
            <p>Theme</p>
          </div>
          <div className='flex bg-[#DDE9E7] w-[70px] p-[2px] justify-between rounded-[4px] focus:outline-offset-2 focus:outline-[2px] outline-0 outline-[#014745] peer-focus:bg-blue-500' tabIndex='0'>
            <button className='p-[5px] px-[7px] bg-white rounded-[4px] peer'>
              <img src='/images/icon-light-theme.svg' alt='' className='w-[18px]' />
            </button>
            <button className='p-[5px] px-[7px] bg-white rounded-[4px] peer'>
              <img src='/images/icon-dark-theme.svg' alt='' className='w-[18px]' />
            </button>
          </div>
        </div>
        <hr className='border-[#ECECED]' />
        <div className='p-[13px] flex justify-between items-center gap-[10px]'>
          <img src='/images/icon-logout.svg' alt='' />
          <button className='cursor-pointer text-[#4C5C59] font-semibold w-full text-left' onClick={logOut}>
            Logout
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className='topbar w-full bg-white border-b-[#F4F6F5] border-b-[1px] flex items-center justify-between px-[25px] relative'>
      <div className='flex relative'>
        <img src='/images/icon-search.svg' alt='' className='absolute top-[25%] left-[9px]' />
        <input
          type='text'
          name=''
          id=''
          placeholder='Search by title...'
          className='border-[#e7e7e7] border-[1px] rounded-lg p-2 text-[14px] pl-[35px] font-semibold w-[300px] focus:outline-[#014745] focus:outline-offset-2 focus:outline-[2px]'
        />
      </div>
      <div className='flex gap-[15px] relative'>
        <button className='bg-[#024647] text-white p-[7px] px-[13px] rounded-lg focus:outline-[#014745] focus:outline-offset-2 focus:outline-[2px]'>
          <span className='mr-[5px]'>+</span> Add Bookmark
        </button>
        <div className=''>
          <img
            src={avatar}
            alt=''
            className={`w-[35px] rounded-full cursor-pointer ${showUserDetails ? "outline-2 outline-[#014745] outline-offset-2" : ""}`}
            onClick={() => setShowUserDetails(!showUserDetails)}
          />
        </div>
        {showUserDetails && <UserDetails />}
      </div>
    </div>
  );
}
