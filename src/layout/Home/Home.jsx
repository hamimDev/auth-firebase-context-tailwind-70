import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Home = () => {

    const {user} = useContext(AuthContext);
    console.log(user);

    return (
        <div className="pt-20">
            User Name: 
        </div>
    );
};

export default Home;