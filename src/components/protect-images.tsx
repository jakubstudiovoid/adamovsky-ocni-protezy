import { useEffect } from "react";

function isImage(target: EventTarget | null): target is HTMLImageElement {
  return target instanceof HTMLImageElement;
}

export function ProtectImages() {
  useEffect(() => {
    const harden = (img: HTMLImageElement) => {
      img.draggable = false;
      img.setAttribute("draggable", "false");
    };

    document.querySelectorAll("img").forEach(harden);

    const onContextMenu = (e: MouseEvent) => {
      if (isImage(e.target)) e.preventDefault();
    };

    const onDragStart = (e: DragEvent) => {
      if (isImage(e.target)) e.preventDefault();
    };

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof HTMLImageElement) harden(node);
          if (node instanceof Element) {
            node.querySelectorAll("img").forEach(harden);
          }
        }
      }
    });

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("dragstart", onDragStart);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("dragstart", onDragStart);
      observer.disconnect();
    };
  }, []);

  return null;
}
