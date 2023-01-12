import React from 'react';
import { Container } from './styles';
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';

const TemplateHome: React.FC = () => {
  return (
    <Container>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Gabriella
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <i className="uil uil-estate nav__icon"></i> Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon"></i> About
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon"></i> Skills
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="uil uil-briefcase-alt nav__icon"></i> Services
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="uil uil-scenery nav__icon"></i> Portfolio
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon"></i> Contactme
                </a>
              </li>
            </ul>

            <i className="uil uil-times nav__close" id="nav-close"></i>
          </div>

          <div className="nav__btns">
            <i className="uil uil-moon change-theme" id="theme-button"></i>

            <div className="nav__toggle" id="nav-toggle">
              <i className="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>
      <main className="main">
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__social">
                <a href="https://www.linkedin.com/" target="_blank" className="home__social-icon">
                  <i className="uil uil-linkedin-alt"></i>
                </a>

                <a href="https://dribbble.com/" target="_blank" className="home__social-icon">
                  <i className="uil uil-dribbble"></i>
                </a>

                <a href="https://github.com/" target="_blank" className="home__social-icon">
                  <i className="uil uil-github-alt"></i>
                </a>
              </div>

              <div className="home__img">
                <svg className="home__blob" viewBox="0 0 200 187">
                  <mask id="mask0" mask-type="alpha">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                    Insert your image in the Img folder and Change your image | Center your image with X: horizontal, Y: vertical
                    <image className="home__blob-img" x="12" y="18" href="assets/img/perfil.png" />
                  </g>
                </svg>
              </div>

              <div className="home__data">
                <h1 className="home__title">Hi, I'm Gabriella</h1>
                <h3 className="home__subtitle">Frontend developer</h3>
                <p className="home__description">High level experience in web design and development knowledge, producing quality work.</p>
                <a href="#contact" className="button button--flex">
                  Contact Me <i className="uil uil-message button__icon"></i>
                </a>
              </div>
            </div>

            <div className="home__scroll">
              <a href="#about" className="home__scroll-button button--flex">
                <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                <span className="home__scroll-name">Scroll down</span>
                <i className="uil uil-arrow-down home__scroll-arrow"></i>
              </a>
            </div>
          </div>
        </section>
        <section className="about section" id="about">
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle">My introduction</span>

          <div className="about__container container grid">
            <img src="assets/img/about.jpg" alt="" className="about__img" />

            <div className="about__data">
              <p className="about__description">
                Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering
                quality work.
              </p>

              <div className="about__info">
                <div>
                  <span className="about__info-title">08+</span>
                  <span className="about__info-name">
                    Years <br />
                    experience
                  </span>
                </div>

                <div>
                  <span className="about__info-title">20+</span>
                  <span className="about__info-name">
                    Completed <br />
                    projects
                  </span>
                </div>

                <div>
                  <span className="about__info-title">05+</span>
                  <span className="about__info-name">
                    Companies <br />
                    worked
                  </span>
                </div>
              </div>

              <div className="about__buttons">
                <a download="" href="assets/pdf/Gabriella-Cv.pdf" className="button button--flex">
                  Download CV <i className="uil uil-download-alt button__icon"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My technical level</span>

          <div className="skills__container container grid">
            <div>
              <div className="skills__content skills__open">
                <div className="skills__header">
                  <i className="uil uil-brackets-curly skills__icon"></i>

                  <div>
                    <h1 className="skills__title">Frontend developer</h1>
                    <span className="skills__subtitle">More than 4 years</span>
                  </div>

                  <i className="uil uil-angle-down skills__arrow"></i>
                </div>

                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">HTML</h3>
                      <span className="skills__number">90%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__html"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">CSS</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__css"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">JavaScript</h3>
                      <span className="skills__number">60%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__js"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">React</h3>
                      <span className="skills__number">85%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__react"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="skills__content skills__close">
                <div className="skills__header">
                  <i className="uil uil-server-network skills__icon"></i>

                  <div>
                    <h1 className="skills__title">Backend developer</h1>
                    <span className="skills__subtitle">More than 2 years</span>
                  </div>

                  <i className="uil uil-angle-down skills__arrow"></i>
                </div>

                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">PHP</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__php"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Node Js</h3>
                      <span className="skills__number">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__node"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Firebase</h3>
                      <span className="skills__number">90%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__firebase"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Python</h3>
                      <span className="skills__number">55%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__python"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="skills__content skills__close">
                <div className="skills__header">
                  <i className="uil uil-swatchbook skills__icon"></i>

                  <div>
                    <h1 className="skills__title">Designer</h1>
                    <span className="skills__subtitle">More than 5 years</span>
                  </div>

                  <i className="uil uil-angle-down skills__arrow"></i>
                </div>

                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Figma</h3>
                      <span className="skills__number">90%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__figma"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Sketch</h3>
                      <span className="skills__number">85%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__sketch"></span>
                    </div>
                  </div>

                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Photoshop</h3>
                      <span className="skills__number">85%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__photoshop"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="qualification section">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My personal journey</span>

          <div className="qualification__container container">
            <div className="qualification__tabs">
              <div className="qualification__button button--flex qualification__active" data-target="#education">
                <i className="uil uil-graduation-cap qualification__icon"></i>
                Education
              </div>

              <div className="qualification__button button--flex" data-target="#work">
                <i className="uil uil-briefcase-alt qualification__icon"></i>
                Work
              </div>
            </div>

            <div className="qualification__sections">
              <div className="qualification__content qualification__active" data-content id="education">
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Computer Engineer</h3>
                    <span className="qualification__subtitle">Peru - University</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2009 - 2014
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">Web Design</h3>
                    <span className="qualification__subtitle">Spain - Institute</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2014 - 2017
                    </div>
                  </div>
                </div>

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Web Development</h3>
                    <span className="qualification__subtitle">Peru - Institute</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2017 - 2019
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>

                  <div className="qualification__time">
                    <span className="qualification__rounder"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">Master in Ui/Ux</h3>
                    <span className="qualification__subtitle">Peru - Institute</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2019 - 2021
                    </div>
                  </div>
                </div>
              </div>

              <div className="qualification__content" data-content id="work">
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Software Engineer</h3>
                    <span className="qualification__subtitle">Microsoft - Peru</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2016-2018
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>

                <div className="qualification__data">
                  <div></div>

                  <div className="qualification__time">
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>

                  <div>
                    <h3 className="qualification__title">Frontend Developer</h3>
                    <span className="qualification__subtitle">Apple Inc - Spain</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2018-2020
                    </div>
                  </div>
                </div>

                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Ui Designer</h3>
                    <span className="qualification__subtitle">Figma - Spain</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2020-2021
                    </div>
                  </div>

                  <div>
                    <span className="qualification__rounder"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services section" id="services">
          <h2 className="section__title">Services</h2>
          <span className="section__subtitle">What i offer</span>

          <div className="services__container container grid">
            <div className="services__content">
              <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">
                  Ui/Ux <br />
                  Designer
                </h3>
              </div>
              <span className="button button--flex button--small button--link services__button">
                View More
                <i className="uil uil-arrow-right button__icon"></i>
              </span>

              <div className="services__modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    Ui/Ux <br />
                    Designer
                  </h4>
                  <i className="uil uil-times services__modal-close"></i>

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>I develop the user interface.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>Web page development.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>I create ux element interactions.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>I position your company brand.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="services__content">
              <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">
                  Frontend <br />
                  Developer
                </h3>
              </div>

              <span className="button button--flex button--small button--link services__button">
                View More
                <i className="uil uil-arrow-right button__icon"></i>
              </span>

              <div className="services__modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    Frontend <br />
                    Developer
                  </h4>
                  <i className="uil uil-times services__modal-close"></i>

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>I develop the user interface.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>Web page development.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>I create ux element interactions.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>I position your company brand.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="services__content">
              <div>
                <i className="uil uil-pen services__icon"></i>
                <h3 className="services__title">
                  Branding <br />
                  Designer
                </h3>
              </div>

              <span className="button button--flex button--small button--link services__button">
                View More
                <i className="uil uil-arrow-right button__icon"></i>
              </span>

              <div className="services__modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    Branding <br />
                    Designer
                  </h4>
                  <i className="uil uil-times services__modal-close"></i>

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>I develop the user interface.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>Web page development.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>I create ux element interactions.</p>
                    </li>
                    <li className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>I position your company brand.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio section" id="portfolio">
          <h2 className="section__title">Portfolio</h2>
          <span className="section__subtitle">Most recent work</span>

          <div className="portfolio__container container swiper-container">
            <div className="swiper-wrapper">
              <div className="portfolio__content grid swiper-slide">
                <img src="assets/img/portfolio1.jpg" alt="" className="portfolio__img" />

                <div className="portfolio__data">
                  <h3 className="portfolio__title">Modern Website</h3>
                  <p className="portfolio__description">Website adaptable to all devices, with ui components and animated interactions.</p>
                  <a href="#" className="button button--flex button--small portfolio__button">
                    Demo
                    <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>

              <div className="portfolio__content grid swiper-slide">
                <img src="assets/img/portfolio2.jpg" alt="" className="portfolio__img" />

                <div className="portfolio__data">
                  <h3 className="portfolio__title">Brand Design</h3>
                  <p className="portfolio__description">Website adaptable to all devices, with ui components and animated interactions.</p>
                  <a href="#" className="button button--flex button--small portfolio__button">
                    Demo
                    <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>

              <div className="portfolio__content grid swiper-slide">
                <img src="assets/img/portfolio3.jpg" alt="" className="portfolio__img" />

                <div className="portfolio__data">
                  <h3 className="portfolio__title">Online store</h3>
                  <p className="portfolio__description">Website adaptable to all devices, with ui components and animated interactions.</p>
                  <a href="#" className="button button--flex button--small portfolio__button">
                    Demo
                    <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="swiper-button-next">
              <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
            </div>
            <div className="swiper-button-prev">
              <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </section>
        <section className="project section">
          <div className="project__bg">
            <div className="project__container container grid">
              <div className="project__data">
                <h2 className="project__title">You have a new project</h2>
                <p className="project__description">Contact me now and get a 30% discount on your new project.</p>
                <a href="#" className="button button--flex button--white">
                  Contact Me
                  <i className="uil uil-message button__icon"></i>
                </a>
              </div>

              <img src="assets/img/project.png" alt="" className="project__img" />
            </div>
          </div>
        </section>
        <section className="testimonial section">
          <h2 className="section__title">Testimonial</h2>
          <span className="section__subtitle">My client saying</span>

          <div className="testimonial__container container swiper-container">
            <div className="swiper-wrapper">
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img src="assets/img/testimonial1.jpg" alt="" className="testimonial__img" />

                    <div>
                      <h3 className="testimonial__name">Sara Smith</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>

                  <div>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                  </div>
                </div>

                <p className="testimonial__description">
                  I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.
                </p>
              </div>

              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img src="assets/img/testimonial2.jpg" alt="" className="testimonial__img" />

                    <div>
                      <h3 className="testimonial__name">Matt Robinson</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>

                  <div>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                  </div>
                </div>

                <p className="testimonial__description">
                  I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.
                </p>
              </div>

              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img src="assets/img/testimonial3.jpg" alt="" className="testimonial__img" />

                    <div>
                      <h3 className="testimonial__name">Raul Harris</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>

                  <div>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                  </div>
                </div>

                <p className="testimonial__description">
                  I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.
                </p>
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination-testimonial"></div>
          </div>
        </section>
        <section className="contact section" id="contact">
          <h2 className="section__title">Contact Me</h2>
          <span className="section__subtitle">Get in touch</span>

          <div className="contact__container container grid">
            <div>
              <div className="contact__information">
                <i className="uil uil-phone contact__icon"></i>
                <div>
                  <h3 className="contact__title">Call Me</h3>
                  <span className="contact__subtitle">999-777-666</span>
                </div>
              </div>

              <div className="contact__information">
                <i className="uil uil-envelope contact__icon"></i>
                <div>
                  <h3 className="contact__title">Email</h3>
                  <span className="contact__subtitle">Gabriella@email.com</span>
                </div>
              </div>

              <div className="contact__information">
                <i className="uil uil-map-marker contact__icon"></i>
                <div>
                  <h3 className="contact__title">Location</h3>
                  <span className="contact__subtitle">Peru - Lima Av. Bolivar #123</span>
                </div>
              </div>
            </div>

            <form action="" className="contact__form grid">
              <div className="contact__inputs grid">
                <div className="contact__content">
                  <label htmlFor="" className="contact__label">
                    Name
                  </label>
                  <input type="text" className="contact__input" />
                </div>
                <div className="contact__content">
                  <label htmlFor="" className="contact__label">
                    Email
                  </label>
                  <input type="email" className="contact__input" />
                </div>
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Project
                </label>
                <input type="text" className="contact__input" />
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Message
                </label>
                <textarea name="" id="" cols={0} rows={7} className="contact__input"></textarea>
              </div>

              <div>
                <a href="#" className="button button--flex">
                  Send Message
                  <i className="uil uil-message button__icon"></i>
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Gabriella</h1>
              <span className="footer__subtitle">Frontend developer</span>
            </div>

            <ul className="footer__links">
              <li>
                <a href="#services" className="footer__link">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="footer__link">
                  Contactme
                </a>
              </li>
            </ul>

            <div className="footer__socials">
              <a href="https://www.facebook.com/" target="_blank" className="footer__social">
                <i className="uil uil-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" className="footer__social">
                <i className="uil uil-instagram"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" className="footer__social">
                <i className="uil uil-twitter-alt"></i>
              </a>
            </div>
          </div>

          <p className="footer__copy">&#169;</p>
        </div>
      </footer>
      <a href="#" className="scrollup" id="scroll-top">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
      <Script src="assets/js/swiper-bundle.min.js"></Script>
      <Script src="assets/js/main.js"></Script>
    </Container>
  );
};

export default TemplateHome;
