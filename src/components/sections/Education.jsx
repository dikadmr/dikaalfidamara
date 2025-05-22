"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export function Educations() {
  return (
    <div className="w-full flex items-center justify-center pt-20 px-5 md:px-0">
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-16">
              <h2 className="bg-black text-white rounded-full text-base md:text-lg w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <h1 className="text-xl md:text-3xl mb-4 font-medium">
                {item.title}
              </h1>

              <h2 className="text-lg md:text-xl mb-4 font-medium">{item.as}</h2>
              <p className="text-sm md:text-base mb-4">{item.description}</p>
            </div>
          ))}
        </div>
      </BackgroundGradient>
    </div>
  );
}

const dummyContent = [
  {
    title: "Universitas Pembangunan Panca Budi Medan",
    as: "S1 Sistem Komputer",
    description: "2022 - 2026",
    badge: "Education",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "PT. Labani Media Nusantara",
    as: "Frontend Developer - Internship",
    description: "2024 - 2025",
    badge: "Experience",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
