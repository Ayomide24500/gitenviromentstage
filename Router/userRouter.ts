import { Router } from "express";
import { createTask } from "../controller/todoController";

const router: Router = Router();
router.route("/create-task").post(createTask);
router.route("/view-task").get(createTask);

export default router;
