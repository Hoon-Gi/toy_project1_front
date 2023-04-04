import client from "../common/Client";
import { StudyRoom } from "../interface/StudyRoom";
import { StyledMainPage } from "../css/mainPage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudyRoomInfo = () => {
    const [studyRoom, setStudyRoom] = useState<StudyRoom | null>(null);
    const { studyRoomId } = useParams<{ studyRoomId: string }>();
    useEffect(() => {
        client
            .get(`/api/studyRoom/read/${studyRoomId}`)
            .then((response) => {
                setStudyRoom(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [studyRoomId]
    );

    return (
        <StyledMainPage>
            <div>
                <h2>{studyRoom?.studyRoomName}</h2>
                <p>{studyRoom?.studyRoomNumber}</p>
                <p>{studyRoom?.location}</p>

            </div>
        </StyledMainPage>
    )

}

export default StudyRoomInfo;