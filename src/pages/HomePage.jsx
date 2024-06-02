import AboutUsSection from "../components/home/about-us/AboutUsSection";
import IntroductionSection from "../components/home/introduction/IntroductionSection";
import MovieSection from "../components/home/movie/MovieSection";

export default function HomePage() {
  return(
    <div>
      <IntroductionSection/>
      <MovieSection/>
      <AboutUsSection/>
    </div>
  )
}
