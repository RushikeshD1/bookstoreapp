import React from 'react'
import banner from "../../assets/banner.jpg"

const Banner = () => {
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10">
            <div className='w-full text-black dark:text-white flex md:flex-row flex-col'>
                <div className='md:w-1/2 w-full order-2 md:order-1'>
                    <div className='md:mt-32 mt-12 flex flex-col gap-6'>                
                        <h1 className='font-bold text-2xl '>Hello, welcomes here to learn something{" "}<span className='text-pink-500'>new everyday!!!</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum est quasi ea aliquid dolore, magnam repellendus nihil atque quis quibusdam doloribus consequatur. Ullam quibusdam neque sit velit, impedit quidem omnis voluptates dignissimos accusantium cupiditate molestias fugit reiciendis pariatur quae error aperiam autem repellendus, asperiores aliquam recusandae voluptatibus. Repellendus, delectus eveniet!</p>
                        
                    </div> 
                    <button className="btn btn-secondary mt-10">Secondary</button>
                </div>
                <div className='md:w-1/2 w-full order-1 md:mt-10 mt-4'>
                    <img src={banner} alt="book image" />
                </div> 
            </div>            
        </div>        
    </>
  )
}

export default Banner