import { useState, useEffect, FormEventHandler } from "react";
import client from "../common/Client";
import { StyledMainPage } from "../css/mainPage";

const InsertMemberInfo = () => {
    const [memberName, setMemberName] = useState("");
    const [memberNumber, setMemberNumber] = useState("");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMemberName(event.target.value);
    };

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMemberNumber(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        client
            .post(`/api/member/insert`, { memberName, memberNumber })
            .then((response) => {
                console.log(response);
                setMemberName("");
                setMemberNumber("");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <StyledMainPage>
            <form onSubmit={handleSubmit}>
                <h2>회원가입</h2>
                <div>
                    <label htmlFor="memberName">이름:</label>
                    <input
                        type="text"
                        id="memberName"
                        value={memberName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="memberNumber">번호:</label>
                    <input
                        type="text"
                        id="memberNumber"
                        value={memberNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <button type="submit">제출</button>
            </form>
        </StyledMainPage>
    );
};

export default InsertMemberInfo;