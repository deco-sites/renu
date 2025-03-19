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
    <section 
      class="py-24 relative overflow-hidden" 
      style={{ backgroundColor }}
    >
      {/* Decorative elements */}
      <div class="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full opacity-20 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        {/* Section Title with decorative line */}
        <div class="flex flex-col items-center mb-20">
          <h2 class="text-4xl md:text-5xl text-center font-bold text-green-800 animate-fade-in mb-6">
            {title}
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-400 rounded-full"></div>
        </div>
        
        <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-24">
          {/* Logo Animation in its own container */}
          <div class="w-full lg:w-2/5 flex justify-center order-2 lg:order-1">
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
          
          {/* Main Content with Rich Text and decorative elements */}
          <div class="w-full lg:w-3/5 flex flex-col space-y-6 order-1 lg:order-2 animate-slide-in-right">
            <div class="relative">
              <div class="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-green-500 to-blue-400 rounded-full"></div>
              <div 
                class="text-gray-700 text-lg leading-relaxed space-y-5 pl-4 rich-text-container"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
        
        {/* Partners Section - Redesigned with better visual styling */}
        <div class="bg-white rounded-xl shadow-xl overflow-hidden animate-slide-up relative border border-gray-100">
          {/* Corner decoration */}
          <div class="absolute -top-6 -right-6 w-12 h-12 bg-green-100 rounded-full"></div>
          <div class="absolute -top-3 -right-3 w-6 h-6 bg-green-200 rounded-full"></div>
          
          <div class="p-10 lg:p-12">
            {/* Partners Info */}
            <div class="mx-auto max-w-3xl">
              <div 
                class="text-gray-700 text-lg leading-relaxed space-y-4 mb-12 rich-text-container"
                dangerouslySetInnerHTML={{ __html: partnersInfo }}
              />
            </div>
            
            {/* Partners Logos */}
            <div class="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mt-10 relative">
              {/* If no partners, show placeholder */}
              {partners.length === 0 && (
                <div class="flex flex-wrap justify-center gap-6 w-full">
                  <div class="bg-gray-50 rounded-lg p-6 w-40 h-20 flex items-center justify-center shadow-sm">
                    <span class="text-gray-400">Drys Capital</span>
                  </div>
                  <div class="bg-gray-50 rounded-lg p-6 w-40 h-20 flex items-center justify-center shadow-sm">
                    <span class="text-gray-400">Electy</span>
                  </div>
                </div>
              )}
              
              {/* Actual partner logos */}
              {partners.map((partner, index) => (
                <div key={index} class="group relative">
                  <div class="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <a 
                    href={partner.url || "#"} 
                    class="relative block bg-white rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={160}
                      height={60}
                      class="w-36 h-16 object-contain"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Animations and Rich Text Styling */}
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
        
        /* Fix for Safari blur issue */
        @supports (-moz-appearance:none) {
          .blur-3xl {
            filter: blur(64px);
          }
        }
      `}} />
    </section>
  );
} 