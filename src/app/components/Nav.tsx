// app/components/Nav.tsx
"use client";

import { usePathname, useRouter } from 'next/navigation';

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (href: string) => {
    if (pathname === href) return;

    if (!document.startViewTransition) {
      router.push(href);
      return;
    }

    document.startViewTransition(() => {
      router.push(href);
    });
  };

  return (
    <nav className="nav">
      <div className="logo">
        <button onClick={() => handleClick("/")}>Index</button>
      </div>
      <div className="links">
        <button onClick={() => handleClick("/projects")}>Projects</button>
        <button onClick={() => handleClick("/info")}>Info</button>
      </div>
    </nav>
  );
}