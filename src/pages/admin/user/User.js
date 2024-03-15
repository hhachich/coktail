import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
    
    let navigate=useNavigate();
    
    useEffect(() => {
        console.log('useEffect')
        
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