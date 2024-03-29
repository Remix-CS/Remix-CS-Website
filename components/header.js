import React from 'react'
import NextHead from 'next/head'

const Header = () => (
    <NextHead>
    <meta charSet="utf-8" />
    {/* <link rel="shortcut icon" type="image/x-icon" href="../static/favicon.ico"/> */}
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    <link rel="icon" href="../static/remixLogo.svg" />
    <title>Remix CS</title>
  </NextHead>
)

export default Header;