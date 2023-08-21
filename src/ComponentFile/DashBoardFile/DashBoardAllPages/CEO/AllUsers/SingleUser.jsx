import React from 'react';
import useAxiosSecure from '../../../../HooksFile/useAxiosSecure';
import { toast } from 'react-toastify';
import useAllUsers from '../../../../HooksFile/DashBoardHooks/useAllUsers';
import Swal from 'sweetalert2';

const SingleUser = ({ user }) => {
    const [axiosSecure] = useAxiosSecure();
    const { userData, userRefetch } = useAllUsers();

    const roleChangeFun = (id, role) => {
        axiosSecure.patch(`/roleChangeApi?id=${id}&role=${role}`)
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
                    userRefetch();
                }
            })
    }

    const deleteUserFun = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You won't remove ${user.name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(() => {
                        Swal.fire(
                            'Deleted!',
                            'User has been deleted.',
                            'success'
                        )
                        userRefetch();
                    })
            }
        })

    }

    return (
        <div>

            <div className='flex justify-center flex-col items-center border pt-2 relative'>
                <button onClick={() => deleteUserFun(user?._id)} className='absolute top-2 right-2 rounded-full w-6 h-6 font-semibold'>X</button>
                <img className='h-44 w-44 rounded-full' src={user?.photoUrl} alt="" />
                <div className='px-10 text-center my-2 font-semibold'>
                    <small className='block'>{user?.name}</small>
                    <small className='block'>{user?.email}</small>
                </div>
                <div className='text-center bg-base-300 w-full p-2'>
                    <h2 className='font-bold text-red-500'>Make him/his</h2>
                    <div className='flex justify-between mt-2'>

                        <button disabled={user.role === "admin" ? true : false} onClick={() => roleChangeFun(user?._id, "admin")} className={` rounded-full px-2 font-semibold hover:text-red-500 duration-500 ${user.role === "admin" ? "text-red-500 cursor-no-drop" : "text-black"}`}>Admin</button>

                        <button disabled={user.role === "manager" ? true : false} onClick={() => roleChangeFun(user?._id, "manager")} className={` rounded-full px-2 font-semibold hover:text-red-500 duration-500 ${user.role === "manager" ? "text-red-500 cursor-no-drop" : "text-black"}`}>Manager</button>

                        <button disabled={user.role === "user" || !user.role ? true : false} onClick={() => roleChangeFun(user?._id, "user")} className={` rounded-full px-2 font-semibold hover:text-red-500 duration-500 ${user.role === "user" || !user.role ? "text-red-500 cursor-no-drop" : "text-black"}`}>User</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleUser;