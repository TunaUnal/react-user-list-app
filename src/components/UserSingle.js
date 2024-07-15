import React from 'react'

function UserSingle({ user }) {
    return (
        <>
            <div className="col-md-6 col-sm-12 col-xs-12 my-3">
                <div className="card flex-row">
                    <div className="img">
                        <img src={user.picture.large} width="auto" height="auto" alt="User Image" />
                    </div>
                    <div className='p-3 user-info'>
                        <h3>{user.name.first + " " + user.name.last}</h3>
                        <p>E-Mail : {user.email}</p>
                        <p>{user.location.country} | {user.location.city}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserSingle