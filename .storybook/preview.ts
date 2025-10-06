import type { Preview } from '@storybook/vue3-vite'
import { setup } from '@storybook/vue3-vite'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { createPinia } from 'pinia'
import '../src/index.css'

setup((app) => {
  app.use(createPinia());
});

initialize()

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  loaders: [mswLoader],
}

export default preview
