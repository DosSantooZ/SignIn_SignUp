const buttonsi = document.getElementById("btnsignin");
const buttonsu = document.getElementById("btnsignup");
const signup = document.getElementById("signup");
const signin = document.getElementById("signin");

buttonsi.addEventListener('click', () => {
  signin.style.animation = "show 0.6s";
  signin.style.animationFillMode = "forwards"
  signin.style.transform = "translate(0%)";
  signup.style.animation = "show 0.6s reverse";
  signup.style.animationFillMode = "forwards"
  signup.style.transform = "translate(0%)";
});

buttonsu.addEventListener('click', () => {
  signup.style.animation = "show 0.6s";
  signup.style.animationFillMode = "forwards"
  signup.style.transform = "translate(100%)";
  signin.style.animation = "show 0.6s reverse";
  signin.style.animationFillMode = "forwards"
  signin.style.transform = "translate(100%)";
});
