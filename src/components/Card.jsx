import React from 'react'
import { bgPattern } from '../constants';
import { useNavigate } from 'react-router-dom';

const Card = ({ singleCardData }) => {
    let {id, name, profession, profileImage, description, profileLink, background } = singleCardData;
    let navigate = useNavigate()
    return (
        <>
            <div className='rounded-2xl bg-white text-black  relative'>
                <div>
                    <img src={bgPattern} alt="" className='rounded-t-2xl'/>
                </div>
                <div className='absolute w-[5rem] h-[5rem] bg-black rounded-full left-[50%] translate-x-[-50%] top-20'>
                    <img src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726876800&semt=ais_hybrid" alt="" className='rounded-full object-contain'/>
                </div>
                <div className='flex flex-col items-center p-3'>
                    <h3 className='text-3xl font-semibold text-center capitalize'>{name}</h3>
                    <h4 className='text-blue-500 text-xl text-center mt-3'>{profession}</h4>
                    <p className='text-center font-medium mt-5'>{description}</p>
                    <div className='gap-5 flex  mt-8 text-3xl'>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-github"></i>
                    </div>
                    <button className='text-white bg-blue-500 px-3 py-2 rounded-md mt-10' onClick={()=>navigate(`/${id}`)}>Read More</button>
                </div>
            </div>
        </>
    )
}

export default Card