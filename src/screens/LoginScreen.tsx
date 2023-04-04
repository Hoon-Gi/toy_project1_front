import { useState, useEffect } from "react";
import client from "../common/Client";
import { LoginData } from "../interface/LoginData";
import { Member } from "../interface/Member";
import { StyledLogin } from "../css/loginStyle";
import { NavLink } from "react-router-dom";
import usePathParams from "../common/usePathParams";

const LoginPage = () => {
    const path: string = usePathParams();

    const [loginData, setLoginData] = useState<LoginData>({ memberName: "", memberNumberSuffix: "" });
    const [error, setError] = useState("");
    const [memberId, setMemberId] = useState<number>();
    const [member, setMember] = useState<Member>();


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginData({ ...loginData, [name]: value });
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { memberName, memberNumberSuffix } = loginData;
        client
            .post(`/api/member/login`, { memberName, memberNumberSuffix })
            .then((response) => {
                setMemberId(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                setError("로그인에 실패하였습니다");
            });
    };


    useEffect(() => {
        if (memberId) {
            client
                .get(`/api/member/read/${memberId}`)
                .then((response) => {
                    setMember(response.data);
                })
                .catch((error) => {
                    setError("회원 정보를 불러오는데 실패하였습니다.");
                });
        }
    }, [memberId]);

    if (member) {
        return (
            <div>
                <StyledLogin>
                    <p>이름: {member.memberName}</p>
                    <p>전화번호: {member.memberNumber}</p>
                </StyledLogin>
            </div>
        )
    } else {
        return (
            <div>
                <StyledLogin>
                    {error && <p>{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="memberName"> 이름: </label>
                            <input type="text" name="memberName" value={loginData.memberName}
                                onChange={handleInputChange}></input>
                        </div>

                        <div>
                            <label htmlFor="memberNumberSuffix"> 휴대전화 마지막 4자리: </label>
                            <input type="text" name="memberNumberSuffix" value={loginData.memberNumberSuffix}
                                onChange={handleInputChange}></input>
                        </div>
                        <button type="submit"> Login </button>

                        <NavLink
                            to="/api/member/insert"
                            className={
                                path === "/api/member/insert" ? "nested-nav-link-active" : "nested-nav-link"
                            }
                        >
                            회원 가입
                        </NavLink>
                    </form>
                </StyledLogin>
            </div>
        )
    }
}

export default LoginPage;