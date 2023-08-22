import './TopTenSingleProduct.css'

const TopTenSingleProduct = ({ data }) => {
    return (
        <div>

            {/* <div class=" ">
                <img id="prompt" src={data.images[2]} alt="" />
            </div> */}

            <div data-aos="zoom-in" class="card">

                <div class="first-content">
                    <img src={data.images[2]} alt="" />
                </div>

                <div class="second-content px-1">
                    <h2 className='text-white text-xl'>{data.title}</h2>
                    <p className='text-justify px-2'>{data.description}</p>
                    <p >price : <span className='text-red-500 text-xl'> {data.price} $</span> </p>
                </div>


            </div>

        </div>
    );
};

export default TopTenSingleProduct;