import { GoogleOAuthProvider } from "@react-oauth/google";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
   <GoogleOAuthProvider clientId="845821249090-ed7j37m150dr2pv0h3ki6s75ldso2baj.apps.googleusercontent.com">
      <App />
   </GoogleOAuthProvider>
);
