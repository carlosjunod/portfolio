import React, { Component } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import ProjectMobile from "./components/ProjectMobile";
import MediaQuery from "react-responsive";
import BrandingProject from "./components/BrandingProject";
import BrandingHeader from "./components/BrandingHeader";
import { CSSTransitionGroup } from "react-transition-group";
import userAgent from "react-useragent";
import Modal from "./components/MyModal";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";

import Footer from "./components/Footer";

import "./normalize.css";
import "./fonts/Rawson.css";
import "devicon/devicon.min.css";
import "./App.css";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this._loadProject = this._loadProject.bind(this);
    this._hideModal = this._hideModal.bind(this);

    this.state = {
      titles: [
        "Full Stack Developer",
        "React Developer",
        "UI Designer",
        "JavaScript Developer",
        "Latino",
      ],
      title_showing: ["React Developer"],
      projects: [
        {
          title: "DM - Website",
          image: process.env.REACT_APP_LOCAL_URL + "/images/dm-web.png",
          imgs: [
            {
              src:
                process.env.REACT_APP_LOCAL_URL + "/images/dm-mobile-web.png",
              alt: "Mobile view of the website",
              horizontal: false,
            },
          ],
          content: `<p><strong>Client: Daniel Morales, Entrepreneur and Musician</strong></p>

          <p><strong>Objective:</strong> The aim of this case study is to showcase the successful collaboration between Daniel Morales and a skilled web developer. The goal was to create a captivating website that highlights Daniel&#39;s talents and entrepreneurial endeavors. By leveraging Next.js, React, WordPress, and Tailwind CSS, the project achieved server-side rendering and delivered an exceptional user experience.</p>
          
          <p><strong>Challenges:</strong></p>
          
          <ol>
            <li><strong>Performance:</strong> Ensuring optimal website performance, including fast loading times and smooth navigation, to captivate visitors and maintain engagement.</li>
            <li><strong>Customization:</strong> Tailoring every aspect of the website to Daniel Morales&#39; unique brand and requirements, with meticulous attention to detail.</li>
            <li><strong>Content Management:</strong> Implementing an intuitive content management system to enable seamless updates and dynamic content.</li>
          </ol>
          
          <p><strong>Technologies and Benefits:</strong></p>
          
          <ol>
            <li><strong>Next.js:</strong> Leveraging server-side rendering capabilities, Next.js optimized website performance, resulting in faster loading times, improved SEO, and enhanced usability.</li>
            <li><strong>React:</strong> The use of React facilitated the creation of a highly interactive and responsive website, adapting seamlessly to various devices and screen sizes. Its component-based architecture ensured efficient development and consistent user interface elements.</li>
            <li><strong>WordPress:</strong> As a leading content management system, WordPress empowered Daniel Morales with an intuitive interface to manage and update website content. Integration with GraphQL enabled efficient data retrieval and real-time content updates.</li>
            <li><strong>Tailwind CSS:</strong> With its utility-first approach, Tailwind CSS allowed for customization and a visually stunning website design. It provided a consistent and polished user interface throughout the website.</li>
          </ol>
          
          <p><strong>Process and Implementation:</strong></p>
          
          <ol>
            <li><strong>UX Design:</strong> Conducted an in-depth analysis of Daniel Morales&#39; requirements and target audience to create an engaging user experience. Emphasized user flow, clear navigation, and visually captivating elements.</li>
            <li><strong>Development:</strong> Implemented a performant and scalable website architecture using Next.js and React. Leveraged server-side rendering for optimized loading and developed interactive components for a seamless user interface.</li>
            <li><strong>Integration:</strong> Integrated WordPress with GraphQL to enable dynamic content management and real-time updates. Daniel Morales gained the ability to effortlessly modify website content and showcase his latest ventures.</li>
            <li><strong>Styling:</strong> Utilized Tailwind CSS to bring Daniel Morales&#39; vision to life, ensuring a consistent and visually appealing design throughout the website.</li>
          </ol>
          
          <p><strong>Conclusion:</strong> Through the implementation of Next.js, React, WordPress, and Tailwind CSS, the web developer successfully created a captivating digital platform for Daniel Morales. The project achieved exceptional server-side rendering, delivering a seamless user experience and efficient content management. The website reflects Daniel&#39;s brand, engages visitors, and amplifies his entrepreneurial and musical achievements.</p>
          
          <p>Ready to enhance your digital presence? Contact the experienced web developer today to embark on your own transformative journey. Together, your vision will come to life, utilizing the latest technologies to create a tailored and remarkable online experience.</p>
          `,
          tech: [
            "devicon-react-original",
            "devicon-nodejs-plain",
            "devicon-nextjs-original",
            "devicon-tailwindcss-plain",
            "devicon-graphql-plain-wordmark",
          ],
          bg_color: "#00d17d",
          txt_color: "#000000",
          animation: {
            x1: "100px",
            y1: "50px",
            z1: "0px",
            x2: "0px",
            y2: "50px",
            z2: "50px",
          },
        },
        {
          title: "Medic App",
          image: process.env.REACT_APP_LOCAL_URL + "/images/medtracker.png",
          imgs: [],
          content: `<strong>Idea:</strong> This application attempt to solve a problem for people who must take medicines at specific hours a day for many times a week or for a lifetime. </br>
          <strong>Status:</strong> This app it is still in progress, next thing to do is to integrate to the reminder native function and implement push notifications.`,
          tech: [
            "devicon-react-original",
            "devicon-nodejs-plain",
            "devicon-apple-original",
          ],
          bg_color: "#E76464",
          txt_color: "#ffffff",
          animation: {
            x1: "320px",
            y1: "300px",
            z1: "200px",
            x2: "350px",
            y2: "-10px",
            z2: "200px",
          },
        },
      ],
      branding: {
        project_1: {
          title: "Pilar Lerou Chef",
          bg_color: "#C5B6A3",
          txt_color: "",
          logo: process.env.REACT_APP_LOCAL_URL + "/images/pilar_lerou.svg",
          bg_image: process.env.REACT_APP_LOCAL_URL + "/images/bg_pilar.jpg",
          content:
            "Aenean tincidunt gravida libero, at fermentum lorem euismod imperdiet. Maecenas venenatis dui eu nisl euismod, non mattis sapien auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          link: "https://dribbble.com/shots/3857556-Pilar-Lerou-Brand",
        },
        project_2: {
          title: "CCM Stucco",
          bg_color: "#106897",
          txt_color: "#ffffff",
          bg_image: "",
          logo: process.env.REACT_APP_LOCAL_URL + "/images/cmm_stucco.svg",
          content:
            "Aenean tincidunt gravida libero, at fermentum lorem euismod imperdiet. Maecenas venenatis dui eu nisl euismod, non mattis sapien auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          link: "https://dribbble.com/shots/3857644-CCM-Stucco-Logo",
        },
        project_3: {
          title: "Gamify",
          bg_color: "#331642",
          txt_color: "#ffffff",
          logo: process.env.REACT_APP_LOCAL_URL + "/images/gamify.svg",
          bg_image: process.env.REACT_APP_LOCAL_URL + "/images/bg_gamify.jpg",
          content:
            "Aenean tincidunt gravida libero, at fermentum lorem euismod imperdiet. Maecenas venenatis dui eu nisl euismod, non mattis sapien auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          link: "https://dribbble.com/shots/3857685-Gamify",
        },
      },
      isModalVisible: false,
      isMobile: false,
      projectOpen: {},
    };
  }

  componentWillMount() {
    if (this.props.ua.mobile) {
      this.setState({ isMobile: true });
    }
  }

  _showModal() {
    this.setState({ isModalVisible: true });
  }

  _hideModal() {
    this.setState({ isModalVisible: false });
  }

  _loadProject(id) {
    // getting project and setting the propper state
    const project = this.state.projects[id];
    this.setState({ projectOpen: { ...project } });

    this._showModal();
  }

  _renderProjects = (project, i) => {
    return (
      <div key={i}>
        <MediaQuery query='(min-device-width: 1440px)'>
          <Project
            id={i}
            content={project}
            x1={project.animation.x1}
            y1={project.animation.y1}
            z1={project.animation.z1}
            x2={project.animation.x2}
            y2={project.animation.y2}
            z2={project.animation.z2}
            loadProject={this._loadProject}
            // isFlipped={i % 2 === 0}
          />
        </MediaQuery>
        <MediaQuery query='(max-device-width: 430px)'>
          <ProjectMobile
            id={i}
            content={project}
            loadProject={this._loadProject}
          />
        </MediaQuery>
      </div>
    );
  };

  render() {
    let modal = null;

    if (this.state.isModalVisible) {
      modal = (
        <Modal content={this.state.projectOpen} close={this._hideModal} />
      );
    }

    return (
      <div className='App'>
        <Header />
        {/* PROJECTS: */}
        <section>{this.state.projects.map(this._renderProjects)}</section>

        {/* BRANDING: */}
        <section id='branding'>
          <BrandingHeader />
          {/* TODO: render using function */}
          <BrandingProject content={this.state.branding.project_1} />
          <BrandingProject content={this.state.branding.project_2} />
          <BrandingProject content={this.state.branding.project_3} />
        </section>

        <div id='about-contact'>
          {/* ABOUT ME: */}
          <AboutSection />

          {/* CONTACT: */}
          <ContactSection />
        </div>
        <Footer />

        {/* MODAL: */}
        <div>
          <CSSTransitionGroup
            transitionName='modal'
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {modal}
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default userAgent(App);
