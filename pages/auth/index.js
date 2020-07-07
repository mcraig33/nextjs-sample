import React from 'react';
import User from '../../components/User'

const authIndexPage = () => (
    <div>
        <h1>The Aux Page</h1>
        <User name="Max" age={39} />
    </div>
);

export default authIndexPage;