import { ReactNode } from "react";
import { THEME_COLORS } from "@/constants";

import { TEXT_HIERARCHIES } from "@/components/atoms/Text/types";
import { Text } from "@/components/atoms";

import { Col, List, Wrapper } from "./style";

interface ISection {
  title: string;
  description: string;
  isHorizontalList?: boolean;
  children: ReactNode;
}

const Section = ({
  title,
  description,
  isHorizontalList,
  children,
}: ISection) => {
  return (
    <Wrapper>
      <Col>
        <Text
          hierarchy={TEXT_HIERARCHIES.HEADING_2}
          text={title}
          color={THEME_COLORS.text}
        />
        <Text text={description} color={THEME_COLORS.text} />
      </Col>
      <List $isHorizontalList={isHorizontalList}>{children}</List>
    </Wrapper>
  );
};

export default Section;
