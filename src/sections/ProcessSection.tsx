"use client";

import ProcessPinnedTimeline from "@/components/ProcessPinnedTimeline/ProcessPinnedTimeline";
import { Code2, PenTool, Rocket, Target, type LucideIcon } from "lucide-react";

/** Lucide por etapa (`processSteps.ts`): briefing, UX/UI, dev, go-live. */
const PROCESS_STEP_ICONS: Record<string, LucideIcon> = {
  briefing: Target,
  "ux-ui": PenTool,
  dev: Code2,
  "qa-launch": Rocket,
};

export default function ProcessSection() {
  return <ProcessPinnedTimeline stepIcons={PROCESS_STEP_ICONS} />;
}
