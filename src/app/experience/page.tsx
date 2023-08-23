export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="mb-[25px] mt-1 text-[50px] text-[#7FFF00]">Experience</h1>
      <div className="mb-4">
        <p className="text-left max-w-[600px] mb-[50px] p-2 text-lg">
          Here's a list of my skills followwed by my career experience. Note
          that I have a lot of experience in the food industry. After a career
          transition, I'm working as a software engineer.
        </p>
        <h2 className="text-[30px] font-bold mb-2">SKILLS:</h2>
        <table className="border-collapse border border-gray-300">
          <thead>
            {/* <tr>
              <th className="border border-gray-300 px-4 py-2">
                TECHNICAL SKILLS
              </th>
              <th className="border border-gray-300 px-4 py-2"> </th>
            </tr> */}
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-5 py-2">
                Programming Languages
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Javascript (ES6+), TypeScript, Python, YAML
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Front End Technologies
              </td>
              <td className="border border-gray-300 px-4 py-2">
                HTML5, CSS, TailwindCSS, Bootstrap, Sass, web APIs
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Back End Technologies
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Node.js, Express.js
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Databases</td>
              <td className="border border-gray-300 px-4 py-2">
                PostgreSQL, NoSQL (MongoDB)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Frameworks</td>
              <td className="border border-gray-300 px-4 py-2">
                React, Redux, Next.js, Svelte, Astro
              </td>
            </tr>
            {/* <tr>
              <td className="border border-gray-300 px-4 py-2">
                Operating Systems
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Linux (Ubuntu, Debian, PopOS, command line proficient), Mac OS,
                Windows
              </td>
            </tr> */}
            <tr>
              <td className="border border-gray-300 px-4 py-2">Tools</td>
              <td className="border border-gray-300 px-4 py-2">
                Postman, Docker, Webpack, Visx, D3.js, Babel, Pug, Testing
                (Jest, Mocha), Asana, Figma, VSCode.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Additional Skills
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Leading Teams, Web Content Accessibility Guidelines, Coaching
                and Mentoring, Motivational Interviewing, Chemical and
                Nutritional analysis.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-[30px] font-bold mb-2 mt-8">SOFTWARE EXPERIENCE:</h2>
      <h3 className="text-[25px] golden-yellow">Software Engineer</h3>
      <h3 className="text-lg yellow">Open Source Labs</h3>
      <p className="mb-2 mt-2 text-lg">
        <span className="chartreuse">Reactime</span> -{" "}
        <span className="italic">
          Open Source Chrome developer tool for debugging and performance
          monitoring in React applications.
        </span>
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          Implemented TypeScript to identify and resolve errors at compile-time,
          resulting in a 20% increase in application stability.
        </li>
        <li className="mb-2">
          Incorporated Visx and D3 to create interactive, developer-friendly
          radial bar graphs that illustrate React performance during
          development, improving usability and accessibility.
        </li>
        <li className="mb-2">
          Elevated product stability and performance by increasing Jest testing
          coverage to over 80% of the component code.
        </li>
        <li className="mb-2">
          Led the Initiative to resolve critical bugs in Reactime by updating
          outdated modules and code.
        </li>
        <li className="mb-2">
          Product revitalized under tech accelerator OS Labs (
          <a
            className="text-blue-500 hover:underline"
            href="https://www.opensourcelabs.io"
          >
            www.opensourcelabs.io
          </a>
          ).
        </li>
      </ul>

      <h3 className="text-[25px] golden-yellow">Software Developer</h3>
      <h3 className="text-lg yellow">Open Source Product Contributions</h3>
      <p className="mb-2 mt-2 text-lg">
        <span className="chartreuse">Goal Keeper</span> -{" "}
        <span className="italic">Goal Tracker App</span>
      </p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li className="mb-2">
          Implemented React library to construct a responsive front-end with UI
          components to collect and store user goals.
        </li>
        <li>
          Deployed PostgreSQL for data storage achieving a 15% reduction in
          query response time and refined overall product performance.
        </li>
      </ul>

      <p className="mb-2 mt-2 text-lg">
        <span className="chartreuse">StyleGPT</span> -{" "}
        <span className="italic">
          AI-assisted tool for styling HTML elements
        </span>
      </p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>
          Connected OpenAI API for CSS styles based on user input, enhancing UI
          creation.
        </li>
        <li>
          Enhanced data exchange with Axios, lowering response times by 30% for
          operational efficiency.
        </li>
      </ul>
      <div className="flex justify-center items-center mt-8">
        <hr className="border-t-2 border-white-400 w-[300px] mb-10 md:w-[675px] lg:w-[800px]" />
      </div>
      <h2 className="text-[30px] font-bold mb-2">CAREER EXPERIENCE:</h2>
      <div className="text-lg">
        <h3 className="text-[25px] golden-yellow">
          Health Coach and Personal Trainer
        </h3>
        <p className="mb-2">
          Self Employed | Helped middle-aged men lose weight and improve
          health-status
        </p>
        <p className="mb-2">2019-2021</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li className="mb-2">
            Built coaching business including web and social media presence,
            with greater than 250 followers.
          </li>
          <li className="mb-2">
            Created nutritional guidance and exercise programs that built
            baseline strength and improved mobility and facilitated weight loss
            of greater than 25 lbs for all clients.
          </li>
        </ul>
        <h3 className="text-[25px] golden-yellow">Senior Product Developer</h3>
        <p className="mb-2">
          Clif Bar | Product creation, formulation, optimization and
          commercialization
        </p>
        <p className="mb-2">2014-2019</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li className="mb-2">
            Created lab notebooks using Excel and Sharepoint, reducing formula
            development time by 30%.
          </li>
          <li className="mb-2">
            Formulated products for improved nutrition and saved up to $2
            million yearly through process optimizations.
          </li>
        </ul>
        <h3 className="text-[25px] golden-yellow">Scientist II</h3>
        <p className="mb-2">
          Clorox | Product development for Hidden Valley Brand
        </p>
        <p className="mb-2">2012-2014</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li className="mb-2">
            Developed and facilitated commercialization and launch of salad kits
            for the Hidden Valley Brand, the largest product launch in 2013.
          </li>
          <li className="mb-2">
            Led new product development initiative leading to five new products
            to fill innovation pipeline.
          </li>
        </ul>
        <h3 className="text-[25px] golden-yellow">
          Product Application Technologist
        </h3>
        <p className="mb-2">Nestle | Product development for Pizza Division</p>
        <p className="mb-2">2010-2012</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li className="mb-2">
            Managed and led product development including timeline management,
            cost control, ingredient procurement, and leveraging supplier
            capabilities.
          </li>
          <li className="mb-2">
            Collaborated with marketing, operations, and finance to deliver
            novel pizza products.
          </li>
        </ul>
        <h3 className="text-[25px] golden-yellow">Scientist</h3>
        <p className="mb-2">
          Kraft Foods | Product development for Spoonable and Pourable Dressings
        </p>
        <p className="mb-2">2007-2010</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li className="mb-2">
            Generated over $1M of productivity savings by managing raw material
            costs and factoring efficiencies into processes.
          </li>
        </ul>

        <h2 className="text-[30px] font-bold mb-2">EDUCATION:</h2>
        <p>Codesmith Advanced Software Engineering Immersion | Resident</p>
        <p>
          North Carolina State University | BS Biological Sciences, Food Science
          and Nutrition
        </p>
        <p>The Ohio State University | MS Food Science</p>
        <h2 className="text-[30px] font-bold mb-2 mt-5">
          TALKS AND PUBLICATIONS:
        </h2>
        <p>The Wild World of Front End Frameworks | Richmond, VA</p>
        <p>Medium | "Reactime just keeps getting better."</p>
        <h2 className="text-[30px] font-bold mb-2 mt-5">INTERESTS:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Food (Health, Nutrition, Food Science)</li>
          <li>Fitness</li>
          <li>Rucking (with my dog and son at Pocahontas State Park)</li>
          <li>Quality time with kids</li>
          <li>Writing</li>
          <li>Walking</li>
          <li>Philosophy</li>
          <li>Botanicals</li>
          <li>Reading (Natural Science, Technology, Web, Machine Learning)</li>
        </ul>
        <div className="flex justify-center items-center mt-8">
          <hr className="border-t-2 border-white-400 w-[300px] mb-10 md:w-[675px] lg:w-[800px]" />
        </div>
        <footer className="text-center p-4 mt-5">
          © {new Date().getFullYear()} Nick Huemmer
        </footer>
      </div>
    </div>
  );
}
