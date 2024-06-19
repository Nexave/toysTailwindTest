import { defineConfig } from 'vite';
import vituum from 'vituum'
import twig from '@vituum/vite-plugin-twig'
import path from 'node:path';

export default defineConfig({

    css: {
        extract: false, // Отключает извлечение и переименование CSS файла
    },

    plugins: [
      
        vituum(
            {
                imports: {
                    filenamePattern: {
                        '+.css': [],
                        '+.scss': 'src/styles'
                    }
                },
                normalizeBasePath: true,
                root: './src'
            }
        ),
        twig({
            root: './src'
        }),

    ],
	resolve: {
		alias: {
			'@': path.resolve(process.cwd(), 'src'),
			'scripts': path.resolve(process.cwd(), 'src', 'scripts'),
			'styles': path.resolve(process.cwd(), 'src', 'styles'),
		},
	},
    build: {
        rollupOptions: {
            output: {
                chunkFileNames: 'scripts/[name].js',
                entryFileNames: 'scripts/[name].js',

                assetFileNames: ({name}) => {
                    if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
                        return 'images/[name][extname]';
                    }

                    if (/\.css$/.test(name ?? '')) {
                        return 'styles/[name][extname]';
                    }
                    if (/\.js$/.test(name ?? '')) {
                        return 'js/[name][extname]';
                    }
                    // default value
                    // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                    return 'assets/[name][extname]';
                },
            },
        },
        inject: {
            // Включаем инжекцию в тело документа
            injectTo: 'body',
            // По умолчанию Vite уже добавляет defer, но вам также доступны other options
            // https://rollupjs.org/guide/en/#outputoptions
            defer: true
          }
    },

})
