import websites from './websites.json'
import { useState } from 'react';

export default function Project(){
    const [sites,setWebsites]=useState(websites);
    return(
        <div id='Project' className='mx-auto w-[310px] md:w-[600px] lg:w-[1000px] pb-[100px]'>
           <h1 className='text-center text-5xl my-[20px] font-black text-purple-600'>Project</h1>
            {sites.map(site=>(<Website site={site}/>))}
        </div>
    )
}

function Website({site}){
    return(

            <div className='flex flex-col my-[50px] bg-purple-100 rounded-xl'>
                <a href={site.src} target='_blank' rel="noreferrer"><img className=" rounded-xl w-fit h-fit" src={site.image} alt='img'/></a>
                <div className='p-[30px]'>
                <h1 className='text-center my-[10px] text-gray-500 font-bold text-2xl'>{site.title}</h1>
                    <p className='text-gray-500 text-lg font-thin'>{site.description}</p>
                    <div className='text-center'>
                        {site.tech.map(item=>{
                            return(
                                <div className='inline-flex gap-[5px] justify-between w-[100px] my-[20px] mx-[25px]'>
                                    <h1 className='font-bold text-gray-600 text-sm '>{item.name}</h1>
                                    <img className='w-[20px]' src={item.image} alt='img'/>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

    );
}
// 