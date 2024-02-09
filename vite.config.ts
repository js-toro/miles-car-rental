import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	resolve: {
		alias: {
			src: '/src',
		},
	},
	server: {
		port: 3000,
	},
	plugins: [
		react(),
		svgr({
			include: '**/*.svg?react',
		}),
	],
});
