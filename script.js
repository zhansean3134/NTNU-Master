function startIntro() {
        const welcome = document.getElementById("welcome-screen");
        const videoScreen = document.getElementById("video-screen");
        const video = document.getElementById("intro-video");

        welcome.hidden = true;
        videoScreen.hidden = false;

        video.currentTime = 0;

        video.play().catch(error => {
            console.log("影片播放失敗：", error);
            alert("影片無法自動播放，請按影片上的播放鍵。");
        });
    }