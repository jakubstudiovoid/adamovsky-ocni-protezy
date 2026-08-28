import { IrisMark } from "@/components/iris-mark";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function StudioMap({
  className,
  title = "Mapa dílny Petra Adamovského v Jablonci nad Nisou",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <div
      className={cn(
        "studio-map relative h-80 overflow-hidden rounded-xl lg:h-[28rem]",
        className,
      )}
    >
      <iframe
        title={title}
        src={site.mapEmbed}
        className="studio-map-frame pointer-events-none absolute -inset-[10%] h-[120%] w-[120%] max-w-none border-0"
        loading="lazy"
        referrerPolicy="no-referrer"
        tabIndex={-1}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_18%,rgba(0,0,0,0.28)_58%,#000_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-iris/[0.08]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-iris/25 blur-2xl" />
        <IrisMark className="relative size-8 drop-shadow-[0_0_16px_rgba(61,107,255,0.65)]" />
      </div>
    </div>
  );
}
