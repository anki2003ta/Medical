const ratingsE1 = document.querySelectorAll(".rating");
const sendBtn = document.querySelector(".btn");
const panel = document.querySelector(".panel-container");


ratingsE1.forEach((el) => {
  el.addEventListener("click",() => {
    ratingsE1.forEach((innerE1) => {
      innerE1.classList.remove("active");
    });
    el.classList.add("active");
  });
});
sendBtn.addEventListener("click", () => {
  panel.innerHTML = `<strong>Thank You So Much For Your FeedBack!</strong>
  <div class="rating rating1">
    <img src="img13.jpg" class="js1">
  </div>
  <p>We'll use your your feedback to inprove our customer support performance</p>`;
});



