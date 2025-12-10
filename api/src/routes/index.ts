import { Router } from "express";
import berita from "./berita";
import galleri from "./galleri";
import informasiLinkPenting from "./informasi/link-penting";
import laporanPenerimaan from "./laporan/penerimaan";
import laporanPenyaluran from "./laporan/penyaluran";
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
router.use("/laporan/penerimaan", laporanPenerimaan);
router.use("/laporan/penyaluran", laporanPenyaluran);
router.use("/informasi/link-penting", informasiLinkPenting);

// Health check
router.get("/health", (req, res) => {
   res.json({
      success: true,
      message: "API is running",
      timestamp: new Date().toISOString(),
   });
});

export default router;
