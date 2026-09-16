import "./Countdown.scss";

function Countdown() {
  return (
    <div className="countdown">

      <div className="time-box">
        <small>Days</small>
        <h3>03</h3>
      </div>

      <span>:</span>

      <div className="time-box">
        <small>Hours</small>
        <h3>23</h3>
      </div>

      <span>:</span>

      <div className="time-box">
        <small>Minutes</small>
        <h3>19</h3>
      </div>

      <span>:</span>

      <div className="time-box">
        <small>Seconds</small>
        <h3>56</h3>
      </div>

    </div>
  );
}

export default Countdown;