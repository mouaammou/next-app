"use client"
import Link from "next/link"
import Image from "next/image"
import {useState, useEffect} from "react"
import {signIn, signOut, useSession, getProviders} from "next-auth/react"

function Nav() {
  return (
		<nav className="fex-between w-full mb-16 pt-3">
			<Link href="/" className="flex gap-2 flex-center">
				<Image 
					src="/assets/images/logo.svg"
					width={40}
					height={40}
					alt="logo"
					className="object-cover"
				/>
			</Link>
		</nav>
  )
}

export default Nav
