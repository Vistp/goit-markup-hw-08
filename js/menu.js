// (() => {
//     const menuBtnRef = document.querySelector("[data-menu-button]");


//     menuBtnRef: addEventListener("click", () => {
//         const expanded =
//             menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//         menuBtnRef.classList.toggle("is-open");
//         menuBtnRef.setAttribute("aria-expanded", !expanded);

//     });
// })();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-button]'),
    closeModalBtn: document.querySelector('[modal-menu-close]'),
    modal: document.querySelector('[modal-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();