import { useState } from "react";
import { toast } from "sonner";
import { Instagram, Linkedin, ExternalLink, Send, MessageCircle, Mail, MapPin } from "lucide-react";
import { LINKS, WHATSAPP_NUMBER, CONTACT_EMAIL, RESIDENCIA, AURUM } from "../lib/constants";

const PROFILES = ["Jugador", "Club", "Familia", "Convenio", "Otro"];

const buildMessage = (f) =>
  [
    `Hola Footwork Agency, soy ${f.name} (${f.profile}).`,
    f.email ? `Email: ${f.email}` : "",
    f.phone ? `Tel: ${f.phone}` : "",
    "",
    f.message,
  ]
    .filter(Boolean)
    .join("\n");

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", profile: "Jugador", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const update = (k, v) => setForm({ ...form, [k]: v });

  const sendVia = async (channel) => {
    if (!form.name || !form.email || !form.message) {
      toast.error("Completá nombre, email y mensaje");
      return;
    }
    setSubmitting(true);
    const text = buildMessage(form);
    if (channel === "whatsapp") {
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      const subject = `Consulta web — ${form.profile} — ${form.name}`;
      const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
      window.location.href = url;
    }
    toast.success("Abriendo " + (channel === "whatsapp" ? "WhatsApp" : "tu cliente de email") + "...");
    setSubmitting(false);
  };

  return (
    <section id="contacto" data-testid="contact-section" className="relative py-24 md:py-32 bg-[#06121F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.4em] text-[#5BB6FF] font-medium">— Contacto</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.95] font-bold text-white mt-4 mb-8">
              Hablemos
            </h2>

            <div className="space-y-4 mb-10">
              <a
                data-testid="contact-whatsapp-direct"
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#0B1B2E] hover:bg-[#102844] border border-white/10 hover:border-[#5BB6FF]/50 p-5 transition-all group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#25D366]/15 border border-[#25D366]/40">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-white/50">WhatsApp</div>
                  <div className="text-white font-medium truncate">+598 98 681 610</div>
                </div>
                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#5BB6FF]" />
              </a>

              <a
                data-testid="contact-email-direct"
                href={LINKS.email}
                className="flex items-center gap-4 bg-[#0B1B2E] hover:bg-[#102844] border border-white/10 hover:border-[#5BB6FF]/50 p-5 transition-all group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#0066CC]/15 border border-[#5BB6FF]/40">
                  <Mail className="w-4 h-4 text-[#5BB6FF]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-white/50">Email</div>
                  <div className="text-white font-medium truncate">{CONTACT_EMAIL}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#5BB6FF]" />
              </a>

              <a
                data-testid="contact-instagram-direct"
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#0B1B2E] hover:bg-[#102844] border border-white/10 hover:border-[#5BB6FF]/50 p-5 transition-all group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#0066CC]/15 border border-[#5BB6FF]/40">
                  <Instagram className="w-4 h-4 text-[#5BB6FF]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-white/50">Instagram</div>
                  <div className="text-white font-medium truncate">@footworkagency</div>
                </div>
                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#5BB6FF]" />
              </a>

              <a
                data-testid="contact-linkedin-direct"
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#0B1B2E] hover:bg-[#102844] border border-white/10 hover:border-[#5BB6FF]/50 p-5 transition-all group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#0066CC]/15 border border-[#5BB6FF]/40">
                  <Linkedin className="w-4 h-4 text-[#5BB6FF]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-white/50">LinkedIn</div>
                  <div className="text-white font-medium truncate">Emiliano Martínez</div>
                </div>
                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#5BB6FF]" />
              </a>
            </div>

            <div className="space-y-3 text-xs text-white/55 border-t border-white/5 pt-6">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#5BB6FF] mt-0.5 shrink-0" />
                <span>
                  <span className="uppercase tracking-widest text-white/40 text-[10px] block mb-0.5">Residencia de jugadores</span>
                  {RESIDENCIA.address}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#5BB6FF] mt-0.5 shrink-0" />
                <span>
                  <span className="uppercase tracking-widest text-white/40 text-[10px] block mb-0.5">Clínica Aurum</span>
                  {AURUM.address}
                </span>
              </div>
            </div>
          </div>

          <form
            data-testid="contact-form"
            onSubmit={(e) => { e.preventDefault(); sendVia("whatsapp"); }}
            className="lg:col-span-7 bg-[#0B1B2E] border border-white/5 p-6 sm:p-10 space-y-5"
          >
            <div className="mb-2">
              <h3 className="font-display text-2xl uppercase tracking-tight text-white font-bold mb-1">
                Formulario de consulta
              </h3>
              <p className="text-white/55 text-sm font-light">
                Completá el formulario y enviá tu mensaje directo por WhatsApp o email.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Nombre y apellido *">
                <input
                  data-testid="contact-name-input"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#5BB6FF] outline-none py-3 text-white"
                  required
                />
              </Field>
              <Field label="Email *">
                <input
                  data-testid="contact-email-input"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#5BB6FF] outline-none py-3 text-white"
                  required
                />
              </Field>
              <Field label="Teléfono">
                <input
                  data-testid="contact-phone-input"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#5BB6FF] outline-none py-3 text-white"
                />
              </Field>
              <Field label="Motivo de consulta">
                <select
                  data-testid="contact-profile-select"
                  value={form.profile}
                  onChange={(e) => update("profile", e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#5BB6FF] outline-none py-3 text-white"
                >
                  {PROFILES.map((p) => (
                    <option key={p} value={p} className="bg-[#06121F]">{p}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Mensaje *">
              <textarea
                data-testid="contact-message-input"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={5}
                className="w-full bg-transparent border-b border-white/10 focus:border-[#5BB6FF] outline-none py-3 text-white resize-none"
                required
              />
            </Field>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                data-testid="contact-submit-whatsapp"
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1FB955] disabled:opacity-50 text-white font-bold uppercase tracking-widest text-sm px-6 py-4 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Enviar por WhatsApp
              </button>
              <button
                data-testid="contact-submit-email"
                type="button"
                onClick={() => sendVia("email")}
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 bg-[#0066CC] hover:bg-[#0052A3] disabled:opacity-50 text-white font-bold uppercase tracking-widest text-sm px-6 py-4 transition-colors"
              >
                <Send className="w-4 h-4" />
                Enviar por Email
              </button>
            </div>
            <p className="text-[10px] text-white/40 uppercase tracking-widest">
              Tu mensaje se abrirá pre-cargado en WhatsApp o en tu cliente de email.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium mb-1">{label}</span>
      {children}
    </label>
  );
}
