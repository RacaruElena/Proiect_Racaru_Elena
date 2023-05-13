import React from "react";


function Header(props) {

    const { title } = props;

    return (
        <header id="Header" className=' bg-gradient-to-r from-green-200 via-green-300 to-yellow-200 h-12 bg-sky-500 flex justify-center'>
            <span className='text-black text-bold text-xl self-center'>
                {title}
            </span>
        </header>

    );
}

export default Header;