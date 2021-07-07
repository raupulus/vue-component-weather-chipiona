// import our third party plugins
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import VuePlugin from 'rollup-plugin-vue'
import pkg from '../package.json' // import our package.json file to re-use the naming
import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support
import scss from 'rollup-plugin-scss';

export default {
  // this is the file containing all our exported components/functions
  input: 'src/wrapper.js',
  // this is an array of outputted formats
    output: [
  {
      file: pkg.module, // the name of our esm library
      format: 'esm', // the format of choice
      sourcemap: true, // ask rollup to include sourcemaps
    },
   {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.unpkg,
      format: 'umd',
      name: 'ChipionaWeatherComponent',
      sourcemap: true,
      globals: {
        vue: 'Vue',
      },
    },
    {
        file: "dist/v-component-weather-chipiona.esm.js",
        format: "es"    
    }
],
        /*
    output: [
      
      
    {
        file: pkg.module, // the name of our esm library
        format: 'esm', // the format of choice
        sourcemap: true, // ask rollup to include sourcemaps
    },
    {
        file: pkg.unpkg,
        format: 'umd',
        name: 'ChipionaWeatherComponent',
        sourcemap: true,
        globals: {
            vue: 'Vue',
        },
    },
  ],
    */
  // this is an array of the plugins that we are including
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
        buble(), // Transpile to ES5
        scss(),
    commonjs(),
    VuePlugin()
  ],
  // ask rollup to not bundle Vue in the library
  external: ['vue']
}
