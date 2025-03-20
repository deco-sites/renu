import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Benefit {
  icon: ImageWidget;
  title: string;
  description: string;
}

export interface Props {
  /**
   * @title Section title
   * @default PORQUE BIOMETANO ?
   */
  title?: string;
  
  /**
   * @title Main image
   * @description Upload an image showing the biometane production
   */
  image?: ImageWidget;
  
  /**
   * @title Main content
   * @format rich-text
   * @default <p>Biometano é um produto derivado da purificação (upgrade) do biogás, que é o gás retirado do processo de decomposição anaeróbica (na ausência de oxigênio) de resíduos orgânicos. Estes resíduos orgânicos podem vir de lixo, esgoto urbano, agricultura, pecuária, suinocultura e gado leiteiro.</p><p>O biogás tem em sua composição principalmente a presença do metano (CH4) e dióxido de carbono (CO2), variando entre 50 a 70% do total e, em menores quantidades, o gás sulfídrico (H2S), a umidade (H2O) e outros gases, como o nitrogênio (N2).</p><p>O processo de upgrading do biogás, leva a purificação e separação do metano e do dióxido de carbono, produzindo o biometano.</p>
   */
  content?: string;
  
  /**
   * @title Benefits
   * @description List of benefits of biometane
   */
  benefits?: Benefit[];
}

export default function BiometanoSection({
  title = "PORQUE BIOMETANO ?",
  image = "",
  content = `<p>Biometano é um produto derivado da purificação (upgrade) do biogás, que é o gás retirado do processo de decomposição anaeróbica (na ausência de oxigênio) de resíduos orgânicos. Estes resíduos orgânicos podem vir de lixo, esgoto urbano, agricultura, pecuária, suinocultura e gado leiteiro.</p>
<p>O biogás tem em sua composição principalmente a presença do metano (CH4) e dióxido de carbono (CO2), variando entre 50 a 70% do total e, em menores quantidades, o gás sulfídrico (H2S), a umidade (H2O) e outros gases, como o nitrogênio (N2).</p>
<p>O processo de upgrading do biogás, leva a purificação e separação do metano e do dióxido de carbono, produzindo o biometano.</p>`,
  benefits = [
    {
      icon: "eco",
      title: "Sustentável",
      description: "Redução de mais de 85% das emissões de carbono no transporte"
    },
    {
      icon: "energy",
      title: "Energia Renovável",
      description: "Fonte de energia limpa e renovável"
    },
    {
      icon: "economy",
      title: "Economia",
      description: "Redução entre 20% a 30% dos custos com combustível"
    },
    {
      icon: "noise",
      title: "Redução de Efeitos sonoros",
      description: "Menor ruído em comparação com diesel"
    }
  ]
}: Props) {
  return (
    <section class="py-16 lg:py-24 relative">
      <div class="container mx-auto px-4 relative z-10">
        {/* Título Padronizado */}
        <div class="flex flex-col items-center mb-16">
          <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 bg-green-100 rounded-full">
            <span class="text-sm font-medium text-green-800">Biometano</span>
          </div>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 text-center mb-8 max-w-4xl">
            {title}
          </h2>
          
          <div class="flex items-center gap-3 justify-center mb-10">
            <div class="h-1 w-10 bg-green-500 rounded-full"></div>
            <div class="h-1 w-16 bg-green-700 rounded-full"></div>
            <div class="h-1 w-10 bg-green-500 rounded-full"></div>
          </div>
          
          {/* Main content */}
          <div class="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Image with rounded border and shadow */}
            <div class="relative w-full">
              <div class="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-2xl transform rotate-1"></div>
              <div class="relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                <Image
                  src={image}
                  alt="Biometano"
                  width={800}
                  height={600}
                  class="w-full h-full object-cover aspect-video"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Text Content with Rich Text */}
            <div class="flex flex-col justify-center space-y-4">
              <div 
                class="text-gray-700 text-lg leading-relaxed space-y-4 rich-text-container"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
        
        {/* Benefits Cards */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {benefits.map((benefit, index) => (
            <div key={index} class="bg-white rounded-xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:border-green-200 group">
              <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                {benefit.icon === "eco" && (
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )}
                {benefit.icon === "energy" && (
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {benefit.icon === "economy" && (
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {benefit.icon === "noise" && (
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.465a5 5 0 001.414 1.414m-.869-10.465a5 5 0 011.414-1.414m2.828 9.9a5 5 0 000-7.072m-2.828 9.9a9 9 0 000-12.728" />
                  </svg>
                )}
              </div>
              <h3 class="mb-2 text-xl font-semibold text-center text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p class="text-center text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Rich Text Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Rich text container styles */
        .rich-text-container p {
          margin-bottom: 1rem;
        }
        
        .rich-text-container h1, 
        .rich-text-container h2, 
        .rich-text-container h3, 
        .rich-text-container h4 {
          font-weight: 600;
          line-height: 1.25;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .rich-text-container h1 {
          font-size: 1.875rem;
        }
        
        .rich-text-container h2 {
          font-size: 1.5rem;
        }
        
        .rich-text-container h3 {
          font-size: 1.25rem;
        }
        
        .rich-text-container a {
          color: #047857;
          text-decoration: underline;
        }
        
        .rich-text-container ul, 
        .rich-text-container ol {
          margin-left: 2rem;
          margin-bottom: 1rem;
        }
        
        .rich-text-container ul {
          list-style-type: disc;
        }
        
        .rich-text-container ol {
          list-style-type: decimal;
        }
        
        .rich-text-container li {
          margin-bottom: 0.5rem;
        }
      `}} />
    </section>
  );
} 