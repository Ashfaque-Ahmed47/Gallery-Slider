let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (e)=>{
    const atEnd = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth;
    const atStart = scrollContainer.scrollLeft <= 0;

    if (atEnd && e.deltaY > 0) {
        // Allow normal scrolling down after reaching the end of the gallery
        return;
    } else if (atStart && e.deltaY < 0) {
        // Allow normal scrolling up after reaching the start of the gallery
        return;
    }
     else {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
        scrollContainer.style.scrollBehavior = "auto"; 
    }
    
})

backBtn.addEventListener("click", (e)=>{
   scrollContainer.style.scrollBehavior = "smooth";
   scrollContainer.scrollLeft -= 900;
})
nextBtn.addEventListener("click", (e)=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
})




    