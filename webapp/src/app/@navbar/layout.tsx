import React, { PropsWithChildren } from 'react'
import { Navbar } from '../../commons/navbar/_components/navbar'

export default function NavbarLayout({
    children,
}: PropsWithChildren) {
    return (<Navbar>{children}</Navbar>)
}