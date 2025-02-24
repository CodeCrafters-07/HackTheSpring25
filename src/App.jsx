import Banner from "./sections/Banner";
import Category from "./sections/category";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Insta from "./sections/Insta";
import Productsgrid from "./sections/Productsgrid";
import Reviews from "./sections/Reviews";
import Services from "./sections/Services";
import Types from "./sections/Types";

export default function App() {
  return (
    <>
    <Header />
    <Hero />
    <Category />
    <Types />
    <Services />
    <Productsgrid />  
    <Banner />
    <Reviews />
    <Insta />
    <Footer />
    </>
    // <h1 className="text-5xl font-bold">I AM RUNNING !!!</h1>
  )
}