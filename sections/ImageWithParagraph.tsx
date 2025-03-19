import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface BenefitItem {
  /**
   * @title Texto do benefício
   * @format rich-text
   */
  text: string;
  
  /**
   * @title Cor do ícone
   * @format color
   * @default #10B981
   */
  iconColor?: string;
}

export interface CTA {
  id?: string;
  href: string;
  text: string;
  style?: "Outline" | "Ghost";
}

export interface Props {
  /**
   * @title Título principal
   * @default Para Consumidores
   */
  title?: string;

  /**
   * @title Alinhamento do título
   * @default left
   */
  titlePlacement?: "left" | "right" | "center";
  
  /**
   * @title Lista de benefícios
   * @description Lista de tópicos para exibir com ícones
   */
  benefits?: BenefitItem[];
  
  /**
   * @title Cor do fundo
   * @format color
   * @default #F9FAFB
   */
  backgroundColor?: string;
  
  /**
   * @title Cor da borda dos ícones
   * @format color
   * @default #10B981
   */
  iconBorderColor?: string;
  
  /**
   * @title Imagem principal
   */
  image?: ImageWidget;
  
  /**
   * @title Posição da imagem
   * @default right
   */
  placement?: "left" | "right";
  
  /**
   * @title Botões de ação
   */
  cta?: CTA[];
  
  /**
   * @title Desativar espaçamento
   */
  disableSpacing?: {
    top?: boolean;
    bottom?: boolean;
  };
  
  /**
   * @title Posição dos botões
   * @default left
   */
  ctaPlacement?: "left" | "right" | "center";
}

const PLACEMENT = {
  left: "flex-col md:flex-row-reverse",
  right: "flex-col md:flex-row",
};

const CTA_PLACEMENT = {
  left: "start",
  right: "end",
  center: "center",
};

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function ImageWithParagraph({
  title = "PARA CONSUMIDORES",
  titlePlacement = "left",
  benefits = [
    { text: "Nossa solução se aplica a empresas baseadas no interior do país, próximas de regiões de produção agrícola" },
    { text: "A Renu produz e fornece biometano seguindo as especificações e nível de serviço acordados" },
    { text: "Possibilitamos a substituição do diesel pelo biometano em sua frota de caminhões e maquinário industrial" },
    { text: "A produção de biometano é descentralizada, gerando menores riscos operacionais e maior estabilidade no fornecimento" },
    { text: "O consumidor terá baixa necessidade de Capex (investimentos), focado apenas na substituição da frota por veículos movidos a biometano. Além disso, o projeto é implementado de forma faseada." },
    { text: "Ao adotar 100% de biometano na frota, é possível obter redução de mais de 85% da emissão de carbono" },
    { text: "A utilização de biometano permite economia financeira relevante, com redução de 20% a 30% dos custos totais com combustível na sua empresa" }
  ],
  backgroundColor = "#F9FAFB",
  iconBorderColor = "#10B981",
  image = DEFAULT_IMAGE,
  placement = "right",
  disableSpacing,
  cta = [],
  ctaPlacement = "left",
}: Props) {
  return (
    <div class="w-full" style={{ backgroundColor }}>
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class={`flex ${
            PLACEMENT[placement]
          } gap-8 md:gap-12 items-center z-10 ${
            disableSpacing?.top ? "" : "pt-12 lg:pt-24"
          } ${disableSpacing?.bottom ? "" : "pb-12 lg:pb-24"}`}
        >
          {/* Conteúdo */}
          <div class="w-full md:w-1/2 space-y-6 z-10">
            <h2 
              class={`text-3xl md:text-4xl font-bold text-gray-900 ${
                titlePlacement === "center" ? "text-center" :
                titlePlacement === "right" ? "text-right" : "text-left"
              }`}
            >
              {title}
            </h2>
            
            <div class="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} class="flex items-start gap-3">
                  <div class="flex-shrink-0 mt-1">
                    <div 
                      class="w-7 h-7 rounded-full border-2 flex items-center justify-center"
                      style={{ borderColor: iconBorderColor || "#10B981" }}
                    >
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke={benefit.iconColor || "#10B981"} 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                  </div>
                  <p 
                    class="text-base text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: benefit.text }}
                  />
                </div>
              ))}
            </div>
            
            {cta && cta.length > 0 && (
              <div class={`flex gap-3 pt-4 justify-${CTA_PLACEMENT[ctaPlacement]}`}>
                {cta?.map((item) => (
                  <a
                    key={item?.id}
                    id={item?.id}
                    href={item?.href}
                    target={item?.href.includes("http") ? "_blank" : "_self"}
                    class={`font-medium px-6 py-3 rounded-lg text-base transition-colors
                      ${!item.style || item.style === "Outline" 
                        ? "border-2 border-green-600 text-green-700 hover:bg-green-50"
                        : "bg-green-600 text-white hover:bg-green-700"}
                    `}
                  >
                    {item?.text}
                    {item.style === "Ghost" && (
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="ml-1 inline-block"
                      >
                        <path
                          d="M9.70697 16.9767L15.414 11.2697L9.70697 5.56274L8.29297 6.97674L12.586 11.2697L8.29297 15.5627L9.70697 16.9767Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          {/* Imagem */}
          <div class="w-full md:w-1/2 rounded-xl overflow-hidden">
            <Image
              width={640}
              height={480}
              class="w-full h-auto object-cover rounded-xl shadow-md"
              sizes="(max-width: 640px) 100vw, 50vw"
              src={image}
              alt={title}
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function RuralProducersSection({
  title = "PARA PRODUTORES RURAIS",
  titlePlacement = "left",
  benefits = [
    { text: "A Renu <strong>instala e mantém toda a infraestrutura</strong> para conversão do biogás em biometano na sua fazenda" },
    { text: "A Renu <strong>comercializa o biometano</strong>, sem que o produtor rural tenha que se preocupar com isso" },
    { text: "Geramos uma <strong>renda extra mensal significativa</strong> para o produtor com base na produção de biometano gerado, independente do quanto foi comercializado" },
    { text: "Caso o produtor <strong>não possua biodigestor</strong> na fazenda, a Renu viabiliza essa estrutura" },
    { text: "Caso o produtor tenha interesse em <strong>alugar o módulo de biometano</strong>, a Renu possui essa oferta para você" }
  ],
  backgroundColor = "#F9FAFB",
  iconBorderColor = "#0F766E",
  image = DEFAULT_IMAGE,
  placement = "left",
  disableSpacing,
  cta = [],
  ctaPlacement = "left",
}: Props) {
  return (
    <div class="w-full" style={{ backgroundColor }}>
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class={`flex ${
            PLACEMENT[placement]
          } gap-8 md:gap-12 items-center z-10 ${
            disableSpacing?.top ? "" : "pt-12 lg:pt-24"
          } ${disableSpacing?.bottom ? "" : "pb-12 lg:pb-24"}`}
        >
          {/* Conteúdo */}
          <div class="w-full md:w-1/2 space-y-6 z-10">
            <h2 
              class={`text-3xl md:text-4xl font-bold text-green-800 ${
                titlePlacement === "center" ? "text-center" :
                titlePlacement === "right" ? "text-right" : "text-left"
              }`}
            >
              {title}
            </h2>
            
            <div class="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} class="flex items-start gap-4">
                  <div class="flex-shrink-0 mt-1">
                    <div 
                      class="w-7 h-7 rounded-full border-2 flex items-center justify-center"
                      style={{ borderColor: iconBorderColor || "#0F766E" }}
                    >
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke={benefit.iconColor || "#0F766E"} 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                  </div>
                  <p 
                    class="text-base md:text-lg text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: benefit.text }}
                  />
                </div>
              ))}
            </div>
            
            {cta && cta.length > 0 && (
              <div class={`flex gap-3 pt-4 justify-${CTA_PLACEMENT[ctaPlacement]}`}>
                {cta?.map((item) => (
                  <a
                    key={item?.id}
                    id={item?.id}
                    href={item?.href}
                    target={item?.href.includes("http") ? "_blank" : "_self"}
                    class={`font-medium px-6 py-3 rounded-lg text-base transition-colors
                      ${!item.style || item.style === "Outline" 
                        ? "border-2 border-green-700 text-green-800 hover:bg-green-50"
                        : "bg-green-700 text-white hover:bg-green-800"}
                    `}
                  >
                    {item?.text}
                    {item.style === "Ghost" && (
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="ml-1 inline-block"
                      >
                        <path
                          d="M9.70697 16.9767L15.414 11.2697L9.70697 5.56274L8.29297 6.97674L12.586 11.2697L8.29297 15.5627L9.70697 16.9767Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          {/* Imagem */}
          <div class="w-full md:w-1/2 rounded-xl overflow-hidden">
            <Image
              width={640}
              height={480}
              class="w-full h-auto object-cover rounded-xl shadow-md"
              sizes="(max-width: 640px) 100vw, 50vw"
              src={image}
              alt={title}
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
