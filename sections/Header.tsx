import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface LanguageOption {
  code: string;
  label: string;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    buttons?: CTA[];
  };
  languages?: LanguageOption[];
}

export default function Header({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Renu",
  },
  navigation = {
    links: [
      { label: "Porque biometano?", url: "/" },
      { label: "A Renu", url: "/" },
      { label: "Para Consumidores", url: "/" },
      { label: "Para Produtores Rurais", url: "/" },
      { label: "Nossos Contatos", url: "/" },
    ],
  },
  languages = [
    { code: "BR", label: "BR" },
    { code: "EN", label: "EN" },
  ],
}: Nav) {
  return (
    <nav class="fixed top-0 left-0 right-0 z-50 drawer drawer-end bg-gray-100">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* main content */}
      <div class="drawer-content container lg:px-0 px-4 flex gap-8 items-center justify-between py-1 lg:py-4">
        <a href="/" class="flex-shrink-0">
          <Image src={logo.src || ""} width={265} height={60} alt={logo.alt} className="max-h-[30px] lg:max-h-[60px]" />
        </a>

        <div class="hidden items-center justify-center lg:flex w-full">
          <ul class="flex">
            {navigation.links.map((link) => (
              <li>
                <a
                  href={link.url}
                  aria-label={link.label}
                  class="link no-underline hover:underline p-4 text-green-800 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div class="hidden lg:flex items-center">
          <div class="flex border border-gray-300 rounded-lg overflow-hidden">
            {languages.map((lang, index) => (
              <a 
                href="#" 
                class={`px-3 py-1 text-sm ${index === 0 ? 'bg-green-800 text-white' : 'bg-white text-black'}`}
              >
                {lang.label}
              </a>
            ))}
          </div>
        </div>

        <label
          htmlFor="mobile-drawer-nav"
          class="flex lg:hidden btn btn-ghost drawer-button"
        >
          <Icon id="Bars3" size={24} strokeWidth={0.1} />
        </label>
      </div>

      {/* sidebar */}
      <aside class="drawer-side z-50 overflow-hidden">
        {/* Close when clicking on overlay */}
        <label
          htmlFor="mobile-drawer-nav"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="flex flex-col gap-8 min-h-full w-80 bg-base-100 text-base-content">
          <a class="p-4" href="/">
            <Image
              src={logo.src || ""}
              width={100}
              height={28}
              alt={logo.alt}
            />
          </a>

          <ul class="menu">
            {navigation?.links.map((link) => (
              <li>
                <a href={link.url} aria-label={link.label}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div class="p-4 flex items-center justify-center">
            <div class="flex border border-gray-300 rounded-lg overflow-hidden">
              {languages.map((lang, index) => (
                <a 
                  href="#" 
                  class={`px-3 py-1 text-sm ${index === 0 ? 'bg-green-800 text-white' : 'bg-white text-black'}`}
                >
                  {lang.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </nav>
  );
}
