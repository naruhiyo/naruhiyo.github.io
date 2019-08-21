import { Box, Text } from 'grommet'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  const Footer: any = t('footer')

  return (
    <Box
      height="xsmall"
      pad="small"
      gridArea="footer"
      align="center"
      justify="center"
    >
      <Text>&copy; {Footer.copyright}</Text>
    </Box>
  )
}

export default Footer
