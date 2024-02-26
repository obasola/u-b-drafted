// src/routes/userRoutes.ts
import express from "express";
import { PlayerController } from './controller';
import { PlayerRepository } from './repository';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();
 
const repository = new PlayerRepository(prisma);
const controller = new PlayerController(repository);

router.get('/player/:id', controller.readById);
router.get('/player/', controller.readMany);
router.post('/player/', controller.create);
router.put('/player/:id', controller.update);
router.delete('/player/:id', controller.delete);

export default router;