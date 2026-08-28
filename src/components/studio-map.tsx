import { useEffect, useRef } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import "leaflet/dist/leaflet.css";

const PIN = `<svg viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
  <circle cx="16" cy="16" r="14.2" fill="none" stroke="#F4F3EF" stroke-width="1.05"/>
  <circle cx="16" cy="16" r="12.15" fill="#3d6bff"/>
  <circle cx="16" cy="16" r="5.35" fill="#000000"/>
  <circle cx="18.2" cy="14.1" r="1.35" fill="#F4F3EF"/>
</svg>`;

export function StudioMap({
  className,
  title = "Mapa dílny Petra Adamovského v Jablonci nad Nisou",
}: {
  className?: string;
  title?: string;
}) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;

    let map: import("leaflet").Map | undefined;
    let cancelled = false;

    async function mount() {
      const leaflet = await import("leaflet");
      if (cancelled || !el) return;

      const L = leaflet.default;
      map = L.map(el, {
        center: [site.address.lat, site.address.lng],
        zoom: 16,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        },
      ).addTo(map);

      L.marker([site.address.lat, site.address.lng], {
        icon: L.divIcon({
          className: "studio-map-pin",
          html: PIN,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        }),
        title: site.address.line1,
        alt: site.name,
      }).addTo(map);

      requestAnimationFrame(() => map?.invalidateSize());
    }

    void mount();

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <div
      className={cn(
        "studio-map relative h-80 overflow-hidden rounded-xl lg:h-[28rem]",
        className,
      )}
    >
      <div ref={mapRef} className="absolute inset-0 size-full" title={title} />
    </div>
  );
}
