document.addEventListener("DOMContentLoaded", function() {

        const welcome = document.getElementById("welcome-screen");
            const videoScreen = document.getElementById("video-screen");
                const video = document.getElementById("intro-video");
                    const startButton = document.getElementById("start-button");

                        startButton.addEventListener("click", function() {

                                // 隱藏進入畫面
                                        welcome.hidden = true;

                                                // 顯示影片畫面
                                                        videoScreen.hidden = false;

                                                                // 從頭開始播放
                                                                        video.currentTime = 0;

                                                                                // 自動播放
                                                                                        video.play().catch(function(error) {
                                                                                                    console.log("影片播放失敗：", error);
                                                                                                            });

                                                                                                                });

                                                                                                                });
})