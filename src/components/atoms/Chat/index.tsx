import { useThemeStore } from "@/stores/theme";

import { Text } from "@/components/atoms";

import { TAIL_DIRECTIONS, TTailDirections } from "./types";
import { Bubble, StyledChat, Tail } from "./style";
import { TEXT_HIERARCHIES, TEXT_SIZE } from "../Text/types";

interface IChat {
  title?: string;
  text: string;
  tailDirection: TTailDirections;
  hasHeading?: boolean;
}

const Chat = ({ tailDirection, hasHeading, title, text }: IChat) => {
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <StyledChat $darkMode={isDarkMode} tailDirection={tailDirection}>
      <Bubble $darkMode={isDarkMode} tailDirection={tailDirection}>
        {title && (
          <Text
            text={title}
            size={TEXT_SIZE.XXL}
            hierarchy={
              hasHeading
                ? TEXT_HIERARCHIES.HEADING_1
                : TEXT_HIERARCHIES.PARAGRAPH
            }
            bold
          />
        )}
        <Text
          text={text}
          size={TEXT_SIZE.BASE}
          hierarchy={TEXT_HIERARCHIES.PARAGRAPH}
        />
      </Bubble>

      {tailDirection === TAIL_DIRECTIONS.LEFT && (
        <Tail $darkMode={isDarkMode} tailDirection={tailDirection} />
      )}
      {tailDirection === TAIL_DIRECTIONS.RIGHT && (
        <Tail $darkMode={isDarkMode} tailDirection={tailDirection} />
      )}
    </StyledChat>
  );
};

export default Chat;
