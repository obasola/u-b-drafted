
export default class ScheduleData {
    id = 0 ;
    teamName = '' ;
    scheduleWeek =  0 ;
    gameDate =  new Date() ;
    gameCity =  '' ;
    gameStateProvince =  '' ;
    gameCountry =  'USA' ;
    gameLocation =  '' ;
    opponentName =  '' 
    opponentConference =  '' ;
    opponentDivision =  '' ;
    wonLostFlag =  '' ;
    homeOrAway =  '' ;

    constructor(id: number, teamName: string, week: number, gameDate: Date, gameCity: string,
        state: string, country: string, stadium: string, oppName: string, oppConference: string,
        oppDivision: string, wonLostFlag: string, homeAwayFlag: string)  {
        
        this.id = id;
        this.teamName = teamName;
        this.scheduleWeek = week;
        this.gameDate = gameDate;
        this.gameCity = gameCity;
        this.gameCountry = country;
        this.gameStateProvince = state;
        this.gameLocation = stadium;
        this.opponentName = oppName;
        this.opponentConference = oppConference;
        this.opponentDivision = oppDivision;
        this.wonLostFlag = wonLostFlag;
        this.homeOrAway = homeAwayFlag;
    }
}