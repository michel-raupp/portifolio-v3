import { useThemeStore } from "@/stores/theme";

import { Text } from "@/components/atoms";

import { TAIL_DIRECTIONS, TTailDirections } from "./types";
import { Bubble, StyledChat, Tail } from "./style";
import { TEXT_HIERARCHIES, TEXT_SIZE } from "../Text/types";
import { THEME_COLORS } from "@/constants";

interface IChat {
  title?: string;
  text: string;
  direction: TTailDirections;
}

const Chat = ({ direction, title, text }: IChat) => {
  const { isDarkMode } = useThemeStore((state) => state);
  return (
    <StyledChat $darkMode={isDarkMode} direction={direction}>
      <Bubble $darkMode={isDarkMode} direction={direction}>
        {title && (
          <Text text={title} hierarchy={TEXT_HIERARCHIES.HEADING_1} bold />
        )}
        <Text
          text={text}
          size={TEXT_SIZE.BASE}
          hierarchy={TEXT_HIERARCHIES.PARAGRAPH}
          color={THEME_COLORS.lightText}
        />
      </Bubble>

      {direction === TAIL_DIRECTIONS.LEFT && (
        <Tail $darkMode={isDarkMode} direction={direction} />
      )}
      {direction === TAIL_DIRECTIONS.RIGHT && (
        <Tail $darkMode={isDarkMode} direction={direction} />
      )}
    </StyledChat>
  );
};

export default Chat;
