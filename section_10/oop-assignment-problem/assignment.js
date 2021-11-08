class Course {
  title;
  length;
  #price;

  set price(value) {
    if (value > 0) {
      this.#price = value;
    } else {
      throw new Error('The price property can only be set to a positive value')
    }
  }

  get price() {
    return `\$${this.#price}`;
  }       

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.#price = price;
  }    

  getLengthByPrice = () => {
    const length = this.length / this.#price;
    return Math.round(length);
  }
  
  summary = () => {
    return `\nCourse title: ${this.title},\nCourse length: ${this.length},\nCourse price: ${this.#price}`;
  }
}

class PracticalCourse extends Course {
  numOfExercises;

  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheoreticalCourse extends Course {
  // constructor(title, length, price) {
  //  super(title, length, price); 
  // }

  publish = () => {
    return "Theoretical Course Published!!!";
  }
}


const course01 = new Course('Course Title 01', 200, 150);
const course02 = new Course('Course Title 02', 300, 200);
console.log('course01', course01);
console.log('course02', course02);

console.log('getLengthByPrice()', course01.getLengthByPrice());
console.log('summery()', course01.summary());

console.log('getLengthByPrice()', course02.getLengthByPrice());
console.log('summary()', course02.summary());

const praCourse = new PracticalCourse('Practical Course', 120, 155, 10);
console.log('praCourse', praCourse)
console.log('praCourse summary', praCourse.summary())

const theoCourse = new TheoreticalCourse('Theoretical Course', 120, 185, 10);
console.log('theoCourse', theoCourse)
console.log('theoCourse publish: ', theoCourse.publish())