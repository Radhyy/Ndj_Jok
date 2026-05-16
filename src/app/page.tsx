"use client";

import { useState } from "react";
import {
  BadgeCheck,
  CalendarClock,
  Car,
  Check,
  Clock3,
  GalleryVertical,
  Hammer,
  Headset,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wrench,
} from "lucide-react";

const strengths = [
  "Teknisi Berpengalaman",
  "Workshop Luas 10+ Mobil",
  "Akses Lokasi Dekat Exit Tol",
  "Jadwal Pemasangan Tepat Waktu",
  "Pelayanan Jujur, Solutif, Tanggap",
];



const premiumCollections = [
  {
    name: "Carviero",
    badge: "Featured",
    description: "Pilihan clean dan elegan untuk interior yang terlihat mahal tanpa berlebihan.",
    items: ["V12", "Vanza", "Carviero Neo", "Carviero Class"],
    featured: true,
  },
  {
    name: "MB Tech",
    badge: "Best Seller",
    description: "Karakter premium modern dengan opsi warna dan tekstur yang lengkap.",
    items: ["New Superior", "Camaro", "Carrera Fresh", "Premium Carrera", "Picasso"],
  },
  {
    name: "Vision",
    badge: "Sporty",
    description: "Tegas, berani, dan cocok untuk tampilan interior yang lebih ekspresif.",
    items: ["Bugatti", "Lugano", "Gallardo", "Levante"],
  },
  {
    name: "AP Force",
    badge: "Modern",
    description: "Solusi simpel dengan finishing rapi dan nuansa premium yang bersih.",
    items: ["Napa Prime", "Vegas"],
  },
  {
    name: "Lenderlux",
    badge: "Minimal",
    description: "Ringkas, halus, dan pas untuk mobil yang ingin terlihat lebih refined.",
    items: ["Primo", "Primo Star"],
  },
  {
    name: "APN",
    badge: "Value",
    description: "Alternatif efisien untuk upgrade interior yang tetap terlihat rapi.",
    items: ["Zeus"],
  },
  {
    name: "Acura",
    badge: "Soft Tone",
    description: "Sentuhan lembut dengan karakter visual yang nyaman dipandang.",
    items: ["Accura"],
  },
  {
    name: "Karskin",
    badge: "Family",
    description: "Pilihan stabil untuk mobil keluarga dengan warna solid dan tampilan bersih.",
    items: ["Navaro", "Yukon"],
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "Konsultasi",
    desc: "Diskusi model, warna, dan kebutuhan penggunaan mobil Anda.",
  },
  {
    icon: CalendarClock,
    title: "Booking Jadwal",
    desc: "Atur jadwal pemasangan dengan slot yang paling nyaman.",
  },
  {
    icon: Hammer,
    title: "Pengerjaan",
    desc: "Proses jahit dan fitting presisi 1-3 hari oleh teknisi spesialis.",
  },
  {
    icon: BadgeCheck,
    title: "Serah Terima",
    desc: "Quality check akhir dan edukasi perawatan jok agar awet.",
  },
];

const stats = [
  { icon: Sparkles, value: "22+", label: "Project per Bulan" },
  { icon: Car, value: "1200+", label: "Unit Terpasang" },
  { icon: Users, value: "6", label: "Tim Teknisi" },
  { icon: MapPin, value: "Sidoarjo", label: "Area Workshop" },
];

const galleryImages = [
  "/Images/Avansa G 2021 Bahan MBTech Superior Warna Hitam Kombinas CarbonGunakan Cover, bekleed, ataupun .webp",
  "/Images/Bekleed Terios Adventure Bahan MBTech Camaro Hitam list MBTech Superior PutihGunakan Cover, bek.webp",
  "/Images/BMW 318 Tahun 1996Bahan MBtech Superior Warna HitamGunakan Cover, bekleed, ataupun semi bekleed.webp",
  "/Images/Brio Satya 2025Bahan Vitz Hitam List bahan MBTech Fiesta Neon GreenGunakan Cover, bekleed, atau.webp",
  "/Images/Semibekleed Mobil Grand Livina Bahan MBtech warna Maroon List CarbonGunakan Cover, bekleed, ata.webp",
];

export default function Home() {
  const [formData, setFormData] = useState({
    nama: "",
    wa: "",
    mobil: "",
    kebutuhan: "",
  });

  const handleWhatsApp = () => {
    const text = `Halo Ndj JokMobil! Saya ingin request penawaran:%0A%0ANama: ${formData.nama}%0ANo WA: ${formData.wa}%0ATipe Mobil: ${formData.mobil}%0APreferensi: ${formData.kebutuhan}`;
    window.open(`https://wa.me/6281216356153?text=${text}`, "_blank");
  };

  return (
    <div className="w-full bg-[var(--background)] text-[var(--foreground)]">
      <header
        className="relative flex min-h-[100dvh] flex-col overflow-hidden"
        style={{
          backgroundImage:
            "url('/Images/WhatsApp Image 2026-05-07 at 1.04.43 PM.jpeg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay absolute inset-0" />
        <nav className="relative mx-auto flex w-[92%] max-w-6xl shrink-0 items-center justify-between py-7 text-white">
          <p className="font-display text-xl tracking-wider">Ndj_JokMobil</p>
          <div className="hidden items-center gap-8 text-sm font-semibold lg:flex">
            <a href="#layanan" className="transition hover:text-amber-300">
              Layanan
            </a>
            <a href="#koleksi" className="transition hover:text-amber-300">
              Koleksi
            </a>
            <a href="#proses" className="transition hover:text-amber-300">
              Proses
            </a>
            <a href="#portfolio" className="transition hover:text-amber-300">
              Portfolio
            </a>
            <a href="#kontak" className="transition hover:text-amber-300">
              Kontak
            </a>
          </div>
        </nav>

        <div className="relative mx-auto flex w-[92%] max-w-6xl flex-1 flex-col justify-center gap-7 pb-20 pt-4 text-white md:pb-32 md:pt-10">
          <p className="reveal text-sm font-bold uppercase tracking-[0.35em] text-amber-300" style={{ ["--delay" as string]: "0.1s" }}>
            Spesialis Bekleed Jok Mobil Sidoarjo
          </p>
          <h1
            className="font-display reveal max-w-3xl text-4xl leading-tight md:text-6xl"
            style={{ ["--delay" as string]: "0.2s" }}
          >
            Interior mobil Anda tampil premium, nyaman, dan berkelas.
          </h1>
          <p className="reveal max-w-2xl text-base text-stone-200 md:text-lg" style={{ ["--delay" as string]: "0.3s" }}>
            Upgrade jok mobil dengan pola jahitan rapi, bahan original, dan finishing elegan untuk kebutuhan harian maupun show car.
          </p>
          <div className="reveal flex flex-wrap gap-4" style={{ ["--delay" as string]: "0.4s" }}>
            <a
              href="#kontak"
              className="rounded-full bg-[var(--brand)] px-7 py-3 text-sm font-bold text-white transition hover:bg-[var(--brand-strong)]"
            >
              Konsultasi Gratis
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-amber-200/70 px-7 py-3 text-sm font-semibold text-amber-100 transition hover:bg-white/10"
            >
              Lihat Portfolio
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="layanan" className="soft-pattern py-20">
          <div className="mx-auto w-[92%] max-w-5xl">
            <div className="premium-card rounded-3xl p-8 md:p-12">
              <h2 className="font-display mb-10 text-center text-3xl md:text-4xl">Keunggulan Workshop</h2>
              <div className="flex flex-wrap justify-center gap-5 md:gap-6">
                {strengths.map((item) => (
                  <div
                    key={item}
                    className="flex w-full max-w-[320px] items-center gap-4 rounded-2xl border border-[var(--line)] bg-white/60 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-[var(--brand-strong)]">
                      <Check className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-semibold leading-snug text-stone-800 md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="koleksi" className="relative overflow-hidden py-24 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1592853625601-bb9d23da12fc?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(12,10,7,0.92)_0%,rgba(28,21,14,0.86)_38%,rgba(12,10,7,0.94)_100%)]" />
          <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto w-[92%] max-w-6xl">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5" /> Koleksi Premium
                </p>
                <h2 className="font-display mt-4 text-4xl md:text-5xl">Koleksi Premium Kami</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-200 md:text-base">
                  Pilihan material dengan karakter berbeda, tapi tetap satu arah: tampil mewah, nyaman dipakai, dan selaras dengan nuansa landing page.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-stone-200 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-200">Nuansa</p>
                <p className="mt-1 max-w-xs leading-6">
                  Background dibuat tetap hangat dan premium, lalu kartu ditingkatkan dengan efek glass dan highlight emas.
                </p>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {premiumCollections.map((collection) => {
                const isFeatured = collection.featured;

                return (
                  <article
                    key={collection.name}
                    className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/10 ${
                      isFeatured ? "lg:col-span-2 lg:p-8" : "min-h-[250px]"
                    }`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,180,68,0.22),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_45%)] opacity-90 transition duration-300 group-hover:opacity-100" />
                    <div className="relative flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.32em] text-amber-200/80">Brand</p>
                          <h3 className="mt-2 text-2xl font-semibold text-white">{collection.name}</h3>
                          <p className="mt-2 max-w-md text-sm leading-6 text-stone-200">{collection.description}</p>
                        </div>
                        <span className="shrink-0 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-100">
                          {collection.badge}
                        </span>
                      </div>

                      <ul className={isFeatured ? "mt-6 grid gap-3 sm:grid-cols-2" : "mt-5 flex flex-wrap gap-2"}>
                        {collection.items.map((item) => (
                          <li
                            key={item}
                            className={`rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-stone-100 ${
                              isFeatured ? "shadow-[0_10px_22px_rgba(0,0,0,0.18)]" : ""
                            }`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-6 text-sm text-amber-100/90">
                        <span className="inline-flex items-center gap-2">
                          <span className="h-px w-8 bg-amber-300/70" /> Finishing premium yang tetap aman untuk dipakai harian.
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="proses" className="bg-[#ece7dd] py-20">
          <div className="mx-auto w-[92%] max-w-6xl">
            <h2 className="font-display text-center text-4xl">Our Working Process</h2>
            <p className="mt-3 text-center text-sm text-[var(--muted)] md:text-base">
              Alur layanan terstruktur agar hasil presisi dan proses tetap nyaman.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step) => (
                <article key={step.title} className="premium-card rounded-2xl p-6">
                  <step.icon className="h-9 w-9 text-[var(--brand-strong)]" />
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid w-[92%] max-w-6xl gap-5 rounded-3xl bg-[#17130d] p-8 text-white md:grid-cols-4 md:p-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto h-8 w-8 text-amber-300" />
                <p className="mt-3 text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-stone-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="py-20">
          <div className="mx-auto w-[92%] max-w-6xl">
            <div className="mb-8 flex items-center justify-between gap-6">
              <div>
                <h2 className="font-display text-4xl">Our Motto.</h2>
                <p className="mt-2 text-sm text-[var(--muted)] md:text-base">
                  Dengan kenyamanan dan kepuasan Anda, kualitas kami terus berkembang.
                </p>
              </div>
              <button className="hidden items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2 text-sm font-semibold md:flex">
                <GalleryVertical className="h-4 w-4" /> Lihat Semua
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {galleryImages.map((image, index) => (
                <div
                  key={image}
                  className="group relative h-64 w-full overflow-hidden rounded-2xl shadow-lg"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(12,10,7,0.72), rgba(12,10,7,0.28)), url('${image}')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute inset-0 transition duration-300 group-hover:bg-black/30" />
                  <p className="absolute bottom-4 left-4 text-sm font-semibold text-stone-100">Detail Jok #{index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#ece7dd] py-20">
          <div className="mx-auto w-[92%] max-w-6xl">
            <h2 className="font-display text-center text-4xl">Testimoni Pelanggan</h2>
            <p className="mt-2 text-center text-sm text-[var(--muted)]">
              Bukti nyata kepuasan pelanggan dari hasil pengerjaan di workshop kami.
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <article className="premium-card rounded-2xl p-7">
                <div className="mb-4 flex items-center gap-3">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                </div>
                <p className="text-base leading-7 text-stone-700">
                  &quot;Pengerjaan super rapi, jahitan presisi, dan jok jadi jauh lebih nyaman untuk perjalanan keluarga. Selesai tepat waktu sesuai janji.&quot;
                </p>
                <p className="mt-5 text-sm font-semibold text-stone-900">Reborn Owner - Dayat, Surabaya</p>
              </article>

              <article className="premium-card rounded-2xl p-7">
                <div className="mb-4 flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-[var(--brand-strong)]" />
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand-strong)]">Garansi Jahitan</p>
                </div>
                <ul className="space-y-3 text-sm text-stone-700">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-700" /> Material original dan mudah dibersihkan.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-700" /> Model bisa custom sporty maupun elegant.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-700" /> Tim komunikatif dari booking hingga finishing.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-[92%] max-w-6xl rounded-3xl bg-gradient-to-r from-[#1e1710] via-[#312315] to-[#5b3b17] p-8 text-white md:p-12">
            <h2 className="font-display text-4xl">Siap Upgrade Interior Anda?</h2>
            <p className="mt-3 max-w-2xl text-sm text-stone-200 md:text-base">
              Kami pastikan pengerjaan rapi, presisi, dan menggunakan material 100% original. Kepuasan Anda dan kenyamanan berkendara adalah prioritas utama workshop kami.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
                <ShieldCheck className="h-4 w-4 text-amber-300" /> Garansi Jahitan
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
                <Check className="h-4 w-4 text-amber-300" /> 100% Material Original
              </span>
            </div>
          </div>
        </section>

        <section id="kontak" className="border-t border-[var(--line)] py-20">
          <div className="mx-auto grid w-[92%] max-w-6xl gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl">Hubungi Kami</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
                Konsultasikan kebutuhan interior mobil Anda sekarang. Tim kami siap memberi rekomendasi material, estimasi biaya, dan jadwal pemasangan paling ideal.
              </p>
              <div className="mt-8 space-y-4">
                <p className="flex items-center gap-3 text-sm md:text-base">
                  <MapPin className="h-5 w-5 text-[var(--brand-strong)]" /> South Sidoarjo, Jawa Timur, Indonesia
                </p>
                <p className="flex items-center gap-3 text-sm md:text-base">
                  <Phone className="h-5 w-5 text-[var(--brand-strong)]" /> WA / Telp +62 812-1635-6153
                </p>
                <p className="flex items-center gap-3 text-sm md:text-base">
                  <BadgeCheck className="h-5 w-5 text-[var(--brand-strong)]" /> @ndj_jokmobil
                </p>
                <p className="flex items-center gap-3 text-sm md:text-base">
                  <Clock3 className="h-5 w-5 text-[var(--brand-strong)]" /> Senin - Sabtu, 08.00 - 17.00
                </p>
              </div>
            </div>

            <div className="premium-card rounded-3xl p-7 md:p-9">
              <h3 className="text-2xl font-semibold">Request Penawaran Cepat</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">Kirim data mobil Anda, kami balas estimasi secepatnya.</p>
              <form className="mt-6 space-y-4">
                <input
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none ring-[var(--brand)] transition focus:ring-1"
                  placeholder="Nama"
                />
                <input
                  value={formData.wa}
                  onChange={(e) => setFormData({ ...formData, wa: e.target.value })}
                  className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none ring-[var(--brand)] transition focus:ring-1"
                  placeholder="Nomor WhatsApp"
                />
                <input
                  value={formData.mobil}
                  onChange={(e) => setFormData({ ...formData, mobil: e.target.value })}
                  className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none ring-[var(--brand)] transition focus:ring-1"
                  placeholder="Tipe Mobil"
                />
                <textarea
                  value={formData.kebutuhan}
                  onChange={(e) => setFormData({ ...formData, kebutuhan: e.target.value })}
                  className="h-28 w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-sm outline-none ring-[var(--brand)] transition focus:ring-1"
                  placeholder="Preferensi warna atau model"
                />
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)]"
                >
                  <Wrench className="h-4 w-4" /> Kirim Permintaan
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <a
        href="#kontak"
        className="fixed bottom-5 right-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-[0_10px_28px_rgba(34,197,94,0.45)] transition hover:scale-105"
      >
        <Headset className="h-7 w-7" />
      </a>

      <footer className="border-t border-[var(--line)] bg-[#19140e] py-6 text-center text-sm text-stone-200">
        © 2026 CoverJokMobil. Premium Seat Cover Specialist Sidoarjo.
      </footer>
    </div>
  );
}
