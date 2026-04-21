"use client";

import { useEffect, useState } from "react";

/**
 * Retorna `true` enquanto a secção `#processos` (timeline pinada) estiver
 * ocupando a zona central do viewport — sinal para o header fixo assumir
 * um estilo transparente, sem backdrop/blur, e não competir visualmente
 * com o conteúdo pinado.
 *
 * A deteção usa `IntersectionObserver` com uma "deadzone" vertical de ~30%
 * em cima e em baixo, de forma a só ativar quando a secção está de facto
 * a dominar o viewport (típico quando o pin está ativo).
 */
export function useProcessosSectionForHeader(): boolean {
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const el = document.getElementById("processos");
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setIsInside(entry.isIntersecting);
        }
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return isInside;
}
