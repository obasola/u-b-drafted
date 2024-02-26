// src/routes/userRoutes.ts
import express from "express";
import { PersonController } from './controller';
import { PersonRepository } from './repository';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();
 
const repository = new PersonRepository(prisma);
const controller = new PersonController(repository);

router.get('/person/:id', controller.readById);
router.get('/person/', controller.readMany);
router.post('/person/', controller.create);
router.put('/person/:id', controller.update);
router.delete('/person/:id', controller.delete);

export default router;