import skills from './skills.json';

export default function Landing(){

    return(
        <div id='Landing' className='mx-auto relative -top-[50px]'> 
            <div className='w-[310px] md:w-[600px] lg:w-[800px] mx-auto py-[150px]'>
                <h1 className='text-5xl my-[20px] font-black text-purple-600'>Hello, I am Lejian</h1>
                <p className='text-gray-500 mb-[30px]'> As a web developer, I enjoy the process of coding, tuning, and deploying web apps. I have experience building web apps with <strong>React, ExpressJS, and MongoDB</strong>. 
                    I aim to learn a wide variety of frameworks and languages, and work as a fullstack developer in the future.</p>
                <div className='flex gap-[50px] justify-start'>
                    <a className='rounded-full w-[40px] hover:w-[45px]' href="https://github.com/LejianLuo"><img src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png' alt='img'/></a>
                    <p className='font-bold text-purple-600'>luolejian@outlook.com</p>
                </div>
                <Skill/>
            </div>
            
        </div>
    );

}

export function Navigation(){
    return(
        <div className='sticky top-[20px] mx-auto w-[210px] p-[10px] bg-purple-100 z-20 flex justify-center gap-[20px] text-gray-700 font-black rounded-xl'  style={{backgroundImage:`url('https://static.vecteezy.com/system/resources/thumbnails/006/941/084/small/abstract-small-hexagon-or-honeycomb-seamless-pattern-on-white-color-background-free-vector.jpg')`}}>
            <a href='#Landing'>Introduction</a>
            <a href='#Project'>Projects</a>
        </div>
    );
}

function Skill(){

    return(
            <div  className='mx-auto mt-[40px] gap-y-[20px] md:gap-y-[0px] flex md:flex-row flex-col items-center md:justify-around bg-purple-100 md:items-baseline p-[20px] rounded-2xl border-4 border-slate-100'>
                <div>
                    <div className='flex gap-[5px] justify-between w-[120px] '>
                        <h1 className='font-bold text-gray-600 text-lg'>Language</h1>
                        <img className='w-[20px]' src='https://www.nicepng.com/png/detail/468-4682992_png-file-svg-programming-languages-png-icon.png' alt='img'/>
                    </div>
                    {skills.language.map(skill=>{
                        return (
                            <div className='flex gap-[5px] justify-between w-[120px] my-[10px]'>
                                <h1 className='text-sm text-gray-600 font-bold'>{skill.name}</h1>
                                <img className='w-[20px] opacity-100' src={skill.image} alt='img'/>
                            </div>
                        )
                    })}
                </div>
                <div>
                     <div className='flex gap-[5px] justify-between w-[120px]'>
                        <h1 className='font-bold text-gray-600 text-lg'>Frontend</h1>
                        <img className='w-[20px]' src='https://cdn-icons-png.flaticon.com/512/2721/2721616.png' alt='img'/>
                    </div>
                    {skills.frontend.map(skill=>{
                        return (
                            <div className='flex gap-[5px] justify-between w-[120px] my-[10px]'>
                                <h1 className='text-sm text-gray-600 font-bold'>{skill.name}</h1>
                                <img className='w-[20px] opacity-100' src={skill.image} alt='img'/>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <div className='flex gap-[5px] justify-between w-[120px]'>
                        <h1 className='font-bold text-gray-600 text-lg'>Backend</h1>
                        <img className='w-[20px]' src='https://cdn-icons-png.flaticon.com/512/657/657695.png' alt='img'/>
                    </div>
                    {skills.backend.map(skill=>{
                        return (
                            <div className='flex gap-[5px] justify-between w-[120px] my-[10px]'>
                                <h1 className='text-sm text-gray-600 font-bold'>{skill.name}</h1>
                                <img className='w-[20px] opacity-100' src={skill.image} alt='img'/>
                            </div>
                        )
                    })}
                </div>
            </div>
    );
}

