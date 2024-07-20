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
        constructor(domainData: ScheduleData)  {
        
        this.data.id = domainData.id;
        this.data.teamName = domainData.teamName;
        this.data.scheduleWeek = domainData.scheduleWeek;
        this.data.gameDate = domainData.gameDate;
        this.data.gameCity = domainData.gameCity;
        this.data.gameCountry = domainData.gameCountry
        this.data.gameStateProvince = domainData.gameStateProvince
        this.data.gameLocation = domainData.gameLocation;
        this.data.opponentName = domainData.opponentName;
        this.data.opponentConference = domainData.opponentConference;
        this.data.opponentDivision = domainData.opponentDivision;
        this.data.wonLostFlag = domainData.wonLostFlag;
        this.data.homeOrAway = domainData.homeOrAway;
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
