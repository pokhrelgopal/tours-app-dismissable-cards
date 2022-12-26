import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="">
        <h1 className="text-3xl underline decoration-4 py-10 underline-offset-8">
          Our Tours
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
