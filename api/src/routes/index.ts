import { Router } from "express";
import linkPendataan from "./link-pendataan";
import misi from "./misi";
import program from "./program";
import visi from "./visi";

const router = Router();

router.use("/link-pendataan", linkPendataan);
router.use("/program", program);
router.use("/visi", visi);
router.use("/misi", misi);

// Health check
router.get("/health", (req, res) => {
   res.json({
      success: true,
      message: "API is running",
      timestamp: new Date().toISOString(),
   });
});

export default router;
