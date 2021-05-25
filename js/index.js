/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
            <li class="card">
                <div class="image" 
                    style="background-image:url('${image}')"
                    data-index=${idx}"></div>
            </li>`;
    });
};
let currentIndex = 0;

const displayImage= () =>{
    const image = images[currentIndex];
    document.querySelector('.featured_image').style.backgroundImage = `url(${image})`;

}
const showImage = (ev) => {
    const elem = ev.currentTarget;
    console.log(elem.style.backgroundImage);
    currentIndex = parseInt(elem.dataset.index);
    displayImage();
    // your job: set the .featured_image's backgroundImage to the
    // element that was just clicked.
};

const showNext = (ev) => {
    currentIndex += 1;
    if (currentIndex == 8) {
        currentIndex = 0;
          }
    console.log("currentIndex:", currentIndex);
    displayImage();
    // update .featured_image
};

const showPrev = (ev) => {
    currentIndex -= 1;
    if (currentIndex == -1) {
        currentIndex = 7;
          }
    console.log("currentIndex:", currentIndex);
    displayImage();
    // update .featured_image
};

const attachEventHandlers = () =>{
    document.querySelectorAll('.image').forEach(elem => {
        elem.onclick = showImage;
    });
}
document.querySelector('.next').onclick = showNext;
document.querySelector('.prev').onclick = showPrev;

initScreen();
attachEventHandlers();