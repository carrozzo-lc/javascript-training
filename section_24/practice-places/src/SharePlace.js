import { Modal } from './UI/Modal';

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler);
    addressForm.addEventListener('submit', this.findAddressHandler);
  }
  
  locateUserHandler() {
    if (!navigator.geolocation) {
      alert('This feature is not available, Please download a fucking updated browser version!')
      return;
    }

    const modal = new Modal('loading-modal-content', 'Loading location. Please wait!');
    modal.show();

    navigator.geolocation.getCurrentPosition(
      successResult => {
        modal.hide();
        const coordinates  = {
          lat: successResult.coords.latitude,
          lgt: successResult.coords.longitude
        };
        console.log(coordinates);
      }, error => {
        modal.hide();
        alert('Could not locate you unfortunately. Please add an address manually!');
      }
    );
  }

  findAddressHandler() {}

}

const placeFinder = new PlaceFinder();