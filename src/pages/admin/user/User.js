import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '../../../services/user.service';

const User = () => {
    
    let navigate=useNavigate();
    
    useEffect(() => {
        userService.getAllUsers()
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
        
    }, [])

    const marcel=(userId)=>{
        console.log("click "+userId );
        navigate("../edit/" + userId ,  {replace:true})
    }
    return (
        <div className='User'>
            User Liste
            <button onClick={()=>marcel(4)}>user 4</button>
        </div>
    );
};

export default User;