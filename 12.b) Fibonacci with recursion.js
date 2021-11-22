function fib(range){
  if (range<=2) return 1;
  return fib(range-1)+fib(range-2);
}
