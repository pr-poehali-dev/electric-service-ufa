import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+7 (999) 123-45-67";

const services = [
  { icon: "Zap",         title: "Монтаж проводки",    desc: "Прокладка кабелей, розетки и выключатели под ключ." },
  { icon: "ShieldCheck", title: "Замена щитка",       desc: "Автоматы, УЗО, дифавтоматы — по всем нормам." },
  { icon: "Lightbulb",  title: "Освещение",           desc: "Точечное, линейное, умный свет — любой сложности." },
  { icon: "Home",       title: "Ремонт электрики",    desc: "Диагностика, замена старой проводки, устранение КЗ." },
  { icon: "Settings",   title: "Умный дом",           desc: "Автоматика, управление светом и климатом." },
  { icon: "Plug",       title: "Подключение техники", desc: "Плиты, бойлеры, кондиционеры, оборудование." },
];

const portfolio = [
  {
    img: "https://cdn.poehali.dev/projects/7c594f1c-fb91-4640-b559-b875926c87be/files/ab19fd61-6673-4439-9415-f4167181c4fd.jpg",
    title: "Монтаж щитка",
    tag: "Распределительный щит",
  },
  {
    img: "https://cdn.poehali.dev/projects/7c594f1c-fb91-4640-b559-b875926c87be/files/afb412e1-e909-4dd5-afd0-8169c017d423.jpg",
    title: "Разводка проводки",
    tag: "Ремонт квартиры",
  },
  {
    img: "https://cdn.poehali.dev/projects/7c594f1c-fb91-4640-b559-b875926c87be/files/4be474c2-0870-42ab-9990-1c6a289eb3a7.jpg",
    title: "Умное освещение",
    tag: "Умный дом",
  },
];

const stats = [
  { value: "12+",  label: "лет опыта" },
  { value: "500+", label: "объектов сдано" },
  { value: "100%", label: "гарантия работ" },
  { value: "24/7", label: "аварийный выезд" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-steel-900 overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-steel-900/90 backdrop-blur-md border-b border-steel-600/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-volt flex items-center justify-center">
              <Icon name="Zap" size={18} className="text-steel-900" />
            </div>
            <span className="font-display font-bold text-lg tracking-wider text-white uppercase">Электрик</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[["services","Услуги"],["portfolio","Портфолио"],["contacts","Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="nav-link">{label}</button>
            ))}
          </div>

          <a
            href={`tel:${PHONE.replace(/\D/g,"")}`}
            className="hidden md:flex items-center gap-2 bg-volt text-steel-900 font-display font-semibold text-sm px-4 py-2 uppercase tracking-wider hover:bg-volt-light transition-colors glow-volt"
          >
            <Icon name="Phone" size={15} />
            Позвонить
          </a>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-steel-800 border-t border-steel-600/30 px-6 py-4 flex flex-col gap-4">
            {[["services","Услуги"],["portfolio","Портфолио"],["contacts","Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="nav-link text-left">{label}</button>
            ))}
            <a
              href={`tel:${PHONE.replace(/\D/g,"")}`}
              className="flex items-center gap-2 bg-volt text-steel-900 font-display font-semibold text-sm px-4 py-2 uppercase tracking-wider w-fit glow-volt"
            >
              <Icon name="Phone" size={15} />
              Позвонить
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-16 grid-texture">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10"
            style={{ background: "radial-gradient(ellipse at 80% 40%, #F5C518 0%, transparent 60%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-volt/40 to-transparent" />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute w-px bg-gradient-to-b from-transparent via-volt/8 to-transparent h-full"
              style={{ left: `${12 + i * 18}%` }} />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 flex-1 flex items-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 anim">
              <div className="diagonal-stripe w-12 h-6 opacity-80" />
              <span className="font-display text-volt text-sm tracking-[0.3em] uppercase">Профессиональный электрик</span>
            </div>

            <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-none uppercase mb-6 anim"
              style={{ animationDelay: "0.1s" }}>
              Электро<br />
              <span className="text-volt text-glow">монтаж</span>
            </h1>

            <p className="font-ibm text-steel-300 text-lg leading-relaxed mb-10 max-w-md anim"
              style={{ animationDelay: "0.2s" }}>
              Квалифицированный электрик с опытом 12 лет. Работы любой
              сложности — от розетки до полного монтажа в доме.
            </p>

            <div className="flex flex-wrap gap-4 anim" style={{ animationDelay: "0.3s" }}>
              <a
                href={`tel:${PHONE.replace(/\D/g,"")}`}
                className="flex items-center gap-3 bg-volt text-steel-900 font-display font-bold text-base px-8 py-4 uppercase tracking-wider hover:bg-volt-light transition-all glow-volt hover:scale-105 duration-200"
              >
                <Icon name="Phone" size={20} />
                Позвонить сейчас
              </a>
              <button
                onClick={() => scrollTo("services")}
                className="flex items-center gap-3 border border-steel-500 text-white font-display font-medium text-base px-8 py-4 uppercase tracking-wider hover:border-volt hover:text-volt transition-all duration-200"
              >
                Наши услуги <Icon name="ArrowRight" size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative bg-steel-800/80 backdrop-blur-sm border-t border-steel-600/40">
          <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-2xl font-bold text-volt">{s.value}</div>
                <div className="font-ibm text-xs text-steel-400 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-steel-800 relative">
        <div className="absolute inset-0 grid-texture opacity-50" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="mb-16 anim">
            <span className="section-line mb-4" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">Наши услуги</h2>
            <p className="font-ibm text-steel-300 mt-4 max-w-lg">
              Полный спектр электромонтажных работ для жилых и коммерческих объектов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-steel-600/20">
            {services.map((s, i) => (
              <div
                key={i}
                className="anim bg-steel-900 p-8 group hover:bg-steel-700/50 transition-colors duration-300 border border-steel-600/20 hover:border-volt/30"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 bg-steel-700 group-hover:bg-volt transition-colors duration-300 flex items-center justify-center mb-6">
                  <Icon name={s.icon} size={22} className="text-volt group-hover:text-steel-900 transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white uppercase tracking-wide mb-3">{s.title}</h3>
                <p className="font-ibm text-steel-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-steel-900 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 anim">
            <span className="section-line mb-4" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">Портфолио</h2>
            <p className="font-ibm text-steel-300 mt-4 max-w-lg">Реальные работы — реальный результат</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portfolio.map((p, i) => (
              <div
                key={i}
                className="anim group relative overflow-hidden border border-steel-600/30 hover:border-volt/50 transition-all duration-300"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-steel-900 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block font-display text-xs text-volt uppercase tracking-widest mb-1">{p.tag}</span>
                  <h3 className="font-display text-lg font-semibold text-white uppercase">{p.title}</h3>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-volt/0 group-hover:bg-volt transition-colors duration-300 flex items-center justify-center">
                  <Icon name="ArrowUpRight" size={16} className="text-steel-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-volt relative overflow-hidden">
        <div className="absolute inset-0 diagonal-stripe opacity-15" />
        <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-900 uppercase">Нужен электрик?</h2>
            <p className="font-ibm text-steel-700 mt-2">Звоните — выезд в день обращения, смета бесплатно</p>
          </div>
          <a
            href={`tel:${PHONE.replace(/\D/g,"")}`}
            className="flex items-center gap-3 bg-steel-900 text-volt font-display font-bold text-lg px-10 py-5 uppercase tracking-wider hover:bg-steel-800 transition-colors shrink-0"
          >
            <Icon name="Phone" size={22} />
            {PHONE}
          </a>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-steel-800 relative">
        <div className="absolute inset-0 grid-texture opacity-30" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="mb-16 anim">
            <span className="section-line mb-4" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">Контакты</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-0 anim divide-y divide-steel-600/30">
              {[
                { icon: "Phone",  label: "Телефон", value: PHONE,                   href: `tel:${PHONE.replace(/\D/g,"")}` },
                { icon: "Mail",   label: "Email",   value: "elektrik@example.ru",   href: "mailto:elektrik@example.ru" },
                { icon: "MapPin", label: "Район",   value: "Москва и Мск. область", href: null },
                { icon: "Clock",  label: "График",  value: "Пн–Вс 8:00–22:00 / аварийно 24/7", href: null },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-5 py-5">
                  <div className="w-10 h-10 bg-steel-700 border border-volt/30 flex items-center justify-center shrink-0">
                    <Icon name={c.icon} size={18} className="text-volt" />
                  </div>
                  <div>
                    <div className="font-display text-xs text-steel-400 uppercase tracking-widest mb-1">{c.label}</div>
                    {c.href
                      ? <a href={c.href} className="font-ibm text-white hover:text-volt transition-colors text-lg">{c.value}</a>
                      : <span className="font-ibm text-white text-lg">{c.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="anim" style={{ animationDelay: "0.15s" }}>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                {[
                  { label: "Ваше имя",  type: "text", placeholder: "Иван Иванов" },
                  { label: "Телефон",   type: "tel",  placeholder: "+7 (___) ___-__-__" },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="font-display text-xs text-steel-400 uppercase tracking-widest block mb-2">{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder}
                      className="w-full bg-steel-700 border border-steel-500 text-white placeholder-steel-400 px-4 py-3 font-ibm focus:outline-none focus:border-volt transition-colors" />
                  </div>
                ))}
                <div>
                  <label className="font-display text-xs text-steel-400 uppercase tracking-widest block mb-2">Опишите задачу</label>
                  <textarea rows={4} placeholder="Нужно заменить проводку в квартире..."
                    className="w-full bg-steel-700 border border-steel-500 text-white placeholder-steel-400 px-4 py-3 font-ibm focus:outline-none focus:border-volt transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-volt text-steel-900 font-display font-bold uppercase tracking-widest py-4 hover:bg-volt-light transition-colors glow-volt text-sm">
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-steel-900 border-t border-steel-600/30 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-volt flex items-center justify-center">
              <Icon name="Zap" size={13} className="text-steel-900" />
            </div>
            <span className="font-display font-bold text-sm tracking-wider text-white uppercase">Электрик</span>
          </div>
          <p className="font-ibm text-steel-400 text-xs">© 2024 Профессиональный электрик. Все права защищены.</p>
          <a href={`tel:${PHONE.replace(/\D/g,"")}`} className="font-display text-volt text-sm hover:text-volt-light transition-colors uppercase tracking-wider">
            {PHONE}
          </a>
        </div>
      </footer>

      {/* Floating call — mobile */}
      <a
        href={`tel:${PHONE.replace(/\D/g,"")}`}
        className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-volt flex items-center justify-center glow-volt hover:scale-110 transition-transform duration-200"
        aria-label="Позвонить"
      >
        <Icon name="Phone" size={24} className="text-steel-900" />
      </a>
    </div>
  );
}
