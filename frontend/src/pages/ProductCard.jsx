import React from 'react'

const ProductCard = () => {
    return (
        <div className='h-[450px] w-[350px]'>
            <div className='h-[420px] w-[350px] overflow-hidden relative'>

                <div className='absolute w-[450px]  '>
                    <img className='absolute right-10 object-center' src={"https://assets.oatly.com/m/76857e788ca3ce83/w640-WEB-62073-Oatly-Oat-Drink-Light-Edge-1L-Right.png"} />
                </div>
            </div>

            <p className='font-font2 text-[18px] text-center'>
                Oat Drink Light
            </p>
        </div>

    )
}

export default ProductCard