const menuButton = document.getElementById("menuButton");
  const dropdownMenu = document.getElementById("dropdownMenu");

  menuButton.addEventListener("click", (e) => {
    e.stopPropagation();

    dropdownMenu.classList.toggle("hidden");
    menuButton.classList.toggle("hidden");
  });

  window.addEventListener("click", (e) => {
    if (!dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.add("hidden");
      menuButton.classList.remove("hidden");
    }
  });

const discoverButton = document.getElementById("discoverName");
  const discoverButton1 = document.getElementById("discoverName1");
  const discoverPopup = document.getElementById("popUp");
  const closePopup = document.getElementById("closePopup")

    closePopup.addEventListener("click", () => {
    discoverPopup.classList.add("hidden");
  });

  discoverButton.addEventListener("click", (e) => {
    e.stopPropagation();

    discoverPopup.classList.remove("hidden");
  });
  discoverButton1.addEventListener("click", (e) => {
    e.stopPropagation();

    discoverPopup.classList.remove("hidden");
  });


  const backThisProjectButton = document.getElementById("backThisProjectButton");
  const backThisProject = document.getElementById("backThisProject");
  const closeThisProject = document.getElementById("closeThisProject")

    closeThisProject.addEventListener("click", () => {
    backThisProject.classList.add("hidden");
  });

  backThisProjectButton.addEventListener("click", (e) => {
    e.stopPropagation();

    backThisProject.classList.remove("hidden");
  });

  const radioBambooStandsRadio = document.getElementById("radioBambooStands");
  const footerBamboo = document.getElementById("footerBamboo");

radioBambooStandsRadio.addEventListener("change", () => {
    footerBamboo.classList.remove("hidden");
  });