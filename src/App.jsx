import Banner from "./sections/Banner";
import Category from "./sections/Category";
import Footer from "./sections/Footer";
import Franchise from "./sections/Franchise";
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
    <Franchise />
    {/* <Hero />
    <Category />
    <Types /> */}
    {/* <Services /> Not useful for our business website */}
    {/* <Productsgrid />  Not useful for our business website*/}
    {/* <Banner />
    <Reviews />
    <Insta /> */}
    <Footer />
    </>
    // <h1 className="text-5xl font-bold">I AM RUNNING !!!</h1>
  )
}