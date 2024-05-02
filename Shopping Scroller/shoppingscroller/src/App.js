import logo from './logo.svg';
import './App.css';
import Shop from './shop.js';
import { useEffect, useState } from 'react';

function App() {
  const [page, setPage] = useState(1);

   //checking user scrolls to the bottom
   useEffect(() => {
    // Add event listener when component mounts
    function handleScroll() {
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.scrollY;

      // Calculate a threshold that's a percentage of the document height
      const threshold = 0.95; // Adjust this value as needed
      const scrollThreshold = documentHeight * threshold;

      // Check if user has scrolled to the threshold near the bottom of the page
      if (scrollPosition >= scrollThreshold) {
        setPage(prevPage => prevPage + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="ShoppingScroller">
     <Shop page={page} />
    </div>
  );
}

export default App;
