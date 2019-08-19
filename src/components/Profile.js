import React from 'react'

const Profile = (props) => {
    // take the id from props
    const {user_id} = props.match.params;
    return <h1>This is the user profile for the user with the id of {user_id}</h1>
};

export default Profile;