import AllDressCollection from "../AllDressCollection/AllDressCollection";
import Banner from "../BannerSection/Banner";
import Catagories from "../CatagoriesSection/Catagories";
import InformationSection from "../InformationSection/InformationSection";
import SpacialCategories from "../SpacialCategoriesSection/SpacialCategories";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <InformationSection></InformationSection>
            <SpacialCategories></SpacialCategories>
            <AllDressCollection></AllDressCollection>
            <Catagories></Catagories>
            
        </div>
    );
};

export default Home;