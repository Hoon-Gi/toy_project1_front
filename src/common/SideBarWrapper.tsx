import { StyledTitle } from "../css/titleStyke";
import { memo } from "react";

const SideBarWrapper = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <StyledTitle>
        <span>{title}</span>
      </StyledTitle>
      {children}
    </>
  );
};

export default memo(SideBarWrapper);
