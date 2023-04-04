import { useEffect, useState } from "react";
import client from "../common/Client";
import { StudyRoom } from "../interface/StudyRoom";
import "../css/StudyRoom.css";
import { StyledMainPage } from "../css/mainPage";

const AllStudyRoomList = () => {
  const [studyRoomList, setStudyRoomList] = useState<StudyRoom[]>([]);

  useEffect(() => {
    client
      .get("/api/studyRoom/readAll")
      .then((response) => {
        setStudyRoomList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <StyledMainPage>
      <div>
        <h2>All Study Room List</h2>
        <ul className="study-room-list">
          {studyRoomList.map((studyRoom) => (
            <li key={studyRoom.studyRoomId}>
              {studyRoom.studyRoomName} - {studyRoom.location}
            </li>
          ))}
        </ul>
      </div>
    </StyledMainPage>
  );
};

export default AllStudyRoomList;