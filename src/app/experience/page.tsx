export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="mb-[25px] mt-1 text-[50px] text-[#]">Skills and Experience</h1>
      <div className="mb-4">
        <p className="text-left max-w-[800px] mb-[50px] p-2 text-lg">
          Here's a list of my skills followed by my career experience. I'm a software engineer
          with a background in food science and product development.
        </p>
        
        <h2 className="text-[30px] font-bold mb-2">SKILLS:</h2>
        <table className="border-collapse border border-gray-900">
          <tbody>
            <tr>
              <td className="border border-gray-900 px-5 py-2">
                Languages and Frameworks
              </td>
              <td className="border border-gray-900 px-4 py-2">
                JavaScript (ES6+), TypeScript, Python, HTML5, CSS, YAML, Pug, React, Next.js, Astro, Svelte, Node.js,
                Express.js, Sass, TailwindCSS, Bootstrap, Jest, Mocha, Cypress, Puppeteer, Visx, D3.js, Babel, Redux, 
                OpenAI API, Web Content Accessibility Guidelines (WCAG)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-900 px-4 py-2">
                Technologies
              </td>
              <td className="border border-gray-900 px-4 py-2">
                AWS DynamoDB, AWS EC2, AWS S3, AWS Route 53, AWS IAM, PostgreSQL, NoSQL (MongoDB), Docker, Webpack,
                REST API, Asana, Figma, Blender, Git, GitHub, GitHub Actions, Vercel, Netlify, Heroku, Linux
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-[30px] font-bold mb-2 mt-8">SOFTWARE EXPERIENCE:</h2>
      
      <h3 className="text-[25px] text-yellow-900">Software Engineer</h3>
      <h3 className="text-lg text-yellow-700">Indema</h3>
      <p className="text-lg">April 2024-present</p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          Built an intuitive proposal management interface utilizing React (v18) to streamline proposal creation and improve user experience.
        </li>
        <li className="mb-2">
          Enhanced UI/UX with advanced styling techniques using React Bootstrap (v2.5) to improve the user experience and code reusability.
        </li>
        <li className="mb-2">
          Implemented and integrated reusable components with Next.js using the jampack-classic SaaS app (v 0.1.0) template, ensuring UI modularity, 
          consistency and development efficiency.
        </li>
      </ul>

      <h3 className="text-[25px] text-yellow-900">Software Engineering Consultant</h3>
      <h3 className="text-lg text-yellow-700">Outlier</h3>
      <p className="text-lg">April - July 2024 (part-time)</p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          Developed novel programs with JavaScript (ES6+), Python, Node.js (v16), PHP, CSS3, HTML5, TypeScript (v4), React (v18), and Biome.js to
          train AI models and enhance the quality and accuracy of generated responses.
        </li>
        <li className="mb-2">
          Developed 15 Node.js v20 applications to evaluate LLM capabilities in generating programming tasks, including visualizing exoplanets, 
          tracking financial portfolios, and creating immutable data store libraries.
        </li>
        <li className="mb-2">
          Completed and Reviewed 3-5 tasks per week, contributing to the delivery of 250 tasks in a month. Promoted to review other tasker's work.
        </li>
      </ul>

      <h3 className="text-[25px] text-yellow-900">Software Engineer</h3>
      <h3 className="text-lg text-yellow-700">Reactime</h3>
      <p className="text-lg">January 2023-April 2024</p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          Implemented TypeScript's static type checking and compile-time error resolution, resulting in a 20% decrease in bugs.
        </li>
        <li className="mb-2">
          Eliminated data type-induced anomalies in React Fiber, preventing runtime errors within React development.
        </li>
        <li className="mb-2">
          Incorporated Visx and D3 to create interactive performance monitoring visualizations for key metrics.
        </li>
        <li className="mb-2">
          Elevated product stability by increasing Jest testing coverage to over 80% of the component code.
        </li>
      </ul>

      <h3 className="text-[25px] text-yellow-900">Web Developer</h3>
      <h3 className="text-lg text-yellow-700">FWM LLC</h3>
      <p className="text-lg">September 2019 - December 2023</p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          Built a coaching website with WordPress for business landing pages and enlist 10+ new long-term clients.
        </li>
        <li className="mb-2">
          Tracked client data with coaching software to help each client lose 25 lbs and improve body composition.
        </li>
        <li className="mb-2">
          Created the business from the ground-up, focusing on men's health and well-being and helping 5 men achieve healthy body weight and health markers.
        </li>
      </ul>

      <div className="flex justify-center items-center mt-8">
        <hr className="border-t-2 border-gray-400 w-[300px] mb-10 md:w-[675px] lg:w-[800px]" />
      </div>

      <h2 className="text-[30px] font-bold mb-2">PREVIOUS EXPERIENCE:</h2>
      <div className="text-lg">
        <h3 className="text-[25px] text-yellow-900">Senior Product Developer</h3>
        <h3 className="text-lg text-yellow-700">Clif Bar</h3>
        <p className="text-lg">December 2014 - July 2019</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">
            Created automated product recipe notebooks using Excel and Sharepoint, reducing formula development time by 30% and improving data fidelity.
          </li>
          <li className="mb-2">
            Formulated products for improved nutrition and saved up to $2 million yearly through process optimizations.
          </li>
          <li className="mb-2">
            Led a team of eight people to design and commercialize a new kids' product with distribution in all Target stores.
          </li>
        </ul>

        <h3 className="text-[25px] text-yellow-900">Previous Roles</h3>
        <ul className="list-none mb-4">
          <li className="mb-4">
            <p className="font-semibold">Scientist II - Clorox (2012-2014)</p>
            <p>Product development for Hidden Valley Brand</p>
          </li>
          <li className="mb-4">
            <p className="font-semibold">Product Application Technologist - Nestle (2010-2012)</p>
            <p>Product development for Pizza Division</p>
          </li>
          <li className="mb-4">
            <p className="font-semibold">Scientist - Kraft Foods (2007-2010)</p>
            <p>Product development for Spoonable and Pourable Dressings</p>
          </li>
        </ul>

        <h2 className="text-[30px] font-bold mb-5 mt-10">EDUCATION:</h2>
        <ul className="list-none mb-4">
          <li className="mb-2">Codesmith Advanced Software Engineering Immersion | Resident</li>
          <li className="mb-2">North Carolina State University | BS Biological Sciences, Food Science and Nutrition</li>
          <li className="mb-2">The Ohio State University | MS Food Science</li>
        </ul>

        <h2 className="text-[30px] font-bold mb-2 mt-10">TALKS AND PUBLICATIONS:</h2>
        <ul className="list-none mb-4">
          <li className="mb-2">The Wild World of Front End Frameworks | Richmond, VA</li>
          <li className="mb-2">Medium | "Reactime just keeps getting better."</li>
        </ul>

        <h2 className="text-[30px] font-bold mb-2 mt-10">INTERESTS:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Food (Health, Nutrition, Food Science)</li>
          <li>Fitness</li>
          <li>Rucking (with my dog and son at Pocahontas State Park)</li>
          <li>Quality time with kids</li>
          <li>Writing</li>
          <li>Hiking</li>
          <li>Philosophy</li>
          <li>Sewing</li>
          <li>Reading (Natural Science, Technology, Web, Machine Learning)</li>
        </ul>

        <div className="flex justify-center items-center mt-8">
          <hr className="border-t-2 border-gray-400 w-[300px] mb-10 md:w-[675px] lg:w-[800px]" />
        </div>

        <footer className="text-center p-4 mt-5">
          © {new Date().getFullYear()} Nick Huemmer
        </footer>
      </div>
    </div>
  );
}