import React from 'react';
import DataSet from '../data/dummyCategory';

function SideNav({ selectCategoryFunc }) {
  return (
    <div className='overflow-y-scroll h-full fixed'>
      <h6 className='flex justify-center my-2 text-lg font-semibold uppercase'>Categories</h6>
      <ul className='flex flex-col space-y-4 m-4'>
        {/* for all or no category */}
        <li id={0} onClick={(e) => { selectCategoryFunc(e) }} className='flex justify-start items-center px-2 py-1.5 rounded text-sm font-semibold uppercase text-gray-600 hover:text-gray-900 hover:bg-slate-300'>
          all
        </li>
        {DataSet.map((value) => {
          const { id, name } = value;
          return (
            <li key={id} id={id} onClick={(e) => { selectCategoryFunc(e) }} className='flex justify-start items-center px-2 py-1.5 rounded text-sm font-semibold uppercase text-gray-600 hover:text-gray-900 hover:bg-slate-300'>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default SideNav;