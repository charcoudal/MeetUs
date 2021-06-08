//EXPERIENCE TAB LIST
let currentWomen;
let women;
let example = 5;

const attachEventHandlers = () => {
  // once the unordered list has been attached to the DOM
  // (by assigning the #artists container's innerHTML),
  // you can attach event handlers to the DOM:
 
  document.querySelector('#selectCris').onclick = crisClick;
  
};

const fetchWomen = () => {
  fetch('http://localhost:8081/women')
  .then(response => response.json())
  .then(data => {

      women = data;
  })
  .then(attachEventHandlers);
}

fetchWomen();




const crisClick = () => {
  console.log("hre")
  currentWomen = women.filter(doc => doc._id === "w1")[0]
  //updateDetail()
  document.getElementById(`hello`).innerHTML = `<header> 
  <link rel="stylesheet" href="css/meetUS.css">
  <div id="navbar">
      <ul>
          
          <li><a class="name" >John Doe</a></li>
          <li><a href="#home" onclick="window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
          });">About Me</a></li>
          <li><a href="#experience" onclick="window.scrollTo({
              top: 565,
              left: 0,
              behavior: 'smooth'
          });">Experience</a></li>
          <li><a href="#projects-section">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>
  </div>
  
</header>
<body>

  <div class="sidenav">
      <ul style="list-style-type:none;">
          <li> <img src="images/github-logo.png" alt="github link" height="30" width="30" > </li>
          <li> <img src="images/linkedin.png" alt="linkedin link" height="30" width="30" > </li>
          <li> <img src="images/instagram.png" alt="instagram link" height="30" width="30" > </li>
          <li><div class="vl"></div></li>
      </ul>
    </div>

  <div class="aboutme">
      <section class="info">
          <h1 id="welcoming">Hi, my name is ${currentWomen.name}</h1>
          <h2 id="aboutme">About me</h2>
          <p id="aboutmeinfo"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Congue eu consequat ac felis donec. Libero volutpat sed cras ornare arcu. Pretium fusce id velit ut. Mauris sit amet massa vitae. Blandit cursus risus at ultrices mi tempus imperdiet. In metus vulputate eu scelerisque felis. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Facilisis leo vel fringilla est ullamcorper eget nulla. Eu augue ut lectus arcu bibendum at varius vel. Etiam sit amet nisl purus in mollis nunc.</p>

      </section>
      <section class ="profilepic">
          <img id="profilepicp" src="natalia_novoa.jpg" alt="profile picture" height="400" width="440">
          <div class="image-overlay">
          </div>
      </section>
  </div>

  <div class="experience">
      <h1 class="exp-title">Experience</h1>
      
      <div class= "experience-box">
          
          <div class="tab">
              <button class="tablinks" onclick="openJob(event, 'Job1')" id="defaultOpen">Job 1</button>
              <button class="tablinks" onclick="openJob(event, 'Job2')">Job 2</button>
              <button class="tablinks" onclick="openJob(event, 'Job3')">Job 3</button>
              <button class="tablinks" onclick="openJob(event, 'Job4')">Job 4</button>
          </div>
          
          <div id="Job1" class="tabcontent">
              <h3 class="job-name">Job 1 <span style="color:#ee7752; border:hidden">@ Company</span></h3>
              <ul class="job-descrip">    
                  <li>Descrip1</li>
                  <br><br>
                  <li>Descrip2</li>
                 
              </ul>
          </div>
          
          <div id="Job2" class="tabcontent">
              <h3 class="job-name">Job 2 <span style="color:#ee7752;">@ Company</span></h3>
              <ul class="job-descrip">
                  <li>Descrip2</li><br><br>
                  <li>Descrip2</li>
              </ul>
          </div>
          
          <div id="Job3" class="tabcontent">
              <h3 class="job-name">Job 3 <span style="color:#ee7752;">@ Company</span></h3>
              <ul class="job-descrip">
                  <li>Descrip3</li>
                  <br><br>
                  <li>Descrip2</li>
                  
                </ul>
          </div>

          <div id="Job4" class="tabcontent">
              <h3 class="job-name">Job 4 <span style="color:#ee7752;">@ Company</span></h3>
              <ul class="job-descrip">
                  <li>Descrip4</li>
                  <br><br>
                  <li>Descrip2</li>
                  
                </ul>
          </div>
          
      </div>
  </div>
  

  <div id = "projects-section" class=projects-section>
      <h1 id="proj-title">Projects</h1>
      <div class="projects">
          <section>
          <div>
              <img src="images/pp.png"/>
              <p class="description">
                  <b>Project Name</b>
                  &nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali
              </p>
          </div>
          </section>
          <section>
              <div>
              <img src="images/pp.png"/>
              <p class="description">
                  <b>Project Name</b>
                  &nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali
              </p>
              </div>
          </section>
          <section>
              <div>
              <img src="images/pp.png"/>
              <p class="description">
                  <b>Project Name</b>
                  &nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali
              </p>
              </div>
          </section>
          <section>
              <div>
              <img src="images/pp.png"/>
              <p class="description">
                  <b>Project Name</b>
                  &nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali
              </p>
              </div>
          </section>
      </div>
  </div>
  


  <div id = "contact"class="contact">
      <h1 class="emailtitle"><span style="font-size: 55px;">Get in Contact</span><br>And See More!</h1>
      <section class="email1">
        <a href="mailto:${currentWomen.email}">
          <button class="big-button"> EMAIL</button>
        </a> 
      <br>
      <br>
      <br>
      <br>
      </section>
        <p id="credits">Designed & Built by Cristina Barclay, Charlotte Jones and Natalia Novoa</p>
     
  </div>
</body>
  
<script type="text/javascript" src="js/index.js"></script>`
}

updateDetail = () =>{
  console.log(currentWomen)
  document.querySelector('.email1').innerHTML = `
  <a href="mailto:${currentWomen.email}">
  <button class="big-button"> EMAIL</button>
  </a> 
  <br>
  <br>
  <br>
  <br>`
}

function openJob(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();


// STICKY NAVBAR
window.onscroll = function() {navBar()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function navBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}