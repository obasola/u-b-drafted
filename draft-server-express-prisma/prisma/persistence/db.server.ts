import { PrismaClient } from '@prisma/client'

const db: PrismaClient = new PrismaClient();

declare global {
    const __db = new PrismaClient();
}

if(!global.__db) {
    global.__db = new PrismaClient();
}

db = global.__db;

export { db };