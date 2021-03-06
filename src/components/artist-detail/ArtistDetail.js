import React from 'react';
import styles from './ArtistDetail.css';
import Nav from '../header/Nav';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { 
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSoundcloud,
  FaVimeo,
  FaBandcamp,
  FaDesktop,
  FaArrowCircleLeft
} from 'react-icons/fa';


export default function ArtistDetail({ artist }) {
  console.log(artist);
  const link = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/${artist.soundcloudId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
  return (
    <div className={styles.all}>
      <Nav/>
      <Link to='/'><FaArrowCircleLeft className={styles.backButton}/></Link>
      <h3 className={styles.name}>{artist.artistName}</h3>
      
      <div className={styles.socialSection}>
        <div className={styles.socialMediaContainer}>
          {artist.facebook && <a href={artist.facebook}target='_blank' rel="noopener noreferrer"  ><FaFacebook className={styles.facebook}/></a>}
          {artist.instagram && <a href={artist.instagram} target='_blank' rel="noopener noreferrer"  ><FaInstagram className={styles.instagram}/></a>}
          {artist.twitter && <a href={artist.twitter} target='_blank' rel="noopener noreferrer"  ><FaTwitter className={styles.twitter}/></a>}
          {artist.youtube && <a href={artist.youtube} target='_blank' rel="noopener noreferrer"  ><FaYoutube className={styles.youtube}/></a>}
          {artist.soundcloudId && <a href={artist.soundcloud} target='_blank' rel="noopener noreferrer"  ><FaSoundcloud className={styles.soundcloud}/></a>}
          {artist.vimeo && <a href={artist.vimeo} target='_blank' rel="noopener noreferrer"  ><FaVimeo className={styles.vimeo}/></a>}
          {artist.bandcamp && <a href={artist.bandcamp} target='_blank' rel="noopener noreferrer"><FaBandcamp className={styles.bandcamp}/></a>}
          {artist.website && <a href={artist.website} target='_blank' rel="noopener noreferrer" ><FaDesktop className={styles.website}/></a>}
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.pictureContainer}>
          <img className={styles.picture} src={artist.img} alt="artist-photo"/>
        </div>
        <div className={styles.rightColumn}>
          <p className={styles.description}>{artist.description}</p>
        </div>
      </main>
      <div className={styles.songSection}>
        <div className={styles.soundcloudContainer}>
          {artist.soundcloudId && <iframe width="100%" height="600" scrolling="no" frameBorder="no" allow="autoplay" src={link}></iframe>}
        </div>
      </div>
      
    </div>
  );
}

ArtistDetail.propTypes = {
  artist: PropTypes.object.isRequired
};
