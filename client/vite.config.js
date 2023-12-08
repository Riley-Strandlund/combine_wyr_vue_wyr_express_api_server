import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  //Everything within the server object there to help vue contact express for information.
  //wyrService.js file requests something the '/wyr' is passed through the '/wyr' here to access the localhost:3000 which belongs to Express. 
  server: {
    proxy: {
      //Vue contacts Vite for information from Express and pass it back the same way.
      // want requests to http://localhost:5173/wyr (Vite server address) to go to http://localhost:3000/wyr (Expresses Server address)
      '/wyr': 'http://localhost:3000/'
    }
  }
})//We use http instead of the mainstream https because our servers aren't set up to use https.
