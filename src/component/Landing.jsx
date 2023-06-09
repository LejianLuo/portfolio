
export default function Landing(){

    return(
        <div id='Landing' className='mx-auto relative -top-[50px]'> 
            <div className='w-[310px] md:w-[600px] lg:w-[800px] mx-auto py-[150px]'>
                <h1 className='animate-textEnlarge text-5xl my-[20px] font-black text-orange-400'>Hello, I am Lejian</h1>
                <p className='text-gray-500 mb-[30px]'> As a web developer, I enjoy the process of coding, tuning, and deploying web apps. I have experience building web apps with <strong>React, ExpressJS, and MongoDB</strong>. 
                    I aim to learn a wide variety of frameworks and languages, and work as a fullstack developer in the future.</p>
                <div className='flex gap-[50px] justify-start'>
                    <a className='rounded-full w-[40px] hover:w-[45px]' href="https://github.com/LejianLuo"><img src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png' alt='img'/></a>
                    <p className='font-bold text-gray-400'>luolejian@outlook.com</p>
                </div>
                <Skill/>
            </div>
            
        </div>
    );

}

export function Navigation(){
    return(
        <div className='sticky top-[20px] mx-auto w-[200px] p-[10px] bg-purple-100 z-20 flex justify-center gap-[20px] text-gray-500 font-bold border-4 border-gray-200'>
            <a href='#Landing'>Introduction</a>
            <a href='#Project'>Projects</a>
        </div>
    );
}

function Skill(){

    return(
            <div  className='group mx-auto mt-[40px] gap-y-[20px] md:gap-y-[0px] flex md:flex-row flex-col items-center md:justify-around animate-fadeIn bg-purple-100 p-[20px] rounded-2xl border-4 border-slate-100'>
                <div>
                    <div className='flex gap-[5px] justify-between w-[120px] '>
                        <h1 className='font-bold text-gray-600 text-lg'>Language</h1>
                        <img className='w-[20px]' src='https://www.nicepng.com/png/detail/468-4682992_png-file-svg-programming-languages-png-icon.png' alt='img'/>
                    </div>
                    <div className='flex gap-[5px] justify-between w-[120px] my-[10px]'>
                        <h1 className='font-thin text-gray-400 text-sm group-hover:text-gray-600 group-hover:font-bold'>HTML</h1>
                        <img className='w-[20px] opacity-40 group-hover:opacity-100' src='https://cdn-icons-png.flaticon.com/512/732/732212.png' alt='img'/>
                    </div>
                    <div className='flex gap-[5px] justify-between w-[120px] my-[10px]'>
                        <h1 className='font-thin text-gray-400 text-sm group-hover:text-gray-600 group-hover:font-bold'>CSS</h1>
                        <img className='w-[20px] opacity-40 group-hover:opacity-100' src='https://cdn-icons-png.flaticon.com/512/5968/5968242.png' alt='img'/>
                    </div>
                    <div className='flex gap-[5px] justify-between w-[120px] my-[10px]'>
                        <h1 className='font-thin text-gray-400 text-sm group-hover:text-gray-600 group-hover:font-bold'>JAVASCRIPT</h1>
                        <img className='w-[20px] opacity-40 group-hover:opacity-100' src='https://e7.pngegg.com/pngimages/793/545/png-clipart-javascript-logo-computer-icons-vue-js-angle-text-thumbnail.png' alt='img'/>
                    </div>
                    <div className='flex gap-[5px] justify-between w-[120px] my-[10px]'>
                        <h1 className='font-thin text-gray-400 text-sm group-hover:text-gray-600 group-hover:font-bold'>JAVA</h1>
                        <img className='w-[20px] opacity-40 group-hover:opacity-100' src='https://cdn-icons-png.flaticon.com/512/226/226777.png' alt='img'/>
                    </div>
                </div>
                <div>
                     <div className='flex gap-[5px] justify-between w-[120px]'>
                        <h1 className='font-bold text-gray-600 text-lg'>Frontend</h1>
                        <img className='w-[20px]' src='https://cdn-icons-png.flaticon.com/512/2721/2721616.png' alt='img'/>
                    </div>
                    <div className='flex gap-[5px] justify-between w-[120px] my-[10px]'>
                        <h1 className='font-thin text-gray-400 text-sm group-hover:text-gray-600 group-hover:font-bold'>REACT</h1>
                        <img className='w-[20px] opacity-40 group-hover:opacity-100' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png' alt='img'/>
                    </div>
                    <div className='flex gap-[5px] justify-between w-[120px] my-[10px]'>
                        <h1 className='font-thin text-gray-400 text-sm group-hover:text-gray-600 group-hover:font-bold'>TAILWIND</h1>
                        <img className='w-[20px] opacity-40 group-hover:opacity-100' src='https://www.drupal.org/files/styles/grid-3-2x/public/project-images/screenshot_361.png?itok=w4CzcWyb' alt='img'/>
                    </div>
                    <div className='flex gap-[5px] justify-between w-[120px] my-[10px]'>
                        <h1 className='font-thin text-gray-400 text-sm group-hover:text-gray-600 group-hover:font-bold'>BOOTSTRAP</h1>
                        <img className='w-[20px] opacity-40 group-hover:opacity-100' src='https://cdn-icons-png.flaticon.com/512/5968/5968672.png' alt='img'/>
                    </div>
                    <div className='flex gap-[5px] justify-between w-[120px] my-[10px]'>
                        <h1 className='font-thin text-gray-400 text-sm group-hover:text-gray-600 group-hover:font-bold'>MATERIAL UI</h1>
                        <img className='w-[20px] opacity-40 group-hover:opacity-100' src='https://v4.material-ui.com/static/logo.png' alt='img'/>
                    </div>
                </div>
                <div>
                    <div className='flex gap-[5px] justify-between w-[120px]'>
                        <h1 className='font-bold text-gray-600 text-lg'>Backend</h1>
                        <img className='w-[20px]' src='https://cdn-icons-png.flaticon.com/512/657/657695.png' alt='img'/>
                    </div>
                    <div className='flex gap-[5px] justify-between w-[120px] my-[10px]'>
                        <h1 className='font-thin text-gray-400 text-sm group-hover:text-gray-600 group-hover:font-bold'>NODEJS</h1>
                        <img className='w-[20px] opacity-40 group-hover:opacity-100' src='https://cdn-icons-png.flaticon.com/512/5968/5968322.png' alt='img'/>
                    </div>
                    <div className='flex gap-[5px] justify-between w-[120px] my-[10px]'>
                        <h1 className='font-thin text-gray-400 text-sm group-hover:text-gray-600 group-hover:font-bold'>EXPRESSJS</h1>
                        <img className='w-[20px] opacity-40 group-hover:opacity-100' src='https://youteam.io/blog/wp-content/uploads/2022/04/expressjs_logo.png' alt='img'/>
                    </div>
                    <div className='flex gap-[5px] justify-between w-[120px] my-[10px]'>
                        <h1 className='font-thin text-gray-400 text-sm group-hover:text-gray-600 group-hover:font-bold'>MONGODB</h1>
                        <img className='w-[20px] opacity-40 group-hover:opacity-100' src='https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png' alt='img'/>
                    </div>
                    <div className='flex gap-[5px] justify-between w-[120px] my-[10px]'>
                        <h1 className='font-thin text-gray-400 text-sm group-hover:text-gray-600 group-hover:font-bold'>MONGOOSE</h1>
                        <img className='w-[20px] opacity-40 group-hover:opacity-100' src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png' alt='img'/>
                    </div>
                </div>
            </div>
    );
}

