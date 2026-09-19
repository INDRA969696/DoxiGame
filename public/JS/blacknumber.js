class bn {
  constructor() {
    this.mycard = 0;
    this.card = 0;
    this.hostcard = 0;
  }
  check() {
    const card1 = document.querySelector(".blackcard1");
    const card2 = document.querySelector(".blackcard2");
    const card3 = document.querySelector(".blackcard3");
    const card4 = document.querySelector(".blackcard4");
    const card5 = document.querySelector(".blackcard5");
    var hostrandomcard = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    var hostcard = `url('../asset/NumbCard${hostrandomcard}.jpg')`;
    this.hostcard += hostrandomcard
    this.card += 1;
    if (this.card === 1) {
      card1.style.display = "block";
      card1.style.content = hostcard;
    } else if (this.card === 2) {
      card2.style.display = "block";
      card2.style.content = hostcard;
    } else if (this.card === 3) {
      card3.style.display = "block";
      card3.style.content = hostcard;
    }else if (this.card === 4) {
      card4.style.display = "block";  
      card4.style.content = hostcard;
    }else if (this.card === 5) {
      card5.style.display = "block";
      card5.style.content = hostcard;
    } else if (this.card > 5) {
      this.card = 0;
    }
  }
}
const a = new bn();

document.getElementById("checkbtn").addEventListener('click', () => a.check());
