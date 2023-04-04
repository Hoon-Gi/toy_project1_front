import styled from "styled-components";

export const StyledSideBar = styled.section`
  position: fixed;
  width: 200px;
  height: calc(100vh - 120px);
  top: 120px;
  background-color: ${(props) => props.theme.white};
  border-right: 2px solid ${(props) => props.theme.gray};
  display: flex;
  flex-direction: column;

  .nav-link {
    width: 100%;
    height: 52px;
    padding: 0px 0px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: center;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      background-color: ${(props) => props.theme.lightMainColor};
    }
  }

  .nav-link-active {
    cursor: pointer;
    padding: 0px 0px;
    width: 100%;
    height: 52px;
    color: ${(props) => props.theme.black};
    background-color: ${(props) => props.theme.lightMainColor};
    font-weight: bold;
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: center;
  }

  .nested-nav-link {
    cursor: pointer;
    padding: 0px 0px;
    width: 100%;
    height: 52px;
    color: ${(props) => props.theme.black};
    background-color: ${(props) => props.theme.white};
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: center;
    &:hover {
      background-color: ${(props) => props.theme.lightMainColor};
    }
  }

  .nested-nav-link-active {
    cursor: pointer;
    padding: 0px 0px;
    width: 100%;
    height: 52px;
    color: ${(props) => props.theme.black};
    background-color: ${(props) => props.theme.lightMainColor};
    font-weight: bold;
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: center;
  }
`;
