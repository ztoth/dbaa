const PATH = {
  HOME: "home.html",
};

class Page {
  constructor() {}

  init = () => {
    this.mainSection = document.getElementById("content");
    this.load(PATH.HOME);
  };

  load = async (page) => {
    const response = await fetch(page, { credentials: "same-origin" });
    const content = await response.text();
    this.mainSection.innerHTML = content;
  };
}

const page = new Page();
window.onload = page.init;
