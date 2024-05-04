"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const MobileDevice = ({
   isUserLoggedIn,
   providers,
   toggleMenu,
   setToggleMenu,
}) => {
   return (
      <div className="sm:hidden flex relative">
         {isUserLoggedIn ? (
            <>
               <Image
                  src="/assets/images/profile.svg"
                  width={40}
                  height={40}
                  alt="logo"
                  className="object-cover"
                  onClick={() => {
                     setToggleMenu((prevState) => !prevState);
                  }}
               />

               {toggleMenu && (
                  <div className="dropdown capitalize">
                     <Link
                        href="/profile"
                        className="dropdown_link"
                        onClick={() => setToggleMenu(false)}
                     >
                        my profile
                     </Link>
                     <Link
                        href="/profile"
                        className="dropdown_link"
                        onClick={() => setToggleMenu(false)}
                     >
                        create prompt
                     </Link>
                     <button
                        type="button"
                        className="capitalize black_btn w-full mt-3"
                        onClick={() => {
                           setToggleMenu(false);
                           signOut();
                        }}
                     >
                        sign out
                     </button>
                  </div>
               )}
            </>
         ) : (
            <>
               {providers &&
                  Object.values(providers).map((provider) => (
                     <button
                        className="black_btn"
                        type="button"
                        key={provider.name}
                        onClick={() => signIn(provider.id)}
                     >
                        sign in
                     </button>
                  ))}
            </>
         )}
      </div>
   );
};

const DesktopDevice = ({ isUserLoggedIn, providers }) => {
   return (
      <div className="capitalize sm:flex hidden">
         {isUserLoggedIn ? (
            <div className="flex">
               <Link href="/create-prompt" className="black_btn">
                  Create Post
               </Link>

               <button
                  className="outline_btn ml-2"
                  type="button"
                  onClick={() => signOut()}
               >
                  sign out
               </button>

               <Link href="/profile">
                  <Image
                     src="/assets/images/profile.svg"
                     width={40}
                     height={40}
                     alt="profile"
                     className="mx-2"
                  />
               </Link>
            </div>
         ) : (
            <>
               {providers &&
                  Object.values(providers).map((provider) => (
                     <button
                        className="black_btn"
                        type="button"
                        key={provider.name}
                        onClick={() => signIn(provider.id)}
                     >
                        sign in
                     </button>
                  ))}
            </>
         )}
      </div>
   );
};

function Nav() {
   const isUserLoggedIn = true;
   const [providers, setProviders] = useState(null);
   const [toggleMenu, setToggleMenu] = useState(false);

   useEffect(() => {
      const setProvider = async () => {
         const resp = await getProviders();
         setProviders(resp);
      };

      setProvider();
   }, []);

   return (
      <nav className="flex-between mb-16 pt-3">
         <Link href="/" className="flex gap-2 flex-start">
            <Image
               src="/assets/images/logo.svg"
               width={40}
               height={40}
               alt="logo"
               className="object-cover"
            />
            <p className="logo_text mt-2 text-gray-800">PrompTopia</p>
         </Link>

         {/* desktop navigation */}
         <DesktopDevice isUserLoggedIn={isUserLoggedIn} providers={providers} />

         {/* mobile nav */}
         <MobileDevice
            isUserLoggedIn={isUserLoggedIn}
            providers={providers}
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
         />
      </nav>
   );
}

export default Nav;
