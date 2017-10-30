import createStore from 'redux-zero';

const students = [
   {
      id: '10/24/2017 17:17:10',
      name: 'Susy Deysi Talavera Cardenas',
      campus: 'Arequipa',
      code: 'AQP20171102',
      bio:
         'Hola soy Susy, soy parte de la cuarta promoción de Laboratoria, Tengo 27 años, me gusta aprender, innovar, crear nuevas cosas lo que el mundo tecnológico nos brinda.',
      englishLevel: 'Básico',
      linkedin: 'https://www.linkedin.com/in/susy-talavera-36b28911b/',
      portfolio: '',
      github: 'DeysiTala@github.com',
      photo: 'https://drive.google.com/open?id=0B4XgTQbUUYnyYkgyX3hoQkI2ajg',
      badges: '',
      html:
         '[https://deysitala.github.io/app-love-flex/,\nhttps://deysitala.github.io/FotoLog-version2/]',
      jquery:
         '[https://deysitala.github.io/Puzzle_Memoria/,\nhttps://deysitala.github.io/lyft-car/]',
      css:
         'https://deysitala.github.io/game-planet/\nhttps://deysitala.github.io/scoreBoardTime/\nhttps://deysitala.github.io/save-the-koala2/',
      react:
         '[https://deysitala.github.io/car-insurance/,\nhttps://deysiTala.github.io/ApiGithub-react/,\nhttps://deysiTala.github.io/App_mvc/]',
      education: 'Estudiante In.g de Sistemas',
      workExperience: '',
      testimonials: '',
      resume: 'https://drive.google.com/open?id=0B4XgTQbUUYnyWGlrS2xmTnBTWkk'
   },
   {
      id: '10/24/2017 17:20:03',
      name: 'Kely Estefani Añamuro Huamani',
      campus: 'Arequipa',
      code: 'AQP20171461',
      bio:
         'Mi nombre es Kely Añamuro Huamani. Me apasiona el mundo de la tecnología, la programación ha sido un gran paso para adentrarme en ello. Soy autodidacta, siempre estoy en constante aprendizaje, considero que nadie es experto en algo, cada día hay muchas cosas mas que aprender.\nCrear, construir y diseñar son mis mas grandes pasiones.',
      englishLevel: 'Básico',
      linkedin:
         'https://www.linkedin.com/in/kely-estefani-a%C3%B1amuro-huamani-a6294014b/',
      portfolio: '//',
      github: 'https://KelyKley@github.com',
      photo: 'https://drive.google.com/open?id=0BwiwxuLk_mU3dHU1TGtRWXl0NTg',
      badges: 'Best team player, Rocking Sprint',
      html:
         '[https://kelykley.github.io/trello-laboratoria/, \nhttps://kelykley.github.io/Fotolog-ver2/,\nhttps://kelykley.github.io/easy-bike/,\nhttps://kelykley.github.io/Quiz-Demo/,\nhttps://mariley20.github.io/game-planet/]',
      jquery:
         '[https://kelykley.github.io/Fotolog-ver2/,\nhttps://kelykley.github.io/Geolocation-Ver2/,\nhttps://kelykley.github.io/Game-memory/]',
      css:
         'https://gabiprds93.github.io/home\nhttps://solics.github.io/car-insurance/\nhttps://kelykley.github.io/ROuting-course-remast/\nhttps://kelykley.github.io/Score-Students/',
      react:
         '[https://solics.github.io/car-insurance/,\nhttps://gabiprds93.github.io/home,\nhttps://kelykley.github.io/ROuting-course-remast/,\nhttps://kelykley.github.io/MVC-Invitacion/]',
      education: 'Laboratoria',
      workExperience: '',
      testimonials: '',
      resume: 'https://drive.google.com/open?id=0BwiwxuLk_mU3WjRtVUNYc05OQ0E'
   },
   {
      id: '10/24/2017 17:20:23',
      name: 'Abigail De La Flor Yucra',
      campus: 'Arequipa',
      code: 'AQP20171198',
      bio:
         'Soy Frontend Development Junior, estudio en Laboratoria - Arequipa, puedo integrarme fácilmente a un grupo de trabajo y colaborar en el desarrollo de proyectos de diseño web y aplicaciones.',
      englishLevel: 'Intermedio',
      linkedin: 'www.linkedin.com/in/abigail-de-la-flor-yucra',
      portfolio: '',
      github: 'Abby25.fly@github.com',
      photo: '',
      badges: '',
      html: '[https://abby25fly.github.io/Final--Spring1/]',
      jquery:
         '[https://abby25fly.github.io/wizard-quiz/,\nhttps://abby25fly.github.io/Memory-Game/]',
      css:
         'https://abby25fly.github.io/SaveTheKoala2.0/\nhttps://abby25fly.github.io/LabStudio-Bootstrap/\nhttps://abby25fly.github.io/game-planet/',
      react:
         '[https://abby25fly.github.io/teachers,\nhttps://abby25fly.github.io/registration-REACT/,\nhttps://abby25fly.github.io/Score-Timer/]',
      education: 'Universitaria',
      workExperience: '',
      testimonials: '',
      resume: 'https://drive.google.com/open?id=0B32J2gUmYvPFcUFwTVFHLXpyTmc'
   },
   {
      id: '10/24/2017 21:08:41',
      name: 'Maria del Rosario Palomino Begazo',
      campus: 'Arequipa',
      code: 'AQP20171310',
      bio:
         'Front-end developer. Ingeniera de sistemas con especialización en el area de sistemas de información. Ingles avanzado con certificación TOEFL.  Soy una persona responsable, orientada al logro de resultados, con capacidad de planificación y organización, y con compromiso para trabajar en equipo.',
      englishLevel: 'Avanzado',
      linkedin:
         'www.linkedin.com/in/maria-del-rosario-palomino-begazo-b2954276',
      portfolio: '',
      github: 'MariaP92@github.cpm',
      photo: 'https://drive.google.com/open?id=0BwuLSEJEbHleLWpYT1RvYUhfLTg',
      badges: 'Cuadro de Honor, Best team player, La mas proactiva',
      html: '[https://mariap92.github.io/Freelancer-flex/]',
      jquery:
         '[https://mariap92.github.io/QuizApp/,\nhttps://mariap92.github.io/GradesStudents/,\nhttps://mariap92.github.io/ToDoList_clases/]',
      css: 'https://mariap92.github.io/savePandaII/',
      react:
         '[https://mariap92.github.io/InvitationReactMVC/,\nhttps://mariap92.github.io/ScoreBoardReact_Timer/]',
      education: 'Universidad Cátolica de Santa Maria - Ingeniería de Sistemas',
      workExperience: '',
      testimonials: '',
      resume: ''
   },
   {
      id: '10/25/2017 5:04:17',
      name: 'Aydee Quispe Mamani',
      campus: 'Arequipa',
      code: 'AQP20171051',
      bio:
         'Hola, mi nombre es Aydee Quispe, soy una front end developer egresada de Laboratoria, habituada a un alto nivel de exigencia y a trabajar por objetivos y en equipo. Poseo un carácter dinámico, constante y optimista. Actualmente me encuentro en proceso de convertirme en Developer fullstack JS.\n\nMe gusta todo lo relacionado con la tecnología, ver series y pasar tiempo leyendo sobre diferentes temas. Mi deseo en el futuro es seguir especializandome y crecer como profesional, convertirme en una programadora 100%.',
      englishLevel: 'Intermedio',
      linkedin: 'linkedin.com/in/aydeequispe',
      portfolio: '',
      github: 'https://github.com/AydeeQM',
      photo: 'https://drive.google.com/open?id=0B9jIeICgEBw9VzlOVjQzdmtSZnc',
      badges: 'Cuadro de Honor, Rocking Spring',
      html:
         '[https://aydeeqm.github.io/Trello/,\nhttps://aydeeqm.github.io/lista-de-tareas/,\nhttps://aydeeqm.github.io/juego-laberinto/]',
      jquery:
         '[https://aydeeqm.github.io/Juego_memoria/,\nhttps://aydeeqm.github.io/RESERVA-BUS--JQUERY/,\nhttps://aydeeqm.github.io/QUIZ-ABC/]',
      css:
         'Link1: https://aydeeqm.github.io/start-studio/\nLink2: https://aydeeqm.github.io/freelance-flex/\nLink3: https://aydeeqm.github.io/VOL2-SAVE-THE-KOALA/',
      react:
         '[https://aydeeqm.github.io/MVC-REGISTER/,\nhttps://aydeeqm.github.io/TIMER-SCORED/,\nhttps://aydeeqm.github.io/DEMO_ROUT/]',
      education: 'Front end Developer y Administrador',
      workExperience: '',
      testimonials: '',
      resume: ''
   },
   {
      id: '10/25/2017 5:50:04',
      name: 'Gabriela Alejandra Paredes Paredes',
      campus: 'Arequipa',
      code: 'AQP20171643',
      bio:
         'Soy una persona con deseos de superación, que se adapta a los cambios fácilmente, enfocada en buscar soluciones a los problemas, con buen criterio y toma de decisiones. Aspiro a ser una profesional exitosa. Todas mis decisiones están basadas en los valores que me han inculcado a lo largo de mi vida.',
      englishLevel: 'Intermedio',
      linkedin: 'www.linkedin.com/in/gabriela-paredes-paredes',
      portfolio: '',
      github: 'gabiprds93@github.com',
      photo: '',
      badges: 'Unicornio, Cuadro de Honor',
      html:
         '[https://gabiprds93.github.io/Laberinto/, https://gabiprds93.github.io/Tablero-Ajedrez/, https://gabiprds93.github.io/Sprint-3---Proyecto-Final/]',
      jquery:
         '[https://gabiprds93.github.io/Reserva-Asientos/, https://gabiprds93.github.io/youtube-jquery/, https://gabiprds93.github.io/Puzzle-Memoria/]',
      css:
         'https://gabiprds93.github.io/save-the-koala-vol2/, https://gabiprds93.github.io/Pandas/, https://gabiprds93.github.io/tea-lover/',
      react:
         '[https://gabiprds93.github.io/React-Trivia/, https://gabiprds93.github.io/react-routing/, https://aqp20171679.github.io/Yape--Sprint-5/]',
      education: '',
      workExperience: '',
      testimonials: '',
      resume: ''
   },
   {
      id: '10/25/2017 9:25:52',
      name: 'Jackeline ISabel Puruaya Taya',
      campus: 'Arequipa',
      code: 'AQP20171021',
      bio:
         'Soy una persona responsable que le gusta trabajar en equipo. Me encanta crear e imaginar nuevas ideas. Soy de esas personas que vive emocionada con la magia de la tecnología por todo el impacto positivo que puede tener en nuestra sociedad.',
      englishLevel: 'Intermedio',
      linkedin: 'https://www.linkedin.com/mynetwork/',
      portfolio: 'https://github.com/',
      github: 'jais210@github.com',
      photo: '',
      badges: 'Best team player',
      html: '[https://jais210.github.io/fotolog/]',
      jquery: 'https://jais210.github.io/RoadBlock-jQuery/',
      css: 'https://jais210.github.io/saveTheKoala2/',
      react: '[https://jais210.github.io/PlayerScoreboard-React/]',
      education: 'Bachiller en Derecho',
      workExperience: 'Secigrista en la Secretaría General-UNSA',
      testimonials: '',
      resume: ''
   },
   {
      id: '10/25/2017 9:39:56',
      name: 'Mariley Erika',
      campus: 'Arequipa',
      code: 'AQP20171505',
      bio:
         'Soy Mariley, soy Frontend Developer.\nEn Laboratoria aprendí lo grandioso que es programar, es como hacer magia por medio del teclado y lo que imaginas lo puedes hacer real.Me gusta la tecnología, siempre estoy dispuesta aprender y compartir lo aprendido con quien lo requiera.\nMe considero calmada ante situaciones de intensa presión, me agrada trabajar en equipo, poniendo todo de mi parte para un resultado optimo. No puedo rendirme fácilmente, siempre estoy dispuesta a seguir intentado y tomando nuevos caminos hacia la solución.',
      englishLevel: 'Básico',
      linkedin:
         'https://www.linkedin.com/in/mariley-erika-condori-calla-657b03151/',
      portfolio: '',
      github: 'mariley20@github.com',
      photo: 'https://media.licdn.com/media/AAIA_wDGAAAAAQAAAAAAAAvKAAAAJDZmOTM1MmQ3LTc3NjEtNGIxYS1hNTA2LWQwYTAzODUzZGNmMw.jpg',
      badges: 'Cuadro de Honor, Best team player',
      html:
         '["https://mariley20.github.io/PandaPanda/", \n"https://mariley20.github.io/puzzle-memoria/",\n"https://mariley20.github.io/comentarios-fotolog-II/" ]',
      jquery:
         '["https://mariley20.github.io/Reserva_de_Pasajes/",\n"https://mariley20.github.io/listaTareasPOO/",\n"https://mariley20.github.io/quiz-evaluado/"]',
      css:
         '["https://mariley20.github.io/FreeLancer-flexbox/",\n"https://mariley20.github.io/applove-II/",\n"https://mariley20.github.io/lab-Studio/"]',
      react:
         '[ "https://mariley20.github.io/yanapa",\n"https://kelykley.github.io/Trivia-redux/",\n"https://mariley20.github.io/Registro-invitados-mvc/" ]',
      education: 'Laboratoria',
      workExperience: '',
      testimonials: '',
      resume: ''
   },
   {
      id: '10/26/2017 2:09:18',
      name: 'Diana Carolina Quispe Ccallo',
      campus: 'Arequipa',
      code: 'AQP20171345',
      bio:
         'Soy una persona positiva y bastante amigable, me gusta trabajar en equipo  y  disfruto de la tecnología, el arte y el cine.',
      englishLevel: 'Intermedio',
      linkedin: 'www.linkedin.com/in/diana-carolina-quispe-ccallo-3690a8150',
      portfolio: '',
      github: 'DianaQuispe@github.com',
      photo: '',
      badges: '',
      html:
         '[https://dianaquispe.github.io/LOVE-LOVE-PANDA/ , https://dianaquispe.github.io/CSS-GARDEN/,\nhttps://dianaquispe.github.io/student-records/]',
      jquery:
         '[https://dianaquispe.github.io/LYFTgeo/index1.html,\nhttps://dianaquispe.github.io/GEOLOCALIZACION/,\nhttps://dianaquispe.github.io/ABC-Quiz/]',
      css:
         'https://dianaquispe.github.io/REGISTRATIONwhitMVC/,\nhttps://dianaquispe.github.io/FREELANCER/,',
      react:
         '[https://dianaquispe.github.io/ForoRedux/,\nhttps://dianaquispe.github.io/Course-/,\nhttps://dianaquispe.github.io/about]',
      education: '',
      workExperience: '',
      testimonials: '',
      resume: ''
   },
   {
      id: '10/26/2017 7:16:24',
      name: 'Diana María Silva Valencia',
      campus: 'Arequipa',
      code: 'AQP20171024',
      bio:
         'Front-end developer con conocimientos en Javascript, React, CSS3, HTML5, JQuery,en cuanto a frameworks: Bootstrap y un poco de Materialize. \nHabilidades blandas: Trabajo en equipo, facilidad de comunicación, creatividad y actitud positiva',
      englishLevel: 'Intermedio',
      linkedin: 'https://www.linkedin.com/in/diana-maria-silva-valencia/',
      portfolio: '',
      github: 'dianamariasilva@github.com',
      photo: '',
      badges: 'La mas proactiva',
      html:
         '[https://dianamariasilva.github.io/lyft-taxi/,\nhttps://dianamariasilva.github.io/Apploveflex/,\nhttps://dianamariasilva.github.io/ejercicio-preguntas/,\nhttps://dianamariasilva.github.io/student-records/,\nhttps://dianamariasilva.github.io/geo-v2/]',
      jquery:
         '[https://dianamariasilva.github.io/Reserva-avion/,\nhttps://dianamariasilva.github.io/juego-memoria/]',
      css:
         'https://dianamariasilva.github.io/savekoalados/\nhttps://dianamariasilva.github.io/geo-v2/\nhttps://dianamariasilva.github.io/react-pag-web-routing/\nhttps://dianamariasilva.github.io/pag-web/',
      react:
         '[https://dianamariasilva.github.io/scoreboard-funcionalidad/,\nhttps://dianamariasilva.github.io/RSVPregistro/,\nhttps://dianamariasilva.github.io/react-pag-web-routing/]\ncolaborativo: https://MariaP92.github.io/inMyBag_FinalProject',
      education: 'Universidad Catolica San Pablo',
      workExperience: '',
      testimonials: '',
      resume: ''
   },
   {
      id: '10/26/2017 7:30:16',
      name: 'Luisa Datne Gonzales Cáceres',
      campus: 'Arequipa',
      code: 'AQP20171457',
      bio:
         'Hola, me llamo Luisa Gonzales. Soy una mujer empoderada, creativa, melomana y coffee lover. Además de administradora; soy front-end developer, egresada de Laboratoria y tengo todas la ganas de comerme al mundo',
      englishLevel: 'Básico',
      linkedin: 'https://www.linkedin.com/in/luisagonzalescaceres/',
      portfolio: '',
      github: 'luisaGonzales@github.com',
      photo: '',
      badges: 'Cuadro de Honor, La mas agile, Rocking Spring',
      html:
         '[https://luisagonzales.github.io/Trello/, \nhttps://luisagonzales.github.io/runMaze/, \nhttps://luisagonzales.github.io/doomII/]',
      jquery:
         '[https://luisagonzales.github.io/geolocalizacion/, https://luisagonzales.github.io/fotolog/,\nhttps://luisagonzales.github.io/YouTube-API/, \nhttps://luisagonzales.github.io/ReservaAsientos-POC/, \nhttps://luisagonzales.github.io/memoryGame/]',
      css:
         '[https://luisagonzales.github.io/freeLancer-Flex/, https://luisagonzales.github.io/appLove-Flex/, \nhttps://luisagonzales.github.io/guideBoxModel/, \nhttps://luisagonzales.github.io/saveKoalasII/, \nhttps://luisagonzales.github.io/boxModel/]',
      react:
         '[https://luisagonzales.github.io/Scoreboard-State/, https://luisagonzales.github.io/Project-Routing/,\nhttps://luisagonzales.github.io/Invitations-MVC/, \nhttps://luisagonzales.github.io/QuizABC-React/, \nhttps://luisagonzales.github.io/Lyft-Evaluado/]',
      education: 'Universidad Católica de Santa María (2012 - actual)',
      workExperience: '',
      testimonials: '',
      resume: ''
   },
   {
      id: '10/26/2017 10:16:35',
      name: 'Melanie Laura Ocharan Cardenas',
      campus: 'Arequipa',
      code: 'AQP20171534',
      bio: 'Front End Developer Jr.',
      englishLevel: 'Intermedio',
      linkedin:
         'https://www.linkedin.com/in/melanie-ocharan-cardenas-0648b2151/',
      portfolio: '',
      github: 'melanieoc@github.com',
      photo: '',
      badges: 'Unicornio, Cuadro de Honor, Rocking Spring',
      html:
         '[https://melanieoc.github.io/laberinto/, https://melanieoc.github.io/lista-tareas/, https://melanieoc.github.io/trello-laboratoria/]',
      jquery:
         '[https://melanieoc.github.io/asientosPOO/, https://melanieoc.github.io/proyecto_sprint4/, https://melanieoc.github.io/buscaminas/,\nhttps://melanieoc.github.io/puzzle-memory/]',
      css:
         '[https://melanieoc.github.io/applove/, \nhttps://melanieoc.github.io/grid/, https://melanieoc.github.io/koala-II/, https://melanieoc.github.io/maquetado/]',
      react:
         '[https://melanieoc.github.io/Trivia-Redux/, https://melanieoc.github.io/routes/, https://melanieoc.github.io/GithubBattle/ ]',
      education: 'Ingenieria Quimica - UNSA',
      workExperience: '',
      testimonials: '',
      resume: ''
   },
   {
      id: '10/26/2017 10:29:16',
      name: 'Thalia Alejandra Adrian Tejada',
      campus: 'Arequipa',
      code: 'aqp201717679',
      bio:
         'Hola! mi nombre es Alejandra, soy Front End Developer Junior, estudie en Laboratoria, y a traves de ella logre descubrir mi pasion por el mundo tecnologico, me considero una persona soñadora y super creativa.',
      englishLevel: 'Básico',
      linkedin:
         'https://www.linkedin.com/in/alejandra-adrian-tejada-698562111/',
      portfolio: '',
      github: 'aqp201717679@github.io',
      photo: '',
      badges: '',
      html:
         '[https://aqp20171679.github.io/trello-laboratoria/ ,\nhttps://aqp20171679.github.io/Proyecto-Final-Sprint-1/,\nhttps://aqp20171679.github.io/memorize-maze/,\nhttps://aqp20171679.github.io/DOM2-Caballos/,\nhttps://aqp20171679.github.io/Maze-Event/ ]',
      jquery:
         '[https://aqp20171679.github.io/game-planet  ,\nhttps://aqp20171679.github.io/Buscaminas/ ,\nhttps://aqp20171679.github.io/Foto-Log-2/,\nhttps://aqp20171679.github.io/memorize-maze/,\nhttps://aqp20171679.github.io/RoadBlock-jQuery/ ]',
      css:
         '[ https://aqp20171679.github.io/SaveTheKoala-2.0/ ,\nhttps://aqp20171679.github.io/App-love-FlexBox/ ,\nhttps://aqp20171679.github.io/Freelancer-FLexBox/,\nhttps://aqp20171679.github.io/Start-Studio/,\nhttps://aqp20171679.github.io/CSS-Z-Garden/ ]',
      react:
         '[ https://aqp20171679.github.io/Trivia-Redux/ ,   https://aqp20171679.github.io/Yape--Sprint-5/, https://github.com/aqp20171679/Proyecto-Lyft,\nhttps://aqp20171679.github.io/Routing-React-DOM/,\nhttps://aqp20171679.github.io/Reserva-aerolinea/ ]',
      education: 'Ingenieria Quimica - Universidad Nacional de San Aguistin',
      workExperience: '',
      testimonials: '',
      resume: ''
   },
   {
      id: '10/26/2017 10:30:29',
      name: 'Solimar Milagros Huayhua Málaga',
      campus: 'Sede Arequipa',
      code: 'AQP20171275',
      bio:
         'Desarrolladora frontend jr estudiante de laboratoria sede Arequipa y estudiante de Ciencia de la Computación en la UNSA, amante de la innovación tecnológica que busca mejorar su sociedad utilizando las herramientas aprendidas a lo largo de su formación superior.',
      englishLevel: 'Intermedio',
      linkedin:
         'https://www.linkedin.com/in/solimar-milagros-huayhua-m%C3%A1laga-46393033/',
      portfolio: 'https://solics.github.io/portfolio/',
      github: 'solics@github.com',
      photo: '',
      badges: 'Unicornio, Cuadro de Honor, Best team player, Rocking Spring',
      html:
         '[https://github.com/solics/lista-frutas,\nhttps://github.com/solics/puzzles,\nhttps://github.com/solics/runmaze,\nhttps://github.com/solics/trello-laboratoria,\nhttps://github.com/solics/panda]',
      jquery:
         '[https://github.com/solics/cards,\nhttps://github.com/solics/gameplanet-nobugs/,\nhttps://github.com/solics/fotolog2]',
      css:
         '[https://github.com/solics/freelancer-flex,\nhttps://github.com/solics/save-the-koala,\nhttps://github.com/solics/koalaII]',
      react:
         '[https://github.com/solics/registration-app-react/,\nhttps://github.com/solics/scoreboard , \nhttps://github.com/solics/routing-react , \nhttps://github.com/solics/car-insurance]',
      education: 'Laboratoria - UNSA(Ciencie de la Computación',
      workExperience: '',
      testimonials: '',
      resume: 'https://drive.google.com/open?id=0B-9cAZK8VvXLR01LSG5hZDlJM3M'
   },
   {
      id: '10/26/2017 10:32:49',
      name: 'Kely Yasilma Vargaya Ñaupa',
      campus: 'Arequipa',
      code: 'AQP20171616',
      bio:
         'Me considero una persona creativa con ganas de aprender y formar parte de un equipo de trabajo. Toda mi formación han estado centrada en el sector de desarrollo web.',
      englishLevel: 'Básico',
      linkedin: 'https://www.linkedin.com/in/kelyvargaya/',
      portfolio: 'https://kelyvargaya.github.io/Portafolio/',
      github: 'KelyVargaya@github.com',
      photo: '',
      badges: 'Rocking Spring',
      html:
         '[https://kelyvargaya.github.io/Movimientos-del-Caballo/, https://kelyvargaya.github.io/Panda-Panda/, https://kelyvargaya.github.io/Game-Laberinto/,https://kelyvargaya.github.io/trello-laboratoria/]',
      jquery:
         '[https://kelyvargaya.github.io/Memory-Game/, https://kelyvargaya.github.io/student-records/, https://kelyvargaya.github.io/Youtube-App/]',
      css:
         '[https://kelyvargaya.github.io/APPLOVE-II/,https://kelyvargaya.github.io/Save-The-Koala-2/, https://kelyvargaya.github.io/Start-Studio/ ]',
      react:
         '[https://kelyvargaya.github.io/Registro-RSVP/, https://kelyvargaya.github.io/React-routing-AppII/, https://kelyvargaya.github.io/MVC-ScoreBoard-TIMER/]',
      education:
         'Ingeniería de Sistemas en la Universidad Andina Néstor Cáceres Velásquez',
      workExperience: '',
      testimonials: '',
      resume: ''
   },
   {
      id: '10/26/2017 10:53:05',
      name: 'Janeth Rocio Quispe Apaza',
      campus: 'Arequipa',
      code: 'AQP20171251',
      bio:
         'Me gusta el poder enfrentar nuevos retos y dar mi mejor esfuerzo, soy una persona paciente, me gusta trabajar en grupo me adapto rápido y me gusta ser autodidacta.',
      englishLevel: 'Básico',
      linkedin:
         'https://www.linkedin.com/in/janeth-rocio-quispe-apaza-0b1a90150/',
      portfolio: '',
      github: 'jani-123@github.com',
      photo: '',
      badges: 'Rocking Spring',
      html:
         '[https://jani-123.github.io/TRELLO/,\nhttps://jani-123.github.io/JUEGO-LABERINTO-FINAL/,\nhttps://jani-123.github.io/lista-tareas/]',
      jquery:
         '[https://jani-123.github.io/Lab-studio/,\nhttps://jani-123.github.io/Lyft-CarII/]',
      css:
         'https://jani-123.github.io/FreeLanze/\nhttps://jani-123.github.io/AppLove/\nhttps://jani-123.github.io/save-the-koala/\nhttps://jani-123.github.io/Tea-Lovers/',
      react:
         '[https://jani-123.github.io/REACT-TRIVIA/,\nhttps://jani-123.github.io/Scoreboard-TIMER/,\nhttps://jani-123.github.io/courses-react-routing/,\nhttps://jani-123.github.io/DemoAnemia/]',
      education: 'Superior( concluida)',
      workExperience: '',
      testimonials: '',
      resume: 'https://drive.google.com/open?id=0Bz00nP8pvJyRM09wek1zdEp1SG8'
   },
   {
      id: '10/26/2017 10:54:30',
      name: 'Evelyn Carina Guevara Alanya',
      campus: 'Arequipa',
      code: 'AQP20171446',
      bio:
         'Front- end developer junior, bachiller en ingeniería de sistemas.\t\nMe dedico a que las empresas muestren al mundo sus productos a través de las páginas web.\nMe apasiona la tecnología y como a través de ella podemos dar distintas soluciones a los problemas sociales.',
      englishLevel: 'Intermedio',
      linkedin:
         'https://www.linkedin.com/in/evelyn-carina-guevara-alanya-90a972149',
      portfolio: '',
      github: 'https://github.com/evecarina',
      photo: 'https://drive.google.com/open?id=0BwYZx3UB6CIlWXVVMWxRVXFnb1k',
      badges: '',
      html:
         '[https://evecarina.github.io/app-love-flex/,\nhttps://evecarina.github.io/Laberinto/]',
      jquery:
         '[https://evecarina.github.io/juego_memoria/,\nhttps://evecarina.github.io/Buscaminas/,\nhttps://evecarina.github.io/Geolocalizacion-query/]',
      css:
         'https://evecarina.github.io/freeelancer/\nhttps://evecarina.github.io/tarjeta_Presentacion/\nhttps://evecarina.github.io/panda-panda/',
      react:
         '[https://mariley20.github.io/yanapa,\nhttps://evecarina.github.io/Fororedux/,\nhttps://evecarina.github.io/Triva-ABC-React/]',
      education: 'Estudiante de Laboratoria-Desarrolladora Front-end developer',
      workExperience: '',
      testimonials: '',
      resume: ''
   },
   {
      id: '10/26/2017 11:46:54',
      name: 'Haidy Flor Dueñas Perlacio',
      campus: 'Arequipa',
      code: 'AQP201713149',
      bio:
         'Estudio en Laboratoria,  Front end Junior.\nSoy una persona con pasión por crear, innovar y aprender .',
      englishLevel: 'Básico',
      linkedin: 'www.linkedin.com/in/haidy-dueñas',
      portfolio: '',
      github: 'haidyduenas@github.com',
      photo: '',
      badges: 'La mas agile',
      html:
         '[https://haidyduenas.github.io/ajedrezConTablas/,https://haidyduenas.github.io/Run-Maze/,https://haidyduenas.github.io/ejercicioEvaluadoTable/]',
      jquery:
         '[https://haidyduenas.github.io/maze-jQuery/,https://github.com/haidyduenas/Buscaminas,https://haidyduenas.github.io/appPuzzle/, https://haidyduenas.github.io/geolocalizacion-evaluado-2/]',
      css:
         '[https://haidyduenas.github.io/save-the-koala2/,https://haidyduenas.github.io/comentarios-fotoblog/,https://haidyduenas.github.io/Star-Studio/]',
      react:
         '[ https://haidyduenas.github.io/appABC-React/, https://haidyduenas.github.io/courses-directory/,https://haidyduenas.github.io/lyftmap]',
      education: 'Ciencias Contables y Financieras',
      workExperience: '',
      testimonials: '',
      resume: ''
   },
   {
      id: '10/26/2017 12:24:20',
      name: 'Milagros Sharmyn Rodríguez Coronado',
      campus: 'Arequipa',
      code: 'AQP20171384',
      bio:
         'Hi, I’m Mili, a passionate, highly enthusiastic programmer-coder. Have strong desire for knowledge and challenges. I’m a fast learner who picks up new skills quickly. Self-educated, self -motivated, hard-worker and versatile person.',
      englishLevel: 'Intermedio',
      linkedin: 'www.linkedin.com/in/milagros-rodriguez-coronado',
      portfolio: '',
      github: 'sharmynrodriguez@gmail.com',
      photo: 'https://drive.google.com/open?id=0BziHMex14OnGUjA0d3J5bzNHQ0E',
      badges:
         'Cuadro de Honor, Best team player, La mas proactiva, Rocking Spring',
      html:
         '[https://sharmyn28.github.io/Love-Panda/, https://sharmyn28.github.io/lista-frutas/]',
      jquery:
         '[https://sharmyn28.github.io/trivia/, https://sharmyn28.github.io/reservaDeBus/, https://sharmyn28.github.io/IV-Sprint/, https://sharmyn28.github.io/Memory_Puzzle/]',
      css:
         '[https://sharmyn28.github.io/koala2/, https://sharmyn28.github.io/Proyecto-Maquetado/, https://sharmyn28.github.io/AppLove-flex/]',
      react:
         '[https://sharmyn28.github.io/foro/,  https://sharmyn28.github.io/routing-NPM/, https://sharmyn28.github.io/scoreboard-timer/]',
      education:
         'BACHELOR Universidad Católica Santa María — 2012-2016 Bachelor’s degree, Industrial Engineering.',
      workExperience:
         'MARKETING INTERN, Go – Go Car\nCairo, Egypt — 2016-2017\nConducted market research being up to date with the latest trends in the industry. Prepared Social Media Content across different platforms. Prepared a Go To Market Strategy, Branding & Marketing Collaterals. Planned all web SEOs.\n\nIT TRAINEE, Farmacéutica del Sur\nArequipa, Perú — 2016\nResponsible for developing solutions and control Database, using SQL Server. Provide user support as well as support the Coordinator in new IT projects. Provide support to users of Administration and Accounting, remotely or in person. Inventory control IT assets using GLPI.',
      testimonials: '',
      resume: ''
   },
   {
      id: '10/26/2017 12:34:26',
      name: 'Candy Maribel Velasquez Moscoso',
      campus: 'Arequipa',
      code: 'AQP20171351',
      bio:
         'Soy una persona entusiasta, con ganas de formar parte de una organización\ndinámica. Aprendo con rapidez, soy proactiva, creativa e innovadoras. Me\ngusta el trabajo en equipo y la participación activa en proyectos.\nCapacidad para interrelacionarme con las personas, capacidad de persuasión\ny liderazgo.',
      englishLevel: 'Básico',
      linkedin: 'https://www.linkedin.com/in/maribelvelasquezmoscoso/',
      portfolio: '',
      github: 'maribelvm',
      photo: '',
      badges: '',
      html: '[https://maribelvm.github.io/DOM-II-TABLERO-DE-AJEDREZ/]',
      jquery: '[https://maribelvm.github.io/LYFT/]',
      css: 'https://maribelvm.github.io/Applove/',
      react: 'https://maribelvm.github.io/ScoreBoard-React/',
      education: '',
      workExperience: '',
      testimonials: '',
      resume: 'https://drive.google.com/open?id=0ByDpUFzGovzheE52Wm1lNTJJa0k'
   },
   {
      id: '10/26/2017 21:25:29',
      name: 'Esther Alvaro Cruz',
      campus: 'Arequipa',
      code: 'AQP20171466',
      bio:
         'Hola soy Esther Alvaro Cruz desarrolladora Front-End, de la cuarta generación de Laboratoria-Arequipa, me considero una persona responsable y flexible, me gusta trabajar en equipo,en mis tiempos libres escucho música y sobretodo hacer deporte, mis deseos en el futuro es seguir especializándome y crecer en lo profesional y como persona .',
      englishLevel: 'Básico',
      linkedin: 'www.linkedin.com/in/esther-alvaro456',
      portfolio: 'https://shey-esther.github.io/Portafolio-Esther/',
      github: 'shey-esther@github.com',
      photo: '',
      badges: '',
      html:
         'https://shey-esther.github.io/Laberinto/\nhttps://shey-esther.github.io/love-panda/\nhttps://shey-esther.github.io/love-panda/',
      jquery:
         'https://shey-esther.github.io/Deep-dive-evaluado/\nhttps://shey-esther.github.io/Buscaminas/\n https://shey-esther.github.io/student-records/',
      css:
         'https://shey-esther.github.io/Lya-movil-evaluado/\nhttps://shey-esther.github.io/fotologo-localstorage/\nhttps://shey-esther.github.io/youtuve/',
      react:
         'https://shey-esther.github.io/resgistration-app-mvc-react/\nhttps://shey-esther.github.io/scoreboard-timer/\nhttps://shey-esther.github.io/react-routing/',
      education: 'Front-End Developer',
      workExperience: 'Vengo realizando proyectos',
      testimonials: '',
      resume: ''
   },
   {
      id: '10/27/2017 10:17:54',
      name: 'Gladys Yovana Mamani Camaticona',
      campus: 'Arequipa',
      code: 'AQP20171563',
      bio:
         'Desarrolladora Frontend developer Junior. En Laboratoria. Me considero una persona paciente, responsable y con muchas ganas de aprender Marketing Digital y trabajar en equipo.',
      englishLevel: 'Básico',
      linkedin: 'Gladys Mamani Camaticona',
      portfolio: 'AQP20171563',
      github:
         'https://github.com/GLADYSYOVANAMAMANICAMATICONA?tab=repositories',
      photo: 'https://drive.google.com/open?id=0B01gGIW_HAtWZGZ0Wm5scFFTNFk',
      badges: 'Rocking Spring',
      html:
         'https://gladysyovanamamanicamaticona.github.io/tarjeta/\nhttps://gladysyovanamamanicamaticona.github.io/trello-laboratoria/',
      jquery: 'https://gladysyovanamamanicamaticona.github.io/juego-memoria/',
      css:
         'https://gladysyovanamamanicamaticona.github.io/bootstrap-ii/   https://gladysyovanamamanicamaticona.github.io/freelancerrr/',
      react:
         'https://gladysyovanamamanicamaticona.github.io/routing-npm/     https://gladysyovanamamanicamaticona.github.io/foro-redux/',
      education: 'Laboratoria',
      workExperience: '',
      testimonials: '',
      resume: ''
   },
   {
      id: '10/27/2017 10:38:42',
      name: 'Milagros Angela Mendoza Copa',
      campus: 'Arequipa',
      code: 'AQP20171541',
      bio:
         'Soy una persona honesta, comprometida, responsable y emprendedora, dedicada a mis labores con buena actitud para el trabajo en equipo y con facilidad para relacionarme en grupo, con alto grado de sensibilidad ante las situaciones que tocan en los grupos donde me desenvuelvo. Me gustan los retos ya que pienso que estos me fortalecen, forman y me motivan a crecer día a día',
      englishLevel: 'Básico',
      linkedin:
         'https://www.linkedin.com/in/milagros-angela-mendoza-copa-1858b4150/',
      portfolio: '',
      github: 'milagrosMndoza@github.com',
      photo: 'https://drive.google.com/open?id=0B-0HREcHFHVvR0RfTmRiWDQzbkk',
      badges: 'Rocking Spring',
      html:
         '[https://milagrosmndoza.github.io/Ejercicio_PuzzleLaberinto/,https://https://milagrosmndoza.github.io/Juego_memoria/,https://milagrosmndoza.github.io/Trello-Laboratoria/, https://milagrosmndoza.github.io/Proyecto-Buscaminas/]',
      jquery:
         '[ https://milagrosmndoza.github.io/Fotolog-Evaluado/, https://milagrosmndoza.github.io/Lyft-car/, https://milagrosmndoza.github.io/Lyft-car/, ]',
      css:
         '[https://milagrosmndoza.github.io/Ejercicio_Evaluado_panda-panda/, https://milagrosmndoza.github.io/Ejercicio_Evaluado_Freelancer/, \nhttps://milagrosmndoza.github.io/Ejercicio_Evaluado_Koala2/]',
      react:
         '[https://milagrosmndoza.github.io/Game_Count_the_Dots/, https://milagrosmndoza.github.io/Examen_Sprint5/, https://milagrosmndoza.github.io/RegistrationApp-MVC-React/, https://aqp20171679.github.io/register ]',
      education: 'Superior',
      workExperience: '',
      testimonials: '',
      resume: 'https://drive.google.com/open?id=0B-0HREcHFHVvZEkwdE9DTjk5clU'
   }
];

const initialState = {
   selectedSection: 'home',
   student: students[7]
};

const store = createStore(initialState);
export default store;
