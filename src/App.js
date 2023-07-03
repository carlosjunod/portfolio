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
        "Web Developer",
        "Graphic Designer",
        "UI Designer",
        "JavaScript Developer",
        "Latino",
      ],
      title_showing: ["Web Developer"],
      projects: [
        {
          title: "Medic App",
          image: process.env.REACT_APP_LOCAL_URL + "/images/medtracker.png",
          imgs: [
            {
              src:
                process.env.REACT_APP_LOCAL_URL +
                "/images/img_web_HMM_mobile.png",
              alt: "Aenean tincidunt gravida libero, at fermentum lorem euismod imperdiet. Maecenas venenatis dui eu nisl euismod",
              horizontal: true,
            },
            {
              src: process.env.REACT_APP_LOCAL_URL + "/images/img_logo_HMM.png",
              alt: "Aenean tincidunt gravida libero, at fermentum lorem euismod imperdiet. Maecenas venenatis dui eu nisl euismod, por massa, quis volutpat quam eros quis mi. Cras facilisis sodales nibh, eget maximus nibh interdum",
              horizontal: false,
            },
          ],
          content:
            "Aenean tincidunt gravida libero, at fermentum lorem euismod imperdiet. Maecenas venenatis dui eu nisl euismod, non mattis sapien auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas nec ligula ut nulla convallis ultrices. Quisque dapibus, massa a laoreet facilisis, leo dui pulvinar turpis, ac faucibus nulla dui ut lacus. Vestibulum ac gravida tortor, a blandit metus. Nunc aliquet iaculis odio vestibulum sollicitudin. Suspendisse pulvinar ultricies egestas. Cras bibendum, libero sed ultrices tristique, tortor erat tempor massa, quis volutpat quam eros quis mi. Cras facilisis sodales nibh, eget maximus nibh interdum at. Aliquam orci leo, efficitur nec mauris quis, fermentum lacinia leo. Ut nec tortor non ex bibendum dapibus et in eros. Proin ornare nunc eu enim pretium laoreet at dapibus mi. Nam et ex justo. Fusce in vulputate nunc, sed vestibulum nibh.",
          tech: [
            "devicon-react-original",
            "devicon-nodejs-plain",
            "devicon-apple-original",
          ],
          bg_color: "#E76464",
          txt_color: "#ffffff",
          animation: {
            x1: "350px",
            y1: "300px",
            z1: "200px",
            x2: "350px",
            y2: "-10px",
            z2: "200px",
          },
        },
        {
          title: "HMM Website",
          image: process.env.REACT_APP_LOCAL_URL + "/images/hmm_web.png",
          imgs: [
            {
              src:
                process.env.REACT_APP_LOCAL_URL +
                "/images/img_web_HMM_mobile.png",
              alt: `This application was made as a school project. I had the opportunity to integrate React, React Native and Redux, to make it worked I am sharing a big portion of the application using functional stateless components.`,
              horizontal: false,
            },
            {
              src: process.env.REACT_APP_LOCAL_URL + "/images/img_logo_HMM.png",
              alt: "As you can see in the GitHub <a href='https://github.com/carlosjunod/CoreModule'>link</a> most of the logic that is shared is in this code base which contains the actions and reducers the implementation of Redux. This codebase was stored in a separated repo in order to be used as a submodule",
              horizontal: false,
            },
          ],
          content: `<strong>Idea:</strong> This application attempt to solve a problem for people who must take medicines at specific hours a day for many times a week or for a lifetime. </br>
          <strong>Status:</strong> This app it is still in progress, next thing to do is to integrate to the reminder native function and implement push notifications.`,
          tech: [
            "devicon-wordpress-plain",
            "devicon-html5-plain",
            "devicon-sass-original",
            "devicon-gulp-plain",
            "devicon-javascript-plain",
          ],
          bg_color: "#FEC241",
          txt_color: "#263238",
          animation: {
            x1: "0px",
            y1: "50px",
            z1: "0px",
            x2: "100px",
            y2: "50px",
            z2: "50px",
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
    const projects = this.state.projects;
    return (
      <div key={i}>
        <MediaQuery query='(min-device-width: 1224px)'>
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
          />
        </MediaQuery>
        <MediaQuery query='(max-device-width: 420px)'>
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
