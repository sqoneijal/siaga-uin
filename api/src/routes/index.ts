import { Router } from "express";
import linkPendataan from "./link-pendataan";
import program from "./program";

const router = Router();

router.use("/link-pendataan", linkPendataan);
router.use("/program", program);

// Health check
router.get("/health", (req, res) => {
   res.json({
      success: true,
      message: "API is running",
      timestamp: new Date().toISOString(),
   });
});

export default router;
