
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import AnnouncementBar from "./landing/AnnouncementBar";
import Navbar from "./landing/navbar/Navbar";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [announcementVisible, setAnnouncementVisible] = useState(true);

  return (
    <>
      {isHome && announcementVisible && (
        <AnnouncementBar onClose={() => setAnnouncementVisible(false)} />
      )}

      <Navbar
        announcementVisible={isHome && announcementVisible}
      />
    </>
  );
}