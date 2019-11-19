function Stack() {
  const arrStack = [];
  this.push = (n) => {
    const arrpush = arrStack.unshift(n);
    return arrpush;
  };
  this.pop = () => {
    const arrpop = arrStack.shift();
    return arrpop;
  };
}


function Queue() {
  const arrQueue = [];
  this.push = (n) => {
    arrQueue.unshift(n);
    return arrQueue;
  };
  this.pop = () => {
    const arrNew = arrQueue[arrQueue.length - 1];
    arrQueue.length -= 1;
    return arrNew;
  };
}


const stack = new Stack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // 5
console.log(stack.pop()); // 10

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.pop()); // 1
console.log(queue.pop()); // 2
console.log(queue.pop()); // 3
console.log(queue.pop()); // 4
