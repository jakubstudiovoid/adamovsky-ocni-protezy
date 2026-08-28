import { addDays, format, isBefore, startOfDay } from "date-fns";
import { cs } from "date-fns/locale";
import { CalendarCheck, ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { z } from "zod";
import {
  formatBookingMailto,
  listBookings,
  makeBookingId,
  saveBooking,
  takenSlots,
  type BookingRequest,
} from "@/lib/bookings";
import { site, timeSlots, visitTypes, type VisitTypeId } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import "react-day-picker/style.css";

const detailsSchema = z.object({
  name: z.string().trim().min(2, "Zadejte jméno a příjmení").max(80),
  phone: z
    .string()
    .trim()
    .min(9, "Zadejte telefon")
    .max(24)
    .refine((v) => /^[+0-9\s().-]{9,24}$/.test(v), "Zadejte platný telefon"),
  email: z
    .string()
    .trim()
    .min(3, "Zadejte e-mail")
    .max(120)
    .refine((v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Zadejte platný e-mail"),
  note: z.string().trim().max(500, "Poznámka je příliš dlouhá").optional(),
});

type Step = "type" | "date" | "time" | "details" | "done";

const slotGroups = [
  { label: "Ráno", slots: timeSlots.filter((slot) => slot < "12:00") },
  { label: "Odpoledne", slots: timeSlots.filter((slot) => slot >= "13:00") },
] as const;

export function ReservationForm() {
  const [step, setStep] = useState<Step>("type");
  const [visitType, setVisitType] = useState<VisitTypeId | null>(null);
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [booking, setBooking] = useState<BookingRequest | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [taken, setTaken] = useState<string[]>([]);
  const [hasPrior, setHasPrior] = useState(false);

  const minDate = startOfDay(addDays(new Date(), 1));
  const isoDate = date ? format(date, "yyyy-MM-dd") : "";

  useEffect(() => {
    setHasPrior(listBookings().length > 0);
  }, [booking]);

  useEffect(() => {
    setTaken(isoDate ? takenSlots(isoDate) : []);
  }, [isoDate]);

  function goBack() {
    setErrors({});
    if (step === "date") setStep("type");
    else if (step === "time") setStep("date");
    else if (step === "details") setStep("time");
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!visitType || !date || !time) return;
    const parsed = detailsSchema.safeParse({ name, phone, email, note });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setSubmitting(true);
    const record: BookingRequest = {
      id: makeBookingId(isoDate),
      visitType,
      date: isoDate,
      time,
      name: parsed.data.name,
      phone: parsed.data.phone,
      email: parsed.data.email,
      note: parsed.data.note ?? "",
      createdAt: new Date().toISOString(),
    };
    saveBooking(record);
    setBooking(record);
    setStep("done");
    setSubmitting(false);
  }

  const steps: Step[] = ["type", "date", "time", "details"];
  const index = Math.max(0, steps.indexOf(step));

  if (step === "done" && booking) {
    const visit = visitTypes.find((v) => v.id === booking.visitType);
    return (
      <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
        <CalendarCheck className="size-8 text-iris" />
        <h3 className="mt-5 text-2xl text-display">Žádost je odeslána.</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Petr si termín potvrdí telefonicky nebo SMS, obvykle do 24 hodin v
          pracovní dny. Dílna je jednomužná — rezervace je poptávka, ne
          automatický zámek času.
        </p>
        <dl className="mt-8 grid gap-4 border-t border-line pt-6 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs tracking-[0.16em] text-muted uppercase">
              Reference
            </dt>
            <dd className="mt-1 font-medium tabular-nums">{booking.id}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.16em] text-muted uppercase">Typ</dt>
            <dd className="mt-1">{visit?.title}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.16em] text-muted uppercase">
              Termín
            </dt>
            <dd className="mt-1">
              {format(new Date(`${booking.date}T12:00:00`), "EEEE d. MMMM yyyy", {
                locale: cs,
              })}{" "}
              · {booking.time}
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.16em] text-muted uppercase">
              Kontakt
            </dt>
            <dd className="mt-1">{booking.phone}</dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="iris">
            <a href={formatBookingMailto(booking)}>Otevřít e-mail</a>
          </Button>
          <Button
            variant="outline"
            type="button"
            onClick={() => {
              setStep("type");
              setVisitType(null);
              setDate(undefined);
              setTime(null);
              setName("");
              setPhone("");
              setEmail("");
              setNote("");
              setBooking(null);
            }}
          >
            Nová žádost
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-line bg-surface p-5 sm:p-8">
      <div className="mb-8 flex items-center gap-2" aria-hidden="true">
        {steps.map((s, i) => (
          <span
            key={s}
            className={cn(
              "h-1 flex-1 rounded-full transition-colors duration-200",
              i <= index ? "bg-iris" : "bg-line",
            )}
          />
        ))}
      </div>

      {step !== "type" ? (
        <button
          type="button"
          onClick={goBack}
          className="mb-6 inline-flex h-11 items-center gap-1 text-sm text-muted hover:text-fg"
        >
          <ChevronLeft className="size-4" />
          Zpět
        </button>
      ) : null}

      {step === "type" ? (
        <div>
          <h3 className="text-2xl text-display">Jakou návštěvu potřebujete?</h3>
          <p className="mt-2 text-sm text-muted">
            Vyberte důvod. Termín si potom zvolíte v kalendáři.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {visitTypes.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setVisitType(item.id);
                  setStep("date");
                }}
                className={cn(
                  "rounded-lg border border-line p-5 text-left transition-[border-color,background-color] duration-150 hover:border-iris/60 hover:bg-fg/3",
                  visitType === item.id && "border-iris bg-iris/10",
                )}
              >
                <span className="block text-sm font-medium tracking-tight">
                  {item.title}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-muted">
                  {item.text}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {step === "date" ? (
        <div>
          <h3 className="text-2xl text-display">Zvolte den</h3>
          <p className="mt-2 text-sm text-muted">
            Objednávky {site.hours.detail}. Soboty a neděle jsou zavřené.
          </p>
          <div className="mt-6 flex justify-center">
            <DayPicker
              mode="single"
              locale={cs}
              weekStartsOn={1}
              selected={date}
              onSelect={(next) => {
                setDate(next);
                setTime(null);
                if (next) setStep("time");
              }}
              disabled={[
                { dayOfWeek: [0, 6] },
                (day) => isBefore(startOfDay(day), minDate),
              ]}
              className="rdp-adamovsky"
            />
          </div>
        </div>
      ) : null}

      {step === "time" && date ? (
        <div>
          <h3 className="text-2xl text-display">Zvolte čas</h3>
          <p className="mt-2 text-sm text-muted">
            {format(date, "EEEE d. MMMM yyyy", { locale: cs })}
          </p>
          <div className="mt-6 space-y-6">
            {slotGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs tracking-[0.16em] text-muted uppercase">
                  {group.label}
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {group.slots.map((slot) => {
                    const busy = taken.includes(slot);
                    return (
                      <button
                        key={slot}
                        type="button"
                        disabled={busy}
                        onClick={() => {
                          setTime(slot);
                          setStep("details");
                        }}
                        className={cn(
                          "h-12 rounded-lg border border-line text-sm tabular-nums transition-[border-color,background-color] duration-150 hover:border-iris/60 disabled:cursor-not-allowed disabled:opacity-35",
                          time === slot && "border-iris bg-iris/10",
                        )}
                      >
                        {busy ? `${slot} · obsazeno` : slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {step === "details" ? (
        <form onSubmit={submit} noValidate>
          <h3 className="text-2xl text-display">Vaše údaje</h3>
          <p className="mt-2 text-sm text-muted">
            Údaje slouží jen k potvrzení termínu. Neukládají se na server.
          </p>
          <div className="mt-6 grid gap-5">
            <Field label="Jméno a příjmení" error={errors.name} htmlFor="name">
              <Input
                id="name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Telefon" error={errors.phone} htmlFor="phone">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Field>
              <Field label="E-mail" error={errors.email} htmlFor="email">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Field>
            </div>
            <Field label="Poznámka (volitelné)" error={errors.note} htmlFor="note">
              <Textarea
                id="note"
                name="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                maxLength={500}
                placeholder="Např. výměna, barva oka, předchozí protéza…"
              />
            </Field>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-muted">
            Odesláním žádáte o termín {date ? format(date, "d. M. yyyy") : ""}{" "}
            v {time}. Petr ji potvrdí. {site.hours.note}
          </p>
          <Button
            type="submit"
            variant="iris"
            size="lg"
            className="mt-6 w-full sm:w-auto"
            disabled={submitting}
          >
            Odeslat žádost
          </Button>
        </form>
      ) : null}

      {hasPrior && step === "type" ? (
        <p className="mt-8 text-xs text-muted">
          V tomto prohlížeči už máte odeslanou žádost. Petr se ozve na uvedený
          telefon.
        </p>
      ) : null}
    </div>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor} className="mb-2">
        {label}
      </Label>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
