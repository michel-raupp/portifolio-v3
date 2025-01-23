import {
  IconBrandFigma,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconCode,
  IconDeviceMobileCode,
} from "@tabler/icons-react";

import { THEME_COLORS } from "@/constants";
import { getColor } from "@/helpers";

export const getSkillsData = (isDarkMode: boolean) => [
  {
    name: "React Native",
    icon: (
      <IconDeviceMobileCode
        size={24}
        color={getColor(THEME_COLORS.text, isDarkMode)}
      />
    ),
  },
  {
    name: "React.js",
    icon: (
      <IconBrandReact
        size={24}
        color={getColor(THEME_COLORS.text, isDarkMode)}
      />
    ),
  },
  {
    name: "Next.js",
    icon: (
      <IconBrandNextjs
        size={24}
        color={getColor(THEME_COLORS.text, isDarkMode)}
      />
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <IconBrandTailwind
        size={24}
        color={getColor(THEME_COLORS.text, isDarkMode)}
      />
    ),
  },
  {
    name: "Styled Components",
    icon: (
      <IconCode size={24} color={getColor(THEME_COLORS.text, isDarkMode)} />
    ),
  },
  {
    name: "Figma",
    icon: (
      <IconBrandFigma
        size={24}
        color={getColor(THEME_COLORS.text, isDarkMode)}
      />
    ),
  },
];
