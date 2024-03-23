import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import CategoryList from '../CategoryList/CategoryList';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;