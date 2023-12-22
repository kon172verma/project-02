import React from 'react';
import { Button } from 'react-bootstrap';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';

const Login = () => {
    return (
        <Authenticator>
            {({ signOut, user }) => (
                <main>
                    <h1>You are now logged in! Hello {user?.signInDetails?.loginId}</h1>
                    <Button onClick={signOut}>Sign out</Button>
                </main>
            )}
        </Authenticator>
    );
};
export default Login;
