import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface SustainabilityGoal {
  /**
   * @title ODS number
   * @description The number of the ODS (e.g., 7, 11, 12, 13, 17)
   */
  number: string;
  
  /**
   * @title ODS title
   * @format rich-text
   */
  title: string;
  
  /**
   * @title ODS description
   * @format rich-text
   */
  description: string;
  
  /**
   * @title ODS icon
   * @description Upload an icon representing this ODS
   */
  icon?: ImageWidget;
  
  /**
   * @title Icon background color
   * @format color
   * @description Hex color code for the icon background
   */
  iconBgColor?: string;
}

export interface Props {
  /**
   * @title Main heading
   * @default Alinhando Objetivos Globais a Sustentabilidade Local
   */
  heading?: string;
  
  /**
   * @title Introduction text
   * @default Nossos projetos estão alinhados às metas globais da ONU, contribuindo diretamente para o alcance de diversos ODS:
   */
  introText?: string;
  
  /**
   * @title Background color
   * @format color
   * @default #f5f7f4
   */
  backgroundColor?: string;
  
  /**
   * @title ODS items
   * @description List of ODS (Objetivos de Desenvolvimento Sustentável) items
   */
  goals?: SustainabilityGoal[];
}

export default function SustainabilityGoalsSection({
  heading = "Alinhando Objetivos Globais a Sustentabilidade Local",
  introText = "Nossos projetos estão alinhados às metas globais da ONU, contribuindo diretamente para o alcance de diversos ODS:",
  backgroundColor = "#f5f7f4",
  goals = [
    {
      number: "7",
      title: "ODS 7:",
      description: "Transformamos resíduos orgânicos em biometano, uma fonte renovável e limpa de energia, reduzindo a dependência de combustíveis fósseis",
      iconBgColor: "#FCB712"
    },
    {
      number: "11",
      title: "ODS 11:",
      description: "Tornamos a gestão de resíduos mais eficiente, promovendo cidades mais limpas, saudáveis e organizadas.",
      iconBgColor: "#F99D26"
    },
    {
      number: "12",
      title: "ODS 12:",
      description: "Valorizamos resíduos como insumos para geração de energia, reduzindo desperdícios e maximizando o reaproveitamento.",
      iconBgColor: "#CF8D2A"
    },
    {
      number: "13",
      title: "ODS 13:",
      description: "Reduzimos emissões de gases de efeito estufa, contribuindo diretamente para a mitigação das mudanças climáticas.",
      iconBgColor: "#3F7E44"
    },
    {
      number: "17",
      title: "ODS 17:",
      description: "Buscamos parcerias com órgãos públicos para transformar desafios locais em soluções sustentáveis.",
      iconBgColor: "#19486A"
    }
  ]
}: Props) {
  return (
    <section 
      class="py-20 overflow-hidden relative"
      style={{ backgroundColor }}
    >
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div class="max-w-5xl mx-auto mb-20">
          <div class="flex flex-col items-center">
            <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 bg-green-100 rounded-full">
              <span class="text-sm font-medium text-green-800">Objetivos de Desenvolvimento Sustentável</span>
            </div>
            
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 text-center mb-8 animate-fade-in max-w-4xl">
              {heading}
            </h2>
            
            <div class="flex items-center gap-3 justify-center mb-10">
              <div class="h-1 w-10 bg-green-500 rounded-full"></div>
              <div class="h-1 w-16 bg-green-700 rounded-full"></div>
              <div class="h-1 w-10 bg-green-500 rounded-full"></div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto border-l-4 border-green-600 transform hover:scale-[1.01] transition-transform duration-300">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 mt-1.5">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <p class="text-lg text-gray-700">{introText}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* ODS Items */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {goals.map((goal, index) => (
            <div 
              key={index} 
              class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Top color bar based on ODS color */}
              <div class="h-2" style={{ backgroundColor: goal.iconBgColor || '#3F7E44' }}></div>
              
              <div class="p-6">
                {/* ODS Number with Icon */}
                <div class="flex items-center gap-4 mb-4">
                  <div 
                    class="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-300" 
                    style={{ backgroundColor: goal.iconBgColor || '#3F7E44' }}
                  >
                    {goal.icon ? (
                      <Image
                        src={goal.icon}
                        alt={`ODS ${goal.number}`}
                        width={60}
                        height={60}
                        class="w-full h-full object-contain"
                      />
                    ) : (
                      <div class="flex flex-col items-center justify-center text-white">
                        <span class="font-bold text-2xl">{goal.number}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h3 class="text-xl font-bold" style={{ color: goal.iconBgColor || '#3F7E44' }}>
                      <span dangerouslySetInnerHTML={{ __html: goal.title }} />
                    </h3>
                    <div class="w-12 h-0.5 mt-1" style={{ backgroundColor: goal.iconBgColor || '#3F7E44', opacity: 0.5 }}></div>
                  </div>
                </div>
                
                {/* Description */}
                <div 
                  class="text-gray-700 leading-relaxed rich-text-container"
                  dangerouslySetInnerHTML={{ __html: goal.description }}
                />
                
                {/* ODS Icon */}
                <div class="flex justify-end mt-4 opacity-30">
                  <IconForODS number={goal.number} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div class="mt-16 text-center">
          <div class="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-3 rounded-full hover:bg-green-100 transition-colors">
            <span class="font-medium">Saiba mais sobre os ODS</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Animations and rich text styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slide-up {
          opacity: 0;
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .rich-text-container p {
          margin-bottom: 0.5rem;
        }
        
        .rich-text-container p:last-child {
          margin-bottom: 0;
        }
        
        .rich-text-container strong {
          font-weight: 600;
        }
        
        .rich-text-container a {
          color: #047857;
          text-decoration: underline;
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

// Helper component to render appropriate icon based on ODS number
function IconForODS({ number }: { number: string }) {
  switch (number) {
    case "7":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      );
    case "11":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      );
    case "12":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      );
    case "13":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M12 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
        </svg>
      );
    case "17":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      );
    default:
      return null;
  }
} 