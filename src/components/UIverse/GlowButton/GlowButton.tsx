import "./GlowButton.css"

interface IGlowButtonProps {
    label: string
}

const GlowButton = ({label}: IGlowButtonProps) => {
  return (
    <button>
        {label}
    </button>
  )
}

export default GlowButton
