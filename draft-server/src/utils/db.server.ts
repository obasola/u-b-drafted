import {globalDbService} from "./globals"

 export class DatabaseService {
  getDbHandle() {    
    return globalDbService;
  }
 }
