import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import { selectSectionAction } from './actions';
import './Portfolio.css';
import personImage from './assets/person1.jpg';

const Header = ({ onCollapseClick, student}) => (
   <header id="main-header">
      <div className="row no-gutters">
         <div className="col-lg-4 col-md-5">
            <img src={student.photo} />
         </div>
         <div className="col-lg-8 col-md-7">
            <div className="d-flex flex-column">
               <div className="p-5 bg-dark text-white">
                  <div className="name d-flex flex-row justify-content-between align-items-center">
                     <h1 className="display-4">{student.name}</h1>
                     <div>
                        <i className="fa fa-twitter" />
                     </div>
                     <div>
                        <i className="fa fa-facebook" />
                     </div>
                     <div>
                        <i className="fa fa-instagram" />
                     </div>
                     <div>
                        <i className="fa fa-github" />
                     </div>
                  </div>
               </div>
               <div className="p-4 bg-black">
                  Front-end Developer Jr
               </div>
               <div>
                  <div className="d-flex flex-row text-white align-items-stretch text-center">
                     <div
                        className="port-item p-4 bg-primary"
                        data-toggle="collapse"
                        data-target="#home"
                        onClick={() => onCollapseClick('home')}
                     >
                        <i
                           className="fa fa-home d-block"
                           onClick={() => onCollapseClick('home')}
                        />{' '}
                        Inicio
                     </div>
                     <div
                        className="port-item p-4 bg-success"
                        data-toggle="collapse"
                        data-target="#resume"
                        onClick={() => onCollapseClick('resume')}
                     >
                        <i
                           data-target="#home"
                           className="fa fa-graduation-cap d-block"
                           onClick={() => onCollapseClick('resume')}
                        />{' '}
                        Experiencia
                     </div>
                     <div
                        className="port-item p-4 bg-warning"
                        data-toggle="collapse"
                        data-target="#work"
                        onClick={() => onCollapseClick('work')}
                     >
                        <i
                           data-target="#work"
                           className="fa fa-folder-open d-block"
                           onClick={() => onCollapseClick('work')}
                        />{' '}
                        Proyectos
                     </div>
                     <div
                        className="port-item p-4 bg-danger"
                        data-toggle="collapse"
                        data-target="#contact"
                        onClick={() => onCollapseClick('contact')}
                     >
                        <i
                           data-target="#contact"
                           className="fa fa-envelope d-block"
                           onClick={() => onCollapseClick('contact')}
                        />{' '}
                        Contacto
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
);

const Home = ({ selectedSection }) => (
   <div
      id="home"
      className={'collapse ' + (selectedSection == 'home' ? 'show' : 'hide')}
   >
      <div className="card card-body bg-primary text-white py-5">
         <h2>Bienvenido a mi página personal</h2>
         <p className="lead">
         Soy estudiante de Desarrollo front-end, con conocimientos de diferentes tecnologías (HTML5, CSS, JS, React-Redux ) y así mismo el consumo API, frameworks y librerías, con disposición a seguir aprendiendo más del apasionante mundo tecnológico y compartir lo aprendido con quien lo requiera.
         Puedo trabajar tanto en equipo como individualmente, manteniendo la calma ante situaciones de presión y gestion del estres.
         </p>
      </div>
      <div className="card card-body py-5">
         <h3>Mis habilidades</h3>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            nulla et, modi harum hic deserunt.
         </p>
         <hr />
         <h4>HTML</h4>
         <div className="progress mb-3">
            <div
               className="progress-bar bg-success"
               style={{ width: '100%' }}
            />
         </div>
         <h4>CSS</h4>
         <div className="progress mb-3">
            <div
               className="progress-bar bg-success"
               style={{ width: '100%' }}
            />
         </div>
         <h4>JavaScript</h4>
         <div className="progress mb-3">
            <div className="progress-bar bg-success" style={{ width: '90%' }} />
         </div>
         <h4>ReactJS</h4>
         <div className="progress mb-3">
            <div className="progress-bar bg-success" style={{ width: '80%' }} />
         </div>
         <h4>Redux</h4>
         <div className="progress mb-3">
            <div className="progress-bar bg-success" style={{ width: '70%' }} />
         </div>
         <h4>Bootstrap</h4>
         <div className="progress mb-3">
            <div className="progress-bar bg-success" style={{ width: '90%' }} />
         </div>
         <h4>Jquery</h4>
         <div className="progress mb-3">
            <div className="progress-bar bg-success" style={{ width: '90%' }} />
         </div>
      </div>
   </div>
);

const Resume = ({ selectedSection }) => (
   <div
      id="resume"
      className={'collapse ' + (selectedSection == 'resume' ? 'show' : 'hide')}
   >
      <div className="card card-body bg-success text-white py-5">
         <h2>Mi experiencia</h2>
         <p>
         "Una experiencia nunca es un fracaso, pues siempre viene a demostrar algo".
         </p>
         <sub>Thomas Alva Edison.</sub>
      </div>
      <div className="card card-body py-5">
      <h4>Participante en la Hakathon Peru #SinAnemia</h4>
      <h5>Organizado por el Ministerio de Desarrollo e Inclusión Social</h5>
      <p>
      Participamos un equipo de 5 personas en el desarrollo de una solución innovadora tecnológica que apoye la lucha contra la Anemia en el Perú.
      Se desarrolló un aplicativo web-móvil prototipo con React-Router denominado "YANAPA" palabra en Quechua que significa "Ayuda", con el objetivo de mapear a través de API de GoogleMaps las regiones por sus distritos que registran casos de anemia con las clasificaciones (level, moderada, severa) declaradas por el MINSA .
      
      La finalidad del aplicativo es ayudar que distintas organizaciones de ayuda Social, ONG, programas sociales, que quisiera apoyar la lucha contra la anemia, puedan identificar las zonas mas afectadas y realizar actividades que puedan reducir el porcentaje de anemia en el Perú.
      </p>
      <div className="card card-body py-5">
      <h3>Hakathon Peru #SinAnemia</h3>
      <p>
         Arequipa-Perú 2017
      </p>
      <div className="row no-gutters">
         <div className="col-md-3">
            <a
               href="https://unsplash.it/1200/768.jpg?image=251"
               data-toggle="lightbox"
            >
               <img
                  src="https://scontent.flim5-2.fna.fbcdn.net/v/t1.0-9/22539898_1951068311801549_5151503757296682784_n.jpg?oh=5bb72599e5b620e44bac84cef01c156c&oe=5AAF7F9A"
                  className="img-fluid"
               />
            </a>
         </div>
         <div className="col-md-3">
            <a
               href="https://unsplash.it/1200/768.jpg?image=252"
               data-toggle="lightbox"
            >
               <img
                  src="https://scontent.flim5-2.fna.fbcdn.net/v/t1.0-9/22405918_367000990388973_4949507305105829222_n.jpg?oh=fc60467de33368c827908c35c648e9d1&oe=5AACBA82"
                  className="img-fluid"
               />
            </a>
         </div>
         <div className="col-md-3">
            <a
               href="https://unsplash.it/1200/768.jpg?image=253"
               data-toggle="lightbox"
            >
               <img
                  src="https://scontent.flim5-2.fna.fbcdn.net/v/t1.0-9/22519208_1951078288467218_3608707181857883367_n.jpg?oh=9d591e0842a43883a74efe4765cd6845&oe=5A726D75"
                  className="img-fluid"
               />
            </a>
         </div>
         <div className="col-md-3">
            <a
               href="https://unsplash.it/1200/768.jpg?image=254"
               data-toggle="lightbox"
            >
               <img
                  src="https://scontent.flim5-2.fna.fbcdn.net/v/t1.0-9/22549822_1951078455133868_8887632279036644865_n.jpg?oh=b7e79e76e35d575f6ce09b6cc4e567d5&oe=5AA42335"
                  className="img-fluid"
               />
            </a>
         </div>
      </div>
      <div className="row no-gutters">
         <div className="col-md-3">
            <a
               href="https://unsplash.it/1200/768.jpg?image=255"
               data-toggle="lightbox"
            >
               <img
                  src="https://scontent.flim5-2.fna.fbcdn.net/v/t1.0-9/22489726_1951096858465361_8527177536271628756_n.jpg?oh=040c791a2d655804eaebfc9514d0434f&oe=5A778E43"
                  className="img-fluid"
               />
            </a>
         </div>
         <div className="col-md-3">
            <a
               href="https://unsplash.it/1200/768.jpg?image=256"
               data-toggle="lightbox"
            >
               <img
                  src="https://scontent.flim5-2.fna.fbcdn.net/v/t1.0-9/22196341_1143196439158585_2107946819786970105_n.jpg?oh=f2004ccf3d319355fe0fc138f13641f0&oe=5A6DE95E"
                  className="img-fluid"
               />
            </a>
         </div>
         <div className="col-md-3">
            <a
               href="https://unsplash.it/1200/768.jpg?image=257"
               data-toggle="lightbox"
            >
               <img
                  src="https://scontent.flim5-2.fna.fbcdn.net/v/t1.0-9/22519165_1951078398467207_6916866399190600987_n.jpg?oh=f9668981e66bcbd202a249dd52d3d9bf&oe=5AA63814"
                  className="img-fluid"
               />
            </a>
         </div>
         <div className="col-md-3">
            <a
               href="https://unsplash.it/1200/768.jpg?image=258"
               data-toggle="lightbox"
            >
               <img
                  src="https://scontent.flim5-2.fna.fbcdn.net/v/t1.0-9/22489735_1951068331801547_5429847788098311431_n.jpg?oh=68e2704299f63620f337b1882239a591&oe=5A73E59F"
                  className="img-fluid"
               />
            </a>
         </div>
      </div>
   </div>
      </div>
   </div>
);

const Work = ({ selectedSection }) => (
   <div
      id="work"
      className={'collapse ' + (selectedSection == 'work' ? 'show' : 'hide')}
   >
      <div className="card card-body bg-warning py-5">
         <h3>Mi portafolio</h3>
         <p>
         HTML - JAVASCRIPT - CSS - REACTJS - REDUX
         </p>
      </div>
      <div className="card card-body py-5">
         <h3>Proyectos</h3>
         <div className="row no-gutters">
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=251"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=251"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=252"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=252"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=253"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=253"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=254"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=254"
                     className="img-fluid"
                  />
               </a>
            </div>
         </div>
         <div className="row no-gutters">
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=255"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=255"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=256"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=256"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=257"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=257"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=258"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=258"
                     className="img-fluid"
                  />
               </a>
            </div>
         </div>
      </div>
   </div>
);

const Contact = ({ selectedSection }) => (
   <div
      id="contact"
      className={'collapse ' + (selectedSection == 'contact' ? 'show' : 'hide')}
   >
      <div className="card card-body bg-danger text-white py-5">
         <h2>Contáctame</h2>
         <p>
         Celular: 910946010
         </p>
         <p>Email: mariley2018@gmail.com
         </p>
      </div>
      <div className="card card-body py-5">
         <h3>Get in touch</h3>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
            autem.
         </p>
         <form>
            <div className="form-group">
               <div className="input-group input-group-lg">
                  <span className="input-group-addon bg-danger text-white">
                     <i className="fa fa-user" />
                  </span>
                  <input
                     type="text"
                     className="form-control bg-dark text-white"
                     placeholder="Name"
                  />
               </div>
            </div>
            <div className="form-group">
               <div className="input-group input-group-lg">
                  <span className="input-group-addon bg-danger text-white">
                     <i className="fa fa-envelope" />
                  </span>
                  <input
                     type="email"
                     className="form-control bg-dark text-white"
                     placeholder="Email"
                  />
               </div>
            </div>
            <div className="form-group">
               <div className="input-group input-group-lg">
                  <span className="input-group-addon bg-danger text-white">
                     <i className="fa fa-pencil" />
                  </span>
                  <textarea
                     rows={5}
                     className="form-control bg-dark text-white"
                     placeholder="Message"
                     defaultValue={''}
                  />
               </div>
            </div>
            <input
               type="submit"
               defaultValue="Submit"
               className="btn btn-danger btn-block btn-lg"
            />
         </form>
      </div>
   </div>
);

const Footer = () => (
   <footer id="main-footer" className="p-5 bg-dark text-white">
      <div className="row">
         <div className="col-md-6">
            <a href="#" className="btn btn-outline-light">
               <i className="fa fa-cloud" /> Download Resume
            </a>
         </div>
      </div>
   </footer>
);

const Portfolio = ({ selectedSection, student }) => (
   <div className="container">
      <Header onCollapseClick={e => selectSectionAction(e) } student={student} />
      <Home selectedSection={selectedSection} />
      <Resume selectedSection={selectedSection} />
      <Work selectedSection={selectedSection} />
      <Contact selectedSection={selectedSection} />
      <Footer />
   </div>
);

const mapToProps = ({ selectedSection, student }) => ({
   selectedSection,
   student
});
export default connect(mapToProps)(Portfolio);
