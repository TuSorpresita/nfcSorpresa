document.addEventListener('DOMContentLoaded', function() {
    const romaGrid = document.getElementById('roma-grid');
    const totalMedia = 35; // Cambiar esto según la cantidad total de imágenes y videos que tengas para Roma

    for (let i = 1; i <= totalMedia; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        if (i <= 32) {
            const img = document.createElement('img');
            img.src = `img/roma-${String(i).padStart(2, '0')}.jpg`; // Ajusta la ruta según la estructura de tus imágenes
            img.alt = `Foto ${i}`;
            img.classList.add('clickable');
            gridItem.appendChild(img);
        } else {
            const videoContainer = document.createElement('div');
            videoContainer.classList.add('video-container');
            const video = document.createElement('video');
            video.src = `img/roma-${String(i).padStart(2, '0')}.mp4`; // Ajusta la ruta según la estructura de tus videos
            video.controls = true;
            videoContainer.appendChild(video);
            gridItem.appendChild(videoContainer);
        }

        romaGrid.appendChild(gridItem);
    }

    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('imgModal');
    const modalVideo = document.getElementById('videoModal');
    const captionText = document.getElementById('caption');
    const closeModal = document.getElementsByClassName('close')[0];

    // Manejar clics en elementos con clase .clickable (imágenes y videos)
    document.querySelectorAll('.clickable').forEach(element => {
        element.addEventListener('click', function() {
            modal.style.display = 'block';

            if (this.tagName === 'IMG') {
                modalImg.style.display = 'block';
                modalVideo.style.display = 'none';
                modalImg.src = this.src;
                modalImg.alt = this.alt;
            } else if (this.tagName === 'VIDEO') {
                modalImg.style.display = 'none';
                modalVideo.style.display = 'block';
                modalVideo.src = this.src;
                modalVideo.alt = this.alt;
                modalVideo.load(); // Cargar el video
                modalVideo.play(); // Reproducir el video automáticamente
            }

            captionText.innerHTML = this.alt;
        });
    });

    closeModal.onclick = function() {
        modal.style.display = 'none';
        modalVideo.pause(); // Pausar el video al cerrar el modal
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalVideo.pause(); // Pausar el video al cerrar el modal
        }
    }
});