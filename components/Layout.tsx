import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Optical Illusion App' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/ebbinghaus">
          <a>エビングハウス錯視</a>
        </Link>{' '}
        |{' '}
        <Link href="/muller-lyer">
          <a>ミューラー・リヤー錯視</a>
        </Link>{' '}
        |{' '}
        <Link href="/brightness-contrast">
          <a>明度対比錯視</a>
        </Link>{' '}
      </nav>
    </header>
    {children}
  </div>
)

export default Layout
