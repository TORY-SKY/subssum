import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const usePreviousLocation = () => {
  const location = useLocation();
  const previousLocation = useRef<string | null>(null);
  useEffect(() => {
    previousLocation.current = location.pathname;
  }, [location.pathname]);
  return previousLocation.current;
};
export default usePreviousLocation;
