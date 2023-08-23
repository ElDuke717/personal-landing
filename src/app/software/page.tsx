import Image from "next/image";
import Layout from "src/app/layout";


export default function Software() {
  return (
    
    <Layout>
      <h1 className="ml-[75px] mb-[25px] mt-[50px] text-[50px] text-[#FFA500]">Software</h1>
      <p className="text-left px-4 ml-[75px] mb-[50px]">
          Here are some software products that I've recentely worked on. Click on the logo to go to the GitHub repo.
      </p>
      
      <div className="flex flex-col items-center justify-center space-y-6 ">
        <a href="https://github.com/open-source-labs/reactime" className="app">
          <Image
            src="/logos/reactime_20.png"
            alt="reactime 20 logo"
            width={300}
            height={300}
            className="next-image logo rounded-lg"
          />
        </a>
        <p className="text-left max-w-[600px] px-4 mb-20">
          Reactime is a time travel debugger for React applications that allows
          developers to rewind time and replay previous versions of state in
          their components. It also allows them to view their component
          hierarchies.
        </p>

        <a
          href="https://github.com/Proactive-Programmers/goalvault"
          className="app"
        >
          <Image
            src="/logos/goal_keeper.png"
            alt="goalkeeper logo"
            width={300}
            height={300}
            className="next-image logo rounded-lg"
          />
        </a>
        <p className="text-left max-w-[600px] px-4">
          Goal Keeper is the premier application designed to help you achieve
          your goals. By allowing you to input individual goals and necessary
          sub-tasks, Goal Keeper makes tracking your progress and managing your
          time easier than ever. Each subtask can be assigned a priority and due
          date.
        </p>

        <a href="https://github.com/StyleGPT" className="app">
          <Image
            src="/logos/style_gpt.png"
            alt="stylegpt logo"
            width={300}
            height={300}
            className="next-image logo rounded-lg"
          />
        </a>
        <p className="text-left max-w-[600px] px-4">
          StyleGPT is an app that leverages OpenAI's ChatGPT API to style HTML
          elements. By interacting with the app, you can receive stylistic
          recommendations for your HTML elements, making web development more
          intuitive and less time-consuming.
        </p>
      </div>
      <div className="flex justify-center items-center mt-8">
        <hr className="border-t-2 border-white-400 w-[300px] mb-10 md:w-[675px] lg:w-[800px]" />
      </div>

      <footer className="text-center p-4 mt-5">
          © {new Date().getFullYear()} Nick Huemmer
      </footer>
    </Layout>
  );
}
