import { useThemeStore } from "@/stores";
import { Loader, StyledSkeleton } from "./style";

interface ISkeleton {
  height?: string;
  width?: string;
  radius?: string;
}

const Skeleton = ({ height = "100%", width = "100%", radius }: ISkeleton) => {
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <StyledSkeleton
      $height={height}
      $width={width}
      $radius={radius}
      $darkMode={isDarkMode}
    >
      <Loader $darkMode={isDarkMode} />
    </StyledSkeleton>
  );
};

export default Skeleton;
