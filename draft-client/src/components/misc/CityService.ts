import { ref } from 'vue';
import NFLTeam from './NFLTeam';
interface StadiumInfo {
    city: string;
    state: string;
    stadium: string;
  }
export class CityService {
    
    teamCities: StadiumInfo[];
    constructor() { 
        this.teamCities = [
            new NFLTeam('Arlington','TX','AT&T'),
            new NFLTeam('Atlanta','GA',''),
            new NFLTeam('Baltimore','MD',''),
            new NFLTeam('Atlanta','GA',''),
            new NFLTeam('Charlotte','NC',''),
            new NFLTeam('Chicago', 'IL', 'Soldier Field'),
            new NFLTeam('Cincinnati','OH',''),
            new NFLTeam('Cleveland','OH',''),
            new NFLTeam('Denver','CO',''),
            new NFLTeam('Detroit','MI',''),
            new NFLTeam('East Rutherford','NJ',''),
            new NFLTeam('Foxborough','MA',''),
            new NFLTeam('Glendale','AZ',''),
            new NFLTeam('Green Bay','WI',''),
            new NFLTeam('Houston','TX',''),
            new NFLTeam('Indianapolis','IN',''),
            new NFLTeam('Inglewood','CA',''),
            new NFLTeam('Jacksonville','FL',''),
            new NFLTeam('Kansas City','MO',''),
            new NFLTeam('Landover','MD',''),
            new NFLTeam('Las Vegas','NV',''),
            new NFLTeam('Miami Gardens','FL',''),
            new NFLTeam('Minneapolis','MN',''),
            new NFLTeam('Nashville','TN',''),
            new NFLTeam('New Orleans','LA',''),
            new NFLTeam('Orchard Park','NY',''),
            new NFLTeam('Philadelphia','PA',''),
            new NFLTeam('Pittsburgh','PA',''),
            new NFLTeam('San Francisco','CA',''),
            new NFLTeam('Santa Clara','CA',''),
            new NFLTeam('Seattle','WA',''),
            new NFLTeam('Tampa','FL',''),
            new NFLTeam('Frankfurt','','Germany'),
            new NFLTeam('London','','United Kingdom'),
            new NFLTeam('Mexico City','','Mexico'),
            new NFLTeam('Munich','','Germany'),
            new NFLTeam('','',''),
        ];

        this.teamCities.sort((a, b) => a.city.localeCompare(b.city));
    }
    

    getCities() : NFLTeam [] {
        return this.teamCities;
    }
}