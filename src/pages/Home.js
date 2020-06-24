import React, { Component } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <main className="home-main">
          <h1>Join the best community of healthcare Practitians !</h1>
        </main>
        <div className="Sub-home-container">
          <Button link="/Sign-up" linkName="Sign up" />
          <p>
            Share your knowledge with your peers and find the answers to your
            questions. StackOverDoc ranks responses in order of relevance, using
            an upvote system.
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
