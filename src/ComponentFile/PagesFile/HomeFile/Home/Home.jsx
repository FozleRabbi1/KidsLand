import { useLocation } from "react-router-dom";
import AllDressCollection from "../AllDressCollection/AllDressCollection";
import Banner from "../BannerSection/Banner";
import BrandSection from "../BrandSection/BrandSection";
import ContactSection from "../ContactSection/ContactSection";
import InformationSection from "../InformationSection/InformationSection";
import LatetsProduce from "../LatestProduce/LatetsProduce";
import SpacialCategories from "../SpacialCategoriesSection/SpacialCategories";
import { useEffect } from "react";
import TopTenProducts from "../TopTenProducts/TopTenProducts";
import Count from "../CounterSection/Count";
import AnimationCard from "../AnimationCollection/CercleAnimation/AnimationCard";

const Home = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div>

            <div className="mt-3">
                <marquee className="italic" behavior="" direction="" height="25px"> Kidsland Delight : Grab <span className="text-red-500 font-semibold">10% Off</span> on All Your Favorite Children's Products!</marquee>
            </div>

            <Banner></Banner>
            <InformationSection></InformationSection>
            <SpacialCategories></SpacialCategories>
            <AllDressCollection></AllDressCollection>
            <BrandSection></BrandSection>
            <LatetsProduce></LatetsProduce>
            <AnimationCard></AnimationCard>
            <ContactSection></ContactSection>
            <TopTenProducts></TopTenProducts>
            <Count></Count>


        </div>
    );
};

export default Home;