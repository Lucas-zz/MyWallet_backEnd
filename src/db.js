import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const mongoClient = new MongoClient("mongodb+srv://lucas:azzolini23@cluster0.fivmt.mongodb.net/mywallet-backend?retryWrites=true&w=majority");

await mongoClient.connect();

const db = mongoClient.db("mywallet-backend");
export default db; 