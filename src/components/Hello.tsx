import { Box, Button, Grommet } from 'grommet'
import * as React from "react"
import { useTranslation } from "react-i18next"
import * as style from "../scss/Hello.scss"

export type HelloProps = {
  compiler: string
  framework: string
}

export const Hello = (props: HelloProps) => {
  const { t, i18n } = useTranslation()

  return (
    <div>
      <Grommet>
        <Box align="center" background="neutral-2">
          <Button
            label="hello world"
            primary
            onClick={() => alert("hello, world")}
          />
        </Box>
      </Grommet>
      <h1 className={style.title}>
        Hello from {props.compiler} and {props.framework}!
      </h1>
      <div>
        <p>sample field</p>
        <p>{t('hello_world')}</p>
        <p>{t('hoge')}</p>
      </div>
    </div>
  )
}
