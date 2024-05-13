import { Link } from "react-router-dom";
import hero from "../assets/images/hero.png";
import Article from "../components/Article";
import DiseaseCategories from "../components/DiseaseCategories";
import ReviewCarousel from "../components/ReviewCarousel";
import TreatmentTypes from "../components/TreatmentTypes";

import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <div className=" bg-cyan-200">
        <div>
          <div className="flex h-scree w-full bg-zinc-200 pt-1">
            <div className="textstructure mt-52 px-20 ">
              {["We Provide ", "Disease's", "Different Solution"].map(
                (item, index) => {
                  return (
                    <div className="masker" key={index}>
                      <h1 className="font-['Founders_Grotesk_Condensed'] text-5xl font-semibold uppercase  leading-[4vw] text-black">
                        {item}
                      </h1>
                    </div>
                  );
                },
              )}
              <div className="mt-12 ">

              <Link
                className=" rounded-md border bg-cyan-500 hover:bg-sky-900 hover:text-white px-6 py-1.5"
                to={'./DiseaseSearch'}
                >
                Get Search
              </Link>
                </div>
            </div>
            <div className="container flex w-1/3 ">
              <img className=" " src={hero} alt="" />
            </div>
          </div>
        </div>
        
        {/* Types Of Treatement */}
        <TreatmentTypes />
        
        {/* Categories Of Disease */}
        <DiseaseCategories />


        {/* Traditional Treatement Section For introducing */}
        <div className="hero min-h-screen  left-[50%] right-[50%] px-4">
          <div className=" hero-content flex-col lg:flex-row">
            <img
              src="./doctor.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="px-26 text-center lg:text-left md:text-center">
              <h1 className="text-5xl font-bold">Doctor's Treatment!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn bg-cyan-300 hover:bg-cyan-900 hover:text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <Article />
        <ReviewCarousel />

        <div className="hero min-h-screen px-4">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <img
              src="./herbal.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Herbal Treatment</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn bg-cyan-300 hover:bg-cyan-900 hover:text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
