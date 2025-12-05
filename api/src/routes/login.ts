import axios from "axios";
import "dotenv/config";
import { Request, Response, Router } from "express";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
   try {
      const { username, password } = req.body;

      if (!process.env.KEYCLOAK_CLIENT_ID || !process.env.KEYCLOAK_CLIENT_SECRET) {
         throw new Error("Keycloak environment variables are not set");
      }

      const params = new URLSearchParams();
      params.append("client_id", process.env.KEYCLOAK_CLIENT_ID);
      params.append("client_secret", process.env.KEYCLOAK_CLIENT_SECRET);
      params.append("grant_type", "password");
      params.append("username", username);
      params.append("password", password);

      const { data } = await axios.post(`${process.env.KEYCLOAK_PROTOCOL}/token`, params);

      res.json({ data });
   } catch (error) {
      res.status(401).json({ message: "Username atau password anda masukkan salah" });
      console.log(error);
   }
});

export default router;
