import { storiesOf } from "@storybook/react"
import * as React from "react"
import Collaborator from "../src/components/Collaborator"
import "../src/plugins/i18n"
import { Grid, ResponsiveContext } from "grommet"
import { useTranslation } from "react-i18next"

storiesOf("Collaborator", module).add("Collaborator", () =>
  React.createElement(() => {
    const { t } = useTranslation()
    const collaborators: {
      head: string
      items: []
    } = t("collaborators")

    const collaboratorList = collaborators.items.map(
      (collaborator: any, idx: number) => (
        <ResponsiveContext.Consumer key={idx}>
          {size => (
            <Collaborator
              profile={collaborator.profile}
              key={idx}
              id={idx}
              size={size}
            />
          )}
        </ResponsiveContext.Consumer>
      )
    )
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Grid
            fill
            columns={{
              count: "fill",
              size: "small"
            }}
            gap="small"
            margin={{ bottom: size }}
          >
            {collaboratorList}
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    )
  })
)
