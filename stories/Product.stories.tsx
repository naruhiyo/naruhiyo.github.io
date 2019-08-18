import { Grid, ResponsiveContext } from "grommet"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import Product from "../src/components/Product"
import "../src/plugins/i18n"
import { useTranslation } from "react-i18next"

storiesOf("Product", module).add("Product", () =>
  React.createElement(() => {
    const { t } = useTranslation()
    const products: {
      head: string
      items: []
    } = t("products")

    const productList = products.items.map((product: any, idx: number) => (
      <ResponsiveContext.Consumer key={idx}>
        {size => (
          <Product product={product.product} key={idx} id={idx} size={size} />
        )}
      </ResponsiveContext.Consumer>
    ))

    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Grid
            fill
            columns={{
              count: "fill",
              size: "medium"
            }}
            gap="small"
            margin={{ bottom: "large" }}
          >
            {productList}
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    )
  })
)
