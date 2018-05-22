import React from 'react';

let img = 'https://i.scdn.co/image/e61b4ab1d05a00889ff8d30abcfed5510cdf6ee7';

const Tracks = (props) => {
    return (
        <div className="inner">
            <section>
                <header>
                    <h1>Tracks</h1>
                </header>
                <div className="container">
                    <div className="row text-center text-lg-left">
                        {props.tracks.map(function (t) {
                            return (
                                <div className="col-lg-3 col-md-4 col-xs-6" key={t.title}>
                                <a href="#" id="thumbnail" className="d-block mb-4 h-100">
                                    {/* <img className="img-fluid img-thumbnail" src={t.albumArtRef[0].url} alt="" /> */}
                                    <img className="img-fluid img-thumbnail" src={t.albumArt} alt="" />
                                    <p>{t.artist + ' - ' + t.title}</p>
                                </a>
                            </div>
                            );
                        })}
                    </div></div>
                <span className="image main"><img src="images/pic11.jpg" alt="" /></span>
            </section>
        </div>
    );
}

export default Tracks