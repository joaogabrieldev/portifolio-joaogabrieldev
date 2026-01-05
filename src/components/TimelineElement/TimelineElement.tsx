import { JSX } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface ITimelineElementProps {
  icon: JSX.Element;
  date: string;
  title: string;
  description: string;
}

const TimelineElement = ({
  icon,
  date,
  title,
  description,
}: ITimelineElementProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        backgroundColor: "rgba(124, 122, 191, 0.6)",
        color: "#ffffff",
        boxShadow:
          "rgba(117, 117, 117, 0.25) 0px 50px 100px -20px, rgba(126, 126, 126, 0.3) 0px 30px 60px -30px",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderRadius: "12px",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(124, 122, 191, 0.6)" }}
      icon={icon}
      iconStyle={{
        backgroundColor: "rgb(124, 122, 191)",
        boxShadow: "0 4px 30px rgba(85, 62, 130, 0.6)",
        color: "rgba(190, 190, 190)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      iconClassName=""
    >
      <h2
        style={{
          color: "white",
          fontWeight: "500",
          textAlign: "center",
          fontSize: "26px",
          marginBottom: "10px",
          userSelect: "none",
        }}
      >
        {date}
      </h2>
      <h3
        style={{
          color: "white",
          fontWeight: "500",
          textAlign: "center",
          fontSize: "20px",
          marginTop: "-16px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          textAlign: "center",
          marginTop: "5px",
          fontSize: "16px",
        }}
      >
        {description}
      </p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
