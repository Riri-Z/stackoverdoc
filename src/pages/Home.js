import React, { Component } from "react";
import Header from "../components/Header";
import Button from "../components/button";
import { Link } from "react-router-dom";
import "../styles/Home.scss";
class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <Header />
        <main className='home-main'>
          <h1 className='Welcome'>
            Join the best community of healthcare Practitians !
          </h1>
        </main>

        <div className='Sub-home-container-button'>
          <Link to='/'>
            <Button>Create a free account</Button>
          </Link>
          <a href='toto'>or login &rarr; </a>
        </div>
        <p>
          Share your knowledge with your peers and find the answers to your
          questions. StackOverDoc ranks responses in order of relevance, using
          an upvote system.
        </p>
      </div>
    );
  }
}
export default Home;
