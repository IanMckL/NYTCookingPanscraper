/* Main function to run the script. Yes, it's a bit overkill for this. No, I don't care. */
const main = () => {
  removeNoScroll();
  removeModal();
  removeAds();
};

/* Remove modal from the page after promise is resolved from modalPromise. */
const removeModal = async () => {
  const modal = await modalPromise;
  modal.remove();
};

/* Promise resolves to wait for modal to appear */
const modalPromise = new Promise((resolve, reject) => {
  const interval = setInterval(() => {
    const modal = document.querySelector(
      ".modal_modal-window-container__59UFY",
    );
    if (modal) {
      clearInterval(interval);
      resolve(modal);
    }
  }, 100);
});

/* Remove no-scroll functionality from the body of the page.*/
const removeNoScroll = () => {
  document.body.style.overflow = "auto";
};

/* Remove advertisements from the page. */
const removeAds = () => {
  const ads = document.querySelectorAll(".adunit_ad-unit__IhpkS");
  ads.forEach((ad) => ad.remove());
};
console.log("TEST")

main();
