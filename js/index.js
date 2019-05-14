const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

/////////////////////////////////////////////////
let nav = document.querySelector("header nav");
let nava = document.querySelectorAll("header nav a");
nava[0].prepend(siteContent["nav"][`nav-item-1`]);
nava[0].style.color = "green";
for (i = 1; i < nava.length; i++) {
  let na = document.createTextNode(siteContent["nav"][`nav-item-${i + 1}`]);
  nava[i].appendChild(na);
  nava[i].style.color = "green";
}
///////////////////////////////////////////////////*///////
/////////////////////////////////////////////////////////
/////////////////////  CTA  ////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
let cta = document.getElementsByClassName("cta");
console.log(cta[0].childNodes[3].src);
cta[0].childNodes[1].childNodes[1].textContent = siteContent["cta"][`h1`];
cta[0].childNodes[1].childNodes[3].innerText = siteContent["cta"][`button`];
cta[0].childNodes[3].src = siteContent["cta"]["img-src"];
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//////////////////////// MAIN ///////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
let main = document.getElementsByClassName("main-content");

///////////////////// FEATURES ////////////////////////////
/////////////////////////////////////////////////////////
main[0].childNodes[1].childNodes[1].childNodes[1].textContent =
  siteContent["main-content"][`features-h4`];
main[0].childNodes[1].childNodes[1].childNodes[3].textContent =
  siteContent["main-content"][`features-content`];
///////////////////// ABOUT //////////////////////////////
/////////////////////////////////////////////////////////
main[0].childNodes[1].childNodes[3].childNodes[1].textContent =
  siteContent["main-content"][`about-h4`];
main[0].childNodes[1].childNodes[3].childNodes[3].textContent =
  siteContent["main-content"][`about-content`];
//////////////////// MIDDLE IMG ///////////////////////////
/////////////////////////////////////////////////////////
main[0].childNodes[3].src = siteContent["main-content"][`middle-img-src`];
//////////////////// SERVICES ///////////////////////////////
/////////////////////////////////////////////////////////
main[0].childNodes[5].childNodes[1].childNodes[1].textContent =
  siteContent["main-content"][`services-h4`];
main[0].childNodes[5].childNodes[1].childNodes[3].textContent =
  siteContent["main-content"][`services-content`];
//////////////////// PRODUCTS ///////////////////////////////
/////////////////////////////////////////////////////////
main[0].childNodes[5].childNodes[3].childNodes[1].textContent =
  siteContent["main-content"][`product-h4`];
main[0].childNodes[5].childNodes[3].childNodes[3].textContent =
  siteContent["main-content"][`product-content`];
//////////////////// visions ///////////////////////////////
/////////////////////////////////////////////////////////
main[0].childNodes[5].childNodes[5].childNodes[1].textContent =
  siteContent["main-content"][`vision-h4`];
main[0].childNodes[5].childNodes[5].childNodes[3].textContent =
  siteContent["main-content"][`vision-content`];
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////// CONTACT /////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
let contact = document.getElementsByClassName("contact");

contact[0].childNodes[1].textContent = siteContent["contact"][`contact-h4`];
contact[0].childNodes[3].textContent = siteContent["contact"][`address`];
contact[0].childNodes[5].textContent = siteContent["contact"][`phone`];
contact[0].childNodes[7].textContent = siteContent["contact"][`email`];

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////// footer  /////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"][`copyright`];
