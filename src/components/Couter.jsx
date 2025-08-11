import React from 'react'
import { useState } from 'react'

const Couter = () => {

  const [count, setCount] = useState(0);

  function plusHandler() {
    setCount(count + 1);
  }

  function minusHandler() {
    if (count <= 0) {
      alert('Less than value is zero');
      count = 0;
    }
    setCount(count - 1);
  }

  function multiplyHandler() {
    if (count <= 0) {
      alert('Less than value is zero');
      count = 0;
    }
    setCount(count * count);
  }

  function divideHandler() {
    if (count <= 0) {
      alert('Less than value is zero');
      count = 0;
    }
    setCount(count / count);
  }

  const resetHandler = () => {
    setCount(0);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 to-pink-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Counter: {count}</h1>

        <div className="flex flex-col gap-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 rounded-xl transition duration-300"
            onClick={plusHandler}
          >
            ➕ Add
          </button>

          <button
            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 rounded-xl transition duration-300"
            onClick={minusHandler}
          >
            ➖ Subtract
          </button>

          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 rounded-xl transition duration-300"
            onClick={multiplyHandler}
          >
            ✖️ Multiply
          </button>

          <button
            className="bg-gray-800 hover:bg-black text-white font-semibold py-2 rounded-xl transition duration-300"
            onClick={divideHandler}
          >
            ➗ Divide
          </button>

          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 rounded-xl transition duration-300"
            onClick={resetHandler}
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Couter;
