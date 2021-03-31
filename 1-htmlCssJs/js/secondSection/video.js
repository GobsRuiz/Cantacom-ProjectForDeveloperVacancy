function  video() {

    let video = document.querySelector("#secondSection-rightContent video")
    let controls = document.getElementById("secondSection-rightContent-controls")
    let pauseStartBtn = document.getElementById("secondSection-rightContent-controls-pausePlayBtn")
    let progress = document.getElementById("secondSection-rightContent-controls-rightContent-progress-bar")
    let volume = document.getElementById("secondSection-rightContent-controls-rightContent-volume")
    let fullScreen = document.getElementById("secondSection-rightContent-controls-rightContent-fullScreen")
    


    // Play and pause
    pauseStartBtn.addEventListener("click", (e) => {
        playPauseVideo()
    })
    function playPauseVideo() {
        if(video.paused){
            pauseStartBtn.innerHTML="pause";
            video.play()
        }else{
            pauseStartBtn.innerHTML="play_arrow";
            video.pause()
        }
    }
    
    // Progress
    video.addEventListener("timeupdate", () => {
        progressVideo()
    })
    function progressVideo() {
        let value = (video.currentTime / video.duration) * 100;
        progress.style.width = value + "%";
    
        if(video.ended) {
            pauseStartBtn.innerHTML="play_arrow";
        }
    }
    

    // Volume
    volume.addEventListener("change", (e) => {
        video.volume = volume.value;
    })

    // Fullscreen
    fullScreen.addEventListener("click", () => {
        fullscreenVideo()
    })
    function fullscreenVideo() {
        if(!video.classList[0]){
            video.classList.add("videoFullscreen");
            controls.classList.add("videoFullscreen-controls");
            fullScreen.innerHTML = "fullscreen_exit";
        }else if(video.classList[0]){
            video.classList.remove("videoFullscreen")
            controls.classList.remove("videoFullscreen-controls")
            fullScreen.innerHTML = "fullscreen";
        }
    }
}video()
