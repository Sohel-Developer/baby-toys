import React from 'react';



const Gallery = () => {


    const images = [

        {
            id: 1,
            image: "https://i.ibb.co/PjzZRr8/image-9.jpg"
        },
        {
            id: 2,
            image: "https://i.ibb.co/0mxdG62/image-1.jpg"
        },
        {
            id: 3,
            image: "https://i.ibb.co/jGWrjrz/image-2.jpg"
        },
        {
            id: 4,
            image: "https://i.ibb.co/vcgFnhJ/image-3.jpg"
        },
        {
            id: 5,
            image: "https://i.ibb.co/RhkyHZt/image-4.jpg"
        },
        {
            id: 6,
            image: "https://i.ibb.co/1LF30r5/image-7.jpg"
        },
        {
            id: 7,
            image: "https://i.ibb.co/x2vFh9F/image-5.jpg"
        },
        {
            id: 8,
            image: "https://i.ibb.co/Nypzw1c/image-6.jpg"
        },
        {
            id: 9,
            image: "https://i.ibb.co/zsNHZkd/image-8.jpg"
        }



        // ,
        // ,
        // ,
        // ,
        // ,
        // ,
        // ,
        // ,
    ]




    return (
        <div >
            <h2 className='text-center font-bold text-5xl mb-5'>Our Gallery</h2>

            <div className='p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    images.map(img => <div key={img.id} className=' border border-gray-200 hover:scale-105 transition-all cursor-pointer rounded-lg flex justify-center '> <img className='p-5' src={img.image} /> </div>)
                }
            </div>

        </div>
    );
};

export default Gallery;