import { useState, useCallback, useEffect, FormEventHandler, Children } from "react";
import client from "../common/Client";
import { StyledMainPage } from "../css/mainPage";


const InsertStudyRoomInfo = () => {

    const [studyRoomName, setStudyRoomName] = useState("");
    const [studyRoomNumber, setStudyRoomNumber] = useState("");
    const [location, setLocation] = useState("");
    const [seatCount, setSeatCount] = useState(0);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStudyRoomName(event.target.value);
    };

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStudyRoomNumber(event.target.value);
    };

    const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
    };

    const handleSeatCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (!isNaN(value)) {
            setSeatCount(value);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        client
            .post(`/api/studyRoom/insert`, { studyRoomName, studyRoomNumber, location })
            .then((response) => {
                console.log(response);
                const id = Number(response.data);
                console.log(id);
                client.post(`/api/studyRoom/addSeats`, { studyRoomId: id, seatCount });
            })
            .then((response) => {
                console.log(response);
                setStudyRoomName("");
                setStudyRoomNumber("");
                setLocation("");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <StyledMainPage>
            <form onSubmit={handleSubmit}>
                <h2>독서실 등록</h2>
                <div>
                    <label htmlFor="studyRoomName">독서실명:</label>
                    <input
                        type="text"
                        id="studyRoomName"
                        value={studyRoomName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="studyRoomNumber">독서실 연락처:</label>
                    <input
                        type="text"
                        id="studyRoomNumber"
                        value={studyRoomNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <label htmlFor="location">독서실 위치:</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={handleLocationChange}
                    />
                </div>

                <div>
                    <label htmlFor="seatCount">추가할 좌석 개수:</label>
                    <input 
                        type="number"
                        id="seatCount"
                        value={seatCount}
                        onChange={handleSeatCountChange}
                     />
                </div>

                <button type="submit">등록</button>
            </form>
        </StyledMainPage>
    )

};

export default InsertStudyRoomInfo;