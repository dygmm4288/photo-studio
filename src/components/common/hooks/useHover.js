import { useState } from "react";

const useHover = ({ onHover = () => {}, onLeave = () => {} } = {}) => {
  const [hover, setHover] = useState(false);
  const hoverHandlers = {
    onMouseEnter: (e) => {
      setHover(true);
      onHover(e);
    },
    onMouseLeave: (e) => {
      setHover(false);
      onLeave(e);
    },
    onTouchStart: (e) => {
      setHover(true);
      onHover(e);
    },
    onTouchCancel: (e) => {
      setHover(false);
      onLeave(e);
    },
  };
  return { hover, hoverHandlers: hoverHandlers };
};

export default useHover;
