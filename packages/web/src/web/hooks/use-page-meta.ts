import { useEffect } from "react";

/** Update route metadata and restore the homepage defaults when leaving. */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title;
    const existing = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const meta = existing ?? document.createElement("meta");
    const previousDescription = meta.content;

    if (!existing) {
      meta.name = "description";
      document.head.appendChild(meta);
    }

    document.title = title;
    meta.content = description;

    return () => {
      document.title = previousTitle;
      if (existing) meta.content = previousDescription;
      else meta.remove();
    };
  }, [title, description]);
}