import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [read, setRead] = useState(false);
  return (
    <>
      <div className="my-8 bg-white rounded shadow-lg">
        <img src={image} alt={name} className="w-full h-96 object-cover" />
        <footer>
          <div className="p-4 flex items-center justify-between">
            <h4 className="font-bold text-lg">{name}</h4>
            <h4 className="bg-blue-100 text-blue-400 px-2 py-1 rounded">
              ${price}
            </h4>
          </div>
          <p className="p-4">
            {read ? info : `${info.substring(0, 150)}`}
            {read ? " " : ". . . "}
            <button
              onClick={() => setRead(!read)}
              className="underline underline-offset-4 text-blue-500 font-thin"
            >
              {read ? "Show Less" : "Read More"}
            </button>
            <div>
              <button
                className="bg-violet-800 text-white rounded px-2 py-1 hover:bg-violet-600 my-8"
                onClick={() => removeTour(id)}
              >
                Not Interested
              </button>
            </div>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Tour;
