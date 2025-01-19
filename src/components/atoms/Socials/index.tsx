import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { useThemeStore } from "@/stores";

import { Tooltip } from "@/components/atoms";
import { StyledSocial, Wrapper } from "./style";

const Socials = () => {
  const { isDarkMode } = useThemeStore((state) => state);
  return (
    <Wrapper>
      <StyledSocial
        target="blank"
        rel="noopener noreferrer"
        href="https://github.com/michel-raupp"
        $darkMode={isDarkMode}
      >
        <IconBrandLinkedin size={24} />
        <Tooltip text="LinkedIn" isTooltipAbove parentSelector={StyledSocial} />
      </StyledSocial>
      <StyledSocial
        target="blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/michelraupp/"
        $darkMode={isDarkMode}
      >
        <IconBrandGithub size={24} />
        <Tooltip text="Github" isTooltipAbove parentSelector={StyledSocial} />
      </StyledSocial>
      <StyledSocial
        target="blank"
        rel="noopener noreferrer"
        href="mailto:michelraupp@outlook.com"
        $darkMode={isDarkMode}
      >
        <IconMail size={24} />
        <Tooltip text="Email" isTooltipAbove parentSelector={StyledSocial} />
      </StyledSocial>
    </Wrapper>
  );
};

export default Socials;
