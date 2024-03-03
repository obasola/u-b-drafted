import { PrismaClient } from "@prisma/client";

let dbService: PrismaClient | undefined;
if(!dbService) {
  dbService = new PrismaClient();
} 

export const globalDbService: PrismaClient = !dbService ? new PrismaClient() : dbService;