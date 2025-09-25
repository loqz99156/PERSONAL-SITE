"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { FrameworkProvider } from "fumadocs-core/framework";
import { RootProvider } from "fumadocs-ui/provider";
import "fumadocs-ui/style.css";

interface DocsProvidersProps {
  children: ReactNode;
}

export function DocsProviders({ children }: DocsProvidersProps) {
  return (
    <FrameworkProvider
      Link={NextLink as any}
      Image={NextImage as any}
      useParams={useParams}
      usePathname={usePathname}
      useRouter={useRouter}
    >
      <RootProvider>{children}</RootProvider>
    </FrameworkProvider>
  );
}
