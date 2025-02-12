const Avatar = ({ initials, bgColor, textColor = "var(--primary)" }) => {
  return (
    <div
      className="avatar"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {initials}
    </div>
  );
};

export default Avatar;
