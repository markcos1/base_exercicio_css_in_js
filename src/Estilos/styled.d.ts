import 'styled-components'
import { ThemeType } from './styled'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
