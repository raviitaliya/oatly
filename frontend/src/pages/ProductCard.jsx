import React from 'react'

const ProductCard = () => {
    return (
        <div className='h-[450px] w-[350px] '>
            <div className='w-[full] '>
                <img className='w-full h-[400px] object-contain' src={"https://assets.oatly.com/m/e4c8974096a4675/w640-WEB-61839-Oatly-Creamy-Oat-Spread-Plain-Spread-Cup-150g-Top-UK.png"} />
            </div>
            <p className='font-font2 text-[18px] text-center'>
                Oat Drink Light
            </p>
        </div>
    )
}

export default ProductCard