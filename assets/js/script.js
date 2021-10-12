// sticky nav

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".nav-sec").addClass("sticky");
  } else {
    $(".nav-sec").removeClass("sticky");
  }
});

// nav-responsive
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

// ============

//banner slider===

var slide = $("div.slider").children("ul");
var images = $("div.slider").find("div.image");
var currentPosition = 1;
var WidthOfImages = images.width();
var totalImages = images.length;
var totalWidth = totalImages * WidthOfImages;

$("div.button").on("click", function() {

  var direction = $(this).data("dir");

  if (direction == "next") {
    currentPosition = currentPosition + 1;
    if (currentPosition <= totalImages) {
      slide.animate({
        "margin-left": "-=" + WidthOfImages
      });
    } else {
      currentPosition = 1;
      slide.animate({
        "margin-left": "0"
      });
    }
  } else if (direction == "prev") {
    currentPosition = currentPosition - 1;

    if (currentPosition > 0) {
      slide.animate({
        "margin-left": "+=" + WidthOfImages
      });
    } else if (currentPosition == 0) {
      currentPosition = totalImages;

      slide.animate({
        "margin-left": "-" + (totalWidth - WidthOfImages)
      });
    }

  }

});




// dark-light-script

const themes = {
  dark: {
    "--green-color": "#20b575",
    "--white-color-bg": "#ffffff",
    "--text-grey": "#313131",
    "--bg-light-blue": "#eff1fe",
    "--d-none": "none",
    "--rw-bg-opaity": "100%",
    "--d-block": "block",
  },
  light: {
    "--green-color": "#20b575",
    "--white-color-bg": "#1e1f26",
    "--text-grey": "#ffffff",
    "--bg-light-blue": "#32343b",
    "--d-none": "block",
    "--rw-bg-opaity": "10%",
    "--d-block": "none",
  },
};
[...document.querySelectorAll(".color-button")].forEach((el) => {
  el.addEventListener("click", () => {
    const theme = themes[el.dataset.theme];
    for (var variable in theme) {
      document.documentElement.style.setProperty(variable, theme[variable]);
    }
  });
});


//Created / Generates the captcha function    
function DrawCaptcha()
{
    var a = Math.ceil(Math.random() * 10)+ '';
    var b = Math.ceil(Math.random() * 10)+ '';       
    var c = Math.ceil(Math.random() * 10)+ '';  
    var d = Math.ceil(Math.random() * 10)+ '';  
    var e = Math.ceil(Math.random() * 10)+ '';  
    var f = Math.ceil(Math.random() * 10)+ '';  
    var g = Math.ceil(Math.random() * 10)+ '';  
    var code = a+' '+b+' '+' '+c+' '+d+' '+e+' '+f+' '+g;
    document.getElementById("txtCaptcha").value = code
}

// Validate the Entered input aganist the generated security code function   
function ValidCaptcha(){
    var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
    var str2 = removeSpaces(document.getElementById('txtInput').value);
    if (str1 == str2) return true;        
    return false;
    
}
// Remove the spaces from the entered and generated code
function removeSpaces(string)
{
    return string.split(' ').join('');
}
// =====================