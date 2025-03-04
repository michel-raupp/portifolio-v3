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
  hideGithub?: boolean;
}

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/michelraupp/",
    label: "LinkedIn",
    icon: IconBrandLinkedin,
  },
  {
    href: "https://github.com/michel-raupp",
    label: "Github",
    icon: IconBrandGithub,
  },
  {
    href: "mailto:michelraupp@outlook.com",
    label: "Email",
    icon: IconMail,
  },
];

const Socials = ({ showText, hideGithub }: ISocials) => {
  const { isDarkMode } = useThemeStore((state) => state);

  return (
    <Wrapper>
      {socialLinks
        .filter(({ label }) => !(hideGithub && label === "Github"))
        .map(({ href, label, icon: Icon }) => (
          <StyledSocial
            key={href}
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            aria-label={label}
            $darkMode={isDarkMode}
            $showText={showText}
          >
            <Icon size={24} height={24} width={24} />
            {showText && <Text $darkMode={isDarkMode}>{label}</Text>}
            <Tooltip
              text={label}
              isTooltipAbove
              parentSelector={StyledSocial}
            />
          </StyledSocial>
        ))}
    </Wrapper>
  );
};

export default Socials;
