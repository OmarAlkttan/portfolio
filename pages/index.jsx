import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import ResponsiveHeader from './ResponsiveHeader'
import Contact from '../components/Contact'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 
import { faChevronCircleDown, faDownload, faEnvelope, faFileDownload, faMailBulk, faMailForward } from '@fortawesome/free-solid-svg-icons'

const inter = Inter({ subsets: ['latin'] })

const navValues = ['home', 'about', 'resume', 'work', 'contact'];
const skills = [
  {skill: 'java', level: '100%'}, {skill: 'spring boot', level: '80%'}, {skill: 'back end', level: '80%'}, {skill: 'javascript', level: '75%'}, {skill: 'reactjs', level: '60%'}, {skill: 'web development', level: '65%'}, {skill: 'git', level: '100%'}
];
const loadingSkills = [
  {skill: 'typescipt', level: '50%'}, {skill: 'node js', level: '40%'}, {skill: 'express', level: '20%'}
];
const works = [
  {
    "image-url": "/images/covid.jpg",
    "link": "https://tota-book.web.app/",
    "heading": "COVID-19 Tracker",
    "desc": "Visualize COVID-19 spread data with this interactive dashboard"
  },
  {
    "image-url": "/images/totaflix.jpg",
    "link": "https://totaflix.web.app/",
    "heading": "Totaflix",
    "desc": "Watch trailers of films and series both old and new"
  },
  {
    "image-url": "/images/totabook.jpg",
    "link": "https://tota-book.web.app/",
    "heading": "Totabook",
    "desc": "Leave me a nice message in this facebook clone :)"
  },
]

export default function Home() {

  const [activeLink, setActiveLink] = useState('');
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = () => {
    
    if(homeRef.current !== null){
      console.log('home ref', homeRef);
      if(window.pageYOffset > homeRef.current.offsetTop){
        homeRef.current.classList.add('text-green-400');
      }else{
        homeRef.current.classList.remove('text-green-400');
      }
    }
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 50;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        
        console.log("activeLink", activeLink);
        console.log("id", section.id);
        setActiveLink('#' + section.id);
        console.log('sectionTop', sectionTop);
        console.log('scrollY', scrollY);
        
      }
    });

    const header = document.getElementById("header-content");
    const navBar = document.getElementById("nav-header");
    if(window.scrollY >= (header.offsetTop + 140) && window.scrollY < (header.offsetTop + header.offsetHeight)){
      console.log("header top ", header.offsetTop);
      console.log("headder top + height", (header.offsetTop + header.offsetHeight));
      navBar.classList.add('hidden');
    }else{
      navBar.classList.remove('hidden');
      console.log(navBar);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <Head>
        <title>Omar Alktan | Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section ref={homeRef} id="home" className="w-full h-[750px] min-h-[500px] bg-cover bg-start"
      style={{ backgroundImage: `url('/images/sky.jpg')` }}>
        <div className='hidden'>
          <Image 
            src="/images/sky.jpg"
            alt='mountains'
            layout='fill'
            objectFit='cover'
            quality={100}
          />
        </div>
        <nav id="nav-header" className={`fixed ${activeLink !== '#home' && activeLink !== '' ? 'bg-[#130406]' : ''} top-0 py-2 left-0 w-full z-10`}>
            <ul className='flex justify-center'>
              {navValues.map(value=>{
                return (
                  <li key={value} className={` ${activeLink === `#${value}` ? `text-green-400` : `text-white`}  text-center text-sm font-semibold tracking-custom flex-row px-3 py-2 uppercase cursor-pointer`}>
                    <a href={`#${value}`}>{value}</a>
                  </li>
                )
              })}
            </ul>
        </nav>
        <div id="header-content" className='pt-[15%] '>
          <div className='w-2xl mx-auto'>
            <ResponsiveHeader />
            <div className='max-w-2xl m-auto'>
              <h3 className='text-center pt-8 text-xl font-thinner text-[#a8a8a8] w-120 '>
                {"Based in Cairo. "}
                <span className='text-white'>Software Engineer and Polymath</span>. {"I think thoughts others don't so I could do things others won't."}
              </h3>
              <div className='flex gap-10 justify-center mt-14'>
                <a href="https://github.com/OmarAlkttan" target='_blank'>
                  <FontAwesomeIcon className='hover:text-teal-400 transition-colors ease-linear duration-100 cursor-pointer' icon={faGithub} size="2xl" color='white'/> 
                </a>
                <a href="https://www.linkedin.com/in/omar-alktan-948012153/" target='_blank'>
                  <FontAwesomeIcon className='hover:text-teal-400 transition-colors ease-linear duration-100 cursor-pointer' icon={faLinkedinIn} size="2xl" color='white'/>  
                </a>
              </div>
            </div>
            
          </div>
          <div className='text-center mt-[9rem]'>

            <a href='#about' >
              <FontAwesomeIcon className='cursor-pointer  mx-auto hover:text-teal-400 transition-colors ease-linear duration-100 ' size='3x' color='white' icon={faChevronCircleDown} />
            </a>
          </div>
          
        </div>
      </section>
      <section id="about" className='h-[600px] bg-[#191919]' ref={aboutRef}>
        <div className='max-w-4xl mx-auto flex py-24 text-white gap-6'>
              <div className='basis-1/4 w-[10rem] h-[10rem]'>
                <Image src={'/images/profile.jpg'} className='rounded-full mx-auto' alt='my-profile' width={130} height={130} />
              </div>
              <div className='basis-3/4 '>
                <h2 className='text-3xl font-bold mb-3'>About Me</h2>
                <p className='text-[#7a7a7a] text-lg mb-8'>
                  {'Hello! My name is Omar and I refuse to be confined to one box. Some of the labels that do apply to me are fullstack developer, adventurer and avid football fan. I am constantly on the hunt to explore new ideas and develop myself both personally and professionally. One thing you should know about me is that I was affectionately called "Tota" while growing up, and that I insert that name into apps I clone as a cheeky calling card (anyone want to watch the Dark Knight on Totaflix?)'}
                </p>
                <div className='flex'>
                  <div className='basis-1/2'>
                    <h2 className='text-3xl font-bold mb-4'>Contact Details</h2>
                    <p className='text-lg text-[#7a7a7a]'>Omar Alktan</p>
                    <br />
                    <p className='text-lg text-[#7a7a7a]'>
                      Cario Egypt,
                      <br />
                      oalktan@gmail.com
                    </p>
                  </div>
                  <div className='basis-1/2 mt-8 text-xl'>
                    <a type='button' href='/omar-alktan-resume.pdf' download className='bg-[#444] rounded py-4 px-5 hover:bg-white hover:text-[#444] transition-none' >
                      <FontAwesomeIcon icon={faDownload} className='transition-none'/>
                      <span className='ml-3'>
                        Download Resume
                      </span>
                    </a>
                  </div>
                </div>
              </div>
        </div>
      </section>
      <section id="resume" className='bg-white ' ref={resumeRef}>
        <div className='py-20 max-w-4xl mx-auto'>
            <div className='flex gap-6'>
              <h2 className='basis-1/4 text-start text-2xl tracking-wider font-semibold underline underline-offset-[0.8rem] decoration-[#11abb0] uppercase'>Education</h2>
              <div className='basis-3/4'>
                <div>
                  <h3 className='text-3xl font-bold tracking-wider mb-3'>October 6 University</h3>
                  <p className='text-lg text-[#6e7881] mb-5'><span className='italic mr-2'>Bachelor of Science, Computer Science </span> • February 2022</p>
                  <p className='text-[#838c95] text-lg'>
                    <span className='font-bold'>Graduation Project:</span> Cross-platform mobile application to provide a connection between car owner
                    and renter by providing cars available to clients and make them choose the proper car to them.
                  </p>
                </div>
              </div>
            </div>
            <hr className='my-10'/>
            <div className='flex gap-6'>
              <h2 className='basis-1/4 text-start text-2xl tracking-wider font-semibold underline underline-offset-[0.8rem] decoration-[#11abb0] uppercase'>Work</h2>
              <div className='basis-3/4'>
                <div className='mb-10'>
                  <h3 className='text-3xl font-bold tracking-wider mb-3'>QbDVision Inc.</h3>
                  <p className='text-lg text-[#6e7881] mb-5'><span className='italic mr-2'>Software Engineer
                  </span> • April 2021 - Present</p>
                  <p className='text-[#838c95] text-lg'>
                    Plan, implement, and test new software features in a client-facing web app aiding key players in the pharmaceutical industry to avail drugs and vaccines to patients in a faster and more efficient manner
                  </p>
                </div>
                <div className='mb-10'>
                  <h3 className='text-3xl font-bold tracking-wider mb-3'>Egabi Solutions</h3>
                  <p className='text-lg text-[#6e7881] mb-5'><span className='italic mr-2'>Fullstack Intern in Cairo, Egypt
                  </span> • July 2018 - August 2018</p>
                  <p className='text-[#838c95] text-lg'>
                    Engineered a collaborative full-stack project with other interns using Spring MVC and Oracle database.
                  </p>
                </div>
                <div>
                  <h3 className='text-3xl font-bold tracking-wider mb-3'>Camp Europe e.V.</h3>
                  <p className='text-lg text-[#6e7881] mb-5'><span className='italic mr-2'>International Camp Counselor in Walsrode, Munich and Amposta, Spain
                  </span> • June 2019 - August 2019</p>
                  <p className='text-[#838c95] text-lg'>
                    Planned a schedule of outdoor and survival activities every day for a group of 400 international campers.
                  </p>
                  <p className='text-[#838c95] text-lg mt-6'>
                    Assisted European Space Agency staff with programming and physics experiments pertaining to space exploration.
                  </p>
                </div>
              </div>
            </div>
            <hr className='my-10'/>
            <div className='flex gap-6'>
              <h2 className='basis-1/4 text-start text-2xl tracking-wider font-semibold underline underline-offset-[0.8rem] decoration-[#11abb0] uppercase'>Skils</h2>
              <div className='basis-3/4'>
                <p className='text-[#838c95] text-lg mb-6'>
                  My Programming Language Proficiency
                </p>
                {skills.map((value)=>{
                  return(
                    <div key={value} className='mb-8'>
                      <h3 className='uppercase text-xl font-semibold mb-5 '>{value.skill}</h3>
                      <div className="w-full h-6 rounded-full bg-gray-300">
                        <div className="h-full rounded-full bg-[#313131]" style={{ width: `${value.level}` }}></div>
                      </div>
                    </div>
                  )
                })}
                <h3 className='text-[#313131] text-3xl mt-10 mb-6 font-semibold'>Loading...</h3>
                {loadingSkills.map((value)=>{
                  return(
                    <div key={value} className='mb-8'>
                      <h3 className='uppercase text-xl font-semibold mb-5'>{value.skill}</h3>
                      <div className="w-full h-6 rounded-full bg-gray-300">
                        <div className="h-full rounded-full bg-[#313131]" style={{ width: `${value.level}` }}></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
        </div>
      </section>
      <section id="work" className=' bg-[#ebeeee]' ref={workRef}>
        <div className='py-20 max-w-4xl mx-auto'>
            <h3 className='text-[#95a3a3] uppercase text-xl text-center font-medium tracking-wide mb-12'>
              Check out some of my works.
            </h3>
            <div className='flex gap-20 justify-center'>
                {works.map((work)=>{
                  return(
                    <div key={work.heading} className='group relative'>
                      <a href={work.link} target='_blank'>
                        <Image src={work['image-url']} alt={work['image-url']} className='hover:after:content=[heading]' title={work.heading} width={256} height={256}></Image>
                      
                      <div class="absolute inset-0 bg-black opacity-0 hover:opacity-75 flex flex-col items-start p-4 justify-start transition duration-500">
                        <h5 class="text-white text-lg font-bold">{work.heading}</h5>
                        <p className='text-[#eeeaea] text-sm'>{work.desc}</p>
                      </div>
                      </a>
                    </div>
                  )
                })}
            </div>
        </div>
      </section>
      <section id="contact" className=' bg-[#191919]' ref={contactRef}>
        <div className='py-20 max-w-4xl mx-auto'>
          <div className='relative'>
            <div className='float-left w-[10rem]'>
              <FontAwesomeIcon icon={faEnvelope} className='text-white   text-end' size='5x'/>

            </div>
            <span className='text-[#636363] absolute top-4 font-semibold text-2xl clear-both'>Get in touch with me!</span>
          </div>
          <div className='flex clear-both'>
              <div className='basis-3/4'>
                <Contact />
              </div>
              <div className='px-6 ml-0 mt-10 basis-1/4'>
                <h4 className='text-white text-xl font-medium mb-5'>Address and Phone</h4>
                <div className='text-[#636363] text-lg font-medium'>
                  <p className='mb-5'>
                    Omar Alktan
                    <br />
                    oalktan@gmail.com
                  </p>
                  <p>
                    Cairo, Egypt
                    <br />
                    Phone number available upon request
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}
