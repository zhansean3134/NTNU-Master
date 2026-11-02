function startIntro() {
        const welcome = document.getElementById("welcome-screen");
            const videoScreen = document.getElementById("video-screen");
                const video = document.getElementById("intro-video");

                    welcome.hidden = true;
                        videoScreen.hidden = false;

                            video.currentTime = 0;
                                video.muted = true;

                                    video.play().then(() => {
                                            console.log("影片開始播放");
                                                }).catch(error => {
                                                        console.log("影片播放失敗：", error);
                                                                video.controls = true;
                                                                    });
                                                                    }
}