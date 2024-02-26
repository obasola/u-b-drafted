// src/routes/userRoutes.ts
import express from "express";
import { PickController } from './controller';
import { PickRepository } from './repository';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();
 
const repository = new PickRepository(prisma);
const controller = new PickController(repository);

router.get('/pick/:id', controller.readById);
router.get('/pick/', controller.readMany);
router.post('/pick/', controller.create);
router.put('/pick/:id', controller.update);
router.delete('/pick/:id', controller.delete);

export default router;