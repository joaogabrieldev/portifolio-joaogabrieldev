/**
 * Transição compartilhada para `layoutId="global-header-logo"`.
 * Rigidez e amortecimento altos demais deixam o morph “travado”.
 * Aqui a spring fica um pouco mais solta e fluida, sem bounce exagerado.
 */
export const HEADER_LOGO_LAYOUT_TRANSITION = {
  type: "spring" as const,
  stiffness: 172,
  damping: 29,
  mass: 0.58,
};

/** Fade do shell do header (opacidade) — sem translate, para não brigar com o layoutId. */
export const HEADER_SHELL_OPACITY_TRANSITION = {
  duration: 0.22,
  ease: [0.22, 1, 0.36, 1] as const,
};
