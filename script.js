
function startIntro() {
    const welcome = document.getElementById("welcome-screen");
    const videoScreen = document.getElementById("video-screen");
    const video = document.getElementById("aaa-video");

    welcome.hidden = true;
    videoScreen.hidden = false;

    video.currentTime = 0;

    video.play().then(() => {
        // 播放成功
        console.log("影片開始播放");
    }).catch(error => {
        console.log("自動播放失敗：", error);
        video.controls = true;
    });
}

