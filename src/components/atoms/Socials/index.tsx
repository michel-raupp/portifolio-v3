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
      <StyledSocial href="#" $darkMode={isDarkMode}>
        <IconBrandLinkedin size={24} />
        <Tooltip
          text="LinkedIn"
          isTooltipAbove={false}
          parentSelector={StyledSocial}
        />
      </StyledSocial>
      <StyledSocial href="#" $darkMode={isDarkMode}>
        <IconBrandGithub size={24} />
      </StyledSocial>
      <StyledSocial href="#" $darkMode={isDarkMode}>
        <IconMail size={24} />
      </StyledSocial>
    </Wrapper>
  );
};

export default Socials;
