function startIntro() {
    const welcome = document.getElementById("welcome-screen");
    const videoScreen = document.getElementById("video-screen");
    const video = document.getElementById("aaa-video");

    // 隱藏首頁，顯示影片
    welcome.hidden = true;
    videoScreen.hidden = false;

    // 從影片開頭播放
    video.currentTime = 0;

    // 開始播放
    video.play().catch(function(error) {
        console.log("影片播放失敗：", error);
    });
}