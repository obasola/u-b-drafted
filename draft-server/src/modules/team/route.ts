// src/routes/userRoutes.ts
import express from "express";
import { TeamController } from './controller';
import { TeamRepository } from './repository';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();
 
const repository = new TeamRepository(prisma);
const controller = new TeamController(repository);
console.log("In TeamRooutes...");
router.get('/teams/:id', controller.readById);
router.get('/teams/', controller.readMany);
router.post('/teams/', controller.create);
router.put('/teams/:id', controller.update);
router.delete('/teams/:id', controller.delete);

export default router;