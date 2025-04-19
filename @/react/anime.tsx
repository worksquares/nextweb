import React, { forwardRef, memo, useRef } from "react";
import style from "./AnimatedBeamMultipleOutputDemo.module.css";
import { AnimatedBeam } from "../components/magicui/animated-beam";

const Block = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; title: string }
>(({ className, children, title }, ref) => {
  return (
    <div ref={ref} className={`${style.block} ${className}`}>
      {children}
      <div className={style.blockTitle}>{title}</div>
    </div>
  );
});

Block.displayName = "Block";

const AnimatedBeamMultipleOutputDemo = ({
  className,
}: {
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const sqlQueryRef = useRef<HTMLDivElement>(null!);
  const ifConditionRef = useRef<HTMLDivElement>(null!);
  const trueBlockRef = useRef<HTMLDivElement>(null!);
  const falseBlockRef = useRef<HTMLDivElement>(null!);

  return (
    <div ref={containerRef} className={`${style.container} ${className}`}>
      <div className={style.content}>
        <Block ref={sqlQueryRef} title="Scheduled">
          <Icons.scheduled />
        </Block>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={sqlQueryRef}
          toRef={ifConditionRef}
          curvature={-50}
          endYOffset={-5}
          startYOffset={12}
        />

        <Block ref={ifConditionRef} title="Payment">
          <Icons.payment />
        </Block>

        <div className={style.ifConditionWrapper}>
          <div className={style.trueCondition}>
            <Block ref={trueBlockRef} title="Received">
              <Icons.Received />
            </Block>
          </div>
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={ifConditionRef}
            toRef={trueBlockRef}
            endYOffset={-12}
            startYOffset={12}
          />

          <div className={style.falseCondition}>
            <Block ref={falseBlockRef} title="Not Received">
              <Icons.NotReceived />
            </Block>
          </div>

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={ifConditionRef}
            toRef={falseBlockRef}
            endYOffset={-12}
            startYOffset={12}
          />
        </div>
      </div>
    </div>
  );
};

const Icons = {
  Received: () => (
    <svg
      width={20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m3.571 8.47-4.081 4.08c-.204.102-.306.204-.51.204a.78.78 0 0 1-.51-.204l-2.041-2.04a.8.8 0 0 1 0-1.123.8.8 0 0 1 1.122 0l1.53 1.53 3.572-3.571a.8.8 0 0 1 1.122 0c.103.408.103.816-.204 1.122"
        fill="#4db643"
      />
    </svg>
  ),
  scheduled: () => (
    <svg width={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <g fill="none">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <path
          d="M16 3a1 1 0 0 1 1 1v1h2a2 2 0 0 1 1.995 1.85L21 7v12a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V7a2 2 0 0 1 1.85-1.995L5 5h2V4a1 1 0 0 1 2 0v1h6V4a1 1 0 0 1 1-1m-1.176 6.379-4.242 4.242-1.415-1.414a1 1 0 0 0-1.414 1.414l2.114 2.115a1.01 1.01 0 0 0 1.429 0l4.942-4.943a1 1 0 1 0-1.414-1.414"
          fill="#09244B"
        />
      </g>
    </svg>
  ),
  payment: () => (
    <svg
      width={18}
      fill="#68873a"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45.958 45.958"
    >
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.979 0C10.287 0 0 10.288 0 22.979s10.287 22.979 22.979 22.979 22.979-10.289 22.979-22.979S35.67 0 22.979 0m1.391 33.215v2.66c0 .415-.323.717-.739.717h-1.773c-.416 0-.751-.302-.751-.717v-2.426c-1.632-.074-3.278-.422-4.524-.896a1.42 1.42 0 0 1-.872-1.679L16 29.748a1.42 1.42 0 0 1 1.89-.972c1.187.459 2.589.793 4.086.793 1.906 0 3.211-.736 3.211-2.074 0-1.271-1.07-2.074-3.546-2.911-3.579-1.204-6.03-2.876-6.03-6.121 0-2.943 2.083-5.251 5.644-5.954v-2.426c0-.415.355-.787.771-.787h1.773c.416 0 .721.372.721.787v2.191c1.557.067 2.681.298 3.621.604.711.232 1.131.977.944 1.703l-.254 1.008a1.42 1.42 0 0 1-1.836.991 10.2 10.2 0 0 0-3.38-.559c-2.174 0-2.877.937-2.877 1.874 0 1.104 1.171 1.806 4.014 2.877 3.98 1.405 5.579 3.245 5.579 6.254-.001 2.977-2.104 5.521-5.961 6.189" />
    </svg>
  ),
  NotReceived: () => (
    <svg
      width={20}
      viewBox="-1.26 -1.26 16.52 16.52"
      xmlns="http://www.w3.org/2000/svg"
      fill="#a01c1c"
      stroke="#a01c1c"
    >
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <g fillRule="evenodd">
        <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z" />
        <path d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z" fill="#FFF" />
        <path d="M7 5.969 5.599 4.568a.29.29 0 0 0-.413.004l-.614.614a.294.294 0 0 0-.004.413L5.968 7l-1.4 1.401a.29.29 0 0 0 .004.413l.614.614c.113.114.3.117.413.004L7 8.032l1.401 1.4a.29.29 0 0 0 .413-.004l.614-.614a.294.294 0 0 0 .004-.413L8.032 7l1.4-1.401a.29.29 0 0 0-.004-.413l-.614-.614a.294.294 0 0 0-.413-.004L7 5.968z" />
      </g>
    </svg>
  ),
};

export default memo(AnimatedBeamMultipleOutputDemo);
