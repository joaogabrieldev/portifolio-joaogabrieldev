import { urlGithub, urlLinkedin } from "@/utils/linksToGo";

const TAB_FEATURES = "noopener,noreferrer";

function openOrFocusNamedTab(url: string, tabName: string): Window | null {
  if (typeof window === "undefined") return null;
  return window.open(url, tabName, TAB_FEATURES);
}

export function openGithubTab(): Window | null {
  return openOrFocusNamedTab(urlGithub, "portfolio-github");
}

export function openLinkedinTab(): Window | null {
  return openOrFocusNamedTab(urlLinkedin, "portfolio-linkedin");
}

export function openProjectsTab(): Window | null {
  return openOrFocusNamedTab("/projetos", "portfolio-projetos");
}

