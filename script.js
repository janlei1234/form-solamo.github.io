// Add falling hearts animation
const heartContainer = document.querySelector('.heart-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// Navigate to Question Page
document.getElementById('click-me-btn').addEventListener('click', () => {
  document.body.innerHTML = `
    <div class="heart-container"></div>
    <div class="question">
      <h1>Do you love me? ❤️</h1>
      <button class="yes-button" onclick="showNote()">Yes</button>
      <button class="no-button" onclick="closeSite()">No</button>
    </div>
  `;

  setInterval(createHeart, 300);
});

// Show the Note
function showNote() {
  document.body.innerHTML = `
    <div class="heart-container"></div>
    <div class="note">
      <h1>My Love for You Solamo</h1>
      <p>Gusto lang nako ipahibalo kanimo nga ikaw ang akong kalipay ug inspirasyon. Ang imong pahiyom mao’y naghatag kahayag sa akong adlaw, ug ang imong gugma nagpalig-on kanako matag adlaw.
Salamat sa imong pagmahal ug pagpakita nga naa kay kanunay alang kanako. Sa akong kasingkasing, ikaw ra gyud ang akong Mahal na solamo.</p>
      <p class="love-you">I ❤️ You</p>
      <button class="close-button" onclick="closeSite()">Close</button>
    </div>
  `;

  setInterval(createHeart, 300);
}

// Close the Website
function closeSite() {
  window.close();
}
