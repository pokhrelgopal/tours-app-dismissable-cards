import React, { useState, useEffect } from "react";
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState('');
  const [tours, setTours] = useState([])

  // RemoveTour Functionality
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log("You got an error !");
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (tours.length === 0) {
    return (
      <div className="flex items-center justify-center flex-col w-full py-20">
        <p className="text-2xl">No tours to show</p>
        <button
          className="text-lg bg-violet-800 text-white rounded px-2 py-1 hover:bg-violet-600 my-4"
          onClick={() => fetchTours()}
        >
          Refresh <i class="text-md fa-solid fa-rotate-right"></i>
        </button>

      </div>
    )
  }

  if (loading) return <main><Loading /></main>
  return (
    <>
      <div div className="App container mx-auto" >
        <Tours tours={tours} removeTour={removeTour} />
      </div>
    </>
  );
}

export default App;
