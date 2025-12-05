import cors from "cors";
import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import routes from "./routes";

const app = express();

// aktifkan CORS
app.use(
   cors({
      origin: "*", // bisa diganti domain tertentu
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
   })
);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
   res.json({ message: "API berjalan" });
});

app.post("/auth/google", async (req, res) => {
   const { profile } = req.body;

   const payload = {
      email: profile.email,
      name: profile.name,
      picture: profile.picture,
   };

   const access_token = jwt.sign(payload, "SECRET", { expiresIn: "7d" });

   res.json({ access_token });
});

app.use("/api", routes);

const PORT = 3002;
app.listen(PORT, "0.0.0.0", () => {
   console.log(`Server running on port ${PORT}`);
});
