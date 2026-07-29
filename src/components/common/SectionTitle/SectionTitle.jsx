import "./SectionTitle.scss";

function SectionTitle({ subtitle, title, children }) {
  return (
    <div className="section-title">
      <div className="section-title__subtitle">
        <span className="indicator"></span>
        <h4>{subtitle}</h4>
      </div>

      <div className="section-title__header">
        <h2>{title}</h2>

        {children}
      </div>
    </div>
  );
}

export default SectionTitle;