import React from 'react';
import Banner from './Banner'
import Category from "./Category";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Insta from "./Insta";
import Reviews from "./Reviews";
import Types from "./Types";

const Home = () => {
  return (
   <>
    <Header />
    <Hero />
    <Category />
    <Types />
    <Banner />
    <Reviews />
    <Insta />
    <Footer />
   </>
  )
}

export default Home