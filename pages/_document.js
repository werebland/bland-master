import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import StructuredData from 'react-google-structured-data'

const GA_TRACKING_ID = "UA-125819564-1"

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
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}}
          />
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
          <meta name="description" content="A Halifax-based marketing agency devoted to first impressions with a focus on the F&B industry. Let us buy you a beer."/>
          {this.props.styleTags}
          <StructuredData
              type='Organization'
              data={{
                  url: 'https://werebland.com',
                  logo: `https://werebland.com/static/bland__square.png`,
                  name: 'Bland Marketing Agency',
                  sameAs: [
                      'https://www.facebook.com/Bland-2218276858408891/',
                      'https://www.linkedin.com/company/werebland/',
                      'https://www.instagram.com/werebland/',
                  ],
              }}
          />
        </Head>
        <body style={{ margin: 0, padding: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}}>
          <Main />
          <NextScript />
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
            <input type="text" hidden name="bot-field" />
            <input type="text" name="fname" />
            <input type="text" name="lname" />
            <input type="email" name="email" />
            <input type="text" name="hangout" />
            <textarea name="message"></textarea>
          </form>
        </body>
      </html>
    )
  }
}
