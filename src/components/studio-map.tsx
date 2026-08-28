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
        className="studio-map-frame absolute inset-0 size-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <IrisMark className="size-8" />
      </div>
    </div>
  );
}
