const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");
const modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
const btn = document.getElementById("modalBtn1");
const btn2 = document.getElementById("modalBtn2");
const btn3 = document.getElementById("modalBtn3");
const btn4 = document.getElementById("modalBtn4");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close 1")[0];
const span2 = document.getElementsByClassName("close 2")[0];
const span3 = document.getElementsByClassName("close 3")[0];
const span4 = document.getElementsByClassName("close 4")[0];

// When the user clicks the button, open the modal
span.onclick = function (e) {
  e.preventDefault();
  modal1.style.display = "none";
};

span2.onclick = function (e) {
  e.preventDefault();
  modal2.style.display = "none";
};

span3.onclick = function (e) {
  e.preventDefault();
  modal3.style.display = "none";
};

span4.onclick = function (e) {
  e.preventDefault();
  modal4.style.display = "none";
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  modal1.style.display = "block";
});

btn2.addEventListener("click", function (e) {
  e.preventDefault();
  modal2.style.display = "block";
});

btn3.addEventListener("click", function (e) {
  e.preventDefault();
  modal3.style.display = "block";
});

btn4.addEventListener("click", function (e) {
  e.preventDefault();
  modal4.style.display = "block";
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
  }
};

const timeContainer = document.getElementById("time-container");
const BIRTH_DAY = "1-05-2020";
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
  const now = new Date();
  const difference = Math.floor(
    (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
  );

  timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);

const email = document.getElementById("email");
const emailBtn = document.getElementById("email-icon");

emailBtn.onclick = function (e) {
  e.preventDefault();
  email.innerText = "Email : atnureabhishek@gmail.com";
};
