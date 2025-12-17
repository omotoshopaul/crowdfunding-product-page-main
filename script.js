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

  discoverButton.addEventListener("click", (e) => {
    e.stopPropagation();

    alert("Discover our Mastercraft Bamboo Monitor Riser");
  });
  discoverButton1.addEventListener("click", (e) => {
    e.stopPropagation();

    menuButton.classList.remove("hidden");
    dropdownMenu.classList.add("hidden");
    alert("Discover our Mastercraft Bamboo Monitor Riser");
  });

  const getStartedButton = document.getElementById("getStarted");
  const getStartedButton1 = document.getElementById("getStarted1");

  getStartedButton.addEventListener("click", (e) => {
    e.stopPropagation();

    alert("Get Started with our Mastercraft Bamboo Monitor Riser");
  });
  getStartedButton1.addEventListener("click", (e) => {
    e.stopPropagation();

    menuButton.classList.remove("hidden");
    dropdownMenu.classList.add("hidden");
    alert("Get Started with our Mastercraft Bamboo Monitor Riser");
  });

const backThisProjectButton = document.getElementById("backThisProjectButton");
const overlayEffect = document.getElementById("overlay");
const body = document.getElementById("body");
const backThisProject = document.getElementById("backThisProject");
const closeThisProject = document.getElementById("closeThisProject")

backThisProjectButton.addEventListener("click", (e) => {
    e.stopPropagation();

    backThisProject.classList.remove("hidden");
    overlayEffect.classList.remove("hidden");
    body.classList.add("fixed");
  });

closeThisProject.addEventListener("click", () => {
    backThisProject.classList.add("hidden");
    overlayEffect.classList.add("hidden");
    body.classList.remove("fixed");
  });

  const radioBambooStandsRadio = document.getElementById("radioBambooStands"); 
const footerBamboo = document.getElementById("footerBamboo");
const radioPledgeWithNoReward = document.getElementById("radioPledgeWithNoReward"); 

const radioBlackEditionStand = document.getElementById("radioBlackEditionStand"); 
const footerBlackEdition = document.getElementById("footerBlackEdition");
const pledgeWithNowRewardContinue = document.getElementById("pledgeWithNowRewardContinue");

function closeAllFooters() {
  footerBamboo.classList.add("hidden");
  footerBlackEdition.classList.add("hidden");
  pledgeWithNowRewardContinue.classList.add("hidden");
}

radioBambooStandsRadio.addEventListener("change", () => {
  closeAllFooters();
  footerBamboo.classList.remove("hidden");
});

radioBlackEditionStand.addEventListener("change", () => {
  closeAllFooters();
  footerBlackEdition.classList.remove("hidden");
});
 radioPledgeWithNoReward.addEventListener("change", () => { 
   closeAllFooters();
   pledgeWithNowRewardContinue.classList.remove("hidden");
 });

const pledgeWithNowRewardContinueButton = document.getElementById("pledgeWithNowRewardContinue");
const bambooStandContinueButton = document.getElementById("bambooStandContinue");
const blackEditionStandContinueButton = document.getElementById("blackEditionStandContinue");
const thankYouPopUp = document.getElementById("thankYouPopUp");
const closeThankYouPopUp = document.getElementById("closeThankYouPopUp"); 
closeThankYouPopUp.addEventListener("click", () => {
    thankYouPopUp.classList.add("hidden");
    overlayEffect.classList.add("hidden");
    body.classList.remove("fixed");
  });
  pledgeWithNowRewardContinueButton.addEventListener("click", (e) => {
    e.stopPropagation();
   backThisProject.classList.add("hidden");
    thankYouPopUp.classList.remove("hidden");
  });
  bambooStandContinueButton.addEventListener("click", (e) => {
    e.stopPropagation();
   backThisProject.classList.add("hidden");
    thankYouPopUp.classList.remove("hidden");
  });
  blackEditionStandContinueButton.addEventListener("click", (e) => {
    e.stopPropagation();
   backThisProject.classList.add("hidden");
    thankYouPopUp.classList.remove("hidden");
  });

const bookmark = document.getElementById("bookmark");
const bookmarked = document.getElementById("bookmarked");

bookmark.addEventListener("click", (e) => { 
  bookmarked.classList.remove("hidden");
  bookmark.classList.add("hidden");
});
 
bookmarked.addEventListener("click", (e) => { 
  bookmark.classList.remove("hidden");
  bookmarked.classList.add("hidden");
});

const bambooSelectRewardButton = document.getElementById("bambooSelectReward");
const blackEditionSelectRewardButton = document.getElementById("blackEditionSelectReward");
 bambooSelectRewardButton.addEventListener("click", (e) => {
    e.stopPropagation();

    backThisProject.classList.remove("hidden");
  });
  blackEditionSelectRewardButton.addEventListener("click", (e) => {
    e.stopPropagation();

    backThisProject.classList.remove("hidden");
  });