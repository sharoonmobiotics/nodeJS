class Telephone {

  constructor(Brand) {
    this.Brand = Brand;
  }

  doCall() {
    console.log(this.color, 'Call Function');
  }
  doSms() {
    console.log('SMS Function');
  }
  playGame() {
    console.log('Game Function');
  }
}

class Mobile extends Telephone {

  constructor(Brand, color, price, type) {
    super(Brand);
    this.color = color;
    this.price = price;
    this.type = type;
  }

  playMusic() {
    console.log(this.Brand, ' Music Player ', this.color);
  }
  playVideo() {
    console.log(this.Brand, ' Video Player ', this.price);
  }
  takePhoto() {
    console.log(this.Brand, ' Camara ', this.type);
  }

};

let mobile = new Mobile("nokia", "Blue", "15000", "Touch");

mobile.doCall() 
mobile.doSms(); 
mobile.playGame();
mobile.playMusic();
mobile.playVideo();
mobile.takePhoto();