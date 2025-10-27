import type { ImageWidget, Color  } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Noticias {
  image: ImageWidget;
  logoBackground: Color;
  name: string;
  url?: string;
  date?: string;
  source?: ImageWidget;
  sourceName?: string;
  highlight: Color
}

export interface Props {
  /**
   * @title Section title
   * @default QUEM SOMOS!
   */
  title?: string;
  
  /**
   * @title Partners
   * @description List of partner companies
   */
  noticias?: Noticias[];
}

const getGridCols = (index) => {
  const cols = index >= 3 ? 3 : index; // limita a 3 colunas
  return `grid-cols-${cols}`;
};

export default function NewsSection({
  title = "Oque falam sobre nós",
  noticias = []
}: Props) {

  const gridClass = `grid ${getGridCols(noticias.length)}`;
  return (
    <section 
      class="py-24 relative overflow-hidden" 
    >
      <div class="container mx-auto px-4 relative z-10 flex flex-col justify-center items-center">
        {/* Section Title with decorative line */}
        {/* Cabeçalho */}
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 bg-green-100 rounded-full">
            <span class="text-sm font-medium text-green-800">Notícias</span>
          </div>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 text-center mb-8 max-w-4xl">
            {title}
          </h2>
          
          <div class="flex items-center gap-3 justify-center mb-10">
            <div class="h-1 w-10 bg-green-500 rounded-full"></div>
            <div class="h-1 w-16 bg-green-700 rounded-full"></div>
            <div class="h-1 w-10 bg-green-500 rounded-full"></div>
          </div>

        {/* Noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {noticias?.map((noticia)=>{
            return (
              <a href={noticia.url} className="card max-w-96 bg-white rounded-xl border border-gray-100 shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-green-200 group flex flex-col justify-center items-center">
                <div style={{backgroundColor: noticia.highlight}} className="h-2 w-full"></div>
                <div className="card-body p-4 flex flex-col items-center justify-center">
                  <div className="max-w-[50%] flex w-auto h-auto p-2 rounded items-center justify-center" style={{backgroundColor: noticia.logoBackground}}>
                    <Image src={noticia.source} className="w-full h-auto" />
                  </div>
                  <Image src={noticia.image} className="w-full h-auto" />
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed font-semibold">{noticia.name}</p>
                    <p className="text-gray-700 opacity-70 text-xs leading-relaxed w-full flex justify-between items-center">
                      <span> {noticia.date}</span>
                      <span> {noticia.sourceName}</span>
                    </p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  );
} 


    