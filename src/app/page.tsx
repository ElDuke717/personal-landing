import Image from "next/image";
import Head from "next/head";
import Layout from "./layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Nick Huemmer</title>
      </Head>
      <div className="flex flex-col items-center justify-center mx-4">
        <Image
          src="/images/newspaper-image.png"
          alt="photo of nick "
          width={550}
          height={350}
          className="next-image rounded-md border-4 border-white my-10 md:my-20 lg:my-20 shadow-lg shadow-black"
        />
        <div className="text-15px] flex flex-col items-left justify-center mx-20 max-w-[800px]">
          <p className="my-5">
            I&#39;m a software engineer. I also sew and do product design.{" "}
          </p>
          <p>
            The tools I use to build things are JavaScript, TypeScript, React, Node, Express, Python and PostgreSQL.  I use Linux as my daily driver, and use a suite of open source tools to build and deploy applications and make different products.
          </p>

          <p className="my-5">
            I am an open-source enthusiast and have experience contributing to
            several open source projects including{" "}
            <a
              className="font-bold underline underline-offset-2 text-grey-500 hover:text-blue-700"
              href="https://www.reacti.me/"
            >
              Reactime
            </a>
            , a performance monitoring tool for React applications.
          </p>
          <p className="my-5">
            My blog about software engineering and related topics at can be
            found at{" "}
            <a
              className="text-lg font-bold text-grey-500 hover:text-blue-700"
              href="https://www.nickhuemmer.com"
            >
              nickhuemmer.com
            </a>
            .
          </p>
          <p className="my-5">
            My primary interests are walking, reading (philosophy, natural
            sciences, technology), writing and spending time with my family.
          </p>
          <p className="my-5">
            Contact me at:
          </p>
          <a
            className="text-lg font-semibold glow-yellow my-4"
            href="mailto:hello@nickhuemmer.me"
          >
            hello at nickhuemmer.me
          </a>
        </div>
        <br />
        <div className="w-100 h-px bg-white"></div>

        <hr className="border-t-2 border-gray-700 w-[300px] mb-10 md:w-[675px] lg:w-[800px]" />

        <div className="logos flex flex-row items-center justify-center space-x-4 mb-20">
          <div className="logo-div social flex flex-row items-center justify-center">
           
            <a className="mx-5 glow-yellow" href="https://github.com/ElDuke717">
              <Image
                src="/logos/github-svg.svg"
                alt="github logo"
                width={75}
                height={75}
                className="next-image logo"
              />
            </a>
            <a
              className="mx-5 glow-yellow"
              href="https://www.linkedin.com/in/nickjhuemmer/"
            >
              <Image
                src="/logos/linkedin-svg.svg"
                alt="linkedin logo"
                width={125}
                height={125}
                className="next-image logo"
              />
            </a>
            
          </div>
        </div>
      </div>
      <footer className="text-center p-4 mt-5">
        © {new Date().getFullYear()}
{' '}
Nick Huemmer
</footer>
    </Layout>
  );
}
