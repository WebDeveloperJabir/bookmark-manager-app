import React from "react";

export default function Bookmarks({ bookmarks}) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    return `${day} ${month}`;
  }

  return (
    <div className='bookmarks pt-8 pb-8 px-7 col-start-2 col-end-3 row-start-2 row-end-3 h-[calc(100vh-60px)] overflow-y-auto'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-2xl font-bold'>All bookmarks</h2>
        <button className='flex bg-white p-1 px-3 gap-2 font-semibold items-center rounded-lg border-[1px] border-[#CED2D3]'>
          <img src='/images/icon-sort.svg' alt='' />
          Sort by
        </button>
      </div>
      <div className='flex flex-wrap gap-3 justify-start'>
        {bookmarks && bookmarks.length > 0 ? (
          bookmarks.map((bookmark, index) => (
            <div className='bg-white rounded-lg border-[1px] border-[#F9F9F9] min-w-[310px] flex-1 flex flex-col' key={index}>
              <div className='flex gap-[10px] px-[15px] py-[13px] items-center justify-between'>
                <div className='flex gap-[10px] items-center'>
                  <div className='w-[40px]'>
                    <img src={bookmark.favicon.slice(8)} alt={bookmark.title} className='rounded-[5px] border-[1px] border-[#c0c0c0]' />
                  </div>
                  <div className=''>
                    <h3 className='font-bold text-[20px]'>{bookmark.title}</h3>
                    <p className='text-[#4C5C59] text-[12px]'>{bookmark.url}</p>
                  </div>
                </div>
                <div className='border-[#b8b8b8] border-[1px] w-[30px] h-[30px] flex items-center justify-center rounded-lg cursor-pointer'>
                  <img src='/images/icon-menu-bookmark.svg' alt='' />
                </div>
              </div>
              <hr className='border-[#d6d6d6] mx-[15px]' />
              <div className=' pt-[15px] px-[15px] text-[#424242] font-semibold text-[14px]'>
                <p>{bookmark.description}</p>
              </div>
              <div className='px-[15px] pb-[15px]'>
                {bookmark.tags && bookmark.tags.length > 0 && (
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {bookmark.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className='bg-[#e1eeed] text-[#809692] text-[12px] font-medium py-[2px] px-2 rounded-[5px]'>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className='py-[10px] px-[15px] mt-auto border-[#d6d6d6] border-t-[1px] flex items-center justify-between text-[#4C5C59]'>
                <div className='flex items-center gap-[17px]'>
                  <div className='flex items-center gap-[3px] text-[13px]'>
                    <img src='/images/icon-visit-count.svg' alt='' className='w-[15px] mt-[2px]' />
                    {bookmark.visitCount}
                  </div>
                  <div className='flex items-center gap-[3px] text-[13px]'>
                    <img src='/images/icon-last-visited.svg' alt='' className='w-[15px] mt-[2px]' />
                    {formatDate(bookmark.lastVisited)}
                  </div>
                  <div className='flex items-center gap-[3px] text-[13px]'>
                    <img src='/images/icon-created.svg' alt='' className='w-[15px] mt-[2px]' />
                    {formatDate(bookmark.createdAt)}
                  </div>
                </div>
                <div className=''>{bookmark.pinned ? <img src='/images/icon-pin.svg' alt='pin' className='w-[15px]' /> : null}</div>
              </div>
            </div>
          ))
        ) : (
          <div className='w-full mt-[15%] flex justify-center items-center'>
            <h2 className='text-[3vw] font-bold opacity-[0.5]'>No Bookmarks here</h2>
          </div>
        )}
      </div>
    </div>
  );
}
