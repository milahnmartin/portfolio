const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full h-fit font-bold text-3xl font-mono flex flex-col"
    >
      <h1 className="text-text flex items-center justify-start space-x-4">
        <span className="text-secondary text-2xl">04.</span>Experience
        <hr className="w-[5rem] text-text2" />
      </h1>
      <div className="flex w-full pt-6 flex-col gap-y-5">
        <h1 className="font-mono text-secondary">TeamGeek PTY LTD</h1>
        <div className="text-text2 font-mono text-xl mx-4 space-y-5">
          During my time at TeamGeek PTY LTD, I had the opportunity to work with
          Yoco Technologies PTY LTD, one of our esteemed clients and a prominent
          startup in the industry. As part of a talented team of developers, I
          contributed to the development and enhancement of Yoco's intricate and
          dynamic website, ensuring seamless integration with their various
          services.
          <br />
          <h1 className="text-secondaryHue">Website Development:</h1>
          I played a crucial role in the development and improvement of Yoco's
          website. Collaborating with my team, we leveraged our expertise in web
          technologies to create a robust and user-friendly platform. By
          utilizing modern frameworks and libraries, we implemented features
          that elevated the user experience and facilitated smooth navigation
          throughout the site.
          <br />
          <h1 className="text-secondaryHue">Backend Services:</h1>
          In addition to website development, I actively participated in
          building helper services for Yoco's commercial team. Working alongside
          other developers, we used Python frameworks such as Django and FastAPI
          to develop reliable and scalable backend solutions. These services
          empowered Yoco's commercial team to streamline their processes,
          automate tasks, and gain valuable insights from data.
          <br />
          <h1 className="text-secondaryHue">Task Queue Management:</h1>
          To efficiently handle asynchronous tasks and background processes, our
          team implemented Celery as a robust task queue. This allowed us to
          decouple time-consuming tasks from the main application, ensuring
          optimal performance and responsiveness for Yoco's services.
          <br />
          <h1 className="text-secondaryHue">Performance Monitoring:</h1>I
          utilized Sentry and logs to monitor the performance of Yoco's website
          and backend services, proactively identifying and resolving any
          potential bugs or issues. This ensured a stable and reliable user
          experience for Yoco's customers.
          <h1 className="text-secondaryHue">Noteworthy Contribution:</h1>I
          played a key role in developing a visual birdseye view editor for
          Yoco's Product Finder Component. This innovative tool empowered Yoco
          to visualize and optimize the user journey, signifcantly enhancing
          their product and user experience. Through my work at TeamGeek PTY
          LTD, I demonstrated my ability to collaborate efectively with my team,
          contribute to complex web development projects for our client,
          integrate with diferent services, build efcient backend solutions, and
          implement efective monitoring practices. My dedication, technical
          expertise, and teamwork played a signifcant role in supporting Yoco
          Technologies PTY LTD's growth and success, particularly through the
          development of the visual birdseye view editor.
        </div>
      </div>
      <div className="flex w-full pt-6 gap-y-5 flex-col">
        <h1 className="font-mono text-secondary">FREI PTY LTD</h1>
        <div className="text-text2 font-mono text-xl mx-4 space-y-5">
          <p>
            During my tenure at FREI PTY LTD, I played a pivotal role in
            developing and maintaining web applications, with a strong emphasis
            on both front-end and back-end development.
          </p>
          <h1 className="text-secondaryHue">Front-End Development:</h1>
          <p>
            On the front end, I worked extensively with modern technologies such
            as Vue3, Pinia, Firebase, Tailwind CSS, and Bootstrap. These
            technologies allowed me to create intuitive and visually appealing
            user interfaces, ensuring seamless user experiences. My
            contributions on the front end were essential in crafting the
            user-facing aspects of our applications.
          </p>
          <h1 className="text-secondaryHue">Back-End Development:</h1>
          <p>
            Simultaneously, my primary focus was on back-end development, where
            I specialized in using Node.js and TypeScript. I designed and
            implemented robust and efficient server-side applications, and I
            created RESTful APIs that served as the backbone of our
            applications. These APIs facilitated data retrieval, storage, and
            manipulation, ensuring the smooth functioning of our software.
          </p>
          <h1 className="text-secondaryHue">Testing and Deployment:</h1>
          <p>
            To maintain the reliability and stability of our software, I
            integrated unit testing into our development process using Chai and
            Mocha, paying close attention to the quality of our back-end code.
            Additionally, I took on the responsibility of deploying our
            applications into production environments. I utilized PM2 to manage
            the deployment process, ensuring high availability and performance
            of both the front-end and back-end components. This involved
            configuring servers, load balancing, and monitoring the health of
            our services.
          </p>
          <h1 className="text-secondaryHue">Noteworthy Contribution:</h1>
          <p>
            One of my significant contributions during this time was the
            creation of an NPM package that encapsulated reusable logic,
            benefiting both front-end and back-end development. This package
            streamlined our development process, enhanced code reusability, and
            saved time and effort for the entire development team.
          </p>
          <p>
            My work at FREI PTY LTD required a deep understanding of both
            front-end and back-end technologies, rigorous testing practices, and
            a commitment to delivering high-quality, maintainable, and efficient
            software solutions. My contributions were instrumental in achieving
            the company's objectives and mission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
