import React, { useState } from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';
import MainContent from './components/MainContent';

function App() {
    const [currentCategoryId, setCurrentCategoryId] = useState(0)

    const changeCategory = (e) => {
        setCurrentCategoryId(parseInt(e.target.id));
    }

    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <div className='grid grid-cols-10 flex-grow mt-16'>
                <div className='col-span-2 bg-gray-50'><SideNav selectCategoryFunc={changeCategory} /></div>
                <div className='col-span-8'><MainContent currentCategoryId={currentCategoryId} /></div>
            </div>
        </div>
    )
}

export default App;