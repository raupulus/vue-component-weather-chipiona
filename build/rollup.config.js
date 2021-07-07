// import our third party plugins
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import typescript from '@rollup/plugin-typescript';
import commonjs from 'rollup-plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support
import scss from 'rollup-plugin-scss';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';

/*
import pkg from '../package.json' // import our package.json file to re-use the naming
import fs from 'fs';
import path from 'path';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import PostCSS from 'rollup-plugin-postcss';
import simplevars from 'postcss-simple-vars'
import postcssImport from 'postcss-import';
import minimist from 'minimist';
import postcssUrl from 'postcss-url';
import url from '@rollup/plugin-url';
import nested from 'postcss-nested';
import { terser } from 'rollup-plugin-terser';
import  autoprefixer from 'autoprefixer';
*/

//const ComponentName = 'ChipionaWeatherComponent';
//const ComponentSource = 'src/components/' + ComponentName + '.vue';

export default [
    // ESM build to be used with webpack/rollup.
  {
    input: 'src/main.ts',
    output: {
      format: 'esm',
      file: 'dist/library.esm.js',
      sourcemap: true,
    },
    plugins: [
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
            data: { // This helps to inject variables in each <style> tag of every Vue SFC
                //scss: () => `@import "@/styles/variables.scss";`, 
                //sass: () => `@import "@/styles/variables.scss"`,
                },
            style: {
                preprocessOptions: {
                    scss: {
                        includePaths: ['node_modules'],
                    }
                },
            }
        }),
        typescript({
      tsconfig: false,
      experimentalDecorators: true,
      module: 'es2015'
        }),
        alias({
			resolve: [ '.js', '.ts' ],
			entries: [
				{ find: 'vue', replacement: 'node_modules/vue/dist/vue.runtime.esm-browser.js' }
			]
		}),
		resolve(),
		typescript(),
        buble(), // Transpile to ES5
        scss(),
    commonjs(),
        VuePlugin(),
    //autoExternal(),
    ]
    },
    
  // SSR build.
  {
    input: 'src/main.ts',
    output: {
      format: 'cjs',
      file: 'dist/library.ssr.js',
      sourcemap: true,
      },
    plugins: [
        vue({
            template: { optimizeSSR: true },
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
            data: { // This helps to inject variables in each <style> tag of every Vue SFC
                //scss: () => `@import "@/styles/variables.scss";`, 
                //sass: () => `@import "@/styles/variables.scss"`,
                },
            style: {
                preprocessOptions: {
                    scss: {
                        includePaths: ['node_modules'],
                    }
                },
            }
        }),
        typescript({
      tsconfig: false,
      experimentalDecorators: true,
      module: 'es2015'
        }),
        alias({
			resolve: [ '.js', '.ts' ],
			entries: [
				{ find: 'vue', replacement: 'node_modules/vue/dist/vue.runtime.esm-browser.js' }
			]
		}),
		resolve(),
		typescript(),
        buble(), // Transpile to ES5
        scss(),
    commonjs(),
        VuePlugin(),
    //autoExternal(),
    ]
    },
  
  // Browser build.
  {
    input: 'src/wrapper.js',
    output: {
      format: 'iife',
      file: 'dist/library.js',
      sourcemap: true,
    },
    plugins: [
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
            data: { // This helps to inject variables in each <style> tag of every Vue SFC
                //scss: () => `@import "@/styles/variables.scss";`, 
                //sass: () => `@import "@/styles/variables.scss"`,
                },
            style: {
                preprocessOptions: {
                    scss: {
                        includePaths: ['node_modules'],
                    }
                },
            }
        }),
        typescript({
      tsconfig: false,
      experimentalDecorators: true,
      module: 'es2015'
        }),
        alias({
			resolve: [ '.js', '.ts' ],
			entries: [
				{ find: 'vue', replacement: 'node_modules/vue/dist/vue.runtime.esm-browser.js' }
			]
		}),
		resolve(),
		typescript(),
        buble(), // Transpile to ES5
        scss(),
    commonjs(),
        VuePlugin(),
    //autoExternal(),
    ]
  }
]
