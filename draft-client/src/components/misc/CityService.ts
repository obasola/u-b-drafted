import { ref } from 'vue';
import NFLTeam from './TeamStadium';
interface StadiumInfo {
  id: number;
  name: string;
  city: string;
  state: string;
  conference: string;
  division: string;
  stadium: string;
}
export class CityService {
  teamCities: StadiumInfo[];
  constructor() {
    this.teamCities = [
      new NFLTeam(
        0,
        'Arizona Cardinals',
        'Glendale',
        'AZ',
        'NFC',
        'NFC West',
        'State Farm Stadium'
      ),
      new NFLTeam(
        1,
        'Atlanta Falcons',
        'Atlanta',
        'GA',
        'NFC',
        'NFC South',
        'Mercedes-Benz Stadium'
      ),
      new NFLTeam(
        2,
        'Baltimore Ravens',
        'Baltimore',
        'MD',
        'AFC',
        'AFC North',
        'M&T Bank Stadium'
      ),
      new NFLTeam(
        3,
        'Buffalo Bills',
        'Orchard Park',
        'NY',
        'AFC',
        'AFC East',
        'Highmark Stadium'
      ),
      new NFLTeam(
        4,
        'Carolina Panthers',
        'Charlotte',
        'NC',
        'NFC',
        'NFC South',
        'Bank of America Stadium'
      ),
      new NFLTeam(
        5,
        'Chicago Bears',
        'Chicago',
        'IL',
        'NFC',
        'NFC North',
        'Soldier Field'
      ),
      new NFLTeam(
        6,
        'Cincinnati Bengals',
        'Cincinnati',
        'OH',
        'AFC',
        'AFC North',
        'Paycor Stadium'
      ),
      new NFLTeam(
        7,
        'Cleveland Browns',
        'Cleveland',
        'OH',
        'AFC',
        'AFC North',
        'Cleveland Browns Stadium'
      ),
      new NFLTeam(
        8,
        'Dallas Cowboys',
        'Arlington',
        'TX',
        'NFC',
        'NFC East',
        'AT&T Stadium'
      ),
      new NFLTeam(
        9,
        'Denver Broncos',
        'Denver',
        'CO',
        'AFC',
        'AFC West',
        'Empower Field at Mile High'
      ),
      new NFLTeam(
        10,
        'Detroit Lions',
        'Detroit',
        'MI',
        'NFC',
        'NFC North',
        'Ford Field'
      ),
      new NFLTeam(
        11,
        'Green Bay Packers',
        'Green Bay',
        'WI',
        'NFC',
        'NFC North',
        'Lambeau Field'
      ),
      new NFLTeam(
        12,
        'Houston Texans',
        'Houston',
        'TX',
        'AFC',
        'AFC South',
        'NRG Stadium'
      ),
      new NFLTeam(
        13,
        'Indianapolis Colts',
        'Indianapolis',
        'IN',
        'AFC',
        'AFC South',
        'Lucas Oil Stadium'
      ),
      new NFLTeam(
        14,
        'Jacksonville Jaguars',
        'Jacksonville',
        'FL',
        'AFC',
        'AFC South',
        'TIAA Bank Field'
      ),
      new NFLTeam(
        15,
        'Kansas City Chiefs',
        'Kansas City',
        'MO',
        'AFC',
        'AFC West',
        'GEHA Field at Arrowhead Stadium'
      ),
      new NFLTeam(
        16,
        'Las Vegas Raiders',
        'Paradise',
        'NV',
        'AFC',
        'AFC West',
        'Allegiant Stadium'
      ),
      new NFLTeam(
        17,
        'Los Angeles Chargers',
        'Inglewood',
        'CA',
        'AFC',
        'AFC West',
        'SoFi Stadium'
      ),
      new NFLTeam(
        18,
        'Los Angeles Rams',
        'Inglewood',
        'CA',
        'NFC',
        'NFC West',
        'SoFi Stadium'
      ),
      new NFLTeam(
        19,
        'Miami Dolphins',
        'Miami Gardens',
        'FL',
        'AFC',
        'AFC East',
        'Hard Rock Stadium'
      ),
      new NFLTeam(
        20,
        'Minnesota Vikings',
        'Minneapolis',
        'MN',
        'NFC',
        'NFC North',
        'U.S. Bank Stadium'
      ),
      new NFLTeam(
        21,
        'New England Patriots',
        'Foxborough',
        'MA',
        'AFC',
        'AFC East',
        'Gillette Stadium'
      ),
      new NFLTeam(
        22,
        'New Orleans Saints',
        'New Orleans',
        'LA',
        'NFC',
        'NFC South',
        'Caesars Superdome'
      ),
      new NFLTeam(
        23,
        'New York Giants',
        'East Rutherford',
        'NJ',
        'NFC',
        'NFC East',
        'MetLife Stadium'
      ),
      new NFLTeam(
        24,
        'New York Jets',
        'East Rutherford',
        'NJ',
        'AFC',
        'AFC East',
        'MetLife Stadium'
      ),
      new NFLTeam(
        25,
        'Philadelphia Eagles',
        'Philadelphia',
        'PA',
        'NFC',
        'NFC East',
        'Lincoln Financial Field'
      ),
      new NFLTeam(
        26,
        'Pittsburgh Steelers',
        'Pittsburgh',
        'PA',
        'AFC',
        'AFC North',
        'Acrisure Stadium'
      ),
      new NFLTeam(
        27,
        'San Francisco 49ers',
        'Santa Clara',
        'CA',
        'AFC',
        'NFC West',
        "Levi's Stadium"
      ),
      new NFLTeam(
        28,
        'Seattle Seahawks',
        'Seattle',
        'WA',
        'NFC',
        'NFC West',
        'Lumen Field'
      ),
      new NFLTeam(
        29,
        'Tampa Bay Buccaneers',
        'Tampa',
        'FL',
        'NFC',
        'NFC South',
        'Raymond James Stadium'
      ),
      new NFLTeam(
        30,
        'Tennessee Titans',
        'Nashville',
        'TN',
        'AFC',
        'AFC South',
        'Nissan Stadium'
      ),
      new NFLTeam(
        31,
        'Washington Commanders',
        'Landover',
        'MD',
        'NFC',
        'NFC East',
        'FedExField'
      ),
      new NFLTeam(0, '', 'Frankfurt', '', 'Germany', '', ''),
      new NFLTeam(0, '', 'London', '', 'United Kingdom', '', ''),
      new NFLTeam(0, '', 'Mexico City', '', 'Mexico', '', ''),
      new NFLTeam(0, '', 'Munich', '', 'Germany', '', ''),
    ];

    this.teamCities.sort((a, b) => a.city.localeCompare(b.city));
  }

  getCities() {
    return this.teamCities;
  }
}
