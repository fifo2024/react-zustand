import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "react-zustand",
    build: {
        outDir: "docs",
    },
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "src"),
        },
    },
});
