import React from 'react';
import moon from './download.png';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="flex justify-around items-center  p-10">
            <h1 className="text-center capitalize text-3xl font-bold">Where in the world</h1>
            <div className="flex">
                <Image src={moon} alt="not found" className='w-[30px] h-[30px]' />
                <h4 className="dark">dark</h4>
            </div>

        </header>
    )
}

export default Header