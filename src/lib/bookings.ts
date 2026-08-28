import type { VisitTypeId } from "@/lib/site";

export type BookingRequest = {
  id: string;
  visitType: VisitTypeId;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  note: string;
  createdAt: string;
};

const KEY = "adamovsky.bookings.v1";

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function listBookings(): BookingRequest[] {
  if (!canUseStorage()) return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as BookingRequest[]) : [];
  } catch {
    return [];
  }
}

export function saveBooking(booking: BookingRequest) {
  const next = [...listBookings(), booking];
  window.localStorage.setItem(KEY, JSON.stringify(next));
  return booking;
}

export function takenSlots(isoDate: string): string[] {
  return listBookings()
    .filter((b) => b.date === isoDate)
    .map((b) => b.time);
}

export function makeBookingId(date: string) {
  const stamp = date.replaceAll("-", "");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `PA-${stamp}-${rand}`;
}

export function formatBookingMailto(booking: BookingRequest) {
  const subject = encodeURIComponent(`Objednávka návštěvy ${booking.id}`);
  const body = encodeURIComponent(
    [
      `Dobrý den,`,
      ``,
      `rád(a) bych objednal(a) návštěvu v dílně.`,
      ``,
      `Typ: ${booking.visitType}`,
      `Datum: ${booking.date}`,
      `Čas: ${booking.time}`,
      `Jméno: ${booking.name}`,
      `Telefon: ${booking.phone}`,
      `E-mail: ${booking.email}`,
      booking.note ? `Poznámka: ${booking.note}` : "",
      ``,
      `Referenční číslo: ${booking.id}`,
    ]
      .filter(Boolean)
      .join("\n"),
  );
  return `mailto:oko@ocniprotezy-sklo.cz?subject=${subject}&body=${body}`;
}
