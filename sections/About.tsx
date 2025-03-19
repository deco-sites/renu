import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Partner {
  image: ImageWidget;
  name: string;
  url?: string;
}

export interface Props {
  /**
   * @title Section title
   * @default QUEM SOMOS!
   */
  title?: string;
  
  /**
   * @title Company logo
   * @description Upload the company logo
   */
  logo?: ImageWidget;
  
  /**
   * @title Section background color
   * @default #f5f7f4
   */
  backgroundColor?: string;
  
  /**
   * @title Main content
   * @format rich-text
   * @default <p>A Renu é uma plataforma integrada de geração e distribuição de biometano.</p><p>Geramos biometano a partir de uma gama de pequenos e médios produtores de suínos e gado e o comercializamos por meio de contratos de fornecimento.</p><p>Além disso, temos uma solução de aluguel de módulos de biometano direto para o produtor rural, que pode gerar biometano para consumo próprio.</p>
   */
  content?: string;
  
  /**
   * @title Partners info
   * @format rich-text
   * @default <p>Somos uma empresa investida e incubada pelo braço de transição energética da Drys Investimentos, que é uma gestora de recursos baseada em São Paulo.</p><p>O braço de transição energética da Drys também conta com um investimento na Electy, energytech que comercializa energia limpa de forma 100% digital.</p>
   */
  partnersInfo?: string;
  
  /**
   * @title Partners
   * @description List of partner companies
   */
  partners?: Partner[];
}

export default function AboutSection({
  title = "QUEM SOMOS!",
  logo = "",
  backgroundColor = "#f5f7f4",
  content = `<p>A Renu é uma plataforma integrada de geração e distribuição de biometano.</p>
<p>Geramos biometano a partir de uma gama de pequenos e médios produtores de suínos e gado e o comercializamos por meio de contratos de fornecimento.</p>
<p>Além disso, temos uma solução de aluguel de módulos de biometano direto para o produtor rural, que pode gerar biometano para consumo próprio.</p>`,
  partnersInfo = `<p>Somos uma empresa investida e incubada pelo braço de transição energética da Drys Investimentos, que é uma gestora de recursos baseada em São Paulo.</p>
<p>O braço de transição energética da Drys também conta com um investimento na Electy, energytech que comercializa energia limpa de forma 100% digital.</p>`,
  partners = []
}: Props) {
  return (
    <section class="relative py-16 lg:py-20 overflow-hidden">
      {/* Background Elements */}
      <div class="absolute inset-0 z-0">
        <div class="absolute top-0 right-0 h-64 w-64 rounded-full bg-green-100/30 blur-3xl"></div>
        <div class="absolute bottom-20 left-0 h-64 w-64 rounded-full bg-blue-100/30 blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        {/* Título Padronizado */}
        <div class="flex flex-col items-center mb-16">
          <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 bg-green-100 rounded-full">
            <span class="text-sm font-medium text-green-800">Sobre Nós</span>
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
        
        {/* Conteúdo */}
        <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div class="w-full lg:w-1/2 space-y-6">
            <div 
              class="text-gray-700 leading-relaxed text text-green text-2xl"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
          
          {/* Logo Animation */}
          <div class="flex justify-center">
            <div class="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated background circles */}
              <div class="absolute inset-0 w-full h-full rounded-full bg-gradient-to-tr from-green-200 to-blue-200 opacity-20 animate-pulse"></div>
              <div class="absolute inset-2 w-full h-full rounded-full bg-gradient-to-br from-green-300 to-blue-300 opacity-30 animate-pulse animation-delay-700"></div>
              
              {/* Logo container */}
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-48 h-48 md:w-64 md:h-64 relative overflow-hidden animate-float">
                  <Image
                    src={logo}
                    alt="Renu Logo"
                    width={300}
                    height={300}
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partners Section */}
        <div class="mt-24 bg-white rounded-xl shadow-lg overflow-hidden animate-slide-up">
          <div class="p-8 lg:p-10">
            {/* Partners Info */}
            <div 
              class="text-gray-700 leading-relaxed text text-xl max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: partnersInfo }}
            />
            
            {/* Partners Logos */}
            <div class="flex flex-wrap justify-center items-center gap-6 lg:gap-10 mt-10">
              {partners.map((partner, index) => (
                <div key={index} class="group relative">
                  <div class="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <a 
                    href={partner.url || "#"} 
                    class="relative block bg-white rounded-lg p-3 hover:scale-105 transition-transform duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={160}
                      height={60}
                      class="w-32 h-12 object-contain"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slideInRight {
          0% { transform: translateX(20px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }
        
        .animation-delay-700 {
          animation-delay: 700ms;
        }
      `}} />
    </section>
  );
} 