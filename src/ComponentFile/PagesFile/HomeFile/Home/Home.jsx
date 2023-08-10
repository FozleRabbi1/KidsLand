import AllDressCollection from "../AllDressCollection/AllDressCollection";
import Banner from "../BannerSection/Banner";
import InformationSection from "../InformationSection/InformationSection";
import SpacialCategories from "../SpacialCategoriesSection/SpacialCategories";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <InformationSection></InformationSection>
            <SpacialCategories></SpacialCategories>
            <AllDressCollection></AllDressCollection>

            
            
        </div>
    );
};

export default Home;