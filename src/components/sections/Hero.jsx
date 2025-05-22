"use client";

import { Highlight } from "@/components/ui/hero-highlight";
import { CardContainer, CardItem } from "@/components/ui/3d-card";
import { LinkPreview } from "@/components/ui/link-preview";
import { Button } from "@/components/ui/moving-border";
import GitHubIcon from "@mui/icons-material/GitHub";

export function Hero() {
  const handleViewPdf = () => {
    window.open("/CV-DikaAlfiDamara.pdf", "_blank");
  };

  const handleGit = () => {
    window.open("https://github.com/dikadmr", "_blank");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 py-8 mx-auto max-w-7xl md:gap-16">
      <CardContainer className="inter-var">
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="/images/profil.png"
            className="w-55 h-55 md:h-120 md:w-120 rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardContainer>
      <div className="items-center justify-center text-center md:text-left">
        <Highlight className="text-3xl md:text-7xl dark:text-white font-bold">
          Dika Alfi Damara
        </Highlight>
        <div className="max-w-2xl text-base md:text-xl my-8 dark:text-neutral-200">
          Saya seorang{" "}
          <LinkPreview
            url="https://id.wikipedia.org/wiki/Pengembangan_web_tampak-depan"
            className="font-bold"
          >
            Frontend Developer
          </LinkPreview>{" "}
          junior yang antusias dalam membangun antarmuka web yang menarik dan
          responsif. Dengan semangat belajar yang tinggi, saya terus mengasah
          keterampilan dalam{" "}
          <LinkPreview url="https://react.dev/" className="font-bold">
            React
          </LinkPreview>
          ,{" "}
          <LinkPreview url="https://nextjs.org/" className="font-bold">
            Next Js
          </LinkPreview>
          , dan{" "}
          <LinkPreview url="https://tailwindcss.com" className="font-bold">
            Tailwind CSS
          </LinkPreview>{" "}
          untuk menciptakan pengalaman digital yang lebih baik.
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start">
          <Button
            borderRadius="1.75rem"
            className="cursor-pointer bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            onClick={handleViewPdf}
          >
            Resume
          </Button>
          <Button
            borderRadius="1.75rem"
            className="cursor-pointer bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            onClick={handleGit}
          >
            <GitHubIcon className="text-black dark:text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
