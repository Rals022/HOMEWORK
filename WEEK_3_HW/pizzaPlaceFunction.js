const pizzaPlace = "Raleigh's Pizza";
let pizzaToppings = ["cheese", "pepperoni", "sausage", "green peppers"];
console.log(pizzaToppings);

function greetCustomer() {
  console.log(
    `"Welcome to ${pizzaPlace}, Here are the available pizza toppings:"`
  );
  for (let i = 0; i < pizzaToppings.length; i++) {
    console.log(pizzaToppings[i]);
  }
}
greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size}, ${crust} crust pizza with ${toppings} coming up!`);
  return [size, crust, toppings];
}
let order = getPizzaOrder(16, "thin", ["cheese", "pepperoni"]);
let pizza = preparePizza(order);

function preparePizza(pizzaOrder) {
  console.log("Cooking pizza");
  let pizza = {
    size: pizzaOrder[0],
    crust: pizzaOrder[1],
    toppings: pizzaOrder[2]
  };
  return pizza;
}

function servePizza(pizza) {
  console.log(`Order up! Heres your ${order}, ...Enjoy!`);
}
servePizza(order);

greetCustomer();
servePizza(preparePizza(getPizzaOrder(16, "thin", "cheese", "pepperoni")));
