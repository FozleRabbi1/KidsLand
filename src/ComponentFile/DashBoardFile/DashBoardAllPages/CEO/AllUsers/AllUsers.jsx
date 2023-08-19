import React from 'react';
import useAllUsers from '../../../../HooksFile/DashBoardHooks/useAllUsers';
import SingleUser from './SingleUser';

const AllUsers = () => {
    const { userData, userRefetch } = useAllUsers();

    return (
        <div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-5 ps-10 mb-10'>
                {
                    userData?.map(user =>
                        <SingleUser
                            key={user._id}
                            user={user}
                        ></SingleUser>
                    )
                }
            </div>
        </div>
    );
};

export default AllUsers;