import {resolve} from 'path';
import {defineNuxtModule, addPlugin} from "@nuxt/kit";\
import path from 'path';
import { fileURLToPath } from 'url';

export default defineNuxtModule({
  setup(moduleOptions) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
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
