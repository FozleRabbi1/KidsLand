import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonCard = ({ cards }) => {

    return Array(cards).fill(0).map((_, index) => (

            <div key={index} className="skeletonCard-style">
                <div>
                    <Skeleton height={266} width={"100%"} />
                </div>
                <div>
                    <Skeleton width={"80%"} />
                    <Skeleton width={"50%"} />
                </div>
            </div>


    ));

};

export default SkeletonCard;
