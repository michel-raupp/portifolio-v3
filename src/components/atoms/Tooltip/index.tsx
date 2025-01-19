import { useThemeStore } from "@/stores";

import { TEXT_SIZE } from "@/components/atoms/Text/types";
import { Text } from "@/components/atoms";

import { StyledTooltip, Tail } from "./style";

interface ITooltip {
  text: string;
  isTooltipAbove?: boolean;
  parentSelector: string;
}

const Tooltip = ({ text, isTooltipAbove, parentSelector }: ITooltip) => {
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <StyledTooltip
      $darkMode={isDarkMode}
      isTooltipAbove={isTooltipAbove}
      parentSelector={parentSelector}
      aria-hidden
    >
      <Tail $darkMode={isDarkMode} />
      <Text text={text} size={TEXT_SIZE.S} />
    </StyledTooltip>
  );
};

export default Tooltip;
