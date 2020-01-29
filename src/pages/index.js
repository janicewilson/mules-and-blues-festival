import React, { Component } from "react"
import { Helmet } from "react-helmet"

import Logo from "../../static/logo.png"

class Index extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Delta Blues in the soul of Mississippi | Mules and Blues Festival |
            Mules and Blues Festival
          </title>
          <meta
            name="description"
            content="The Mules & Blues Festival showcases authentic artists that embody the legendary Blues and Gospel traditions of the Mississippi Delta."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Helmet>

        <main>
          <section>
            <div className="logo">
              <img className="logo" src={Logo} />
            </div>
          </section>{" "}
        </main>
      </>
    )
  }
}

export default Index
