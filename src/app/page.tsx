"use client"
import { useEffect, useState } from "react";

export default function Home() {
  // State variables to hold count and name
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Next.js");

  // Function to increment the count and trigger useEffect
  const increment = () => {
    setCount(count + 1);
  };

  // useEffect hook to fetch data when count changes
  useEffect(() => {
    // Async function to fetch data from API
    const fetchData = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      const fetchdataViaApi = await fetch(url);
      const response = await fetchdataViaApi.json();
     
      
      // Updating name state with fetched data
      setName(response[1].username);
    };

    // Call the fetchData function
    fetchData();
  }, [count]); // Dependency array with `count` to re-run useEffect on count change

  return (
    // Main container with Tailwind for layout and styling
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-sans">
      {/* Title with text styling */}
      <h1 className="text-2xl font-bold text-gray-800">Use Effect Hook</h1>

      {/* Button to increment count, styled with Tailwind for padding, color, and hover effects */}
      <button
        onClick={increment}
        className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition-all"
      >
        Submit: {count}
      </button>

      {/* Paragraph to display the fetched name, styled with Tailwind for font size and color */}
      <p className="text-lg font-medium text-gray-600">{name}</p>
    </div>
  );
}
{/**State Variables: count and name are initialized with default values and updated as the component interacts with user actions or data from an API.
increment Function: This function updates the count each time the button is clicked, which also triggers the useEffect hook.
useEffect Hook: Contains logic to fetch data every time count changes. The data retrieved updates the name state, reflecting on the page immediately.


Tailwind CSS Styling:
Main container (div): Grid layout centers the content vertically and horizontally, with responsive padding.
Title (h1): Text styling with size and color for readability.
Button: Uses Tailwind classes for padding, background color, rounded corners, and hover transitions.
Name Display (p): Text is styled for a consistent look with the rest of the component. */}