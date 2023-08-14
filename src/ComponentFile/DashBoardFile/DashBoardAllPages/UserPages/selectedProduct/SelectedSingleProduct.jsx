import './SelectedSingleProduct.css';

const SelectedSingleProduct = ({data}) => {
    console.log(data)

    return (
        <div>

            <div className='flex'>
                <img className='w-32 h-32' src={data.imageUrl} alt="" />

                <div className='flex flex-col'>

                    <span>{data.brand}</span>
                    <span>price : {data.price}</span>
                    <span>quantity : {data.quantity}</span>
                    <span>{data.special ? " S" : "" }</span>

                </div>

                <div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default SelectedSingleProduct;