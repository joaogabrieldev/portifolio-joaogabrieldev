import "./GlowButton.css";

interface IGlowButtonProps {
  label: string;
}

const GlowButton = ({ label }: IGlowButtonProps) => {
  return <button className="glowButton">{label}</button>;
};

export default GlowButton;
