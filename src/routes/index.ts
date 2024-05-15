import { Router } from "express";
import { MessagensControllers } from "../controllers/message"
const router: Router = Router()


router.post('/sendMessage', MessagensControllers.postSendMessage)


export { router }