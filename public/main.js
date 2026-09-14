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

  
}
const a = new TopDropdown();
document.getElementById("dropdown-btn").addEventListener('click', () => a.dropdownToggle());