// src/routes/userRoutes.ts
import express from "express";
import { ScheduleController } from './controller';
import { ScheduleRepository } from './repository';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();
 
const repository = new ScheduleRepository(prisma);
const controller = new ScheduleController(repository);

router.get('/schedule/:id', controller.readById);
router.get('/schedule/', controller.readMany);
router.post('/schedule/', controller.create);
router.put('/schedule/:id', controller.update);
router.delete('/schedule/:id', controller.delete);

export default router;