//EXPERIENCE TAB LIST
let currentWomen;
let women;
let example = 5;

const attachEventHandlers = () => {
  // once the unordered list has been attached to the DOM
  // (by assigning the #artists container's innerHTML),
  // you can attach event handlers to the DOM:
 
  document.querySelector('#selectCris').onclick = crisClick;
  document.querySelector('#selectChar').onclick = charClick;
  document.querySelector('#selectNati').onclick = natiClick;
  
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
  updateDetail();
}

const natiClick = () => {
  console.log("hre")
  currentWomen = women.filter(doc => doc._id === "w2")[0]
  updateDetail();
}

const charClick = () => {
  console.log("hre")
  currentWomen = women.filter(doc => doc._id === "w3")[0]
  updateDetail();
}


const updateDetail= () => {
  document.getElementById(`hello`).innerHTML = `<header> 
  <link rel="stylesheet" href="css/meetUS.css">
  <div id="navbar">
      <ul>
          
          <li><a class="name" >${currentWomen.name}</a></li>
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
          <p id="aboutmeinfo"> ${currentWomen.about_me}</p>

      </section>
      <section class ="profilepic">
          <img id="profilepicp" src="${currentWomen.image_url}" alt="profile picture" height="400" width="440">
          <div class="image-overlay">
          </div>
      </section>
  </div>

  <div class="experience">
      <h1 class="exp-title">Experience</h1>
      
      <div class= "experience-box">
          
          <div class="tab">
              <button class="tablinks" onclick="openJob(event, 'Job1')" id="defaultOpen">${currentWomen.jobs.job1.company}</button>
              <button class="tablinks" onclick="openJob(event, 'Job2')">${currentWomen.jobs.job2.company}</button>
              <button class="tablinks" onclick="openJob(event, 'Job3')">${currentWomen.jobs.job3.company}</button>
              <button class="tablinks" onclick="openJob(event, 'Job4')">${currentWomen.jobs.job4.company}</button>
          </div>
          
          <div id="Job1" class="tabcontent">
              <h3 class="job-name">${currentWomen.jobs.job1.role} <span style="color:#ee7752; border:hidden">@ ${currentWomen.jobs.job1.company}</span></h3>
              <ul class="job-descrip">    
                ${currentWomen.jobs.job1.description}
                 
              </ul>
          </div>
          
          <div id="Job2" class="tabcontent">
              <h3 class="job-name">${currentWomen.jobs.job2.role} <span style="color:#ee7752;">@ ${currentWomen.jobs.job2.company}</span></h3>
              <ul class="job-descrip">
              ${currentWomen.jobs.job2.description}
              </ul>
          </div>
          
          <div id="Job3" class="tabcontent">
              <h3 class="job-name">${currentWomen.jobs.job3.role} <span style="color:#ee7752;">@ ${currentWomen.jobs.job3.company}</span></h3>
              <ul class="job-descrip">
              ${currentWomen.jobs.job3.description}
                  
                </ul>
          </div>

          <div id="Job4" class="tabcontent">
              <h3 class="job-name">${currentWomen.jobs.job4.role} <span style="color:#ee7752;">@ ${currentWomen.jobs.job4.company}</span></h3>
              <ul class="job-descrip">
              ${currentWomen.jobs.job4.description}
                  
                </ul>
          </div>
          
      </div>
  </div>
  

  <div id = "projects-section" class=projects-section>
      <h1 id="proj-title">Projects</h1>
      <div class="projects">
          <section>
            <div>
            <img src="${currentWomen.projects.proj1.proj_image_url}"/>
            <p class="description">
              <b>${currentWomen.projects.proj1.proj_name}</b>
              &nbsp;&nbsp; ${currentWomen.projects.proj1.description}
            </p>
            </div>
          </section>
          <section>
              <div>
              <img src="${currentWomen.projects.proj2.proj_image_url}"/>
              <p class="description">
                  <b>${currentWomen.projects.proj2.proj_name}</b>
                  &nbsp;&nbsp; ${currentWomen.projects.proj2.description}
              </p>
              </div>
          </section>
          <section>
              <div>
              <img src="${currentWomen.projects.proj3.proj_image_url}"/>
              <p class="description">
                  <b>${currentWomen.projects.proj3.proj_name}</b>
                  &nbsp;&nbsp; ${currentWomen.projects.proj3.description}
              </p>
              </div>
          </section>
          <section>
              <div>
              <img src="${currentWomen.projects.proj4.proj_image_url}"/>
              <p class="description">
                  <b>${currentWomen.projects.proj4.proj_name}</b>
                  &nbsp;&nbsp; ${currentWomen.projects.proj4.description}
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
document.getElementById("defaultOpen").click();
}



function openJob(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      console.log("helllloo")
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