let project = [
  {
    img: 'rock-paper-scissor-img-01.png',
    'project-title': '🎮 Rock, Paper, Scissors <br class="title-break"> Game',
    'project-link':'10-Rock-paper-scissors(1).html',
    content: 'A fun and interactive implementation of the classic hand game, built using HTML, CSS, and JavaScript. This project demonstrates my skills in DOM manipulation, event handling, and responsive design while creating an engaging user experience.'
  },
  {
    img: 'TaskHub-project.jpg',
    'project-link': 'TaskHub.html',
    'project-title': 'TaskHub',
    content: 'A simple task management app that allows users to add, edit, and delete tasks. Built using JavaScript, HTML, and CSS.'
  }
]

let displayHtml = '';

project.forEach((projectObj, index) => {
  let html = `
  <div>
    <div>
     <img src= "${projectObj.img}" class="project-img js-rock-paper-scissor-img">
    </div>
    <div class="all-project-content">
     <h2><a href="${projectObj['project-link']}" class="project-title">${projectObj['project-title']}</h2>
      <p class="project-content">${projectObj.content}</p>
      <ul>
       <li><a href="${projectObj['project-link']}"class=" btn btn-white project-btn">Preview</a></li>
     </ul>
    </div>
 </div>
  `
  
  displayHtml += html
  document.querySelector('.js-projects-section').innerHTML = displayHtml
})


let project1Img = ["rock-paper-scissor-img-01.png", "rock-paper-scissor-img-02.png", "rock-paper-scissor-img-03.png"]

let currentImage = 0;


setInterval(() => {
  currentImage ++
  
  document.querySelector('.js-rock-paper-scissor-img').src = project1Img[currentImage]
  
  if (currentImage >= 3){
    currentImage = 0
    document.querySelector('.js-rock-paper-scissor-img').src = project1Img[currentImage]
  }
  
}, 2000)

function btnHover(button){
  let btn = document.querySelectorAll('.js-btn-hover');
  
  for (i = 0; i < btn.length; i++){
    btn[i].classList.remove('btn-hover')
  }
  
  button.classList.add('btn-hover')
}

function showSidebar(){
    const sidebars = document.querySelector('.sidebar-menu');
    sidebars.style.display = 'flex'
  }
  
  function hideSidebar(){
    const hideSidebar = document.querySelector('.sidebar-menu');
    hideSidebar.style.display = 'none'
  }
  
  let currentColor = JSON.parse(localStorage.getItem('color'))
  
  document.querySelector('.js-side-bar').style.backgroundColor = currentColor
  
  document.querySelector('.js-change-side-color').addEventListener('input', () => {
    let colorPicker = document.querySelector('.js-change-side-color')
    let colorPickerValue = colorPicker.value
    
    localStorage.setItem('color', JSON.stringify(colorPickerValue))
    
    document.querySelector('.js-side-bar').style.backgroundColor = colorPickerValue
    
  })