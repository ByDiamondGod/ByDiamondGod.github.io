import { resolve } from 'node:path'

export default {
    server: {
        port: "5173",
    },
    css: {
        devSourcemap: true,
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve('scripts/script.js'),
                inicio: resolve('index.html'),
            }
        }
    }
}