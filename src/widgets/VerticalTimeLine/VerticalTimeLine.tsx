import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";

import "./VerticalTimeLine.css"
import { Check } from "lucide-react";
import { Phases } from "@/assets/phases";
import TimelineElement from './../../components/TimelineElement/TimelineElement';

interface ITimelineProps {
  phases: Phases[]
}

const TimeLine = ({phases}: ITimelineProps) => {
  return (
    <VerticalTimeline className="VerticalTimelineContainer">
        <VerticalTimelineElement iconStyle={{display: "none"}}></VerticalTimelineElement>
        {phases.map((item, index) => {
          return (
            <TimelineElement 
            key={index}
            icon={item.icon} 
            date={item.date} 
            title={item.title} 
            description={item.description} />
          )
        })}
    </VerticalTimeline>
  )
}

export default TimeLine