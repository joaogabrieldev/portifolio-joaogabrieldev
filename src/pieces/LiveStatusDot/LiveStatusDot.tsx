const LiveStatusDot = () => {
  return (
    <span className="relative flex size-2" aria-hidden>
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70 motion-reduce:animate-none" />
      <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
    </span>
  );
};

export default LiveStatusDot;
