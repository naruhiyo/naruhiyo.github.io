import { Box, Grid, Image, Select, Heading } from "grommet"
import * as React from "react"
import { useTranslation } from "react-i18next"

export default () => {
  const { t } = useTranslation()
  const [value, setValue] = React.useState("ja")

  const HeaderText: any = t("header")
  return (
    <Grid
      fill
      columns={{
				count: "fit",
				size: "xsmall"
			}}
    >
      <Box
        background="neutral-3"
        direction="row"
        align="center"
        justify="between"
        pad={{ horizontal: "medium", vertical: "small" }}
      >
        <Box direction="row" align="center">
          <Box width="xxsmall" height="xxsmall">
            <Image fit="cover" src="public/images/brand-logo.png" />
          </Box>
          <Box pad={{ horizontal: "small" }}>
            <Heading level="3">{HeaderText.title}</Heading>
          </Box>
        </Box>

        <Box width="xsmall">
          <Select
            options={["ja"]}
            value={value}
            onChange={({ option }) => setValue(option)}
          />
        </Box>
      </Box>
    </Grid>
  )
}
