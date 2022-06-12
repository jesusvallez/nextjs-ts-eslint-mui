import React from 'react'

import { useRouter } from 'next/router'

import { DefaultSeo, NextSeo, NextSeoProps } from 'next-seo'

import { WithChildren } from '../helpers/react'

const defaultSeoProps: React.ComponentProps<typeof DefaultSeo> = {
  defaultTitle: 'template',
  additionalLinkTags: [
    { rel: 'apple-touch-icon', sizes: '60x60', href: `/apple-icon-60x60.png` },
    { rel: 'apple-touch-icon', sizes: '120x120', href: `/apple-icon120x120.png` },
    { rel: 'apple-touch-icon', sizes: '180x180', href: `/apple-icon-180x180.png` },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: `/favicon-16x16.png` },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: `/favicon-32x32.png` },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: `/favicon-96x96.png` },
    { rel: 'icon', type: 'image/x-icon', href: `/favicon.ico` },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  ],
}

const seo: { [key: string]: NextSeoProps } = {
  '/': {
    title: `Home template`,
    description: 'Home template developed by Jesus',
    nofollow: true,
    noindex: true,
  },
}

const SeoContainer = ({ children }: WithChildren) => {
  const { asPath } = useRouter()

  return (
    <>
      <DefaultSeo {...defaultSeoProps} />
      <NextSeo {...seo[asPath]} />
      {children}
    </>
  )
}

export default SeoContainer
