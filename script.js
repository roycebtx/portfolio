// SCROLL ANIMATION
const elements = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
});

elements.forEach(el=>observer.observe(el));


// VIDEO HOVER PLAY
document.querySelectorAll('.card video').forEach(video=>{
video.addEventListener('mouseover',()=>video.play());
video.addEventListener('mouseout',()=>video.pause());
});// VIDEO POPUP
const popup = document.getElementById("videoPopup");
const popupVideo = document.getElementById("popupVideo");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const videoSrc = card.getAttribute("data-video");
        popupVideo.src = videoSrc;
        popup.classList.add("active");
        popupVideo.play();
    });
});

closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
    popupVideo.pause();
});

popup.addEventListener("click", (e) => {
    if(e.target === popup){
        popup.classList.remove("active");
        popupVideo.pause();
    }
});