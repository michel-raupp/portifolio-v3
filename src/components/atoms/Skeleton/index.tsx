import { useThemeStore } from "@/stores";
import { Loader, StyledSkeleton } from "./style";

interface ISkeleton {
  height?: string;
  width?: string;
  isRounded?: boolean;
}

const Skeleton = ({
  height = "100%",
  width = "100%",
  isRounded,
}: ISkeleton) => {
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <StyledSkeleton
      $height={height}
      $width={width}
      $isRounded={isRounded}
      $darkMode={isDarkMode}
    >
      <Loader $darkMode={isDarkMode} />
    </StyledSkeleton>
  );
};

export default Skeleton;
