import { useState, useEffect } from "react";
import { LightTheme } from "../../theme/theme";

interface Dimensions {
  height: number;
  width: number;
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions(): Dimensions {
  const [windowDimensions, setWindowDimensions] = useState<
    Dimensions | undefined
  >(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    setWindowDimensions(getWindowDimensions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    windowDimensions || {
      width: LightTheme.sizes.screen.l,
      height: 100,
    }
  );
}
