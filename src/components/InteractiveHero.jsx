import { useState, useEffect } from "react";
import Rive from "@rive-app/react-canvas";

function InteractiveHero(props) {
  // State to manage the tracking status
  const [isTracking, setIsTracking] = useState(false);

  useEffect(() => {
    const handleHitEvent = () => {
      // Toggle tracking status when hit event occurs
      setIsTracking((prevTracking) => !prevTracking);
    };

    // Add event listener for the hit event
    const canvas = document.querySelector("#interactiveface-rive");
    if (canvas) {
      canvas.addEventListener("hit", handleHitEvent);
    }

    // Cleanup function to remove event listener
    return () => {
      if (canvas) {
        canvas.removeEventListener("hit", handleHitEvent);
      }
    };
  }, []);

  return (
    <div
      className={`relative min-h-screen flex`}
      style={{ backgroundColor: "#f6dfbf" }}
    >
      <div className="container mx-auto flex justify-center items-center">
        <Rive
          src="interactivehero.riv"
          stateMachines="State Machine 1"
          inputs={{
            isTracking: isTracking,
          }}
        />
      </div>
    </div>
  );
}

export default InteractiveHero;
