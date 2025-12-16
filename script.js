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

  const bookmarkBackgroundButton = document.getElementById("bookmarkBackground");
const bookmarkIcon = document.getElementById("bookmarkIcon");
const bookmarkCircle = document.getElementById("bookmarkCircle");
const bookmark = document.getElementById("bookmark");
const bookmarked = document.getElementById("bookmarked");

let isBookmarked = false;

bookmarkBackgroundButton.addEventListener("click", () => {
  isBookmarked = !isBookmarked;

  if (isBookmarked) {
    bookmarkIcon.classList.remove("text-gray-300", "group-hover:text-gray-200");
    bookmarkIcon.classList.add("text-white");

    bookmarkCircle.classList.remove("bg-gray-600", "group-hover:bg-gray-500");
    bookmarkCircle.classList.add("bg-[hsl(176,50%,47%)]", "group-hover:bg-[hsl(176,53%,51%)]");

    bookmarkBackgroundButton.classList.remove("bg-[#e9e9e9]", "hover:bg-[#f0eeee]");
    bookmarkBackgroundButton.classList.add("bg-[hsl(174,64%,94%)]");

    bookmark.classList.add("hidden");
    bookmarked.classList.remove("hidden");
  } 
  else {
    bookmarkIcon.classList.add("text-gray-300", "group-hover:text-gray-200");
    bookmarkIcon.classList.remove("text-white");

    bookmarkCircle.classList.remove("bg-[hsl(176,50%,47%)]", "group-hover:bg-[hsl(176,53%,51%)]");
    bookmarkCircle.classList.add("bg-gray-600", "group-hover:bg-gray-500");
 
    bookmarkBackgroundButton.classList.add("bg-[#e9e9e9]", "hover:bg-[#f0eeee]");
    bookmarkBackgroundButton.classList.remove("bg-[hsl(174,64%,94%)]");

    bookmark.classList.remove("hidden");
    bookmarked.classList.add("hidden");
  }
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