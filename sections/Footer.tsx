import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { useScript } from "@deco/deco/hooks";

export interface Column {
  title: string;
  items: Items[];
}

export interface Items {
  label: string;
  href: string;
}

export interface Subscribe {
  title: string;
  description: string;
  /** @format rich-text */
  instructions: string;
}

export interface Social {
  network: "Facebook" | "Instagram" | "Linkedin" | "X - Twitter" | "Youtube";
  href: string;
}

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
    width?: number;
    height?: number;
  };
  footerLogo?: {
    src?: ImageWidget;
    alt?: string;
    width?: number;
    height?: number;
  };
  supportTitle?: string;
  supportEmail?: string;
  supportPhone?: string;
  contactTitle?: string;
  contactEmail?: string;
  sponsorTitle?: string;
  sponsorItems?: Items[];
  linksTitle?: string;
  linksItems?: Items[];
  formTitle?: string;
  formDescription?: string;
  copyright?: string;
  social?: Social[];

  /**
   * @title Section ID
   * @description Unique identifier for the section
   */
  id?: string;
}

export default function Footer({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  footerLogo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo do Rodapé",
  },
  supportTitle = "Suporte",
  supportEmail = "contato@renuenergia.com.br",
  supportPhone = "+55 (11) 3049-3000",
  contactTitle = "Contato",
  contactEmail = "contato@renuenergia.com.br",
  sponsorTitle = "Sponsor",
  sponsorItems = [
    { label: " Drýs Capital", href: "https://dryscapital.com.br/" }
  ],
  linksTitle = "Links",
  linksItems = [
    { label: "Renu", href: "/" },
    { label: "Para Consumidores", href: "/" },
    { label: "Para Produtores Rurais", href: "/" },
  ],
  formTitle = "Inicie uma conversa conosco",
  formDescription = "Entre em contato com nossa equipe de vendas para ver como podemos ajudar",
  copyright = "© 2024 Renu Energia. Todos os direitos reservados.",
  social = [
    { network: "Facebook", href: "https://facebook.com" },
    { network: "Instagram", href: "https://instagram.com" },
    { network: "Linkedin", href: "https://linkedin.com" },
  ],
  id="nossos-contatos"
}: Props) {
  return (
    <footer id={id} class="relative bg-gray-900 text-white">
      {/* Seção superior com formulário e suporte */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            {/* Coluna de Suporte */}
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-6 text-black">{supportTitle}</h3>
              <div className="space-y-4 text-black">
                <p>Entre em contato por e-mail via</p>
                <a href={`mailto:${supportEmail}`} className="text-green-700 font-medium hover:underline block">
                  {supportEmail}
                </a>
                <p>ou por telefone via</p>
                <a href={`tel:${supportPhone}`} className="text-green-700 font-medium hover:underline block">
                  {supportPhone}
                </a>
              </div>
            </div>
            
            {/* Formulário de Contato */}
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-semibold mb-6">{formTitle}</h3>
              <p className="mb-6">{formDescription}</p>
              
              <form className="space-y-4 text-black" id="contact_form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Primeiro Nome"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Sobrenome"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Telefone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                </div>
                
                <textarea
                  placeholder="Mensagem"
                  rows={4}
                  className="text-black w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-green-700 text-white font-medium rounded-md hover:bg-green-800 transition-colors"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Seção inferior com logo e links */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl mb-12">
          <div className="flex justify-center mb-12">
            <div className="w-32">
              <Image
                src={footerLogo.src || ""}
                width={footerLogo.width}
                height={footerLogo.height}
                alt={footerLogo.alt}
                class="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Coluna de Contato */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{contactTitle}</h4>
              <p className="mb-2">Email: <a href={`mailto:${contactEmail}`} className="hover:underline">{contactEmail}</a></p>
            </div>
            
            {/* Coluna de Sponsor */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{sponsorTitle}</h4>
              <ul className="space-y-2">
                {sponsorItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="hover:underline block">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Coluna de Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{linksTitle}</h4>
              <ul className="space-y-2">
                {linksItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="hover:underline block">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright e redes sociais */}
        <div className="container mx-auto px-4 md:px-8 max-w-7xl border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">{copyright}</p>
            
            <div className="flex gap-4 mt-4 md:mt-0">
              {social?.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.network == "Facebook" && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                  {item.network == "Instagram" && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49735 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                  {item.network == "Linkedin" && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.5 3C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3H4.5ZM8.52076 7.00272C8.52639 7.95897 7.81061 8.54819 6.96123 8.54397C6.16107 8.53975 5.46357 7.90272 5.46779 7.00413C5.47201 6.15897 6.13998 5.47975 7.00764 5.49944C7.88795 5.51913 8.52639 6.1646 8.52076 7.00272ZM12.2797 9.76175H9.75971H9.7583V18.3216H12.4217V18.1219C12.4217 17.742 12.4214 17.362 12.4211 16.9819C12.4203 15.9681 12.4194 14.9532 12.4246 13.9397C12.426 13.6936 12.4372 13.4377 12.5005 13.2028C12.7381 12.3253 13.5271 11.7586 14.4074 11.8979C14.9727 11.9864 15.3467 12.3141 15.5042 12.8471C15.6013 13.1803 15.6449 13.5389 15.6491 13.8863C15.6605 14.9339 15.6589 15.9815 15.6573 17.0292C15.6567 17.399 15.6561 17.7689 15.6561 18.1388V18.3202H18.328V18.1149C18.328 17.6629 18.3278 17.211 18.3275 16.7591C18.327 15.6296 18.3264 14.5001 18.3294 13.3702C18.3308 12.8597 18.276 12.3563 18.1508 11.8627C17.9638 11.1286 17.5771 10.5211 16.9485 10.0824C16.5027 9.77022 16.0133 9.5691 15.4663 9.5466C15.404 9.54401 15.3412 9.54062 15.2781 9.53721C14.9984 9.52209 14.7141 9.50673 14.4467 9.56066C13.6817 9.71394 13.0096 10.0641 12.5019 10.6814C12.4429 10.7522 12.3852 10.8241 12.2991 10.9314L12.2797 10.9557V9.76175ZM5.68164 18.3244H8.33242V9.7673H5.68164V18.3244Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                  {item.network == "X - Twitter" && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11264L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.5393H6.2232L16.2073 18.3754Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                  {item.network == "Youtube" && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.5928 7.20334C21.4789 6.78075 21.2563 6.39535 20.9472 6.08551C20.6381 5.77567 20.2532 5.5522 19.8308 5.43734C18.2648 5.00734 11.9998 5.00034 11.9998 5.00034C11.9998 5.00034 5.73584 4.99334 4.16884 5.40434C3.74677 5.52449 3.36266 5.75112 3.05341 6.06248C2.74415 6.37384 2.52013 6.75946 2.40284 7.18234C1.98984 8.74834 1.98584 12.0033 1.98584 12.0033C1.98584 12.0033 1.98184 15.2573 2.39184 16.8073C2.62184 17.6643 3.29684 18.3413 4.15484 18.5723C5.73684 19.0023 11.9848 19.0093 11.9848 19.0093C11.9848 19.0093 18.2498 19.0163 19.8158 18.6063C20.2383 18.4917 20.6236 18.2687 20.9335 17.9595C21.2434 17.6503 21.4672 17.2656 21.5828 16.8433C21.9968 15.2783 21.9998 12.0343 21.9998 12.0343C21.9998 12.0343 22.0198 8.76934 21.5928 7.20334ZM9.99584 15.0053L10.0008 9.00534L15.2078 12.0103L9.99584 15.0053Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <script type="module" dangerouslySetInnerHTML={{
           __html: useScript((e)=> {
            console.log(e)
            const form = document.getElementById("contact_form");
            if(!form) return;
            form?.addEventListener("submit", function (e) {
              e.preventDefault(); // Impede o envio normal do formulário

              const inputs = form.querySelectorAll("input, textarea") || [];
 
              const firstName = encodeURIComponent(inputs[0].value.trim());
              const lastName = encodeURIComponent(inputs[1].value.trim());
              const phone = encodeURIComponent(inputs[2].value.trim());
              const email = encodeURIComponent(inputs[3].value.trim());
              const message = encodeURIComponent(inputs[4].value.trim());

              const fullName = `${firstName} ${lastName}`;

              const mailto = `mailto:contato@renuenergia.com.br`
                + `?subject=Contato%20do%20site%20via%20formulário`
                + `&body=Nome:%20${fullName}%0A`
                + `Telefone:%20${phone}%0A`
                + `Email:%20${email}%0A`
                + `Mensagem:%20${message}`;

              // window.location.href = mailto;
              console.log(mailto)
            });
                  }, "oi teste"),
              }}/>
    </footer>
  );
}
