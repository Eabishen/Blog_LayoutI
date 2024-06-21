import React from "react";
import Navbar from "../components/Navbar";
import landing from "../assets/images/landingpage.jpg";
import Herosection from "../components/Herosection";
import BlogList from "../components/BlogList";
import AdBanner from "../components/AdBanner";
import FeaturedSection from "../components/FeaturedSection";
import CategoryTabs from "../components/CategoryTabs";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <header className="relative min-h-[95vh] bg-cover bg-center bg-no-repeat custom-header flex">
        <div className="container mx-auto px-4 py-6 flex flex-col flex-1">
          <Navbar btnStyle={false} />
          <Herosection />
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-black/40"></div>
            <img
              src={landing}
              alt="landing page"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container mx-auto px-4 py-6">
            <BlogList />
          </div>
        </section>
        <section>
          <div className="container mx-auto px-4 py-6">
            <AdBanner />
          </div>
        </section>
        <section>
          <div className="container mx-auto px-4 py-6">
            <div className="mb-4">
              <h3 className="cust-mainHeading text-2xl !font-bold">
                Top Destinations
              </h3>
              <p className="font-medium">
                Tick one more destination off of your bucket list with one of
                our most popular vacations in 2022
              </p>
            </div>
            <FeaturedSection />
          </div>
        </section>
        <section>
          <div className="container mx-auto px-4 py-6">
            <CategoryTabs />
          </div>
        </section>
        <section className="bg-black text-gray-500">
          <div className="container mx-auto px-4 py-6">
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
