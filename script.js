function startIntro() {
        const welcome = document.getElementById("welcome-screen");
        const videoScreen = document.getElementById("video-screen");
        const video = document.getElementById("intro-video");

        welcome.hidden = true;
        videoScreen.hidden = false;

        video.currentTime = 0;

        const sound = document.getElementById("click-sound");
        sound.currentTime = 0;
        sound.play();

    }