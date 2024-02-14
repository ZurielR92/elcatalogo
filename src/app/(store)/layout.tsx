import Link from 'next/link'
import React, { FC, ReactNode } from 'react'

interface Props {
    children:ReactNode
    params: {
        store:string
    }
}

const StoreRootLayout:FC<Props> = ({ children, params }) => {
  return (
    <>
    <Link href={`/`}>Inicio</Link>
    <Link href={`/mis-favoritos`}>Mis Favoritos</Link>
    <Link href={`/contacto`}>Contacto</Link>
    {children}

    </>
  )
}

export default StoreRootLayout