import {Seats} from './Seats';

export interface StudyRoom {
    studyRoomId: number;
    studyRoomName: string;
    studyRoomNumber: string;
    location: string;
    seatsList: Seats[];
}