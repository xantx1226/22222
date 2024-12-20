    window.onload = function() {
         var video = document.getElementById('myVideo');
         video.addEventListener('click', function() {
             window.location.href = 'video_play_fullscreen.html?video_src=' + encodeURIComponent('video_file.mp4');
         });
     }