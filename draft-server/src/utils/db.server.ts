import {globalDbService} from "./globals"

 export class DatabaseService {
  getDbHandle() {    
    console.log("Using globalDbService object");
    return globalDbService;
  }
 }
