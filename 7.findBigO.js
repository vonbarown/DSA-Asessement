// Q7
// What is the runtime of the following code? Explain your reasoning.
// Answer on canvas

const foo = (arr) => {
  arr.forEach(x => {
    print(x)
  })
}

const bar = (arr) => {
  arr.forEach(() => {
    foo(arr)
  })
  arr.forEach(() => {
    foo(arr)
  })
}
