import {resolve} from 'path';
export * as meta from '../package.json';
import {defineNuxtModule, addPlugin} from "@nuxt/kit";

export default defineNuxtModule({
  setup(moduleOptions) {
    const defaults = {
      alias: 'cookies',
      parseJSON: true
    }
    const options = Object.assign({}, defaults, moduleOptions)

    addPlugin({
      src: resolve(__dirname, './templates/cookie-universal-nuxt.js'),
      fileName: 'cookie-universal-nuxt.js',
      options
    })
  }
});
