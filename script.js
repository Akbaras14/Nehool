document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const text = document.getElementById("text");
  const audio = document.getElementById("myAudio");
  const section = document.getElementById("section");

  let isPlaying = false;
  let heartInterval; // Variabel untuk menyimpan interval

  btn.addEventListener("click", () => {
    if (!isPlaying) {
      isPlaying = true;
      audio.play();
      btn.remove();
      startTextAnimation();
    }
  });

  function startTextAnimation() {
    const texts = [
      { time: 0, content: "......." },
      { time: 12200, content: "-Ku Akan Datang Lagi" },
      { time: 17870, content: "-Meski Ibumu Melarang" },
      {
        time: 23300,
        content: "-Ku Tunjukkan Kesungguhan Untuk, Miliki Dirimu",
      },
      {
        time: 33700,
        content: "-Yang Ku Ingin, Bukan Sekedar Hanya Untuk Pacaran",
        effect: showEffects,
      },
      {
        time: 44900,
        content:
          "-Yang Ku Mau Memberikan Seluruh Cinta Sampai Akhir Waktu Nanti",
      },
      {
        time: 58770,
        content: "Proud of U <i class='fa fa-heart text-white'></i>",
        effect: showCard, 
      },


    ];

    texts.forEach(({ time, content, effect }) => {
      setTimeout(() => {
        text.innerHTML = content;
        text.classList.add("fade-in");
        if (effect) effect();
      }, time);
    });

    setTimeout(() => {
      audio.pause();
    }, texts[texts.length - 1].time + 2000);
  }

  function showEffects() {
    document.body.classList.add("bg-show");
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", "pink");

    // Hati muncul terus-menerus tanpa batas waktu
    heartInterval = setInterval(createHeart, 150);
  }

  function createHeart() {
    const heart = document.createElement("i");
    heart.className = "fa fa-heart heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "90vh";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 57000);
  }
function showCard() {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = `
  <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 10px;
    ">
    <div style="
      background-color: white; 
      padding: 15px; 
      border-radius: 10px; 
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
      max-width: 350px;
      text-align: center;
    ">
      <img 
        src="assets/img/img4.jpg" 
        alt="Kenangan" 
        class="card-img-top rounded"
        style="max-width: 70%; height: auto; border-radius: 8px;"
      >
      <p class="card-text text-muted mt-3 px-2 limited-text">
        "Setiap tatapanmu adalah puisi yang tak pernah usai.  
        Setiap senyummu adalah cahaya yang menerangi hari-hariku.  
        Aku menyimpan semua kenangan ini, bukan hanya dalam foto,  
        tapi juga dalam hati."
      </p>
    </div>
    </div>
  `;

  // Pastikan teks tampil sepenuhnya dalam cardContainer
  cardContainer.style.display = "block";
  cardContainer.classList.add("fade-in-text");
}
});