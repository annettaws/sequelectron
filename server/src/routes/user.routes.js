import { Router } from "express";
import userController from "../controllers/user.controller";
import authMiddleware from "../middlewares/auth.middleware";

const userRoutes = Router();
userRoutes.post("/user", userController.add);
userRoutes.post("/user/address", authMiddleware, userController.addAddress);
userRoutes.get("/user", userController.get);
userRoutes.get("/hello", userController.hello);
userRoutes.get("/user/:id", userController.find);
userRoutes.put("/user", authMiddleware, userController.update);
userRoutes.put("/user/updateInfo", userController.updateGeneralInfo)
userRoutes.delete("/user/:id", userController.delete);

export { userRoutes };
