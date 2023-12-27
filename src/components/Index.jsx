// components/Index.js
import React from 'react';
import '../styles/Index.css';
import kenSuit from '../resources/Ken_Suit.jpg'
const Index = () => {
  return (
    <center><div id="index">
      <h2>Welcome to My Portfolio</h2>
      <img src={kenSuit} id="port-pic" alt="Portfolio of Ken Crawford"></img>
      <center><p>Welcome! This Website Is Currently Under Construction</p></center>
      {/* Add your content above */}
    </div></center>
  );
};

export default Index;
