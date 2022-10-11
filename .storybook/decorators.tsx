// decorator.tsx

import { DecoratorFn } from '@storybook/react'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../src/styles/theme'
import { withDesign } from 'storybook-addon-designs'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import { initialize, mswDecorator } from 'msw-storybook-addon'

initialize()

const withRouter: DecoratorFn = (StoryFn) => {
  return <BrowserRouter><StoryFn /></BrowserRouter>
}


const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme
  return (
    <ThemeProvider theme = { storyTheme } >
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  )
}

export const globalDecorators = [
  mswDecorator,
  withTheme,
  withDesign,
  withRouter
]
