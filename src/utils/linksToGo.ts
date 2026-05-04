/**
 * Usar `NEXT_PUBLIC_*` para valores lidos em Client Components — evita mismatch
 * de hidratação (ex.: `mailto:undefined` no SSR vs e-mail no cliente).
 * Mantemos fallback aos nomes antigos + literais para ambientes sem .env.
 */
export const emailOutlook = "joaogrocha17@hotmail.com";

export const emailGmail = "joaogabrieldev.profissional@gmail.com";

/** Slug Cal.com (`username/event`) — embed no cliente precisa de `NEXT_PUBLIC_`. */

export const assunto = "Solicitação de Orçamento";
export const corpo =
  "Olá! Sou [SEU NOME], Acessei seu portfólio e gostaria de solicitar um orçamento.";

export const urlOutlook = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${emailOutlook}&subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

export const urlGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailGmail}&su=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

/** Abre o cliente de e-mail padrão do sistema (mailto). */
export const urlMailtoApp = `mailto:${emailGmail}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

export const urlWhatsapp =
  "https://wa.me/5561984473234?text=Ol%C3%A1!%20Acessei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20projeto.";
export const urlLinkedin = "https://www.linkedin.com/in/joaogabrielrocha/";
export const urlGithub = "https://github.com/joaogabrieldev";
