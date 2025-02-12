function Icon({ label, active, children }) {
  return (
    <div className={active ? "container active" : "container"}>
      {children}
      {label && <div className="icon-label">{label}</div>}
    </div>
  );
}

export default Icon;
