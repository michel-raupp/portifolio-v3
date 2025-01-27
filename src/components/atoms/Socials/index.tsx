import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { useThemeStore } from "@/stores";

import { Tooltip } from "@/components/atoms";
import { StyledSocial, Wrapper, Text } from "./style";

interface ISocials {
  showText?: boolean;
}

const Socials = ({ showText }: ISocials) => {
  const { isDarkMode } = useThemeStore((state) => state);
  return (
    <Wrapper>
      <StyledSocial
        target="blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/michelraupp/"
        aria-label="LinkedIn"
        $darkMode={isDarkMode}
        showText={showText}
      >
        <IconBrandLinkedin size={24} />
        {showText && <Text $darkMode={isDarkMode}>Linkedin</Text>}
        <Tooltip text="LinkedIn" isTooltipAbove parentSelector={StyledSocial} />
      </StyledSocial>
      <StyledSocial
        target="blank"
        rel="noopener noreferrer"
        href="https://github.com/michel-raupp"
        aria-label="Github"
        $darkMode={isDarkMode}
        showText={showText}
      >
        <IconBrandGithub size={24} />
        {showText && <Text $darkMode={isDarkMode}>Github</Text>}
        <Tooltip text="Github" isTooltipAbove parentSelector={StyledSocial} />
      </StyledSocial>
      <StyledSocial
        target="blank"
        rel="noopener noreferrer"
        href="mailto:michelraupp@outlook.com"
        aria-label="Email"
        $darkMode={isDarkMode}
        showText={showText}
      >
        <IconMail size={24} />
        {showText && (
          <Text $darkMode={isDarkMode}>michelraupp@outlook.com</Text>
        )}
        <Tooltip text="Email" isTooltipAbove parentSelector={StyledSocial} />
      </StyledSocial>
    </Wrapper>
  );
};

export default Socials;
