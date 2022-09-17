import React from 'react';

function Header() {
  const navBarLinksList = [
    { title: 'Home', href: 'http://localhost:3000' },
    { title: 'Shop', href: 'http://localhost:3000' },
    { title: 'Contact', href: 'http://localhost:3000' },
    { title: 'About', href: 'http://localhost:3000' },
  ]
  return (
    <div className='flex w-screen bg-slate-100 shadow-md rounded-b-xl fixed z-40'>
      <div className='flex justify-between w-full m-2 px-2'>
        <div className='flex justify-center items-center space-x-2'>
          <div className='w-10 h-10 m-1 overflow-hidden'>
            <img src="https://placeholder.pics/svg/40x40/DEDEDE/555555/x" alt="logo" />
          </div>
          <h1 className='text-xl font-semibold leading-normal mb-2 text-gray-800'>Brand Name</h1>
        </div>
        <div className='flex flex-col justify-center'>
          <ul className='flex space-x-2'>
            {navBarLinksList.map((value, idx) => {
              const { title, href } = value;
              return (
                <li key={idx} className='flex justify-center items-center px-2 py-1.5 rounded text-gray-600 hover:text-gray-900 hover:bg-slate-300'>
                  <a className='text-sm font-semibold uppercase' href={href}>
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;