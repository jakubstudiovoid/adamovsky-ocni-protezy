import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const KEY = "adamovsky.privacy.notice.v1";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(window.localStorage.getItem(KEY) !== "1");
    } catch {
      setVisible(false);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-xl border border-line bg-surface px-5 py-4 shadow-[0_0_0_1px_#ffffff14] sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-muted">
          Tyto stránky nepoužívají sledovací cookies. Rezervace se ukládá jen ve
          vašem prohlížeči.{" "}
          <Link to="/soukromi" className="text-fg underline-offset-4 hover:underline">
            Zásady soukromí
          </Link>
        </p>
        <Button
          size="sm"
          variant="solid"
          className="shrink-0"
          onClick={() => {
            window.localStorage.setItem(KEY, "1");
            setVisible(false);
          }}
        >
          Rozumím
        </Button>
      </div>
    </div>
  );
}
