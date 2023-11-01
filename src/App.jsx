import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [hoveredMonday, setHoveredMonday] = useState(false);
  const [hoveredTuesday, setHoveredTuesday] = useState(false);
  const [hoveredWednesday, setHoveredWednesday] = useState(false);
  const [hoveredThursday, setHoveredThursday] = useState(false);
  const [hoveredFriday, setHoveredFriday] = useState(false);
  const [hoveredSaturday, setHoveredSaturday] = useState(false);
  const [hoveredSunday, setHoveredSunday] = useState(false);
  function toggleHoverMonday() {
    setHoveredMonday(!hoveredMonday);
  }
  function toggleHoverTuesday() {
    setHoveredTuesday(!hoveredTuesday);
  }
  function toggleHoverWednesday() {
    setHoveredWednesday(!hoveredWednesday);
  }
  function toggleHoverThursday() {
    setHoveredThursday(!hoveredThursday);
  }
  function toggleHoverFriday() {
    setHoveredFriday(!hoveredFriday);
  }
  function toggleHoverSaturday() {
    setHoveredSaturday(!hoveredSaturday);
  }
  function toggleHoverSunday() {
    setHoveredSunday(!hoveredSunday);
  }
  return (
    <>
      <div className="container card">
        <div>
          <p>My balance</p>
          <p>$921.48</p>
        </div>
        <div>
          <p>Spending - Last 7 Days</p>
          <div className="flex-container graph">
            <div>
              <div 
              className={hoveredMonday ? "hovered graph-data" : "graph-data"}
              onMouseEnter={toggleHoverMonday}
              onMouseLeave={toggleHoverMonday}
            ></div>
              <p className="day">mon</p>
            </div>
            <div>
              <div 
              className={hoveredTuesday ? "hovered graph-data" : "graph-data"}
              onMouseEnter={toggleHoverTuesday}
              onMouseLeave={toggleHoverTuesday}
            ></div>
              <p className="day">tue</p>
            </div>
            <div>
              <div 
              className={hoveredWednesday ? "hovered graph-data" : "graph-data"}
              onMouseEnter={toggleHoverWednesday}
              onMouseLeave={toggleHoverWednesday}
            ></div>
              <p className="day">wed</p>
            </div>
            <div>
              <div 
              className={hoveredThursday ? "hovered graph-data" : "graph-data"}
              onMouseEnter={toggleHoverThursday}
              onMouseLeave={toggleHoverThursday}
            ></div>
              <p className="day">thu</p>
            </div>
            <div>
              <div 
              className={hoveredFriday ? "hovered graph-data" : "graph-data"}
              onMouseEnter={toggleHoverFriday}
              onMouseLeave={toggleHoverFriday}
            ></div>
              <p className="day">fri</p>
            </div>
            <div>
              <div 
              className={hoveredSaturday ? "hovered graph-data" : "graph-data"}
              onMouseEnter={toggleHoverSaturday}
              onMouseLeave={toggleHoverSaturday}
            ></div>
              <p className="day">sat</p>
            </div>
            <div>
              <div 
              className={hoveredSunday ? "hovered graph-data" : "graph-data"}
              onMouseEnter={toggleHoverSunday}
              onMouseLeave={toggleHoverSunday}
            ></div>
              <p className="day">sun</p>
            </div>
          </div>
          <p className="totals-heading">Total this month</p>
          <div className="flex-container monthly-totals">
            <p>$478.33</p>
            <div>
              <p>+2.4%</p>
              <p>from last month</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
