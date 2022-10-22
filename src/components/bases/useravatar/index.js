import React from 'react'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
function UserAvatar(props) {
    // const { size } = props
    const { width, height } = props
    const profile = useSelector((state) => state.authentication.profile)
    console.log(profile);
    return (
        <div className='block justify-center'>
            <Avatar alt="Remy Sharp" sx={{ height: height, width: width }} src={profile.image_url} />
            <span>{profile.name}</span>
        </div>
    )
}

export default UserAvatar