import React from "react";

export default function SideNav({ className }) {
  const tags = {
    AI: 0,
    Community: 0,
    Compatibility: 0,
    CSS: 0,
    Design: 0,
    Framework: 0,
    Git: 0,
    HTML: 0,
    JavaScript: 0,
    Layout: 0,
    Learning: 0,
    Performance: 0,
    Practice: 0,
    Reference: 0,
    Tips: 0,
    Tools: 0,
    Tutorial: 0,
  };

  return (
    <div className={`side-nav flex flex-col bg-white h-screen p-[20px] border-r-[#F4F6F5] border-r-[1px] ${className}`}>
      <div className='title'>
        <img src='/images/logo-light-theme.svg' alt='logo' />
      </div>
      <div className='mt-5'>
        <a href='#' className='bg-[#EAF2F1] p-2 pl-[12px] pr-[12px] flex gap-[7px] font-bold rounded-lg text-[14px]'>
          <img src='/images/icon-home.svg' alt='home' />
          Home
        </a>
        <a href='#' className='bg-[#EAF2F1] p-2 pl-[12px] pr-[12px] flex gap-[7px] font-bold rounded-lg mt-[5px] text-[14px]'>
          <img src='/images/icon-archive.svg' alt='archive' />
          Archived
        </a>
      </div>
      <div className='tags mt-[25px]'>
        <p>TAGS</p>
        {Object.keys(tags).map((tag, index) => {
          return (
            <div className='tag flex justify-between items-center mt-[12px] text-[14px]' key={index}>
              <div className='flex items-center gap-[8px]'>
                <input type='checkbox' />
                <p>{tag}</p>
              </div>
              <span className='bg-[#E6F0EF] w-[20px] h-[20px] text-center text-[12px] rounded-full'>{tags[tag]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
