import Image from 'next/image'
import Head from 'next/head'
import Layout from './layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Nick Huemmer</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
      <Image
        src="/images/lo--2.jpg"
        alt="photo of nick huemmer"
        width={550}
        height={350}
        priority
        className="next-image rounded-md"
      /> 
      <div className="flex flex-col items-left justify-center mx-20">
      <p className='my-5'>
        I&#39;m a Software Engineer specializing in frontend and fullstack development. </p>
        My expertise includes a wide range of technologies such as JavaScript, React, HTML5, CSS, Node.js, Express.js, 
        <p className='my-5'>I have experience with several frontend frameworks including React, Vue, and Svelte. I have also worked with several static site generators including Next.js, Astro, SvelteKit, and TypeScript. I take great pleasure in crafting immersive, functional, and aesthetically pleasing websites and applications that are also highly accessible.</p>  
        <p className='my-5'>I also have experience contributing to several open source projects including Reactime, a performance monitoring tool for React applications.
        </p>
        <p className='my-5'>  
        My blog about software engineering and related topics at can be found at <a className="text-lg font-bold decoration-solid"href="https://www.nickhuemmer.com">nickhuemmer.com</a>.</p>
        <p className='my-5'>
        My primary interests are walking, reading (philosophy, natural sciences, technology), writing and spending time with my family. 
        </p>
      
      <a className="text-lg font-semibold"href="mailto:hello@nickhuemmer.me">hello@nickhuemmer.me</a>
      </div>
      <br />
      <div className="w-100 h-px bg-white"></div>

      <hr className="w-100 h-px bg-gray " />
      <div className="logos flex flex-row items-center justify-center space-x-4">
    <div className='logo-div social flex flex-row items-center justify-center'>
      
      <a className="mx-5" href="https://twitter.com/njhuemmer">
        <Image
          src="/logos/twitter250.svg"
          alt="twitter logo"
          width={75}
          height={75}
          priority
          className=""
        />
      </a>
      <a className="mx-5" href="https://github.com/ElDuke717">
        <Image
          src="/logos/github250.svg"
          alt="github logo"
          width={75}
          height={75}
          priority
          className="next-image logo"
        />
      </a>
      <a className="mx-5" href="https://www.linkedin.com/in/nickjhuemmer/">
        <Image
          src="/logos/linkedin250.svg"
          alt="linkedin logo"
          width={75}
          height={75}
          priority
          className="next-image logo"
        />
      </a>
      <a className="mx-5" href="https://medium.com/@njhuemmer">
        <Image
          src="/logos/medium250-2.png"
          alt="medium logo"
          width={75}
          height={75}
          priority
          className="next-image logo"
        />
      </a>
    </div>
  </div>

      </div>
    </Layout>
  )
}
