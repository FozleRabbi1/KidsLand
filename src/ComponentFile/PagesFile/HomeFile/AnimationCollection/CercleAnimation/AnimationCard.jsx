import React from 'react';
import './Animaiton.css';
import useSpacialCategoriesData from '../../../../HooksFile/useSpacialCategoriesData';

const AnimationCard = () => {
    const [datas, refetch, isLoading] = useSpacialCategoriesData("All");
    console.log(datas)

    return (
        <div className='animation-body'>
            <div class="gallery grid grid-cols-3 justify-center px:10 md:px-32 lg:px-56">
                <div class="gallery_line">

                    {
                        datas.slice(0, 13).map(data =>
                            <div className=' relative'>
                                <img className='img' src={data.images[1]} />
                                <h2 className='absolute animatio-headline-bg-style z-10 local-text'> {data.title} </h2>
                            </div>
                        )
                    }


                    {/* <img src="https://picsum.photos/200/300?random=1" />
                    <img src="https://picsum.photos/300/200?random=2" />
                    <img src="https://picsum.photos/300/200?random=3" />
                    <img src="https://picsum.photos/200/300?random=4" />
                    <img src="https://picsum.photos/300/200?random=5" />
                    <img src="https://picsum.photos/300/200?random=0" />
                    <img src="https://picsum.photos/200/300?random=1" />
                    <img src="https://picsum.photos/300/200?random=2" />
                    <img src="https://picsum.photos/300/200?random=3" />
                    <img src="https://picsum.photos/200/300?random=4" />
                    <img src="https://picsum.photos/300/200?random=5" /> */}

                </div>
                <div class="gallery_line">

                    {
                        datas.slice(13, 26).map(data => 
                            <div className=' relative'>
                                <img className='img' src={data.images[1]} />
                                <h2 className='absolute animatio-headline-bg-style z-10 local-text'> {data.title} </h2>
                            </div>)
                    }

                    {/* <img src="https://picsum.photos/200/300?random=6" />
                    <img src="https://picsum.photos/300/200?random=7" />
                    <img src="https://picsum.photos/200/300?random=8" />
                    <img src="https://picsum.photos/300/200?random=9" />
                    <img src="https://picsum.photos/300/200?random=10" />
                    <img src="https://picsum.photos/300/200?random=11" />
                    <img src="https://picsum.photos/200/300?random=6" />
                    <img src="https://picsum.photos/300/200?random=7" />
                    <img src="https://picsum.photos/200/300?random=8" />
                    <img src="https://picsum.photos/300/200?random=9" />
                    <img src="https://picsum.photos/300/200?random=10" />
                    <img src="https://picsum.photos/300/200?random=11" /> */}

                </div>
                <div class="gallery_line">
                    {
                        datas.slice(20, 33).map(data => 
                            <div className=' relative'>
                                <img className='img' src={data.images[1]} />
                                <h2 className='absolute animatio-headline-bg-style z-10 local-text'> {data.title} </h2>
                            </div>)
                    }

                    {/* <img src="https://picsum.photos/200/300?random=12" />
                    <img src="https://picsum.photos/300/200?random=13" />
                    <img src="https://picsum.photos/300/200?random=14" />
                    <img src="https://picsum.photos/200/300?random=15" />
                    <img src="https://picsum.photos/300/200?random=16" />
                    <img src="https://picsum.photos/300/200?random=17" />
                    <img src="https://picsum.photos/200/300?random=12" />
                    <img src="https://picsum.photos/300/200?random=13" />
                    <img src="https://picsum.photos/300/200?random=14" />
                    <img src="https://picsum.photos/200/300?random=15" />
                    <img src="https://picsum.photos/300/200?random=16" />
                    <img src="https://picsum.photos/300/200?random=17" /> */}

                </div>
            </div>

        </div>
    );
};

export default AnimationCard;