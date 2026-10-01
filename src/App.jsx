import { useState } from 'react';
import Counter from './Counter.jsx';
import Timer from './Timer.jsx';

// ?show=timer shows the timer demo; anything else shows the counter.
const show = new URLSearchParams(window.location.search).get('show');

export default function App() {
  const [timerOn, setTimerOn] = useState(true);

  if (show === 'timer') {
    return (
      <main>
        <label className="toggle">
          <input
            type="checkbox"
            checked={timerOn}
            onChange={(e) => setTimerOn(e.target.checked)}
          />
          Show timer
        </label>
        {timerOn && <Timer />}
      </main>
    );
  }

  return (
    <main>
      <Counter />
    </main>
  );
}
