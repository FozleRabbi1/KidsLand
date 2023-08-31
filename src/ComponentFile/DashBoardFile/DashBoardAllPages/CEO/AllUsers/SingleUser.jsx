import React, { useContext } from 'react';
import useAxiosSecure from '../../../../HooksFile/useAxiosSecure';
import { toast } from 'react-toastify';
import useAllUsers from '../../../../HooksFile/DashBoardHooks/useAllUsers';
import Swal from 'sweetalert2';

const SingleUser = ({  users }) => {
    const [axiosSecure] = useAxiosSecure();
    const { userData, userRefetch } = useAllUsers();
    console.log(users)

    const roleChangeFun = (id, role) => {
        axiosSecure.patch(`/roleChangeApi?id=${id}&role=${role}`)
            .then(res => {
                if (res.data.acknowledged) {
                    toast.success(`${users.name} is ${role} right now`, {
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
            text: `You won't remove ${users.name}`,
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
                <button onClick={() => deleteUserFun(users?._id)} className='absolute top-2 right-2 rounded-full w-6 h-6 font-semibold'>X</button>
                <img className='h-44 w-44 rounded-full' src={users?.photoUrl} alt="" />
                {/* <img className='h-44 w-44 rounded-full' src="https://lh3.googleusercontent.com/a/AAcHTtcpcyIAeFDQFE5hNtEMCIX7NnxDL4CpYeq_MHiuIMCSmQ=s96-c" alt="" /> */}
                <div className='px-10 text-center my-2 font-semibold'>
                    <small className='block'>{users?.name}</small>
                    <small className='block'>{users?.email}</small>
                </div>
                <div className='text-center bg-base-300 w-full p-2'>
                    <h2 className='font-bold text-red-500'>Make him/his</h2>
                    <div className='flex justify-between mt-2'>

                        <button disabled={users.role === "admin" ? true : false} onClick={() => roleChangeFun(users?._id, "admin")} className={` rounded-full px-2 font-semibold hover:text-red-500 duration-500 ${users.role === "admin" ? "text-red-500 cursor-no-drop" : "text-black"}`}>Admin</button>

                        <button disabled={users.role === "manager" ? true : false} onClick={() => roleChangeFun(users?._id, "manager")} className={` rounded-full px-2 font-semibold hover:text-red-500 duration-500 ${users.role === "manager" ? "text-red-500 cursor-no-drop" : "text-black"}`}>Manager</button>

                        <button disabled={users.role === "user" || !users.role ? true : false} onClick={() => roleChangeFun(users?._id, "user")} className={` rounded-full px-2 font-semibold hover:text-red-500 duration-500 ${users.role === "user" || !users.role ? "text-red-500 cursor-no-drop" : "text-black"}`}>User</button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleUser;