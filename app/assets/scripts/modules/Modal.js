import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events() {
    //clicking the open Modal Button
    this.openModalButton.click(this.openModal.bind(this));
    //clicking the x close Modal Button
    this.closeModalButton.click(this.closeModal.bind(this));
    //pressing any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if(e.keyCode == 27) {//where 27 is the keybord value of the esc key.
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false //to prevent the href from the get in touch button scrolling to top
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
