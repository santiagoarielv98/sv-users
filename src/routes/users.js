import { Router } from "express";
import * as userController from "../controllers/userController.js";

const router = Router();

router.get("/", userController.getUsers);
router.get("/create", userController.createUser);
router.post("/create", userController.postCreateUser);
router.post("/delete/:id", userController.deleteUser);
router.get("/edit/:id", userController.editUser);
router.post("/edit/:id", userController.postEditUser);

export default router;
