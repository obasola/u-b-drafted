// src/routes/userRoutes.ts
import express from "express";
import { TeamController } from './controller';
import { TeamRepository } from './repository';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();
 
const repository = new TeamRepository(prisma);
const controller = new TeamController(repository);

router.get('/team/:id', controller.readById);
router.get('/team/', controller.readMany);
router.post('/team/', controller.create);
router.put('/team/:id', controller.update);
router.delete('/team/:id', controller.delete);

export default router;