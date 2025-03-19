document.addEventListener("DOMContentLoaded", function () {
    const playButtons = document.querySelectorAll(".play-btn");
    const nowPlayingBar = document.getElementById("now-playing");
    const songTitle = document.getElementById("song-title");
    const audioPlayer = document.getElementById("audio-player");
    const pauseBtn = document.getElementById("pause-btn");
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const songs = document.querySelectorAll("#music-list div");

    let isPlaying = false;
    let currentSong = null;

    // Play button functionality
    playButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            const songSrc = btn.getAttribute("data-src");
            const songName = btn.previousElementSibling.textContent;

            if (currentSong === songSrc && isPlaying) {
                return; // Already playing this song
            }

            songTitle.textContent = "Now Playing: " + songName;
            nowPlayingBar.classList.remove("hidden");
            audioPlayer.src = songSrc;
            audioPlayer.play();
            isPlaying = true;
            currentSong = songSrc;
        });
    });

    // Pause button functionality
    pauseBtn.addEventListener("click", function () {
        if (isPlaying) {
            audioPlayer.pause();
            isPlaying = false;
            nowPlayingBar.classList.add("hidden");
        }
    });

    // Auto-hide Now Playing Bar when song ends
    audioPlayer.addEventListener("ended", function () {
        isPlaying = false;
        nowPlayingBar.classList.add("hidden");
    });

    // Search functionality
    searchBtn.addEventListener("click", function () {
        const query = searchInput.value.toLowerCase();
        songs.forEach((song) => {
            const songName = song.querySelector("p").textContent.toLowerCase();
            if (songName.includes(query)) {
                song.classList.remove("hidden");
            } else {
                song.classList.add("hidden");
            }
        });
    });

    // Allow Enter key to trigger search
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            searchBtn.click();
        }
    });
});
