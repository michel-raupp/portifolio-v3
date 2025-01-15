import { useThemeStore } from "@/stores/theme";
import { Bubble, StyledChat } from "./style";
import { Text } from "@/components/atoms";
import { THEME_COLORS } from "@/constants";

export const TAIL_DIRECTIONS = {
  LEFT: "left",
  RIGHT: "right",
} as const;

export type TTailDirections =
  (typeof TAIL_DIRECTIONS)[keyof typeof TAIL_DIRECTIONS];

interface IChat {
  title?: string;
  text: string;
  tailDirection?: TTailDirections;
}

const Chat = ({ title, text, tailDirection }: IChat) => {
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <StyledChat $darkMode={isDarkMode}>
      <Bubble $darkMode={isDarkMode}>
        {title && <h3>{title}</h3>}
        <Text color={THEME_COLORS.text} text={text} />
        {tailDirection === TAIL_DIRECTIONS.LEFT && <span>&lt;</span>}
        {tailDirection === TAIL_DIRECTIONS.RIGHT && <span>&gt;</span>}
      </Bubble>
    </StyledChat>
  );
};

export default Chat;
