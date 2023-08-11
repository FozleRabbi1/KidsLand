import AllDressCollection from "../AllDressCollection/AllDressCollection";
import Banner from "../BannerSection/Banner";
import BrandSection from "../BrandSection/BrandSection";
import InformationSection from "../InformationSection/InformationSection";
import LatetsProduce from "../LatestProduce/LatetsProduce";
import SpacialCategories from "../SpacialCategoriesSection/SpacialCategories";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <InformationSection></InformationSection>
            <SpacialCategories></SpacialCategories>
            <AllDressCollection></AllDressCollection>
            <BrandSection></BrandSection>
            <LatetsProduce></LatetsProduce>
            
            
        </div>
    );
};

export default Home;