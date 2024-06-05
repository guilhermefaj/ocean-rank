import AboutUsSection from "../components/home/about-us/AboutUsSection";
import DonatorsSection from "../components/home/donators/DonatorsSection";
import IntroductionSection from "../components/home/introduction/IntroductionSection";
import MovieSection from "../components/home/movie/MovieSection";
import ParceirosSection from "../components/home/parceiros/ParceirosSection";
import ProblemSoluctionSection from "../components/home/problem-solution/ProblemSoluctionSection";

export default function HomePage() {
  return(
    <div>
      <IntroductionSection/>
      <MovieSection/>
      <AboutUsSection/>
      <ProblemSoluctionSection/>
      <DonatorsSection/>
      <ParceirosSection/>
    </div>
  )
}
