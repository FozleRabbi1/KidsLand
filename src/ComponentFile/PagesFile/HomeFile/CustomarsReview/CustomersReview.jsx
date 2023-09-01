import './CustomersReviews.css'

const CustomersReview = () => {
    return (
        <div className='customre-review-main-div mb-5 md:mb-10 py-10'>

            <h1 data-aos="flip-up" className='text-xl md:text-3xl text-center'>Top Review <sub>(todo)</sub> </h1>
            <h3></h3>
            <div class="customre-review-gallery">

                <div id="top-left-a" class="img-a img relative ">
                    <img className='w-full h-full' src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=2000" alt="maccaw" />
                    <button className='button'>show review</button>
                </div>

                <div id="top-left-b" class="img-b img relative">
                    <img className='w-full h-full' src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=" alt="a waterfall and many rocks" />
                    <button className='button'>show review</button>
                </div>

                <div id="top-right-a" class="img-c img relative"  >
                    <img className='w-full h-full' src="https://media.istockphoto.com/id/635876214/photo/dude-in-black.jpg?s=612x612&w=0&k=20&c=zN4libXF-KHENTf9bxXt3eQW9PrOTHgHdFmIP4ZMDzQ=" alt="a poison frog" />
                    <button className='button'>show review</button>
                </div>

                <div id="top-right-b" class="img-d img relative">
                    <img className='w-full h-full' src="https://www.thefamouspeople.com/profiles/images/gugu-mbatha-raw-4.jpg" alt="caterpillar" />
                    <button className='button'>show review</button>
                </div>

                <div id="top-middle" class="img-e img relative" >
                    <img className='w-full h-full' src="https://reductress.com/wp-content/uploads/2019/06/petite-woman-1-820x500.jpg" alt="butterfly" />
                    <button className='button'>show review</button>
                </div>

                <div id="bottom-left-a" class="img-f img relative" >
                    <img className='w-full h-full' src="https://static.toiimg.com/photo/83890830.cms" alt="a chameleon" />
                    <button className='button'>show review</button>
                </div>

                <div id="bottom-left-b" class="img-g img relative" >
                    <img className='w-full h-full' src="https://files.globalgiving.org/pfil/26396/pict_large.jpg?m=1483452802000" alt="a cool butterfly" />
                    <button className='button'>show review</button>
                </div>

                <div id="bottom-right-a" class="img-h img relative">
                    <img className='w-full h-full' src="https://img.freepik.com/free-photo/vertical-shot-attractive-african-american-man-posing-smiling_181624-15027.jpg?w=2000" alt="Horse flower" />
                    <button className='button'>show review</button>
                </div>

                <div id="bottom-right-b" class="img-i img relative" >
                    <img className='w-full h-full' src="https://plan-uk.org/sites/default/files/styles/gallery_image/public/Images/Article/plan-uk-champions-of-wales-girls-2.jpg?itok=860oI4dc" alt="a ladybug" />
                    <button className='button'>show review</button>
                </div>


            </div>


        </div>
    );
};

export default CustomersReview;