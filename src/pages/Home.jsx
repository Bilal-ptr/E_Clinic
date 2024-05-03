import hero from "../assets/images/hero.png";
import Article from "../components/Article";
import DiseaseCategories from "../components/DiseaseCategories";
import ReviewCarousel from "../components/ReviewCarousel";
import TreatmentTypes from "../components/TreatmentTypes";

function Home() {
  return (
    <div className=" bg-cyan-200">
      <div className="flex h-screen  w-full bg-zinc-200 pt-1">
        <div className="textstructure  mt-52 px-20">
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
        </div>
        <div className="container flex w-1/3 ">
          <img className=" " src={hero} alt="" />
        </div>
      </div>

      <TreatmentTypes />
      <DiseaseCategories />
      <Article />
      <ReviewCarousel />

      <div className="hero min-h-screen px-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
