setTimeout(function () {
    var transcript = document.querySelector('#tab-transcript div');
    var holder = document.querySelector('div.lesson-video-container div.playlist-column div.scrollable-holder .inner');
    var playlist = document.querySelector('div.lesson-video-container div.playlist-column div.scrollable-holder .inner .playlist-lessons-holder');

    var text = transcript.cloneNode(true);

    holder.insertBefore(text, playlist);

    text.style.marginTop = 0;
    text.style.borderRadius = 0;
    text.style.color ='#000';

    setTimeout(function () {
        text.parentElement.scrollTop = 0;
    }, 500);
}, 1000);
