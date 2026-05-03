import "./HireScrollIcon.css";

const HireScrollIcon = () => {
  return (
    <div className="hire-scroll-icon">
      <svg
        className="hire-mouse-scroll-mouse"
        width={24}
        height={40}
        viewBox="0 0 24 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect
          x="1.25"
          y="1.25"
          width="21.5"
          height="37.5"
          rx="10.75"
          stroke="rgba(167,139,250,0.55)"
          strokeWidth="1.25"
          fill="none"
        />
        <rect
          x="10.25"
          y="6"
          width="3.5"
          height="7"
          rx="1.75"
          fill="none"
          stroke="rgba(167,139,250,0.7)"
          strokeWidth="1"
        />
        <circle
          className="hire-mouse-scroll-wheel-dot"
          cx="12"
          cy="8.5"
          r="1.1"
          fill="#a78bfa"
        />
      </svg>
      <svg
        className="hire-mouse-scroll-chevron"
        width={14}
        height={8}
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          className="hire-mouse-scroll-chevron-path"
          d="M1 1 L7 6 L13 1"
          stroke="rgba(167,139,250,0.7)"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default HireScrollIcon;
