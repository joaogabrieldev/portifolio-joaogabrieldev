import { urlGithub, urlLinkedin } from "@/utils/linksToGo";

function navigateSameTab(url: string): void {
  if (typeof window === "undefined") return;
  window.location.href = url;
}

export function openGithubTab(): void {
  navigateSameTab(urlGithub);
}

export function openLinkedinTab(): void {
  navigateSameTab(urlLinkedin);
}

export function openProjectsTab(): void {
  navigateSameTab("/projetos");
}
