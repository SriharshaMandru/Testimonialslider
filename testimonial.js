const testimonials = [{
    name:"Eva sawyer",
    job:"CEO, Fashworks",
    image: "jennifer.jfif",
    testimonial:
    "Neque voluptas ac tincidus vitae semper quis lectus nulla at voluptas diam ut venenatis telus in metus vulptate eu scelerisque felis imperdiet proin "
},
{
    name:"Katey Topaz",
    job:"Developer, TechCrew",
    image: "captain.jfif",
    testimonial:"Neque voluptas ac tincidus vitae semper quis lectus nulla at voluptas diam ut venenatis telus in metus vulptate eu scelerisque felis imperdiet proin "
},
{
    name:"Nicola Blakely",
    job:"CEO, Zeal Wheels",
    image: "harry.jfif",
    testimonial:"Neque voluptas ac tincidus vitae semper quis lectus nulla at voluptas diam ut venenatis telus in metus vulptate eu scelerisque felis imperdiet proin "
},
   { name:"Jack sparrow",
    job:"Hollywood Hero, sparrow",
    image: "sparrow.jfif",
    testimonial:"Neque voluptas ac tincidus vitae semper quis lectus nulla at voluptas diam ut venenatis telus in metus vulptate eu scelerisque felis imperdiet proin "
   },
];
let i = 0;
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click",() => {
    i = (j + i + 1 )%j;
    displayTestimonial();
})
prevBtn.addEventListener("click",() => {
    i = (j + i - 1 )%j;
    displayTestimonial();
})

let displayTestimonial = () =>{
    testimonialContainer.innerHTML = `<p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>`

};
window.onload = displayTestimonial;