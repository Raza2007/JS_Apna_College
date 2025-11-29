

// let,Const,Var:
// Keywords:
// --------------
// a.let('Variable can't be re-declared & updated. A bloak scope variable)
// b.var(Variable can be re-declared & updated.A global scope variable.)
// c.const(Variable can not be re -declared or updated.A block scope variable.)


let a;
console.log(a);
// let a=12;
// console.log(a);

// const a;
// console.log(a);

// const m=525+33;
const m=525
console.log(m);

// Let:( 'A bloak scope variable')

{
    let a=12;
    // let a=22;
    // error so kara raha hai 
    // lekin isi ko doosre block mai declare karnege tau error so nahi karega :
    console.log(a); 
}

{
    let a=333;
    console.log(a);
    
}























