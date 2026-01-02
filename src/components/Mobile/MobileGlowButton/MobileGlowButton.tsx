import "./MobileGlowButton.css";

interface IMobileGlowButtonProps {
  label: string;
}

const MobileGlowButton = ({ label }: IMobileGlowButtonProps) => {
  return <button className="mobileGlowButton">{label}</button>;
};

export default MobileGlowButton;
