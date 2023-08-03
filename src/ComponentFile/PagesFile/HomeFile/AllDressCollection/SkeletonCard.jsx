import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonCard = ({ cards }) => {

    return Array(cards).fill(0).map((_, index) => (

        <div key={index} className="skeletonCard-style">
            <div>
                <Skeleton height={266} width={"100%"} />
            </div>
            <div className="">
                <Skeleton height={11} width={"80%"} />
                <Skeleton height={11} width={"60%"} />
                <Skeleton height={11} width={"40%"} />
            </div>
        </div>


    ));

};

export default SkeletonCard;
