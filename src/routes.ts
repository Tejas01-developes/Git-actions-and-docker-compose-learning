import express from 'express';
import { getusers, loginmember, registermember } from './controller.js';

const route=express.Router();


route.post("/",registermember)
route.post("/login",loginmember)
route.get("/get",getusers)

export default route 
