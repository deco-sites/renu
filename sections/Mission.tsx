import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface MissionItem {
  /**
   * @title Item title
   */
  title: string;
  
  /**
   * @title Item content
   * @format rich-text
   */
  content: string;
  
  /**
   * @title Icon
   * @description Upload an icon for this mission item
   */
  icon?: ImageWidget;
}

export interface Props {
  /**
   * @title Main title
   * @default Transformamos resíduos em energia limpa, impulsionando a sustentabilidade.
   */
  title?: string;
  
  /**
   * @title Background color
   * @default #f5f7f4
   */
  backgroundColor?: string;
  
  /**
   * @title Text color
   * @default #0e503c
   */
  textColor?: string;
  
  /**
   * @title Mission items
   * @description List of mission statements with icons
   */
  items?: MissionItem[];
}

export default function MissionSection({
  title = "Transformamos resíduos em energia limpa, impulsionando a sustentabilidade.",
  backgroundColor = "#f5f7f4",
  textColor = "#0e503c",
  items = [
    {
      title: "Nosso objetivo",
      content: "é contribuir para a transição para uma economia mais limpa e circular, com foco na geração de energia renovável por meio da valorização de resíduos.",
      icon: ""
    },
    {
      title: "Comprometidos com um futuro mais verde",
      content: "buscamos transformar resíduos em fontes de energia renovável, oferecendo alternativas que aliam sustentabilidade e viabilidade econômica.",
      icon: ""
    },
    {
      title: "Reconhecemos os desafios ambientais da gestão de resíduos",
      content: "e buscamos soluções inovadoras para convertê-los em energia limpa, transformando-os em oportunidades que promovem sustentabilidade, rentabilidade e um amanhã mais sustentável.",
      icon: ""
    }
  ]
}: Props) {
  return (
    <section class="py-16 lg:py-24 relative bg-gray-50">
      {/* Background decorations */}
      <div class="absolute inset-0 z-0">
        <div class="absolute top-0 right-0 h-64 w-64 rounded-full bg-green-100/30 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-100/30 blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        {/* Título Padronizado */}
        <div class="flex flex-col items-center mb-16">
          <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 bg-green-100 rounded-full">
            <span class="text-sm font-medium text-green-800">Nossa Missão</span>
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
        
        {/* Cards grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              class="bg-white rounded-xl p-6 transition-all animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div class="flex flex-col h-full">
                {/* Icon */}
                <div class="mb-6 flex justify-center">
                  {item.icon ? (
                    <div class="w-20 h-20 relative">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={80}
                        height={80}
                        class="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div class="w-20 h-20 rounded-full bg-gradient-to-tr from-green-400 to-green-600 flex items-center justify-center text-white">
                      {index === 0 && (
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div class="flex-grow">
                  <div class="flex mb-4">
                    <h3 
                      class="text-xl font-semibold"
                      style={{ color: textColor }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  
                  <div 
                    class="text-gray-700 text-lg leading-relaxed rich-text-container"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom animations and styling */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes widthExpand {
          0% { width: 0; }
          100% { width: 8rem; }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-width-expand {
          animation: widthExpand 1.5s ease-out forwards;
        }
        
        /* Rich text container styles */
        .rich-text-container p {
          margin-bottom: 1rem;
        }
        
        .rich-text-container a {
          color: #047857;
          text-decoration: underline;
        }
        
        .rich-text-container strong {
          font-weight: 600;
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