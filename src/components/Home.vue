<template>
    <div class="wrapper" @wheel="handleScroll" @touchstart="handleTouchStart" @touchmove="handleTouchMove">
      <!-- grilla fondo -->
      <div class="grid">
        <div class="grid-line"></div>
        <div class="grid-line"></div>
        <div class="grid-line"></div>
        <div class="grid-line"></div>
        <div class="grid-line"></div>
      </div>
      
      <header id="home" ref="Header">
        <!-- nav -->
        <div class="main-navigation" :class="{show:notVisible}">
          <div class="grid">
            <div class="grid-line"></div>
            <div class="grid-line"></div>
            <div class="grid-line"></div>
            <div class="grid-line"></div>
            <div class="grid-line"></div>
          </div>
          <div class="name" @click="getOffsetY(0)">
            <img src="@/assets/logo.png" alt="logo">
            <h1>Alexis Muñoz</h1>
          </div>
          <nav class="navigation">
            <ul class="nav-sections">
              <li :class="{active:scrollThreshold < toProjectPx}" @click="getOffsetY(0)">Inicio</li>
              <li :class="{active:scrollThreshold >= toProjectPx && scrollThreshold < toAboutmePx}" @click="getOffsetY(toProjectPx)">Proyectos</li>
              <li :class="{active:scrollThreshold >= toAboutmePx && scrollThreshold < toBannerPx}" @click="getOffsetY(toAboutmePx)">Sobre mí</li>
              <li :class="{active:scrollThreshold >= toBannerPx}" @click="getOffsetY(2400)">Contácto</li>
            </ul>
            <!-- menu burger -->
            <div class="nav-mobile">
              <div class="menu-burger" @click="showMenu">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>
          <div class="menu-mobile" :style="{transform: 'scale('+menuVisible+') translateX(-50%)'}">
            <div>
              <ion-icon :src="close" @click="menuVisible = 0"></ion-icon>
              <ul>
                <li @click="getOffsetY(0); menuVisible = 0">Inicio</li>
                <li @click="getOffsetY(toProjectPx); menuVisible = 0">Proyectos</li>
                <li @click="getOffsetY(toAboutmePx); menuVisible = 0">Sobre mí</li>
                <li @click="getOffsetY(toBannerPx); menuVisible = 0">Contácto</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="border-bottom"></div>
        <!-- contenido header -->
        <div class="container-header">
          <div class="portfolio">
            <h2>Portafolio</h2>
          </div>
          <div class="info">
            <div class="text-info">
              <p>Desarrollador Web Full-Stack</p>
              <p>Buenos Aires, Argentina</p>
              <p>26 años</p>
            </div>
          </div>
        </div>
      </header>
  
      <!-- MAIN -->
      <main>
        <!-- projects -->
        <section class="box project section" ref="Project">
          <span @click="projectShowed = 1; timeTwo = .5; timeOne = 1; toProject = 'https://github.com/lowieen/low'"><ion-icon :src="chevronBackOutline" :class="{disabled: projectShowed === 1}"></ion-icon></span>
          <div class="container project">
            <div class="box-protects">
              <div class="views-projects">
                <div class="project-one" :class="{hiden: projectShowed === 2}" :style="{'transition-delay':timeOne+'s'}">
                    <img src="@/assets/img/lo-w.png" alt="imagen projecto red social">
                </div>
                <div class="project-two" :class="{visible: projectShowed === 2}" :style="{'transition-delay':timeTwo+'s'}">
                    <img src="@/assets/img/ch-w.png" alt="imagen projecto ecommerce">       
                </div>
              </div>
              <div class="description-projects">
                <div class="title-one" :class="{toTwo: projectShowed === 2}" :style="{'transition-delay':timeOne+'s'}">
                  <h3>{{ titleProjectOne }}</h3>
                  <p>{{ contentProjectOne }}</p>
                </div>
                <div class="title-two" :class="{toOne: projectShowed === 2}" :style="{'transition-delay':timeTwo+'s'}">
                  <h3>{{ titleProjectTwo }}</h3>
                  <p>{{ contentProjectTwo }}</p>
                </div>
                <a :href=toProject target="_blank"><ion-icon :src="caretForward"></ion-icon></a>
              </div>
            </div>
          </div>
          <span @click="projectShowed = 2; timeTwo = 1; timeOne = .5; toProject = 'https://lowieen.github.io/Cheq/'"><ion-icon :src="chevronForwardOutline" :class="{disabled: projectShowed === 2}"></ion-icon></span>
        </section>
  
        <!-- about me -->
        <section class="box about-me section" ref="Aboutme">
          <div class="intro">
            <h2>Sobre mí</h2>
          </div>
          <div class="skills">
            <div>
              <h3>Habilidades</h3>
              <font-awesome-icon :icon="faHtml5" class="icon-skills"/>
              <font-awesome-icon :icon="faCss3Alt" class="icon-skills"/>
              <font-awesome-icon :icon="faJs" class="icon-skills"/>
              <font-awesome-icon :icon="faPython" class="icon-skills"/>
              <font-awesome-icon :icon="faDatabase" class="icon-skills"/>
              <font-awesome-icon :icon="faGit" class="icon-skills"/>
              <font-awesome-icon :icon="faVuejs" class="icon-skills"/> 
              <font-awesome-icon :icon="faBootstrap" class="icon-skills"/>
            </div>
          </div>
          <div class="courses" ref="Courses">
            <div class="text">
              <h3>Cursos</h3>
              <div>
                <span>Codo a Codo - FullStack</span>
                <p>
                  El segundo curso fue 
                  Codo a Codo - Desarrollo web Full-Stack,
                  con frameworks Bootstrap, Vue.js y Python con Flask, además bases de datos MySQL 
                  y GIT. Realización de webs más complejas y de API's REST, y algunos conceptos sobre el SEO.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <!-- banner -->
        <section class="box banner section" ref="Banner">
          <div class="text-banner">
            <h3>Medios de contacto</h3>
          </div>
        </section>
  
        <!-- contact -->
        <section class="box contact section" ref="Contact">
          <div class="logo">
            <img src="@/assets/logo.png" alt="logo" @click="getOffsetY(0); notVisible = false">
          </div>
          <div class="network">
            <div>
              <a href="https://github.com/lowieen" target="_blank"><ion-icon :src="logoGithub"></ion-icon></a>
              <a href="https://www.linkedin.com/in/alexis-munioz/" target="_blank"><ion-icon :src="logoLinkedin"></ion-icon></a>
              <a href="mailto:alexismunioz4@gmail.com"><ion-icon :src="mail"></ion-icon></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  import { close, chevronBackOutline, chevronForwardOutline, mail, caretForward, logoGithub, logoLinkedin } from 'ionicons/icons';
  import { faHtml5, faCss3Alt, faJs, faPython, faVuejs, faGit, faBootstrap } from '@fortawesome/free-brands-svg-icons';
  import { faDatabase } from '@fortawesome/free-solid-svg-icons';
  
  export default{
    data(){
      return{
        //icons logos
        faHtml5,
        faCss3Alt,
        faJs,
        faPython,
        faDatabase,
        faVuejs,
        faGit,
        faBootstrap,
        logoGithub,
        logoLinkedin,
        //icons
        close,
        mail,
        chevronForwardOutline,
        chevronBackOutline,
        caretForward,
        //scroll
        scrollThreshold: 0,
        maxScrollThreshold: 0,
        //projects
        notVisible: false,
        projectShowed: 1,
        timeOne: 1,
        timeTwo: 1.5,
        titleProjectOne: 'Red Social simplificada',
        contentProjectOne: 'Autenticación de usuarios, notificaciones, mensajes, perfil de cada usuario, realizar publicaciones (likearlas, ocultar o eliminar), buscador de usuarios y seguimiento, agregar o eliminar información personal.',
        titleProjectTwo: 'Ecommerce',
        contentProjectTwo: 'Autenticación de usuarios, perfil de cada usuario con sus datos personales a modificar, compras realizadas, carrito de compras, checkout, panel de admin para agregar quitar o modificar productos.',
        toProject: 'https://lowieen.github.io/low/',
        //menu
        menuVisible: 0,
        //sections
        heightSectionHeader: -100,
        heightsectionProject: 0,
        heightsectionAboutme: 0,
        heightsectionBanner: 0,
        toProjectPx: null,
        toAboutmePx: null,
        toBannerPx: null,
        //mobile
        startY: 0,
      }
    },
    mounted() {
      // Resta la altura de la ventana (window.innerHeight) para obtener el tope correcto
      this.maxScrollThreshold = document.documentElement.scrollHeight - window.innerHeight;
      this.getOffsetHight();
    },
    methods: {
      getOffsetHight(){
        // Obtener la altura de cada sección
        this.heightSectionHeader += this.$refs.Header.offsetHeight;
        this.heightsectionProject += this.$refs.Project.offsetHeight;
        this.heightsectionAboutme += this.$refs.Aboutme.offsetHeight;
        this.heightsectionBanner += this.$refs.Banner.offsetHeight;
  
        // Asignar cantidad de pixeles al proximo section
        this.toProjectPx = this.heightSectionHeader;
        this.toAboutmePx = this.toProjectPx + this.heightsectionProject;
        this.toBannerPx = this.toAboutmePx + this.heightsectionAboutme;
      },
      showMenu(){
        if(this.menuVisible === 0){
          this.menuVisible = 1;
        } else {
          this.menuVisible = 0;
        }
      },
      getOffsetY(altura){
        this.scrollThreshold = altura;
  
        window.scrollTo({
          top: this.scrollThreshold,
        });
      },
      handleScroll(event) {
        if (event.deltaY > 0 && this.scrollThreshold < this.maxScrollThreshold) {
          // El usuario desplazó hacia abajo y no superamos el tope
          this.scrollThreshold += 300;
          this.notVisible = true;
        } else if (event.deltaY < 0 && this.scrollThreshold > 0) {
          // El usuario desplazó hacia arriba y no estamos en el inicio
          this.scrollThreshold -= 300;
          this.notVisible = false;
        }
        window.scrollTo({
          top: this.scrollThreshold,
        });
      },
      handleTouchStart(event) {
        this.startY = event.touches[0].clientY;
      },
      handleTouchMove(event) {
        const currentY = event.touches[0].clientY;
        if (currentY > this.startY) {
          // Deslizando hacia abajo
          this.notVisible = false;
        } else if (currentY < this.startY) {
          // Deslizando hacia arriba
          this.notVisible = true;
        }
      },
    },
  }
  </script>
  
  <style scoped>
  /* GRILLA FONDO */
  .grid {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    z-index: 800;
    pointer-events: none;
    user-select: none;
    padding: 0 2%;
  }
  .grid .grid-line {
    width: 1px;
    flex-shrink: 0;
    flex-grow: 0;
    background: #444444;
  }
  
  /* HEADER */
  header{
    height: 80vh;
  }
  
  /* nav */
  .main-navigation{
    width: 100%;
    height: 15%;
    position: fixed;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    gap: 0px 0px; 
    padding: 0 2%;
    user-select: none;
    background-color: #171717;
    border-bottom: 1px solid #444444;
    transition: transform .3s ease;
    z-index: 999;
  }
  .main-navigation .grid{
    position: absolute;
  }
  
  .show{
    transform: translateY(-100%);
  }
  
  .name {
    height: 100%;
    grid-area: 1 / 1 / 2 / 2; 
    display: flex;
    align-items: center;
    padding: 0 1%;
    cursor: pointer;
  }
  .name img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    filter: drop-shadow(-2px -2px 1px #DA0037);
  }
  .name h1{
    margin-left: 2%;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 4em;
    letter-spacing: 2px;
    user-select: none;
    color: #EDEDED;
  }
  
  
  
  .navigation { 
    height: 100%;
    grid-area: 1 / 4 / 2 / 5; 
    display: flex;
    align-items: center;
    padding: 0 1%;
    position: relative;
  }
  .navigation ul a{
    text-decoration: none;
  }
  .navigation ul li{
    list-style: none;
    font-size: 1.2em;
    font-weight: 600;
    letter-spacing: 1px;
    transition: .1s ease;
    cursor: pointer;
    color: #ededed75;
  }
  .navigation ul li:hover{
    font-size: 1.5em;
    letter-spacing: 2px;
    color: #EDEDED;
  }
  
  .nav-mobile{
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
  }
  .menu-burger{
    width: 40px;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu-burger span{
    width: 4px;
    height: 100%;
    background-color: #EDEDED;
  }
  .menu-mobile{
    position: absolute;
    top: 100%;
    left: 50%;
    width: 90%;
    height: 400px;
    background-color: #EDEDED;
    transition: transform .3s ease;
    transform-origin: top;
  }
  .menu-mobile div{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .menu-mobile div ion-icon{
    position: absolute;
    top: 1%;
    right: 1%;
    font-size: 2.5em;
  }
  .menu-mobile div ul{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2% 5%;
  }
  .menu-mobile div ul li{
    list-style: none;
    font-size: 1.5em;
  }
  
  .border-bottom{
    width: 100%;
    height: 1px;
    background-color: #444444;
  }
  
  /* contenido header */
  .container-header{
    height: 100%;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    gap: 0px 0px; 
    padding: 0 2%;
    user-select: none;
  }
  .portfolio{
    grid-area: 1 / 1 / 2 / 4; 
    align-self: end;
    padding: 0 0 20% 15%;
    z-index: 900;
  }
  .portfolio h2{
    color: #EDEDED;
    font-size: 7em;
    letter-spacing: 5px;
  }
  .info{
    grid-area: 1 / 4 / 2 / 5;
    padding-top: 40%;
  }
  
  .text-info {
    border-left: 3px solid #DA0037;
    padding: 2%;
    color: #EDEDED;
    font-weight: 600;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
  }
  
  .text-info::before,
  .text-info::after,
  .network div::before,
  .network div::after{
    content: "";
    position: absolute;
    width: 0;
    height: 1.5px;
    background-color: #444444;
    transition: width 0.5s;
  }
  
  .text-info::before,
  .network div::before {
    left: 0;
    bottom: 0;
    transition-delay: 0s;
  }
  
  .text-info::after,
  .network div::after{
    right: 0;
    top: 0;
    transition-delay: 0.5s;
  }
  
  .text-info:hover::before,
  .network div:hover::before{
    width: 100%;
  }
  
  .text-info:hover::after,
  .network div:hover::after{
    width: 100%;
  }
  
  /* MAIN */
  /* proyectos */
  .box{
    height: 70vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    gap: 0px 0px; 
    padding: 0 2%;
    user-select: none;
    border-top: 1px solid #444444;
  }
  .box.project span:first-child,
  .box.project span:last-child{
    color: #EDEDED;
    align-self: center;
    padding: 0 1%;
    font-size: 2em;
  }
  .box.project span:first-child{
    justify-self: end;
  }
  
  .box.project span ion-icon,
  .description-projects a{
    border: 1px solid #444444;
    transition: .1s ease;
  }
  .box.project span ion-icon:hover,
  .description-projects a:hover{
    background-color: #222222;
    cursor: pointer;
  }
  .box.project span ion-icon:active{
    background-color: #444444;
  }
  
  .disabled{
    background-color: #444444;
    color: #888;
  }
  .disabled:hover{
    background-color: #444444 !important;
    cursor: auto !important;
  }
  
  
  .container.project{
    grid-area: 1/ 2 / 2 / 4;
    background-color: #171717;
    border: 1px solid #444444;
    z-index: 900;
  }
  .box-protects{
    height: 100%;
    display: grid;
    grid-template-rows: 90% 10%;
  }
  .views-projects{
    display: flex;
    border-bottom: 1px solid #444444;
    overflow: hidden;
  }
  .project-one{
    width: 100%;
    transition: width .2s ease;
  }
  .project-two{
    width: 0%;
    transition: width .2s ease;
  }
  
  .project-one img,
  .project-two img{
    width: 100%;
    height: 100%;
    object-fit:cover;
    transition: filter .05s ease;
  }
  
  .hiden{
    width: 0;
  }
  .visible{
    width: 100%;
  }
  
  .description-projects{
    color: #EDEDED;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0% 5% 1% 1%;
    overflow: hidden;
    position: relative;
  }
  .description-projects a{
    position: absolute;
    right: 1%;
    display: flex;
    font-size: 2em;
    color: #EDEDED;
  }
  .description-projects h3{
    color: #DA0037;
    font-size: 1.5em;
  }
  .title-one{
    transform: translateY(50%);
    transition: transform .2s ease;
  }
  .title-two{
    transform: translateY(100%);
    transition: transform .2s ease;
  }
  
  .toTwo{
    transform: translateY(-100%);
  }
  .toOne{
    transform: translateY(-50%);
  }
  
  
  /* about me */
  .box.about-me{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .intro,
  .skills,
  .courses{
    display: grid;
    place-items: center;
    padding: 0 1%;
  }
  
  .intro{
    color: #EDEDED;
    align-items: start;
  }
  .intro h2{
    width: 100%;
    text-align: start;
    font-size: 2.3em;
  }
  
  
  .skills{
    grid-area: 1 / 4 / 2 / 4;
    color: #EDEDED;
    display: grid;
    place-items: center;
  }
  
  .skills div{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .skills h3{
    color: #DA0037;
    font-size: 1.5em;
    letter-spacing: 1px;
  }
  
  .skills .icon-skills {
    font-size: 2em;
    color: #EDEDED;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  
  .skills div .icon-skills:nth-child(2) { transform: translate(150px, 150px);}
  .skills div .icon-skills:nth-child(3) { transform: translate(150px, 0px)}
  .skills div .icon-skills:nth-child(4) { transform: translate(150px, -150px)}
  .skills div .icon-skills:nth-child(5) { transform: translate(0px, 150px)}
  .skills div .icon-skills:nth-child(6) { transform: translate(-150px, -150px)}
  .skills div .icon-skills:nth-child(7) { transform: translate(-150px, 0px)}
  .skills div .icon-skills:nth-child(8) { transform: translate(0px, -150px)}
  .skills div .icon-skills:nth-child(9) { transform: translate(-150px, 150px)}
  
  
  
  
  .courses{
    grid-area: 1 / 2 / 2 / 3;
    color: #EDEDED;
  }
  .courses .text h3{
    color: #DA0037;
    padding: 2% 0;
    font-size: 1.6em;
  }
  .text div span{
    font-weight: 600;
    font-size: 1.3em;
    letter-spacing: 1px;
  }
  .text div p{
    margin: 2% 0;
    font-size: 1.3em;
  }
  
  
  /* banner */
  .box.banner{
    height: 15vh;
    grid-area: 1/1/4/5;
    background-color:#DA0037;
    border-top: 1.5px solid #444444;
    display: flex;
    align-items: end;
    color: #171717;
    overflow: hidden;
  }
  .text-banner{
    background-color:#DA0037;
    height: 100%;
    width: 100%;
    z-index: 900;
    position: relative;
  }
  .text-banner h3{
    font-family: 'Bebas Neue', sans-serif;
    white-space: nowrap;
    letter-spacing: 5px;
    font-size: 10em;
    position: absolute;
    top: 75%;
    left: 0;
    transform: translateY(-50%);
    animation: desplazamiento 12s linear infinite;
  }
  
  @keyframes desplazamiento {
    0%{transform: translate(-200%,-50%);}
    100%{transform: translate(200%,-50%);}
  }
  
  
  /* contact */
  .box.contact{
    border-top: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
  }
  .contact .logo{
    display: flex;
    grid-area: 1 / 1 / 2 / 2;
  }
  .logo img{
    height: 250px;
    width: 250px;
    border-radius: 50%;
    filter: drop-shadow(-2px -2px 1px #DA0037);
    cursor: pointer;
  }
  
  .contact .network{
    grid-area: 1 / 3 / 2 / 4;
    width: 100%;
    display: flex;
    align-items: center;
    border-left: 3px solid #DA0037;
  }
  .network div{
    width: 100%;
    position: relative;
    padding: 3% 2%;
  }
  .network a{
    color: #EDEDED;
  }
  .network ion-icon{
    font-size: 2.5em;
  }
  .network a:nth-child(2){
    margin: 0 20px;
  }
  
  
  .navigation ul li.active{
    font-size: 1.5em;
    letter-spacing: 2px;
    color: #EDEDED;
  }
  
  
  @media (width < 768px){
    /* grilla fondo */
    .grid .grid-line:nth-child(2),
    .grid .grid-line:nth-child(3),
    .grid .grid-line:nth-child(4){
      display: none;
    }
  
    header{
      height: 100vh;
    }
  
    /* nav bar */
    .main-navigation{
      height: 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .name{
      width: 70%;
    }
    .name img{
      width: 50px;
      height: 50px;
    }
    .name h1{
      font-size: 2em;
      padding: 0 0 0 1%;
    }
  
    .navigation{
      padding: 0 1%;
    }
    .navigation .nav-sections{
      display: none;
    }
    .nav-mobile{
      display: flex;
    }
  
    /* resto del header */
    .container-header{
      grid-template-columns: 1fr;
    }
    .portfolio{
      grid-area: auto;
      align-self: center;
      padding: 0 0 0 1%;
    }
    .portfolio h2{
      font-size: 4em;
      letter-spacing: 2px;
    }
    .info{
      grid-area: auto;
      padding: 0;
    }
    .text-info{
      border: none;
      border-right: 3px solid #DA0037;
      text-align: end;
    }
  
    /* main */
    /* project */
    .box{
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }
    .box.project{
      height: 90vh;
    }
    .box.project span:first-child,
    .box.project span:last-child{
      position: absolute;
      top: 40%;
      transform: translateY(-50%);
      z-index: 950;
    }
    .box.project span:first-child{
      left: 1%;
    }
    .box.project span:last-child{
      right: 1%;
    }
    .box.project span ion-icon,
    .description-projects a{
      background-color: #171717;
    }
  
  
    .container.project{
      height: 100%;
    }
    .box-protects{
      grid-template-rows: 80% 20%;
    }
    .description-projects{
      padding: 0% 12% 1% 1%;
    }
    .description-projects h3{
      font-size: 1.1em;
    }
    .description-projects p{
      font-size: .8em;
    }
  
  
  /* about-me */
    .box.about-me{
      height: 120vh;
      padding-top: 20%;
      grid-template-columns: 1fr;
      grid-template-rows: 10% 45% 45%;
    }
    .intro{
      height: 100%;
      width: 100%;
      font-size: 1em;
    }
    .skills{
      height: 100%;
      grid-area: auto;
      transform: translateY(10%);
    }
    .skills h3{
      font-size: 1.2em;
    }
    .skills .icon-skills {
      font-size: 1.5em;
    }
    .skills div .icon-skills:nth-child(2) { transform: translate(100px, 50px);}
    .skills div .icon-skills:nth-child(3) { transform: translate(150px, 0px)}
    .skills div .icon-skills:nth-child(4) { transform: translate(100px, -50px)}
    .skills div .icon-skills:nth-child(5) { transform: translate(0px, 100px)}
    .skills div .icon-skills:nth-child(6) { transform: translate(-100px, -50px)}
    .skills div .icon-skills:nth-child(7) { transform: translate(-150px, 0px)}
    .skills div .icon-skills:nth-child(8) { transform: translate(0px, -100px)}
    .skills div .icon-skills:nth-child(9) { transform: translate(-100px, 50px)}
  
  
    .courses{
      height: 100%;
      grid-area: auto;
    }
    .courses .text h3{
      font-size: 1.3em;
    }
    .text div span{
      font-size: 1.1em;
    }
    .text div p{
      font-size: 1em;
    }
  
    
    /* banner */
    .box.banner{
      grid-area: auto;
      width: 100%;
    }
    .text-banner h3{
      width: 100%;
      font-size: 5em;
    }
    @keyframes desplazamiento {
      0%{transform: translate(-200%,-50%);}
      100%{transform: translate(110%,-50%);}
    }
  
  
    /* contact */
    .box.contact{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .contact .network{
      width: 70%;
      border: none;
      border-top: 3px solid #DA0037;
    }
    .network div{
      display: flex;
      justify-content: center;
    }
    .network ion-icon{
      margin: 0 5px;
    }
  }
  
  @media (width >= 768px) and (width < 880px){
    /* grilla fondo */
    .grid .grid-line:nth-child(2),
    .grid .grid-line:nth-child(4){
      display: none;
    }
  
    header{
      height: 100vh;
    }
    .main-navigation{
      height: 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .name{
      width: 70%;
    }
    .name img{
      width: 70px;
      height: 70px;
    }
    .name h1{
      font-size: 2.5em;
      padding: 0 0 0 1%;
    }
  
    .navigation{
      padding: 0 1%;
    }
    .navigation .nav-sections{
      display: none;
    }
    .nav-mobile{
      display: flex;
    }
  
    /* resto del header */
    .container-header{
      grid-template-columns: 1fr 1fr;
    }
    .portfolio{
      width: 100%;
      grid-area: auto;
      align-self: center;
      padding: 0 0 0 1%;
      position: relative;
      
    }
    .portfolio h2{
      font-size: 7em;
      letter-spacing: 2px;
      position: absolute;
    }
    .info{
      width: 100%;
      grid-area: auto;
      padding: 0 0 50% 0;
      place-self: end;
    }
  
    /* main */
    .box{
      grid-template-columns: 1fr 1fr;
      height: 80vh;
    }
  
    /* projects */
    .box.project{
      height: 70vh;
      grid-template-columns: 1fr;
      position: relative;
    }
    .box.project span:first-child,
    .box.project span:last-child{
      position: absolute;
      top: 40%;
      transform: translateY(-50%);
      z-index: 950;
    }
    .box.project span:first-child{
      left: 1%;
    }
    .box.project span:last-child{
      right: 1%;
    }
  
    .container.project{
      height: 100%;
    }
    .box-protects{
      grid-template-rows: 80% 20%;
    }
    .views-projects{
      border: none;
    }
    .project-one img,
    .project-two img{
      object-fit:contain;
    }
    .description-projects{
      padding: 0% 12% 1% 1%;
    }
    .description-projects h3{
      font-size: 1.2em;
    }
    .description-projects p{
      font-size: .9em;
    }
    .box.project span ion-icon,
    .description-projects a{
      background-color: #171717;
    }
  
  
    /* about-me */
    .box.about-me{
      grid-template-columns: 1fr 1fr; 
      grid-template-rows: .1fr .9fr; 
    }
    .intro{
      grid-area: 1 / 1 / 2 / 2;
      height: 100%;
      width: 100%;
      font-size: 1em;
      align-items: end;
    }
    .skills{
      grid-area: 1 / 2 / 3 / 3;
      height: 100%;
    }
    .skills h3{
      font-size: 1.7em;
    }
    .skills .icon-skills {
      font-size: 2em;
    }
    .skills div .icon-skills:nth-child(2) { transform: translate(150px, 150px);}
    .skills div .icon-skills:nth-child(3) { transform: translate(150px, 0px)}
    .skills div .icon-skills:nth-child(4) { transform: translate(150px, -150px)}
    .skills div .icon-skills:nth-child(5) { transform: translate(0px, 150px)}
    .skills div .icon-skills:nth-child(6) { transform: translate(-150px, -150px)}
    .skills div .icon-skills:nth-child(7) { transform: translate(-150px, 0px)}
    .skills div .icon-skills:nth-child(8) { transform: translate(0px, -150px)}
    .skills div .icon-skills:nth-child(9) { transform: translate(-150px, 150px)}
  
  
    .courses{
      grid-area: 2 / 1 / 3 / 2;
      height: 100%;
    }
    .courses .text h3{
      font-size: 1.7em;
    }
    .text div span{
      font-size: 1.4em;
    }
    .text div p{
      font-size: 1.1em;
    }
  
  
    /* banner */
    .box.banner{
      grid-area: auto;
      width: 100%;
    }
    @keyframes desplazamiento {
      0%{transform: translate(-150%,-50%);}
      100%{transform: translate(150%,-50%);}
    }
  
  
    /* contact */
    .box.contact{
      grid-template-columns: 1fr 1fr;
    }
    .contact .logo{
      grid-area: auto;
    }
    .contact .network{
      grid-area: auto;
    }
    .network div{
      padding: 5% 2%;
    }
  }
  
  @media (width >= 880px) and (width < 1400px) {
    /* grilla fondo */
    .grid .grid-line:nth-child(4){
      display: none;
    }
  
    .main-navigation{
      height: 10%;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .name{
      width: 100%;
    }
    .name img{
      width: 70px;
      height: 70px;
    }
    .name h1{
      font-size: 2.5em;
      padding: 0 0 0 1%;
      white-space: nowrap;
    }
  
    .navigation{
      padding: 0 1%;
    }
    .navigation .nav-sections{
      display: none;
    }
    .nav-mobile{
      display: flex;
    }
  
    /* resto del header */
    .container-header{
      grid-template-columns: repeat(3, 1fr);
    }
    .portfolio{
      width: 100%;
      grid-area: 1 / 1 / 2 / 3;
      align-self: center;
      padding: 0 0 0 1%;
      position: relative;
      
    }
    .portfolio h2{
      font-size: 7em;
      letter-spacing: 2px;
      position: absolute;
    }
    .info{
      width: 100%;
      grid-area: 1 / 3 / 2 / 4;
      place-self: start;
      transform: translateY(15%);
    }
  
    .box{
      grid-template-columns: repeat(3, 1fr);
    }
    
    /* project */
    .box.project{
      grid-template-columns: 1fr;
      position: relative;
    }
    .box.project span:first-child,
    .box.project span:last-child{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 950;
    }
    .box.project span:first-child{
      left: 1%;
    }
    .box.project span:last-child{
      right: 1%;
    }
  
  
    /* about-me */
    .box.about-me{
      grid-template-columns: repeat(3, 1fr);
    }
    .intro{
      grid-area: auto;
      height: 15%;
      align-items: end;
    }
    .skills{
      grid-area: auto;
    }
    .skills .icon-skills {
      font-size: 1.6em;
    }
    .skills div .icon-skills:nth-child(2) { transform: translate(115px, 115px);}
    .skills div .icon-skills:nth-child(3) { transform: translate(115px, 0px)}
    .skills div .icon-skills:nth-child(4) { transform: translate(115px, -115px)}
    .skills div .icon-skills:nth-child(5) { transform: translate(0px, 115px)}
    .skills div .icon-skills:nth-child(6) { transform: translate(-115px, -115px)}
    .skills div .icon-skills:nth-child(7) { transform: translate(-115px, 0px)}
    .skills div .icon-skills:nth-child(8) { transform: translate(0px, -115px)}
    .skills div .icon-skills:nth-child(9) { transform: translate(-115px, 115px)}
  
    .contact{
      grid-area: auto;
    }
    .courses .text h3{
      font-size: 1.7em;
    }
    .text div span{
      font-size: 1.2em;
    }
    .text div p{
      font-size: 1.2em;
    }
  
  
    /* banner */
    .box.banner{
      grid-area: auto;
      width: 100%;
    }
    @keyframes desplazamiento {
      0%{transform: translate(-155%,-50%);}
      100%{transform: translate(160%,-50%);}
    }
  
  
    /* contact */
    .box.contact{
      grid-template-columns: repeat(3, 1fr);
    }
    .contact .logo{
      grid-area: auto;
    }
    .network div{
      padding: 7% 2%;
    }
  }
  
  @media (width > 1400px) and (width < 1745px){
    .box-protects{
      grid-template-rows: 85% 15%;
    }
  }
  
  @media (width > 1400px) and (width < 1751px){
    .name h1{
      white-space: nowrap;
      font-size: 3em;
    }
  }
  
  @media (width > 1400px) and (width < 2205px) {
    .info{
      transform: translateY(15%);
    }
  }
  
  </style>