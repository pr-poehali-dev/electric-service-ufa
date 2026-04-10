import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+7 (999) 123-45-67";

const services = [
  { num: "01", title: "Монтаж проводки", desc: "Прокладка кабелей, розетки, выключатели под ключ." },
  { num: "02", title: "Замена щитка", desc: "Автоматы, УЗО, дифавтоматы — всё по норме." },
  { num: "03", title: "Освещение", desc: "Точечное, линейное, умный свет — любой сложности." },
  { num: "04", title: "Ремонт электрики", desc: "Диагностика, замена старой проводки, КЗ." },
  { num: "05", title: "Умный дом", desc: "Автоматика, управление светом и климатом." },
  { num: "06", title: "Подключение техники", desc: "Плиты, бойлеры, кондиционеры, оборудование." },
];

const portfolio = [
  {
    img: "https://cdn.poehali.dev/projects/7c594f1c-fb91-4640-b559-b875926c87be/files/447b214b-f41e-4d2e-bb02-0c9b6259fa71.jpg",
    title: "Щиток",
    year: "2024",
    tag: "ЖИЛОЙ ДОМ",
  },
  {
    img: "https://cdn.poehali.dev/projects/7c594f1c-fb91-4640-b559-b875926c87be/files/8d3d9905-d0eb-4a15-b718-7c9d417bfcc1.jpg",
    title: "Проводка",
    year: "2024",
    tag: "КВАРТИРА",
  },
  {
    img: "https://cdn.poehali.dev/projects/7c594f1c-fb91-4640-b559-b875926c87be/files/4be474c2-0870-42ab-9990-1c6a289eb3a7.jpg",
    title: "Умный свет",
    year: "2023",
    tag: "ОФИС",
  },
];

const marqueeItems = [
  "ЭЛЕКТРИК", "МОНТАЖ", "ПРОВОДКА", "ЩИТОК", "ГАРАНТИЯ", "24/7",
  "ЭЛЕКТРИК", "МОНТАЖ", "ПРОВОДКА", "ЩИТОК", "ГАРАНТИЯ", "24/7",
];

const UNB = { fontFamily: "'Unbounded', sans-serif" };
const MONO = { fontFamily: "'Space Mono', monospace" };

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("show")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".anim").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F0EDE8] text-[#0A0A0A] overflow-x-hidden" style={MONO}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F0EDE8] border-b-[3px] border-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#E63022] border-2 border-[#0A0A0A] flex items-center justify-center">
              <Icon name="Zap" size={16} className="text-[#F0EDE8]" />
            </div>
            <span style={UNB} className="font-black text-sm tracking-tight uppercase">ЭЛЕКТРИК</span>
          </button>

          <div className="hidden md:flex items-center">
            {(["services", "portfolio", "contacts"] as const).map((id, i) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="px-5 py-1 border-l-[2px] border-[#0A0A0A] text-xs uppercase tracking-widest hover:bg-[#0A0A0A] hover:text-[#F0EDE8] transition-colors"
                style={UNB}
              >
                {["Услуги", "Портфолио", "Контакты"][i]}
              </button>
            ))}
          </div>

          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="hidden md:flex items-center gap-2 bg-[#E63022] text-[#F0EDE8] px-4 py-2 text-xs uppercase tracking-wider brutal-btn-red"
            style={UNB}
          >
            <Icon name="Phone" size={13} />
            Позвонить
          </a>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t-[3px] border-[#0A0A0A] bg-[#F0EDE8] px-4 py-4 flex flex-col">
            {(["services", "portfolio", "contacts"] as const).map((id, i) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="border-b-2 border-[#0A0A0A] py-3 text-left text-xs uppercase tracking-widest"
                style={UNB}
              >
                {["— Услуги", "— Портфолио", "— Контакты"][i]}
              </button>
            ))}
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="mt-4 flex items-center gap-2 bg-[#E63022] text-[#F0EDE8] px-4 py-3 text-xs uppercase tracking-wider w-fit brutal-btn-red"
              style={UNB}
            >
              <Icon name="Phone" size={13} />
              Позвонить
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="pt-14 min-h-screen flex flex-col">
        <div className="flex-1 max-w-7xl mx-auto px-4 md:px-8 w-full grid md:grid-cols-2 border-b-[3px] border-[#0A0A0A]">

          <div className="md:border-r-[3px] border-[#0A0A0A] py-16 md:py-24 flex flex-col justify-between">
            <div>
              <div className="inline-block border-[3px] border-[#0A0A0A] px-3 py-1 text-xs uppercase tracking-widest mb-8 anim">
                Москва / Мск. область
              </div>
              <h1
                className="font-black leading-none uppercase mb-8 anim"
                style={{ ...UNB, fontSize: "clamp(52px,9vw,120px)", animationDelay: "0.1s" }}
              >
                ЭЛЕК<br />
                <span className="text-[#E63022]">ТРИК</span>
              </h1>
              <p className="text-sm leading-relaxed text-[#444] max-w-sm anim" style={{ animationDelay: "0.15s" }}>
                Профессиональный монтаж электрики любой сложности.
                Опыт 12 лет. Гарантия на все виды работ.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-10 anim" style={{ animationDelay: "0.2s" }}>
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="flex items-center gap-2 bg-[#E63022] text-[#F0EDE8] px-6 py-4 text-sm uppercase tracking-wider brutal-btn-red"
                style={UNB}
              >
                <Icon name="Phone" size={16} />
                {PHONE}
              </a>
              <button
                onClick={() => scrollTo("services")}
                className="flex items-center gap-2 bg-[#F0EDE8] text-[#0A0A0A] px-6 py-4 text-sm uppercase tracking-wider brutal-btn"
                style={UNB}
              >
                Услуги <Icon name="ArrowDown" size={16} />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden min-h-[320px] md:min-h-0">
            <img
              src="https://cdn.poehali.dev/projects/7c594f1c-fb91-4640-b559-b875926c87be/files/447b214b-f41e-4d2e-bb02-0c9b6259fa71.jpg"
              alt="Монтаж щитка"
              className="w-full h-full object-cover grayscale contrast-110"
            />
            <div className="absolute inset-0 bg-[#0A0A0A]/20 mix-blend-multiply" />
            <div className="absolute bottom-0 right-0 bg-[#F5C518] border-l-[3px] border-t-[3px] border-[#0A0A0A] px-4 py-2">
              <span className="text-xs font-black uppercase tracking-widest" style={UNB}>500+ объектов</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-2 md:grid-cols-4 border-b-[3px] border-[#0A0A0A]">
          {[
            { v: "12+", l: "лет опыта" },
            { v: "500+", l: "объектов" },
            { v: "100%", l: "гарантия" },
            { v: "24/7", l: "аварийный" },
          ].map((s, i) => (
            <div key={i} className="py-6 px-4 border-r-[2px] border-[#0A0A0A] last:border-r-0 text-center">
              <div className="text-3xl font-black leading-none" style={UNB}>{s.v}</div>
              <div className="text-[10px] uppercase tracking-widest text-[#666] mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-b-[3px] border-[#0A0A0A] bg-[#E63022] py-3">
        <div className="flex animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-[#F0EDE8] text-xs font-black uppercase tracking-[0.3em] mx-6 shrink-0" style={UNB}>
              {item} <span className="opacity-50 mx-2">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="border-b-[3px] border-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="py-12 border-b-[3px] border-[#0A0A0A] anim">
            <h2 className="text-4xl md:text-6xl font-black uppercase" style={UNB}>УСЛУГИ</h2>
          </div>
          <div className="divide-y-[2px] divide-[#0A0A0A]">
            {services.map((s, i) => (
              <div
                key={i}
                className={`anim flex items-start gap-6 py-6 px-2 cursor-pointer transition-colors duration-150 group ${activeService === i ? "bg-[#F5C518]" : "hover:bg-[#0A0A0A] hover:text-[#F0EDE8]"}`}
                style={{ animationDelay: `${i * 0.06}s` }}
                onClick={() => setActiveService(activeService === i ? null : i)}
              >
                <span className="text-xs text-[#999] group-hover:text-[#666] pt-1 shrink-0 w-8" style={MONO}>{s.num}</span>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-black uppercase" style={UNB}>{s.title}</h3>
                  {activeService === i && <p className="mt-2 text-sm text-[#333]">{s.desc}</p>}
                </div>
                <Icon name={activeService === i ? "Minus" : "Plus"} size={18} className="shrink-0 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="border-b-[3px] border-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="py-12 border-b-[3px] border-[#0A0A0A] anim">
            <h2 className="text-4xl md:text-6xl font-black uppercase" style={UNB}>ПОРТФОЛИО</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-[#0A0A0A]">
            {portfolio.map((p, i) => (
              <div key={i} className="anim group" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative overflow-hidden border-b-[3px] border-[#0A0A0A]">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-3 left-3 bg-[#F0EDE8] border-[2px] border-[#0A0A0A] px-2 py-0.5">
                    <span className="text-[10px] font-black uppercase tracking-widest" style={UNB}>{p.tag}</span>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <h3 className="text-xl font-black uppercase" style={UNB}>{p.title}</h3>
                  <span className="text-xs text-[#999]">{p.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] border-b-[3px] border-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-[#F0EDE8] leading-none" style={UNB}>
              НУЖЕН<br /><span className="text-[#F5C518]">ЭЛЕКТРИК?</span>
            </h2>
            <p className="text-[#888] text-sm mt-4">Выезд в день обращения. Смета бесплатно.</p>
          </div>
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="flex items-center gap-3 bg-[#E63022] text-[#F0EDE8] px-8 py-5 text-base uppercase tracking-wider brutal-btn-red shrink-0"
            style={UNB}
          >
            <Icon name="Phone" size={20} />
            {PHONE}
          </a>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="border-b-[3px] border-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="py-12 border-b-[3px] border-[#0A0A0A] anim">
            <h2 className="text-4xl md:text-6xl font-black uppercase" style={UNB}>КОНТАКТЫ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x-[3px] divide-[#0A0A0A]">

            <div className="py-10 md:pr-10 anim divide-y-[2px] divide-[#0A0A0A]">
              {[
                { icon: "Phone", label: "ТЕЛЕФОН", value: PHONE, href: `tel:${PHONE.replace(/\D/g, "")}` },
                { icon: "Mail", label: "EMAIL", value: "elektrik@example.ru", href: "mailto:elektrik@example.ru" },
                { icon: "MapPin", label: "РАЙОН", value: "Москва и Мск. область", href: null },
                { icon: "Clock", label: "ЧАСЫ", value: "Пн–Вс 8:00–22:00 / Аварийно 24/7", href: null },
              ].map((c, i) => (
                <div key={i} className="py-5 flex items-start gap-4">
                  <Icon name={c.icon} size={16} className="mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#888] mb-1">{c.label}</div>
                    {c.href
                      ? <a href={c.href} className="text-sm hover:text-[#E63022] transition-colors">{c.value}</a>
                      : <span className="text-sm">{c.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="py-10 md:pl-10 anim" style={{ animationDelay: "0.15s" }}>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                {[
                  { label: "ИМЯ", type: "text", placeholder: "Иван Иванов" },
                  { label: "ТЕЛЕФОН", type: "tel", placeholder: "+7 (___) ___-__-__" },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="block text-[10px] uppercase tracking-widest mb-2 text-[#888]">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      className="w-full bg-transparent border-[2px] border-[#0A0A0A] px-4 py-3 text-sm focus:outline-none focus:border-[#E63022] transition-colors placeholder-[#bbb]"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest mb-2 text-[#888]">ЗАДАЧА</label>
                  <textarea
                    rows={3}
                    placeholder="Опишите что нужно сделать..."
                    className="w-full bg-transparent border-[2px] border-[#0A0A0A] px-4 py-3 text-sm focus:outline-none focus:border-[#E63022] transition-colors resize-none placeholder-[#bbb]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0A0A0A] text-[#F0EDE8] py-4 text-xs uppercase tracking-widest brutal-btn"
                  style={UNB}
                >
                  Отправить заявку →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#E63022] border-2 border-[#0A0A0A] flex items-center justify-center">
              <Icon name="Zap" size={12} className="text-[#F0EDE8]" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest" style={UNB}>ЭЛЕКТРИК</span>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-[#888]">© 2024 — Все права защищены</p>
          <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-xs hover:text-[#E63022] transition-colors uppercase tracking-widest">
            {PHONE}
          </a>
        </div>
      </footer>

      {/* Floating call — mobile */}
      <a
        href={`tel:${PHONE.replace(/\D/g, "")}`}
        className="fixed bottom-5 right-5 z-50 md:hidden w-14 h-14 bg-[#E63022] border-[3px] border-[#0A0A0A] flex items-center justify-center brutal-btn-red"
        aria-label="Позвонить"
      >
        <Icon name="Phone" size={22} className="text-[#F0EDE8]" />
      </a>
    </div>
  );
}
