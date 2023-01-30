import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat'
  },
  components: {
    Button: {
      variants: {
        bloods: {
          bg: '#ec080e',
          color: 'white',
          borderRadius: '4px',
          padding: '7px 22px',
          _hover: {
            bg: '#df060b'
          }
        },
        'outline-bloods': {
          border: '1px solid #ec080e',
          borderRadius: '4px',
          padding: '7px 22px',
          _hover: {
            color: 'white',
            bg: '#ec080e'
          }
        }
      }
    }
  }
})
