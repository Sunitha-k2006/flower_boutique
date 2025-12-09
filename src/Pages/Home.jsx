import React from 'react'

const Home = () => {
   
    return (
        <div className='min-h-screen flex items-center justify-center content-center  gap-x-20'>
            <img src="https://cdn.pixabay.com/photo/2023/04/19/09/34/flower-7937334_1280.jpg" alt="Flowers" class=" object-right absolute inset-0 w-full object-fill -z-10 h-[900px] overflow-hidden  opacity-90" />
            <h1 className='size-40 ... font-serif text-5xl align-left absolute inset-y-20 left-40 w-300 ... text-pink-200 mt-14'>Welcome to Secret Garden Florals, a space where your emotions guide our artistry.</h1>
            <h3 className='size-70 ...  font-serif text-3xs  align-left absolute inset-y-60 left-40 w-70 ... text-blue-50 mt-20'>
                <strong>
                Not just bouquets — we craft feelings shaped by your mood and moments.
Every emotion has a color, and every story has its own flower.
Tell us what you feel, and we’ll design a personalized, thoughtful bouquet made just for you.
From love to joy, celebration to comfort — we create blooms that truly speak for you.</strong>
            </h3>
        </div>
    )
}

export default Home