import { Router } from "express";
import berita from "./berita";
import galleri from "./galleri";
import linkPendataan from "./link-pendataan";
import login from "./login";
import misi from "./misi";
import program from "./program";
import visi from "./visi";

const router = Router();

router.use("/link-pendataan", linkPendataan);
router.use("/program", program);
router.use("/visi", visi);
router.use("/misi", misi);
router.use("/login", login);
router.use("/galleri", galleri);
router.use("/berita", berita);

// Health check
router.get("/health", (req, res) => {
   res.json({
      success: true,
      message: "API is running",
      timestamp: new Date().toISOString(),
   });
});

export default router;
