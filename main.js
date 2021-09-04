'use strict';

function DomElement (selector, height, width, bg, fontSize){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.createElem = function(){
    if(selector[0] === '.') {
      let div = document.createElement('div');
      div.classList.add('selector');
      div.style.cssText = `height: ${height}px;
                        width: ${width}px;
                        background: ${bg};
                        fontSize: ${fontSize}px; `;
      div.textContent = 'Привет мир!';
      document.body.append(div);
    } else if(selector[0] === '#') {
      let div = document.createElement('section');
      div.setAttribute('id', 'selector');
      div.style.cssText = `height: ${height}px;
                        width: ${width}px;
                        background: ${bg};
                        fontSize: ${fontSize}px; `;
      div.textContent = 'Привет мир!';
      document.body.append(div);
    }
  };
}

let newBlock = new DomElement('#Блок', '100', '100', 'blue', '14');
newBlock.createElem();

// DomElement.prototype










// let car = {
//   doors: 4,
//   turbo: false,
//   ride: function(){
//     console.log('Машина едет');
//   }

// };

// let newCar = Object.create(car);

// newCar.model = 'Volvo V50';

// console.log('newCar: ', newCar);

// Наследование прототип ^

// Функция конструктор:

// function car(model, color){
//   this.model = model;
//   this.color = color;
// }

// let car1 = new car('Volvo', 'Grey');
// let car2 = new car('Opel', 'Grey');
// console.log('car2: ', car2);
// console.log('car1: ', car1);

// car.prototype.ride = function(){
//   console.log('Ехать');
// };
// car1.ride();

// Классы:

// function car(brand, model, options){
//   this.brand = brand;
//   this.model = model;
//   options = options || {};
//   this.color = options.color;
//   this.transmission = options.transmission;
// }

// car.prototype.ride = function(){
//   console.log(this.brand + ' ' + this.model + ' поехала!');
// };

// let car1 = new car('Volvo', 'V50', {color: 'grey'});
// console.log('car1: ', car1);

// car1.ride();

// console.log(car1 instanceof car);

// Наследование классов:

// function Car(countryBild, options){
//   this.countryBild = countryBild;
//   options = options || {};
//   this.color = options.color;
//   this.transmission = options.transmission;
// }

// Car.prototype.ride = function(){
//   console.log(this.brand + ' ' + this.model + ' поехала!');
// };

// function Audi(countryBild, options, model, type){
//   this.brand = 'Audi';
//   Car.apply(this, arguments);
//   this.model = model;
//   this.type = type;
// }

// Audi.prototype = Object.create(Car.prototype);
// // Audi.prototype.constructor = Audi;

// let carQ7 = new Audi('Germany', {color: 'black'}, 'Q7', 'S');
// console.log(carQ7);
// console.log(carQ7 instanceof Audi);
// console.log(carQ7 instanceof Car);

// carQ7.ride();