import { DocsProviders } from "@/components/docs/DocsProviders";
import { getArticleTree } from "@/lib/docs/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";

export default function ArticlesLayout({ children }: { children: ReactNode }) {
  const tree = getArticleTree();

  return (
    <DocsProviders>
      <DocsLayout
        themeSwitch={{ enabled: false }}
        tree={tree}
        nav={{
          title: <div className="flex items-center justify-center text-2xl font-bold cursor-default">技术文章</div>,
          enabled: true,
        }}
        links={[
          {
            type: "main",
            text: "返回首页",
            url: "/",
            on: "nav",
          },
        ]}
      >
        {children}
      </DocsLayout>
    </DocsProviders>
  );
}
