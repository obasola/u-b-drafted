import { PrismaClient } from "@prisma/client";

let dbService: PrismaClient | undefined;
if(!dbService) {
  dbService = new PrismaClient();
  console.log("New prisma object created");
} 

export const globalDbService: PrismaClient = !dbService ? new PrismaClient() : dbService;