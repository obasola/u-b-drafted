import { useScheduleStore } from "@/components/schedule/store/scheduleStore";
import { useTeamStore } from "@/components/team/store/teamStore";
import Schedule from "./interfaces/Schedule";
import ScheduleData from "./ScheduleData";
import { ref } from "vue";

export default class ScheduleImpl {
    teamStore = useTeamStore();
    scheduleStore = useScheduleStore();

    schedule = <Schedule> {
        id: 0,
        teamID: 0,
        opponentId: 0,
        scheduleWeek: 0,
        gameDate: new Date(),
        gameCity: '',
        gameStateProvince: '',
        gameCountry:'',
        gameLocation: '',
        opponentConference: '',
        opponentDivision: '',
        winLostFlag: '',
        homeOrAway: '',
    }
    //data = new ScheduleData{0,'',0,new Date(),'','','USA','','','','','',''};
    data = <ScheduleData>{
        id: 0 ,
        teamName: '' ,
        scheduleWeek:  0 ,
        gameDate:  new Date() ,
        gameCity:  '' ,
        gameStateProvince:  '' ,
        gameCountry:  'USA' ,
        gameLocation:  '' ,
        opponentName:  '', 
        opponentConference:  '' ,
        opponentDivision: '' ,
        wonLostFlag: '' ,
        homeOrAway:  '' ,
    };
        constructor(data: ScheduleData)  {
        
        this.data.id = data.id;
        this.data.teamName = data.teamName;
        this.data.scheduleWeek = data.scheduleWeek;
        this.data.gameDate = data.gameDate;
        this.data.gameCity = data.gameCity;
        this.data.gameCountry = data.gameCountry
        this.data.gameStateProvince = data.gameStateProvince
        this.data.gameLocation = data.gameLocation;
        this.data.opponentName = data.opponentName;
        this.data.opponentConference = data.opponentConference;
        this.data.opponentDivision = data.opponentDivision;
        this.data.wonLostFlag = data.wonLostFlag;
        this.data.homeOrAway = data.homeOrAway;
    }
    
    mapDomain2EntityObject() : Schedule {
        this.schedule.gameCity = this.data.gameCity;
        this.schedule.gameCountry = this.data.gameCountry;
        this.schedule.gameDate = this.data.gameDate;
        this.schedule.gameLocation = this.data.gameLocation;
        this.schedule.gameStateProvince = this.data.gameStateProvince;
        this.schedule.homeOrAway = this.data.homeOrAway;
        this.schedule.id = this.data.id;
        this.schedule.opponentConference = this.data.opponentConference;
        this.schedule.opponentDivision = this.data.opponentDivision;
        this.schedule.opponentId = this.findTeamByName(this.data.opponentName);
        this.schedule.scheduleWeek = this.data.scheduleWeek;
        this.schedule.teamID = this.findTeamByName(this.data.teamName);
        this.schedule.winLostFlag = this.data.wonLostFlag;

        return this.schedule;
    }

    findTeamByName(tName: string) : number {
        this.teamStore.findByName(tName);
        return this.teamStore.team.id;
    }
}
