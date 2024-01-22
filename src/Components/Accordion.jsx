import { useState } from "react";
import Panel from "./Panel";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Panel
        title={"Free Course"}
        onActive={() => setActiveIndex(0)}
        isActive={activeIndex === 0}
      />
      <Panel
        title={"Paid Course"}
        onActive={() => setActiveIndex(1)}
        isActive={activeIndex === 1}
      />
    </div>
  );
};

export default Accordion;
