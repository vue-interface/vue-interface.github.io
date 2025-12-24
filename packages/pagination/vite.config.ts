import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { pascalCase } from 'change-case';
import path from 'path';
import { ConfigEnv, defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

const fileName = pkg.name.split('/')[1];

const external: string[] = [
    // ...(pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : [])
];

export default ({ command }: ConfigEnv) => defineConfig({
    resolve: {
        conditions: command === 'serve'
            ? ['source', 'import', 'module', 'browser', 'default']
            : ['import', 'module', 'browser', 'default'],
    },
    build: {
        sourcemap: command === 'build',
        lib: {
            entry: path.resolve(__dirname, 'index.ts'),
            name: pascalCase(fileName),
            fileName,
        },
        rollupOptions: {
            external,
            output: {
                globals: external.reduce((carry, dep) => {
                    return Object.assign(carry, {
                        [dep]: pascalCase(dep)
                    });
                }, {}),
            }
        },
        watch: {
            include: [
                './tailwindcss/**/*.js'
            ]
        }
    },
    plugins: [
        vue(),
        dts({
            entryRoot: path.resolve(__dirname, './'),
        }),
        tailwindcss()
    ],
});