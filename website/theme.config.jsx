/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useRouter } from 'next/router'
// import { Head } from 'next/head'
import { useConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import ThemeButton from '@/ui/components/ThemeButton'

import {Footer} from '@/ui/footers/Footer'
import {Head} from '@/ui/Head'
import BrandLogo from '@/ui/components/BrandLogo'



export default {
  logo: <BrandLogo />,
  project: {
    link:'https://github.com/miajupiter/rentonest'
  },
  search: {
    placeholder: 'Search'
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  docsRepositoryBase: 'https://github.com/miajupiter/rentonest/blob/main/website',
  editLink: {
    text: 'Github Repository',
    // component: <GithubEditLink />,
  },
  // feedback: {
  //   labels: 'string values',
  //   content: null,
  // },
  head:<Head /> ,
  footer: {
    component: <Footer />,

  },
  useNextSeoProps() {
    const config = useConfig()
    const { frontMatter } = config
    const desc = 'Rentonest: Data connection platform..'

    return {
      description:
        frontMatter.description || desc,
      openGraph: {
        images: [
          { url: frontMatter.image || '/assets/img/logo.png' }
        ]
      },

      titleTemplate: '%s – Rentonest',
      twitter: {
        cardType: 'summary_large_image',
        site: '@rentonest'
      },
    
    }
  },
  sidebar: {
    // defaultMenuCollapseLevel: 1,
    toggleButton: false,
    
  },
  themeSwitch:{

  },
  // banner: {
  //   dismissible: true,
  //   key: 'rentonest001',
  //   text:  <a href="https://rentonest.miajupiter.com" target="_blank">
  //   🎉 Rentonest News: Contract Management version is released. Read more →
  // </a>
  // },
  primaryHue: {
    dark: 188,
    light: 212
  },
  navbar:{
    // extraContent: <p><ThemeButton /> Login</p>,
    extraContent: <span><ThemeButton /></span>,
  },
 
  
  
}
