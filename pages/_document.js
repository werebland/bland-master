import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Bland | A Halifax Agency Creating Tasteful Presences</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
          <link rel="manifest" href="/static/site.webmanifest"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content="Bland Marketing Agency" />
          <meta property="og:url" content="https://werebland.com" />
          <meta property="og:image" content="https://werebland.com/static/bland__square.png" />
          <meta property="business:contact_data:street_address" content="22A Sunnybrae Ave" />
          <meta property="business:contact_data:locality" content="Halifax" />
          <meta property="business:contact_data:region" content="Nova Scotia" />
          <meta property="business:contact_data:postal_code" content="B3N 2G1" />
          <meta property="business:contact_data:country_name" content="Canada" />
          {this.props.styleTags}
        </Head>
        <body style={{ margin: 0, padding: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
