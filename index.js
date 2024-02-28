// ==UserScript==
// @name         安徽继续教育平台自动刷课
// @namespace    使用说明网址见作者
// @version      1.0
// @description  安徽继续教育平台 自动刷课，PPT，跳过做题
// @author       ragdollcb
// @match        *://*.ahjxjy.cn/*
// @grant        none
// ==/UserScript==

(window.onload =function () {
    'use strict';
    // Your code here...
    var confirm = function () {
        return true;
    };
    window.confirm = function () {
        return true;
    };
    setInterval(function () {
        //检测当前为视频
        for (var i = 0; i < document.getElementsByTagName('video').length; i++) {
            var current_video = document.getElementsByTagName('video')[i]
            if (current_video.ended) {
                if (document.getElementsByClassName('btn btn-green')) {
                    document.getElementsByClassName('btn btn-green')[0].click()
                }
            }
        }

        //检测当前为视频后的ppt页面
        if (document.getElementsByClassName('video-bg').length > 0 && document.getElementsByTagName('video').length === 0) {
            if (document.getElementsByClassName('video').length == 0){
                document.getElementsByClassName('preNext next')[0].click();
            }
            
        }


        //判断当前是作业
        if (document.getElementsByClassName('e-save-b btn_save').length > 0) {
            var currentLi
            if (document.getElementsByClassName('e-save-b btn_save')[0].innerText == '提交作业') {
                for (let i = 0; i < document.getElementsByTagName('li').length; i++) {
                    if (document.getElementsByTagName('li')[i].className == 'current') {
                        currentLi = i
                    }
                }
                currentLi = currentLi + 3
                document.getElementsByClassName('sectionlist btn_dropdown')[0].click();
                document.getElementsByTagName('li')[currentLi].getElementsByTagName('a')[0].click();
            }
        }
    }, 3000)
})();

