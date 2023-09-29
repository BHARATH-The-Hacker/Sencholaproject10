import React from "react";
import Image from "react-bootstrap/Image";
import banner from './coverImage.jpg';

function HomePage() {
  return   <Image src={banner} className="w-100 vh-100" fluid />;
  
}

export default HomePage;
