let modelS = document.querySelector('.model-s')
let model3 = document.querySelector('.model-3')
let modelX = document.querySelector('.model-x')
let modelY = document.querySelector('.model-y')
let roof = document.querySelector('.roof')
let panels = document.querySelector('.panel')
let powerwall = document.querySelector('.powerwall')

let backgroundImage = document.querySelector('.bg-image-container')

let links = document.querySelectorAll('.links')

let title = document.querySelector('.title')
let paragraph = document.querySelector('.paragraph')

let navLinks = document.querySelector('.nav-links')
let rightLinks = document.querySelector('.right-links')


let shop = document.querySelector('.shop')
let account = document.querySelector('.account')
let menu = document.querySelector('.menu')

let shopLinks = document.querySelector('.shop-links')
let accountLinks = document.querySelector('.account-links')
let menuLinks = document.querySelector('.menu-links')

// onmouseover main links

function showOver (bg, titles, paragraphs, linksColors, rightColors, headingColors, paragraphColors) {
    backgroundImage.style.backgroundImage = bg
    title.innerHTML = titles
    paragraph.innerHTML = paragraphs
    navLinks.style.color = linksColors
    rightLinks.style.color = rightColors
    title.style.color = headingColors
    paragraph.style.color = paragraphColors
}

function hideOver() {
    backgroundImage.style.backgroundImage = "url('./images/bg.jpeg')";
    title.innerHTML = "Experience Tesla"
    paragraph.innerHTML = "Schedule a demo drive today"
    navLinks.style.color = 'black'
    rightLinks.style.color = 'black'
    title.style.color = 'black'
    paragraph.style.color = 'black'
}

modelS.onmouseover = () => {
    showOver("url('./images/model-s.jpeg')", "Model S", "Plad")
};
model3.onmouseover = () => {
    showOver("url('./images/model-3.jpeg')", "Model 3", "Plad")
};
modelX.onmouseover = () => {
    showOver("url('./images/model-x.webp')", "Model X", "Plad", "white", "white", "white", "white")
};
modelY.onmouseover = () => {
    showOver("url('./images/model-y.webp')", "Model Y", "Plad", "white", "white", "white", "white")
};
roof.onmouseover = () => {
    showOver("url('./images/solar-roof.webp')", "Solar Roof", "Beautiful Solar")
};
panels.onmouseover = () => {
    showOver("url('./images/panels.webp')", "Solar Panels", "Lowest Cost Solar Panels in America","white", "white", "white", "white")
};
powerwall.onmouseover = () => {
    showOver("url('./images/powerwall.webp')", "Powerwall", "Backup energy storage")
};
//  on mouse out forEach event

links.forEach((link) => {
    link.onmouseout = () => {
        hideOver()
    }
})

// show and hide secondary links on shop/menu/account links

function addHoverHandlers(element, targetElement) {
    element.onmouseover = () => {
        targetElement.style.display = 'flex';
    };
    element.onmouseout = () => {
        targetElement.style.display = 'none';
    };
  }
  
  addHoverHandlers(shop, shopLinks);
  addHoverHandlers(shopLinks, shopLinks);
  addHoverHandlers(account, accountLinks);
  addHoverHandlers(accountLinks, accountLinks);
  addHoverHandlers(menu, menuLinks);
  addHoverHandlers(menuLinks, menuLinks);

//   Hamburger

let openham = document.querySelector('.openham');
let closeham = document.querySelector('.closeham');

openham.addEventListener('click', () => {
    navLinks.style.display = 'flex';
    rightLinks.style.display = 'flex';
    openham.style.display = 'none';
    closeham.style.display = 'block';
})
closeham.addEventListener('click', () => {
    navLinks.style.display = 'none';
    rightLinks.style.display = 'none';
    openham.style.display = 'block';
    closeham.style.display = 'none';
})
