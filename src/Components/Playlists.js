import React from 'react';


const Playlists = (props) => {
    return (
        <div className="inner">
            <nav id="menu">
                <header className="major">
                    <h2>Playlists</h2>
                </header>
                <ul>
                    {props.playlists.map(function (p) {
                        return (<li key={p}><a href="" onClick={(e) => {props.getPlaylistTracks({p}, e)}} >{p}</a></li>)
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default Playlists