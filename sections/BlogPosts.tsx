import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface ProjectFeature {
  /**
   * @title Texto da característica
   * @format rich-text
   */
  text: string;
}

export interface Project {
  /**
   * @title Título do projeto
   */
  title: string;
  
  /**
   * @title Subtítulo
   */
  subtitle: string;
  
  /**
   * @title Imagem principal
   */
  image: ImageWidget;
  
  /**
   * @title Características do projeto
   */
  features: ProjectFeature[];
}

export interface Props {
  /**
   * @title Título da seção
   * @default Nossos Projetos
   */
  title?: string;
  
  /**
   * @title Descrição
   * @format rich-text
   */
  description?: string;
  
  /**
   * @title Projetos
   */
  projects?: Project[];
  
  /**
   * @title Cor de fundo
   * @format color
   * @default #f5f7f4
   */
  backgroundColor?: string;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function ProjectsShowcase({
  title = "Nossos Projetos",
  description = "Conheça os cases de sucesso da Renu Energia",
  backgroundColor = "#f5f7f4",
  projects = [
    {
      title: "A Usina de Biodigestão em Jacarezinho",
      subtitle: "Planta em localização privilegiada e com área para expansão",
      image: DEFAULT_IMAGE,
      features: [
        { text: "Planta no estado do PR, cerca de 400km de São Paulo/SP;" },
        { text: "<strong>Localização privilegiada</strong>, na beira de rodovia, próxima a grandes empresas geradoras de resíduos e consumidoras de gás;" },
        { text: "Operação atual contempla capacidade de (i) 50 ton/dia de resíduos (gate fee); (ii) 5 mil m³/dia de biogás, queimado no flare;" },
        { text: "A empresa possui <strong>terreno para expansão</strong> das operações, já incluído na transação;" }
      ]
    }
  ],
}: Props) {
  return (
    <section class="py-20 overflow-hidden relative" style={{ backgroundColor }}>
      {/* Background decoration */}
      <div class="absolute inset-0 opacity-30">
        <div class="absolute h-96 w-96 rounded-full bg-green-100/60 blur-3xl -top-48 -right-48"></div>
        <div class="absolute h-64 w-64 rounded-full bg-blue-100/60 blur-3xl -bottom-48 -left-48"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-5xl mx-auto mb-16">
          <div class="flex flex-col items-center">
            <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 bg-green-100 rounded-full">
              <span class="text-sm font-medium text-green-800">Portfolio de Projetos</span>
            </div>
            
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 text-center mb-6">
              {title}
            </h2>
            
            {description && (
              <div class="max-w-3xl mx-auto text-center">
                <p class="text-lg text-gray-700 mb-8" dangerouslySetInnerHTML={{ __html: description }}></p>
              </div>
            )}
          </div>
        </div>
        
        <div class="space-y-16">
          {projects?.map((project, index) => (
            <div key={index} class="bg-white rounded-xl overflow-hidden shadow-lg">
              {/* Cabeçalho do projeto */}
              <div class="bg-gradient-to-r from-green-700 to-green-900 p-8 text-white">
                <h3 class="text-3xl font-bold mb-2">{project.title}</h3>
                <p class="text-xl font-medium text-green-100">{project.subtitle}</p>
              </div>
              
              <div class="p-0 md:p-0 flex flex-col md:flex-row">
                {/* Características do projeto */}
                <div class="w-full md:w-1/2 p-8 flex flex-col justify-start">
                  <ul class="space-y-5">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex} class="flex items-start gap-3">
                        <div class="flex-shrink-0 mt-1">
                          <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p class="text-base text-gray-700" dangerouslySetInnerHTML={{ __html: feature.text }}></p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Imagem do projeto */}
                <div class="w-full md:w-1/2">
                  <Image
                    width={800}
                    height={600}
                    class="w-full h-full object-cover"
                    src={project.image}
                    alt={project.title}
                    decoding="async"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Rodapé com CTA */}
              <div class="p-6 bg-gray-50 border-t border-gray-100 text-center">
                <a 
                  href="#" 
                  class="inline-flex items-center gap-2 bg-green-100 text-green-800 hover:bg-green-200 transition-colors px-5 py-3 rounded-full font-medium"
                >
                  <span>Ver mais detalhes</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
