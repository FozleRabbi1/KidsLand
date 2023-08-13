import { useLocation } from "react-router-dom";
import AllDressCollection from "../AllDressCollection/AllDressCollection";
import Banner from "../BannerSection/Banner";
import BrandSection from "../BrandSection/BrandSection";
import ContactSection from "../ContactSection/ContactSection";
import InformationSection from "../InformationSection/InformationSection";
import LatetsProduce from "../LatestProduce/LatetsProduce";
import SpacialCategories from "../SpacialCategoriesSection/SpacialCategories";
import { useEffect } from "react";

const Home = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>

            <Banner></Banner>
            <InformationSection></InformationSection>
            <SpacialCategories></SpacialCategories>
            <AllDressCollection></AllDressCollection>
            <BrandSection></BrandSection>
            <LatetsProduce></LatetsProduce>
            <ContactSection></ContactSection>


        </div>
    );
};

export default Home;