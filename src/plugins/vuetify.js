// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',  // set the default theme to dark
    themes: {
      dark: {
        primary: '#FFC107',
        secondary: '#FFA000',
        // ... other custom colors
      },
    },
  },
});

export default vuetify;
