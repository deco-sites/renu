import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /** 
   * @title Background image
   * @description Upload a background image for the hero section
   */
  backgroundImage?: ImageWidget;
  
  /**
   * @title Title
   * @default RENU
   */
  title?: string;
  
  /**
   * @title Subtitle
   * @default Reduzindo seus custos de combustível de forma sustentável e limpa por meio do biometano
   */
  subtitle?: string;
  
  /**
   * @title CTA Button
   */
  cta?: CTA;
  
  /**
   * @title Chat Button Text
   * @default Inicie uma conversa
   */
  chatButtonText?: string;
}

export default function Hero({
  backgroundImage = "",
  title = "RENU",
  subtitle = "Reduzindo seus custos de combustível de forma sustentável e limpa por meio do biometano",
  cta = {
    href: "/",
    text: "Saiba mais!",
    outline: false,
  },
  chatButtonText = "Inicie uma conversa",
}: Props) {
  return (
    <div class="relative w-full h-screen overflow-hidden">
      {/* Background Image with parallax effect */}
      <div class="absolute inset-0 w-full h-full transform scale-105">
        <Image
          src={backgroundImage}
          alt="Background"
          width={1920}
          height={1080}
          class="w-full h-full object-cover transition-transform duration-10000 animate-slow-zoom"
          loading="eager"
        />
        {/* Gradient overlay for more depth */}
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div class="relative container mx-auto px-4 h-full flex flex-col justify-center lg:justify-end lg:pb-32 z-10">
        <div class="flex flex-col gap-6 max-w-3xl animate-fade-in">
          {/* RENU Title with modern styling */}
          <div class="group relative w-fit">
            <div class="absolute -inset-0.5"></div>
            <div class="relative p-6 lg:p-8">
              <h2
                class="text-white text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
                dangerouslySetInnerHTML={{ __html: title }}
              >
              </h2>
            </div>
          </div>
          
          {/* Subtitle with glass morphism effect */}
          <div class="w-fit px-6 py-4 rounded-sm max-w-2xl shadow-xl">
            <p class="text-white text-lg md:text-xl lg:text-2xl font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
          </div>
          
          {/* CTA Button with modern styling */}
          <div class="flex flex-wrap gap-4 mt-6">
            <a
              href={cta?.href}
              class="relative overflow-hidden group bg-green-700 hover:bg-green-800 text-white py-4 px-8 rounded-sm text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-green-700/30"
            >
              <span class="relative z-10">{cta?.text}</span>
              <span class="absolute inset-0 w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Chat Button with modern styling */}
      <div class="absolute bottom-8 right-8 z-10">
        <a 
          href="#" 
          class="group flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white py-3 px-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-green-700/30"
        >
          <span class="hidden md:inline">{chatButtonText}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>

      {/* Decorative elements for modern look */}
      <div class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent z-5"></div>
      <div class="absolute top-1/3 left-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
      <div class="absolute top-2/3 right-10 w-40 h-40 bg-green-700/10 rounded-full blur-3xl"></div>
    </div>
  );
}
