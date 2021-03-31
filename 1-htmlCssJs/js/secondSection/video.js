function  video() {

    let video = document.querySelector("#secondSection-rightContent video")
    let pauseStartBtn = document.getElementById("secondSection-rightContent-controls-pausePlayBtn")
    let progress = document.getElementById("secondSection-rightContent-controls-rightContent-progress-bar")
    let volume = document.getElementById("secondSection-rightContent-controls-rightContent-volume")
    let fullScreen = document.getElementById("secondSection-rightContent-controls-rightContent-fullScreen")
    


    pauseStartBtn.addEventListener("click", (e) => {
        playPauseVideo()
    })
    
    // Play and pause
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
        let value = (video.currentTime / video.duration) * 100;
        progress.style.width = value + "%";
    
        if(video.ended) {
            pauseStartBtn.innerHTML="play_arrow";
        }
    })
    
    // Volume
    volume.addEventListener("change", (e) => {
        video.volume = volume.value;
    })
}video()
