import dotenv from "dotenv";
import express, {Request, Response} from "express";

import combineRoutes from './modules/combinescore/route';
import playerRoutes from './modules/player/route';
import pickRoutes from './modules/pick/route';
import scheduleRoutes from './modules/schedule/route';
import teamRoutes from './modules/team/route';
import userRoutes from './modules/user/route';



import cors from "cors";

dotenv.config();

if(!process.env.PORT) {
    process.exit(1);
}

const app = express();
const PORT: number = parseInt(process.env.PORT, 10);

app.use(express.json());

app.use('/api/combine', combineRoutes);
app.use('/api/player', playerRoutes);
app.use('/api/pick', pickRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/users', userRoutes);

app.use(cors());
app.use(express.urlencoded({extended: true}));

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
})
app.listen(PORT, () => {
    console.log(`Server started successfully on port: ${PORT}`)
});