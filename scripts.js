// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.play-pause-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const audiobook = button.closest('.audiobook');
            const audioElement = audiobook.querySelector('audio');

            if (audioElement.paused) {
                pauseAllAudiobooks();
                audioElement.play();
                button.textContent = 'Pause';
                audioElement.removeAttribute('hidden');
            } else {
                audioElement.pause();
                button.textContent = 'Play';
                audioElement.setAttribute('hidden', true);
            }

            audioElement.addEventListener('ended', () => {
                button.textContent = 'Play';
                audioElement.setAttribute('hidden', true);
            });
        });
    });

    function pauseAllAudiobooks() {
        const audioElements = document.querySelectorAll('audio');
        const buttons = document.querySelectorAll('.play-pause-button');

        audioElements.forEach(audio => audio.pause());
        buttons.forEach(button => button.textContent = 'Play');
    }
});
