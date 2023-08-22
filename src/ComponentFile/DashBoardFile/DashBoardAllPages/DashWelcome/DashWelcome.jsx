import React from 'react';
import { AuthContext } from '../../../AuthProvider/AuthContextProvider';
import { useContext } from 'react';

const DashWelcome = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className=' mt-20 ' >

            <div className="flex flex-col justify-center items-center ">
                <img className='w-48 h-48 rounded-xl' src={user.photoURL} alt="" />
                <h2 className=" font-serif text-2xl">welcome <span className="text-red-500 text-5xl italic mx-2">{user.displayName}</span>  on your dashboard</h2>
                <small className="  "> ( This site is not finished yet, it's running to develop )</small>
            </div>

        </div>
    );
};

export default DashWelcome;