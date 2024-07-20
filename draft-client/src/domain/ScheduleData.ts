
export default class ScheduleData {
    id: number = 0;
    teamName: string = '' ;
    scheduleWeek: number =  0 ;
    gameDate: Date =  new Date() ;
    gameCity: string =  '' ;
    gameStateProvince: string =  '' ;
    gameCountry: string =  'USA' ;
    gameLocation: string =  '' ;
    opponentName: string =  '' 
    opponentConference: string =  '' ;
    opponentDivision: string =  '' ;
    wonLostFlag: string =  '' ;
    homeOrAway: string =  '' ;
}