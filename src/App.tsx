import LoginPage from './screens/LoginScreen';
import { StyledHeader } from './css/header';
import SideBar from './components/SideBar';
import AllStudyRoomList from './components/GetAllStudyRoomLists';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import InsertMemberInfo from './components/InsertMemberInfo';
import InsertStudyRoomInfo from './components/InsertStudyRoomInfo';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <StyledHeader>
            <LoginPage />
          </StyledHeader>
        </div>

        <div>
          <SideBar />

        </div>
        <div>
          <Routes>
            <Route path="/" element={<InsertMemberInfo />} />
            <Route path="/studyRoom/readAll" element={<AllStudyRoomList />} />
            <Route path="/api/member/insert" element={<InsertMemberInfo/>}/>
            <Route path="/api/studyRoom/insert" element={<InsertStudyRoomInfo/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
};


export default App;