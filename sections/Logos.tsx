import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Logo {
  src?: ImageWidget;
  /** @description text alternative */
  altText?: string;
}

export interface Props {
  title?: string;
  logos?: Logo[];

  /**
   * @title Section ID
   * @description Unique identifier for the section
   */
  id?: string;
}

const IMG_PLACEHODLER = Array(30).fill(0).map(() => ({
  src:
    "http://localhost:10503/live/invoke/website/loaders…bf61ef544599b5.png&fit=cover&width=600&height=600",
  altText: "Logo",
}));

export default function Logos({
  title = "Edit this heading however you want",
  logos = IMG_PLACEHODLER,
  id
}: Props) {
  const slideContent = (
    <div class="flex items-center gap-20">
      {logos?.map((logo) => {
        return (
          <Image
            src={logo.src || ""}
            alt={logo.altText || ""}
            width={110}
            height={25}
          />
        );
      })}
    </div>
  );
  return (
    <section id={id} class="relative py-16 md:py-24 bg-white">
      
      <div class="container mx-auto px-4 relative z-10">
        {/* Título Padronizado */}
        <div class="flex flex-col items-center mb-16">
          <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 bg-green-100 rounded-full">
            <span class="text-sm font-medium text-green-800">Parceiros</span>
          </div>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 text-center mb-8 max-w-4xl">
            {title}
          </h2>
          
          <div class="flex items-center gap-3 justify-center mb-10">
            <div class="h-1 w-10 bg-green-500 rounded-full"></div>
            <div class="h-1 w-16 bg-green-700 rounded-full"></div>
            <div class="h-1 w-10 bg-green-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Logo grid */}
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div class="relative w-full overflow-hidden h-11">
            <div class="animate-sliding absolute top-0 left-0 flex flex-nowrap h-11">
              {slideContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
