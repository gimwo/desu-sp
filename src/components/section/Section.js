function Section({ type, text, headText, color, name = "some-section" }) {
  return (
    <div
      id={name}
      className="section-container"
      style={{
        flexDirection: type === "2" ? "row-reverse" : "",
        backgroundColor: type === "2" ? "#0C191D" : "",
      }}
    >
      <div className="section-image"></div>
      <div className="section-text">
        <div id="head-text">{headText}</div>
        <div id="main-text">{text}</div>
      </div>
    </div>
  );
}

export default Section;
