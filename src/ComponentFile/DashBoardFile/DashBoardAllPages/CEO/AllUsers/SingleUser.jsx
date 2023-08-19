import React from 'react';
import useAxiosSecure from '../../../../HooksFile/useAxiosSecure';
import { toast } from 'react-toastify';

const SingleUser = ({ user }) => {
    const [axiosSecure] = useAxiosSecure();

    const roleChangeFun = (email, role) => {
        axiosSecure.patch(`/roleChangeApi?email=${email}&role=${role}`)
            .then(res => {
                if (res.data.acknowledged) {
                    toast.success(`${user.name} is ${role} right now`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            })
    }

    return (
        <div>

            <div className='flex justify-center flex-col items-center border pt-2'>
                <img className='h-44 w-44 rounded-full' src={user?.photoUrl} alt="" />
                <div className='px-10 text-center mt-5'>
                    <h2>{user?.name}</h2>
                    <h2>{user?.email}</h2>
                </div>
                <div className='text-center bg-base-300 w-full p-2'>
                    <h2 className='font-bold text-red-500'>Make him/his</h2>
                    <div className='flex justify-between mt-2'>
                        <button onClick={() => roleChangeFun(user?.email, "admin")} className='bg-gray-200 rounded-full px-2 font-semibold hover:text-red-500 duration-500'>Admin</button>
                        <button onClick={() => roleChangeFun(user?.email, "manager")} className='bg-gray-200 rounded-full px-2 font-semibold hover:text-red-500 duration-500'>Manager</button>
                        <button onClick={() => roleChangeFun(user?.email, "user")} className='bg-gray-200 rounded-full px-2 font-semibold hover:text-red-500 duration-500'>User</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;