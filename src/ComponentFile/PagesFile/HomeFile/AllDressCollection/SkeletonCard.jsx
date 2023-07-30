import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonCard = ({ cards }) => {

    return Array(cards).fill(0).map((_, index) => (

            <div key={index} className="skeletonCard-style">
                <div>
                    <Skeleton height={270} width={238} />
                </div>
                <div>
                    <Skeleton width={180} />
                    <Skeleton width={100} />
                </div>
            </div>


    ));

};

export default SkeletonCard;
