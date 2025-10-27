import React from "react";

export default function SideNav({ tags, sideNav, setSideNav }) {
  return (
    <>
      <div
        className={`side-nav bg-white h-screen border-r-[#F4F6F5] border-r-[1px] col-start-1 col-end-2 row-start-1 row-end-3 min-w-[200px] z-50 relative flex-col py-[20px]
          ${sideNav ? "active" : ""}`}
      >
        <div
          className='sidenav-toggle absolute right-[10px] top-[10px] hover:bg-gray-200 p-[5px] rounded-full hidden'
          onClick={() => {
            setSideNav((prev) => !prev);
          }}
        >
          <img src='/images/icon-close.svg' alt='' />
        </div>
        <div className='title px-[20px]'>
          <img src='/images/logo-light-theme.svg' alt='logo' />
        </div>
        <div className='mt-5 px-[20px]'>
          <a href='#' className='bg-[#EAF2F1] p-2 pl-[12px] pr-[12px] flex gap-[7px] font-bold rounded-lg text-[14px]'>
            <img src='/images/icon-home.svg' alt='home' />
            Home
          </a>
          <a href='#' className='bg-[#EAF2F1] p-2 pl-[12px] pr-[12px] flex gap-[7px] font-bold rounded-lg mt-[5px] text-[14px]'>
            <img src='/images/icon-archive.svg' alt='archive' />
            Archived
          </a>
        </div>
        <p className='mt-[25px] font-semibold px-[20px]'>TAGS</p>
        <div className='tags overflow-y-auto px-[22px]'>
          {Object.keys(tags).map((tag, index) => {
            return (
              <div className='tag flex justify-between items-center mt-[12px] text-[14px]' key={index}>
                <div className='flex items-center gap-[8px]'>
                  <input type='checkbox' />
                  <p>{tags[tag][1]}</p>
                </div>
                <span className='bg-[#E6F0EF] w-[20px] h-[20px] text-center text-[12px] rounded-full'>{tags[tag][0]}</span>
              </div>
            );
          })}
        </div>
      </div>
      {sideNav && <div className='fixed inset-0 bg-black opacity-50 z-40 md:hidden'></div>}
    </>
  );
}
