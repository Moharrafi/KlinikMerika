//Testimonial Data
const testimonials = [
  {
    name: "Morgan",
    job: "Sportsman",
    image: "https://img.freepik.com/free-photo/front-view-man-pointing-up_23-2148946191.jpg?w=740&t=st=1698203451~exp=1698204051~hmac=9a79bb6e3b881bde8f98f677625ba16f3e4e9960418f7f7c01139b2d20e9bb00",
    testimonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur eaque sint commodi iusto dolores nihil nulla cumque. At accusamus inventore enim excepturi nihil. Veritatis harum quae omnis ipsum officia numquam asperiores? Expedita ea cumque ipsa est. Dicta voluptate incidunt nemo magnam, beatae doloribus eaque magni, qui omnis consequuntur eum placeat?",
  },
  {
    name: "Katey Topaz",
    job: "Lecturer",
    image: "https://instasize.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmunkee%2Fimage%2Fupload%2Fw_1000%2Cc_fill%2Car_1%3A1%2Cg_auto%2Cr_max%2Fv1681855894%2Finstasize-website%2Flearn%2Fblonde-woman-selfie-instagram-influencer.webp&w=828&q=75",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nesciunt, ullam minima distinctio ducimus, tempore accusantium iste nisi rerum explicabo adipisci soluta sunt atque et dolore perspiciatis voluptas harum aliquid voluptatem quidem maiores fugit vitae hic magni? Et unde architecto rerum, eveniet vitae id itaque.",
  },
  {
    name: "Jae Robin",
    job: "UI Designer, Affinity Agency",
    image: "https://i.postimg.cc/W4mnbjG9/profile-image-3.png",
    testimonial:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, maiores. Ea, provident a beatae adipisci, suscipit earum mollitia quam perspiciatis hic totam, quaerat aut libero explicabo quisquam animi magni dolore?",
  },
  {
    name: "Nicola Blakely",
    job: "CEO,Zeal Wheels",
    image: "https://i.postimg.cc/xdLsJL23/profile-image-4.png",
    testimonial:
      "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;