document.addEventListener('DOMContentLoaded', function() {
    const galeriaGrid = document.getElementById('galeria-grid');
    const totalFotos = 61;
    const totalVideos = 2;

    // Generar imágenes
    for (let i = 1; i <= totalFotos; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const img = document.createElement('img');
        img.src = `img/foto-${String(i).padStart(2, '0')}.jpg`;
        img.alt = `Foto ${i}`;
        img.classList.add('clickable');

        gridItem.appendChild(img);
        galeriaGrid.appendChild(gridItem);
    }

    // Generar videos
    for (let j = 1; j <= totalVideos; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const video = document.createElement('video');
        video.src = `img/video-${String(j).padStart(2, '0')}.mp4`;
        video.alt = `Video ${j}`;
        video.controls = true;
        video.classList.add('clickable');

        gridItem.appendChild(video);
        galeriaGrid.appendChild(gridItem);
    }

    // Modal logic
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
