import InteractiveHero from "./components/InteractiveHero.jsx";
import Instructions from "./components/Instructions.jsx"; // Import Instructions

export default function App() {
  return (
    <>
      <Instructions /> {/* Display the instructions at the top */}
      <InteractiveHero />
    </>
  );
}
