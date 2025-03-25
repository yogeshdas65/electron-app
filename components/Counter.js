let count = 0;

const Counter = () => {
  return `
    <div style="text-align: center; margin: 20px;">
      <h3>Counter: <span id="counter">${count}</span></h3>
      <button onclick="increment()">➕</button>
      <button onclick="decrement()">➖</button>
    </div>
  `;
};

const increment = () => {
  count++;
  document.getElementById('counter').innerText = count;
};

const decrement = () => {
  count--;
  document.getElementById('counter').innerText = count;
};

module.exports = { Counter, increment, decrement };
