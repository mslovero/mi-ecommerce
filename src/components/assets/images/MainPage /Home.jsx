import Categories from "./Categories"
//import SlideCard from "./SlideCard"
import Slider from "./Slider"

const Home = () => {
    return (
      <>
        <section className="home">
					<div className="container d_flex">
						<Categories />
						<Slider />

					</div>
				</section>

      </>
    )
}


export default Home