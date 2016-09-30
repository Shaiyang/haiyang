(function() {
    var myVideo = document.getElementById("vid");
    var jyy = document.getElementById("jy");
    var btn4 = document.getElementById("btn4");
    var myImg = document.getElementById("myImg");
    var timekuang = document.getElementById("timekuang");
    var kaishi = document.getElementById("kaishi");
    var zanting = document.getElementById("zanting");
    var qp = document.getElementById("qp");
    var kj = document.getElementById("kj");
    var myVoice = document.getElementById("myVoice");
    var voicea = document.getElementById("voice");
    var a = 10;
    //点击开始播放再点击暂停
    kaishi.onclick = function() {
        if (myVideo.paused) {
            myVideo.play();
        } else {
            myVideo.pause();
            zanting.style.display = "block";

        }
    }
    zanting.onclick = function() {
        if (myVideo.paused) {
            myVideo.play();
            zanting.style.display = "none";
            kaishi.style.display = "block";
        }
    }

    // 点击静音再点击有声音
    jyy.onclick = function() {
            if (myVideo.muted) {
                myVideo.muted = false;
            } else {
                myVideo.muted = true;
            }
        }
        // 快进 点一下 快10秒
    kj.onclick = function() {
            myVideo.currentTime = a;
            a += 10;
        }
        //视频播放 图片消失
    myVideo.onplay = function() {
            myImg.style.display = "none";
        }
        //视频暂停 图片显示
    myVideo.onpause = function() {
            myImg.style.display = "block";
        }
        //点击图片 图片消失 视频继续
    myImg.onclick = function() {
            myImg.style.display = "none";
            myVideo.play();
        }
        //全屏
    qp.onclick = function() {
        if (myVideo.fullScreenFlag) {
            myVideo.webkitCancelFullScreen();
        } else {
            myVideo.webkitRequestFullScreen();
        }

    }

    //显示时间
    myVideo.ontimeupdate = function() {
        var myTime = parseInt(myVideo.currentTime);
        var miao = parseInt(myVideo.currentTime) % 60; //百分号就是求余数小于60的数1-59，当等于或者大于60的时候就是60的倍数120就是2分以此类推...
        var fen = parseInt(myTime / 60) % 60;
        var allTime = myVideo.duration;
        var allmiao = parseInt(myVideo.duration) % 60;
        var allfen = parseInt(myVideo.duration / 60) % 60;
        var allshi = parseInt(myVideo.duration / 3600);
        if (allmiao < 10) {
            allmiao = "0" + allmiao;
        }
        if (allfen < 10) {
            allfen = "0" + allfen;
        }
        if (miao < 10) {
            miao = "0" + miao;
        }
        if (fen < 10) {
            fen = "0" + fen;
        }
        var shi = parseInt(myTime / 3600);
        timekuang.innerHTML = shi + ":" + fen + ":" + miao + "/" + allshi + ":" + allfen + ":" + allmiao;
        //进度条
        var mjin = document.getElementById("mjin");
        var k = (myTime / allTime) * 400;
        mjin.style.width = k + "px";
    }
    jinDu.onclick = function(event) {
        myVideo.currentTime = parseInt(event.offsetX) / 400 * myVideo.duration;

    }
    jinDu.onmousedown = function() {
            jinDu.onmousemove = function() { myVideo.currentTime = parseInt(event.offsetX) / 400 * myVideo.duration; }
            document.onmouseup = function() {
                jinDu.onmousemove = null;
            }
        }
        // 声音进度
    voice.onclick = function(event) {
        myVideo.volume = event.offsetX / 70;
        myVoice.style.width = myVideo.volume * 70 + "px";
    }
    voice.onmousedown = function(event) {
        voice.onmousemove = function() {
            myVideo.volume = event.offsetX / 70;
            myVoice.style.width = myVideo.volume * 70 + "px";
        }
        document.onmouseup = function() {
            voice.onmousemove = null;
        }
    }


    //本地文件
    
    var button  = document.getElementById("button");
    var tianjia  = document.getElementById("tianjia");
    button.onclick = function(){
        var file = tianjia.files[0];
        var url = URL.createObjectURL(file);
        console.log(url);
        myVideo.src = url;
    }







}(window))
