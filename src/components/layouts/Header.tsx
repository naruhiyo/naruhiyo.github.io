import { Box, Heading, Image, Select } from 'grommet'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation()
  const [value, setValue] = React.useState('ja')

  const Header: any = t('header')
  return (
    <Box background="neutral-3" direction="row" align="center" justify="between" pad="xsmall">
      <Box direction="row" align="center" pad="xsmall">
        <Box width="xxsmall" height="xxsmall">
          <Image fit="cover" src={Header.logo} />
        </Box>
        <Heading margin={{ horizontal: 'small' }} level="3">
          {Header.title}
        </Heading>
      </Box>

      <Box width="xsmall">
        <Select options={['ja']} value={value} onChange={({ option }) => setValue(option)} />
      </Box>
    </Box>
  )
}

export default Header
