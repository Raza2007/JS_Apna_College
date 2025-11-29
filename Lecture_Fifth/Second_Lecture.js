// Arrow Functions:("Compact way of writing a functions")

const functionName = (param1, param2) => {
  // do somework
};

// sum function:
function add(a, b) {
  return a + b;
}

// Multiplications functions:
function mul(x, y) {
  return x * y;
}

// Hum sum functions ko create karnege using arrow functions:
//MOdern JS :

const arrowSum = (m, n, o) => {
  console.log(m + n + o);
};
arrowSum(1, 3, 12);

// Multiplicatioons:

const arrowMul = (m, n, o) => {
  console.log(m * n * o);
};
arrowMul(1, 3, 12);

// const y=123

const printHellllo = () => {
  console.log("Kadir Bhaiya");
};
printHellllo();





// Multiple values multiplications:
const arrowMult = (k, a, d, s, e, r, t, y, u, i) => {
  console.log(k * a * d * s * e * r * t * y * u * i);
};

arrowMult(24, 100, 200, 100, 11, 23, 45, 66, 77, 77);
