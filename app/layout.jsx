"use client"
import './globals.css'

import RootLayout from '@/components/layout/rootLayout'

export default function Layout({children}) {
  const items = [
    {name:"首页" , link:"home"},
    {name:"项目" , link:"project"},
  ]
  return (
    <html lang="ch">
      <head>
        <title>XOps</title>
      </head>
      <body>
      <RootLayout items={items}>
        {children}
      </RootLayout>
      </body>
    </html>
  )
}
