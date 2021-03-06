import React, { PureComponent } from 'react';
import styles from './Form.css';
import PropTypes from 'prop-types';
import Footer from '../footer/Footer';


class ArtistForm extends PureComponent {
  static propTypes = {
    createArtist: PropTypes.func
  }

  state = {
    artistName: '', 
    contact:'',
    email:'', 
    img:'', 
    website:'',
    facebook:'',
    twitter:'',
    instagram:'',
    bandcamp:'',
    soundcloud:'',
    youtube:'',
    vimeo:'',
    genre:'',
    description: '' 
  }

  handleSubmit = e => {
    e.preventDefault();
    const { 
      artistName, 
      contact,
      email, 
      img, 
      website,
      facebook,
      twitter,
      instagram,
      bandcamp,
      soundcloud,
      youtube,
      vimeo,
      genre,
      description  
    } = this.state;

    const { createArtist } = this.props;

    createArtist( 
      artistName, 
      contact,
      email, 
      img, 
      website,
      facebook,
      twitter,
      instagram,
      bandcamp,
      soundcloud,
      youtube,
      vimeo,
      genre,
      description
    );
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {

    return (
      <>
      <section className={styles.container}>
        <form className={styles.form}onSubmit={this.handleSubmit}>
          <h2 className={styles.h2}>Create Artist Profile</h2>
          <input className={styles.input}type='text' name='artistName' onChange={this.handleChange} placeholder='Artist Name/Band Name' autoFocus/>
          <input className={styles.input}type='text' name='contact' onChange={this.handleChange} placeholder='Contact'  />
          <input className={styles.input}type='text' name='email' onChange={this.handleChange} placeholder='Email' />
          <input className={styles.input}type='text' name='img' onChange={this.handleChange} placeholder='Photo URL' />
          <input className={styles.input}type='text' name='website' onChange={this.handleChange} placeholder='Website URL' />
          <input className={styles.input}type='text' name='facebook' onChange={this.handleChange} placeholder='Facebook URL' />
          <input className={styles.input}type='text' name='twitter' onChange={this.handleChange} placeholder='Twitter URL' />
          <input className={styles.input}type='text' name='instagram' onChange={this.handleChange} placeholder='Instagram URL' />
          <input className={styles.input}type='text' name='bandcamp' onChange={this.handleChange} placeholder='Bandcamp URL' />
          <input className={styles.input}type='text' name='soundcloud' onChange={this.handleChange} placeholder='Soundcloud URL' />  
          <input className={styles.input}type='text' name='youtube' onChange={this.handleChange} placeholder='Youtube URL' />  
          <input className={styles.input}type='text' name='vimeo' onChange={this.handleChange} placeholder='Vimeo URL' />  
          <label className={styles.label}>Select Music Genre: </label>
          <select className={styles.select}name='genre' onChange={this.handleChange}>
            <option name='genre' value="acoustic">Acoustic</option>
            <option name='genre' value="blues">Blues</option>
            <option name='genre' value="country">Country</option>
            <option name='genre' value="edm">EDM</option>
            <option name='genre' value="electro">Electro</option>
            <option name='genre' value="experimental">Experimental</option>
            <option name='genre' value="folk">Folk</option>
            <option name='genre' value="funk">Funk</option>
            <option name='genre' value="garage">Garage</option>
            <option name='genre' value="hip-hop">Hip-hop</option>
            <option name='genre' value="indie">Indie</option>
            <option name='genre' value="jazz">Jazz</option>
            <option name='genre' value="metal">Metal</option>
            <option name='genre' value="pop">Pop</option>
            <option name='genre' value="psych">Psych</option>
            <option name='genre' value="punk">Punk</option>
            <option name='genre' value="r&amp;b">R&amp;B</option>
            <option name='genre' value="rap">Rap</option>
            <option name='genre' value="reggae">Reggae</option>
            <option name='genre' value="regular">Regular</option>
            <option name='genre' value="rock">Rock</option>
            <option name='genre' value="soul">Soul</option>
            <option name='genre' value="techno">Techno</option>
            <option name='genre' value="world">World</option>
          </select>
          <textarea className={styles.textarea}name="description" placeholder="Please include a short bio" onChange={this.handleChange}></textarea>
          
          <button className={styles.button}>Submit</button> 
        </form>
      </section>
      </>
    );
  }
}

export default ArtistForm;
