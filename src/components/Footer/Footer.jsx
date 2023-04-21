import React from 'react'
import './Footer.css'

// icons
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h3>E-Governance</h3>
        <p>Chat with the Bot to get the latest government schemes available</p>
        <ul className="socials">
          <li><a href="https://www.instagram.com" target="_blank"><InstagramIcon /></a></li>
          <li><a href="https://www.facebook.com" target="_blank"><FacebookIcon /></a></li>
          <li><a href="https://www.twitter.com" target="_blank"><TwitterIcon /></a></li>
          <li><a href="https://www.reddit.com" target="_blank"><RedditIcon /></a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p> &#174; Copyrights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer