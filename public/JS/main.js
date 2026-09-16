class TopDropdown {
  constructor() {
    this.dropdownTgl = 1
    this.animasiMenu = 0;
    this.animasiMenuY = 4;
  }

  dropdownToggle() {
    const dropdown = document.querySelector('.top-dropdown-ui');
    if (this.dropdownTgl == 1) {
      this.animasiMenuY += 16;
      this.animasiMenu += 1;

      dropdown.style.height = this.animasiMenuY + "px";

      if (this.animasiMenu <= 15) {
        requestAnimationFrame(() => this.dropdownToggle());
      } else {
        this.dropdownTgl = 0;
      }
    } else {

      this.animasiMenuY -= 16;
      this.animasiMenu -= 1;

      dropdown.style.height = this.animasiMenuY + "px";

      if (this.animasiMenu >= 0) {
        requestAnimationFrame(() => this.dropdownToggle());
      } else {
        this.dropdownTgl = 1;
      }
    }
  }
  slidePage(pageSlide) {
    const Home = document.querySelector('.home-page');
    const Games = document.querySelector('.game-page');
    if (pageSlide == "home") {
      Home.style.display = "block";
      Games.style.display = "none";
    } else if (pageSlide == "games") {
      Home.style.display = "none";
      Games.style.display = "block";
    }
  }
}
const a = new TopDropdown();
document.getElementById("home-dropdown-btn").addEventListener('click', () => a.slidePage("home"));
document.getElementById("games-dropdown-btn").addEventListener('click', () => a.slidePage("games"));
document.getElementById("start-button").addEventListener('click', () => a.slidePage("games"));
document.getElementById("dropdown-btn").addEventListener('click', () => a.dropdownToggle());
