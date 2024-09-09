function MouseTracker({ coords, updateCoordinates }) {
  return (
    <div
      className="absolute coordinates-effect flex-start"
      onMouseMove={updateCoordinates}
    >
      <p>Log: {Math.random() * 10000}</p>
      <p>Int: {Math.random() * 10000}</p>
    </div>
  );
}

export default MouseTracker;
