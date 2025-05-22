import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Projects() {
  const data = [
    {
      title: "e-gereja",
      content: (
        <div>
          <h2 className="mb-4 text-xl font-bold text-neutral-800 md:text-2xl dark:text-neutral-200">
            Website e-gereja
          </h2>
          <p className="mb-8 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
            Website gereja yang berisi informasi tentang gereja, jadwal ibadah,
            dan berita terbaru. Website ini dibangun menggunakan React Js dan
            Bootstrap.
          </p>
          <div className="md:grid md:grid-cols-2 gap-4">
            <img
              src="/images/ssgereja.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Zoeeell Lib",
      content: (
        <div>
          <h2 className="mb-4 text-xl font-bold text-neutral-800 md:text-2xl dark:text-neutral-200">
            Website Perpustakaan
          </h2>
          <p className="mb-8 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
            Website perpustakaan yang berisi informasi tentang perpustakaan,
            koleksi buku, dan peminjaman buku. Website ini dibangun menggunakan
            React Ts dan Tailwindcss.
          </p>
          <div className="md:grid md:grid-cols-2 gap-4">
            <img
              src="/images/ssperpus.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Blog Site",
      content: (
        <div>
          <h2 className="mb-4 text-xl font-bold text-neutral-800 md:text-2xl dark:text-neutral-200">
            Blog Site
          </h2>
          <p className="mb-8 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
            Website blog yang bisa digunakan untuk membaca dan membuat blog.
            Website ini dibangun menggunakan React Ts dan Tailwindcss.
          </p>
          <div className="md:grid md:grid-cols-2 gap-4">
            <img
              src="/images/ssblog.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip pt-40" id="projects">
      <Timeline data={data} />
    </div>
  );
}
