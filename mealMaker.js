

//object with three properties
const menu = {
  _courses: {
    appetizers: [], mains: [], desserts: [],
  
  },

  
    //getter methods
  get appetizers() {
    
    return this._courses.appetizers;
  
  },
  
  get mains() {
      
    return this._courses.mains;
  
  },
    
  get desserts() {
      
    return this._courses.desserts;

  },
  //setter methods
  set appetizers(appetizers) {
    
    this._courses.appetizers = appetizers;

  },

  set mains(mains) {
    
    this._courses.mains = mains;

  },

  set desserts(desserts) {
    
    this._courses.desserts = desserts;

  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },

  
  //Method to add dish
  addDishToCourse(courseName, dishName, dishPrice) {
  
    const dish = {
      name: dishName,
      price: dishPrice,
    };

    this._courses[courseName].push(dish);
  
  },

  //Method get random
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName]
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
    

  },

  //Method generate random meal
  generateRandomMeal() {
    
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + mains.price + desserts.price;

    return `Your meal is ${appetizer.name}, ${mains.name} and a ${desserts.name}. Your
    total price is $${totalPrice} dollars`;

  }
    
};

menu.addDishToCourse('appetizers', 'pizza sticks', 5.25)
menu.addDishToCourse('appetizers', 'salad', 2.50)
menu.addDishToCourse('appetizers', 'fried mushrooms', 4.75)


menu.addDishToCourse('mains', 'steak', 9.00)
menu.addDishToCourse('mains', 'lobster', 14.00)
menu.addDishToCourse('mains', 'pasta', 10.00)


menu.addDishToCourse('desserts', 'cookie', 3.00)
menu.addDishToCourse('desserts', 'popsicle', 1.50)
menu.addDishToCourse('desserts', 'lava cake', 4.25)

  
const meal = menu.generateRandomMeal();
console.log(meal);

*/