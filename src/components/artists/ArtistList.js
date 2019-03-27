import React from 'react';
import styles from './ArtistList.css';
import PropTypes from 'prop-types';

function ArtistList(props){
  const { artists, handleClick } = props;
  const artistList = artists.map((artist, i) => { 
    return <li key={i} onClick={handleClick}>
      <img src={artist.img}/>
      { artist.artistName }
    </li>;
  });
  return (
    <section className={styles.artistListSection}>
      <ul className={styles.artistList}>
        { artistList }
      </ul>
    </section>
  );
}


ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};
export default ArtistList;
