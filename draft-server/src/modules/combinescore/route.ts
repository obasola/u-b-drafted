// src/routes/userRoutes.ts
import express from "express";
import { CombineController } from './controller';
import { CombineRepository } from './repository';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();
 
const repository = new CombineRepository(prisma);
const controller = new CombineController(repository);

router.get('/combine/:id', controller.readById);
router.get('/combine/', controller.readMany);
router.post('/combine/', controller.create);
router.put('/combine/:id', controller.update);
router.delete('/combine/:id', controller.delete);

export default router;