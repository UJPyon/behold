import React from 'react';
import { Link } from 'react-router-dom';

export const SplashPage = () => (
  <section className="splash-active">
    <div className="splash-active-text">
      <img className="splash-logo" src="https://behold-aa.s3.us-east-2.amazonaws.com/behold_logo_bold.png" />
      <p>Behold is a website where students can showcase their works</p>
      <p>of art! Share your awesome creations for everyone to behold!</p>
    </div>
    <div className="splash-active-link">
      <Link to="/login">Log in</Link>
      <Link to="/signup">Get started</Link>
    </div>
  </section>
)