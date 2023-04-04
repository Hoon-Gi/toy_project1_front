import { StyledSideBar } from "../css/sideBar";
import { NavLink } from "react-router-dom";
import client from "../common/Client";
import { memo } from "react";
import usePathParams from "../common/usePathParams";
import SideBarWrapper from "../common/SideBarWrapper";


const SideBar = () => {
    const path: string = usePathParams();

    return (
        <StyledSideBar>
            <SideBarWrapper title="">
                <NavLink
                    to="/"
                    className={
                        path === "/" ? "nested-nav-link-active" : "nested-nav-link"
                    }
                >
                    지도로 보기
                </NavLink>
                <NavLink
                    to="/studyRoom/readAll"
                    className={
                        path === "/studyRoom/readAll" ? "nested-nav-link-active" : "nested-nav-link"
                    }
                >
                    독서실 목록
                </NavLink>
                <NavLink
                    to="/api/studyRoom/insert"
                    className={
                        path === "/api/studyRoom/insert" ? "nested-nav-link-active" : "nested-nav-link"
                    }
                >
                    독서실 등록
                </NavLink>

            </SideBarWrapper>
        </StyledSideBar>

    )
}

export default memo(SideBar);