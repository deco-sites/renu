import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Benefit {
  /**
   * @title Texto do benefício
   * @format rich-text
   */
  text: string;
  
  /**
   * @title Destacado
   * @description Se o benefício deve ser mostrado como destacado
   */
  highlighted?: boolean;
}

export interface Solution {
  /**
   * @title Título da solução
   */
  title: string;
  
  /**
   * @title Descrição da solução
   * @format rich-text
   */
  description: string;
  
  /**
   * @title Imagem ilustrativa
   */
  image: ImageWidget;
  
  /**
   * @title Benefícios
   * @description Lista de benefícios desta solução
   */
  benefits: Benefit[];
}

export interface Props {
  /**
   * @title Título principal
   * @default Nossas Soluções
   */
  title?: string;
  
  /**
   * @title Subtítulo
   * @default Soluções inovadoras para produção de biometano
   */
  subtitle?: string;
  
  /**
   * @title Cor de fundo
   * @format color
   * @default #ffffff
   */
  backgroundColor?: string;
  
  /**
   * @title Cor do texto
   * @format color
   * @default #0F172A
   */
  textColor?: string;
  
  /**
   * @title Logo central
   * @description Imagem do logo que aparece entre as duas soluções
   */
  logoImage?: ImageWidget;
  
  /**
   * @title Modelo 1 Título
   * @description Título do primeiro modelo de negócio
   * @default 1. Modelo de produção de Biometano e comercialização para a indústria
   */
  model1Title?: string;
  
  /**
   * @title Solução para produtores
   * @description Detalhes da solução para produtores rurais
   */
  producerSolution?: Solution;
  
  /**
   * @title Solução para empresas
   * @description Detalhes da solução para empresas
   */
  companySolution?: Solution;
  
  /**
   * @title Modelo 2 Título
   * @description Título do modelo de locação
   * @default 2. Modelo de locação de módulos de produção de biometano para produtores rurais
   */
  model2Title?: string;
  
  /**
   * @title Descrição do modelo 2
   * @description Texto explicativo sobre o modelo de locação
   * @format rich-text
   */
  model2Description?: string;
  
  /**
   * @title Imagem do modelo de negócio
   * @description Imagem ilustrativa do modelo de negócio de locação
   */
  businessModelImage?: ImageWidget;
  
  /**
   * @title Logo secundário
   * @description Logo da Renu usado na seção do modelo 2
   */
  secondaryLogo?: ImageWidget;
  
  /**
   * @title Texto informativo
   * @description Texto sobre a Renu e seu papel no modelo
   * @format rich-text
   */
  infoText?: string;
  
  /**
   * @title Imagem pequena
   * @description Ícone usado na seção de troca de CAPEX por OPEX
   */
  smallImage?: ImageWidget;
  
  /**
   * @title Texto da troca CAPEX por OPEX
   * @description Explicação sobre a troca de CAPEX por OPEX
   * @format rich-text
   */
  caneText?: string;
}

export default function SolutionsSection({
  title = "Nossas Soluções",
  subtitle = "Soluções inovadoras para produção de biometano",
  backgroundColor = "#ffffff",
  textColor = "#0F172A",
  logoImage,
  model1Title = "1. Modelo de produção de Biometano e comercialização para a indústria",
  producerSolution = {
    title: "Pequenos e Médios Produtores",
    description: "Instalação de módulos de biometano para purificação do biogás gerado na operação de produtores de gado e suínos",
    image: "",
    benefits: [
      { text: "Renda extra mensal recorrente" },
      { text: "Suporte técnico para instalação e manutenção da Renu", highlighted: true },
      { text: "Garantia em caso de problemas técnicos" },
      { text: "Treinamento gratuito na propriedade rural e comercialidade" }
    ]
  },
  companySolution = {
    title: "Empresas",
    description: "Fornecimento de biometano para empresas consumidoras de diesel",
    image: "",
    benefits: [
      { text: "Garantia de volume e nível de serviço contratado", highlighted: true },
      { text: "Menor risco operacional: sem riscos de biometano" },
      { text: "Visibilidade e previsibilidade de custos a longo prazo" },
      { text: "Crédito redução e compensação de carbono" },
      { text: "Flexibilidade: suporte para biometano desde na planta" },
      { text: "Economia de 20-30% do custo com combustível" },
      { text: "Auxílio na conversão de frotas para biometano" }
    ]
  },
  model2Title = "2. Modelo de locação de módulos de produção de biometano para produtores rurais",
  model2Description = "O produtor utiliza o módulo e evita desembolso de compra para aquisição",
  businessModelImage,
  secondaryLogo,
  infoText = "A Renu é proprietária de módulos de purificação de biogás em biometano",
  smallImage,
  caneText = "Troca de Cana por Capex e economia relacionada com a logística"
}: Props) {
  return (
    <section className="relative overflow-hidden py-16" style={{ backgroundColor, color: textColor }}>
      {/* Gradientes de fundo para profundidade visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-green-100/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-100/30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 inline-block relative">
            {title}
            <div className="h-1 w-full bg-green-500 rounded-full mt-2 transform origin-left animate-expand"></div>
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>
        
        {/* Modelo 1 */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            {model1Title}
          </h3>
          
          {/* Mantendo o estilo flex do layout que o cliente gostou */}
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 lg:gap-12 relative">
            {/* Logo central em telas médias e grandes */}
            {logoImage && (
              <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full blur-md"></div>
                  <div className="bg-white p-6 rounded-full shadow-lg relative">
                    <Image
                      src={logoImage}
                      alt="Renu Logo"
                      width={130}
                      height={130}
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-green-100/50 scale-110"></div>
                </div>
              </div>
            )}
            
            {/* Solução para produtores */}
            <div className="w-full lg:w-5/12 transform transition-all duration-300 hover:-translate-y-2 group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full border border-gray-100">
                <div className="h-2 w-full bg-gradient-to-r from-green-400 to-green-600"></div>
                <div className="p-8">
                  <div className="flex items-center mb-5">
                    <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-green-100 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-green-800 uppercase tracking-wider">
                      {producerSolution.title}
                    </h4>
                  </div>
                  
                  <div className="mb-8">
                    <div dangerouslySetInnerHTML={{ __html: producerSolution.description }} className="text-gray-600 mb-6" />
                    
                    {producerSolution.image && (
                      <div className="relative h-64 rounded-lg overflow-hidden group-hover:shadow-md transition-shadow duration-300">
                        <Image
                          src={producerSolution.image}
                          alt={producerSolution.title}
                          width={500}
                          height={300}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6">
                    <h5 className="font-semibold text-lg text-green-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      Benefícios
                    </h5>
                    <ul className="space-y-3">
                      {producerSolution.benefits.map((benefit, i) => (
                        <li key={i} className={`flex items-start gap-3 ${benefit.highlighted ? 'text-green-800 font-medium' : 'text-gray-700'}`}>
                          <div className={`mt-1.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${benefit.highlighted ? 'bg-green-600 text-white' : 'bg-green-100 text-green-600'}`}>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span dangerouslySetInnerHTML={{ __html: benefit.text }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Logo central em telas pequenas */}
            {logoImage && (
              <div className="lg:hidden flex justify-center my-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full blur-md"></div>
                  <div className="bg-white p-5 rounded-full shadow-lg relative">
                    <Image
                      src={logoImage}
                      alt="Renu Logo"
                      width={90}
                      height={90}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Solução para empresas */}
            <div className="w-full lg:w-5/12 transform transition-all duration-300 hover:-translate-y-2 group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full border border-gray-100">
                <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="p-8">
                  <div className="flex items-center mb-5">
                    <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-blue-800 uppercase tracking-wider">
                      {companySolution.title}
                    </h4>
                  </div>
                  
                  <div className="mb-8">
                    <div dangerouslySetInnerHTML={{ __html: companySolution.description }} className="text-gray-600 mb-6" />
                    
                    {companySolution.image && (
                      <div className="relative h-64 rounded-lg overflow-hidden group-hover:shadow-md transition-shadow duration-300">
                        <Image
                          src={companySolution.image}
                          alt={companySolution.title}
                          width={500}
                          height={300}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h5 className="font-semibold text-lg text-blue-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      Benefícios
                    </h5>
                    <ul className="space-y-3">
                      {companySolution.benefits.map((benefit, i) => (
                        <li key={i} className={`flex items-start gap-3 ${benefit.highlighted ? 'text-blue-800 font-medium' : 'text-gray-700'}`}>
                          <div className={`mt-1.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${benefit.highlighted ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span dangerouslySetInnerHTML={{ __html: benefit.text }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modelo 2 */}
        <div className="mt-20">
          <div className="relative mb-12">
            <div className="flex flex-col items-center">
              <div className="relative mb-2">
                <h3 className="text-2xl md:text-3xl font-semibold text-center relative z-10 px-4 py-1">
                  {model2Title}
                </h3>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-md overflow-hidden p-6">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Coluna principal com a visualização do modelo de negócio */}
              <div className="w-full lg:w-11/12 mx-auto relative">
                <div className="mb-6 bg-white p-4 rounded-lg shadow-sm text-center max-w-3xl mx-auto">
                  <p className="text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: model2Description || "" }}></p>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 py-8">
                  {/* Fluxo do processo */}
                  <div className="w-full md:w-10/12 mx-auto">
                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-6">
                      {/* Passo 1: Contrato de leasing */}
                      <div className="w-full md:w-1/3 bg-white rounded-xl shadow-md p-5 relative z-10">
                        <div className="absolute -top-4 -left-4 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">1</div>
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-emerald-100 rounded-full p-4 mb-4">
                            <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </div>
                          <h4 className="font-bold text-lg text-emerald-800 mb-2">Contrato de leasing</h4>
                          <p className="text-gray-600 text-sm">O produtor rural assina contrato para utilizar o módulo pagando um valor mensal</p>
                        </div>
                      </div>
                      
                      {/* Seta para direita */}
                      <div className="hidden md:block">
                        <svg className="w-16 h-8" viewBox="0 0 24 8" fill="none">
                          <path d="M0 4H22M22 4L19 1M22 4L19 7" stroke="#10B981" strokeWidth="2"/>
                        </svg>
                      </div>
                      
                      {/* Seta para baixo em mobile */}
                      <div className="block md:hidden my-2">
                        <svg className="w-8 h-12" viewBox="0 0 8 24" fill="none">
                          <path d="M4 0V22M4 22L1 19M4 22L7 19" stroke="#10B981" strokeWidth="2"/>
                        </svg>
                      </div>
                      
                      {/* Passo 2: Instalação e operação */}
                      <div className="w-full md:w-1/3 bg-white rounded-xl shadow-md p-5 relative z-10">
                        <div className="absolute -top-4 -left-4 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">2</div>
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-emerald-100 rounded-full p-4 mb-4">
                            <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                            </svg>
                          </div>
                          <h4 className="font-bold text-lg text-emerald-800 mb-2">Operação do módulo</h4>
                          <p className="text-gray-600 text-sm">RENU instala e fornece suporte técnico para a operação contínua do módulo</p>
                        </div>
                      </div>
                      
                      {/* Seta para direita */}
                      <div className="hidden md:block">
                        <svg className="w-16 h-8" viewBox="0 0 24 8" fill="none">
                          <path d="M0 4H22M22 4L19 1M22 4L19 7" stroke="#10B981" strokeWidth="2"/>
                        </svg>
                      </div>
                      
                      {/* Seta para baixo em mobile */}
                      <div className="block md:hidden my-2">
                        <svg className="w-8 h-12" viewBox="0 0 8 24" fill="none">
                          <path d="M4 0V22M4 22L1 19M4 22L7 19" stroke="#10B981" strokeWidth="2"/>
                        </svg>
                      </div>
                      
                      {/* Passo 3: Opção de compra */}
                      <div className="w-full md:w-1/3 bg-white rounded-xl shadow-md p-5 relative z-10">
                        <div className="absolute -top-4 -left-4 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">3</div>
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-emerald-100 rounded-full p-4 mb-4">
                            <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </div>
                          <h4 className="font-bold text-lg text-emerald-800 mb-2">Opção de compra</h4>
                          <p className="text-gray-600 text-sm">Após o prazo acordado, o produtor tem a opção de adquirir o módulo permanentemente</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Benefícios e Detalhes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {/* Benefícios para o produtor */}
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-100 rounded-full p-3 mr-3">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-emerald-800">PEQUENOS E MÉDIOS PRODUTORES</h4>
                    </div>
                    
                    <div className="space-y-3 mt-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="text-gray-600">Evita alto investimento inicial (CAPEX)</p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="text-gray-600">Suporte técnico e manutenção inclusos</p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="text-gray-600">Flexibilidade para compra futura ou renovação</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Papel da RENU */}
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative mr-3">
                        {secondaryLogo ? (
                          <div className="bg-white rounded-full shadow-sm p-2 border-2 border-green-100">
                            <Image
                              src={secondaryLogo}
                              alt="Renu Logo"
                              width={60}
                              height={60}
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">RENU</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-green-800">PAPEL DA RENU</h4>
                        <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: infoText || "" }}></p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4 mt-2">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-blue-600 flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-bold text-blue-800">Troca de Capex por Opex:</h5>
                          <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: caneText || "" }}></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Imagem do modelo de negócio para telas pequenas */}
                {businessModelImage && (
                  <div className="mt-6 w-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={businessModelImage}
                      alt="Modelo de Negócio"
                      width={800}
                      height={450}
                      className="object-contain w-full h-full"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Styles for animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .animate-expand {
          animation: expand 1.5s ease-out forwards;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}} />
    </section>
  );
} 