import { useState } from "react";
import axios from "axios";
import { StudyRoom } from "../interface/StudyRoom";

const StudyRoomForm = () => {
  const [studyRoom, setStudyRoom] = useState<StudyRoom>({
    studyRoomId: 0,
    studyRoomName: "",
    studyRoomNumber: "",
    location: "",
    seatsList: [],
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setStudyRoom((prevStudyRoom) => ({
      ...prevStudyRoom,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await axios.post("/api/studyRoom/update", studyRoom);
      console.log(res.data); // 결과 확인을 위해 콘솔에 출력
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="studyRoomName">Study Room Name:</label>
        <input
          type="text"
          id="studyRoomName"
          name="studyRoomName"
          value={studyRoom.studyRoomName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="studyRoomNumber">Study Room Number:</label>
        <input
          type="text"
          id="studyRoomNumber"
          name="studyRoomNumber"
          value={studyRoom.studyRoomNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={studyRoom.location}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update Study Room</button>
    </form>
  );
};

export default StudyRoomForm;