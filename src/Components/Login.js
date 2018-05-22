import React from 'react';

const Login = props => {
    return (
        <div className="login__main">
            <form onSubmit={props.getPlaylists}>
                <input type="text" name="mail" placeholder="mail" />
                <input type="password" name="password" placeholder="password" />
                <button>Log In</button>
            </form>
        </div>
    );
}

export default Login