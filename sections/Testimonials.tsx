import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";

/**
 * @titleBy alt
 */
export interface Testimonial {
  content?: {
    description?: string;
    avatar?: ImageWidget;
    /** @description Image's alt text */
    alt?: string;
    name?: string;
    position?: string;
  };
}

export interface Props {
  title?: string;
  slides?: Testimonial[];
  /**
   * @title Show arrows
   * @description show arrows to navigate through the images
   */
  arrows?: boolean;
  /**
   * @title Show dots
   * @description show dots to navigate through the images
   */
  dots?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
  subtitle?: string;

  /**
   * @title Section ID
   * @description Unique identifier for the section
   */
  id?: string;
}

const DEFAULT_PROPS = {
  title: "This is where you'll put your customer testimonials",
  slides: [
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        avatar:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/7286de42-e9c5-4fcb-ae8b-b992eea4b78e",
        alt: "Avatar",
        name: "Name Surname",
        position: "Position, Company name",
      },
    },
  ],
};

function SliderItem(
  { slide, id }: { slide: Testimonial; id: string },
) {
  const {
    content,
  } = slide;

  return (
    <div
      id={id}
      class="relative overflow-y-hidden w-full min-h-[292px]"
    >
      <div class="flex flex-col justify-center gap-16 p-8 border border-base-content rounded-2xl h-full max-w-[600px]">
        <p class="text-lg">{content?.description}</p>
        <div class="flex items-center gap-5">
          <Image
            class="object-cover w-14 h-14 rounded-full"
            alt={content?.alt}
            src={content?.avatar || ""}
            width={56}
            height={56}
          />
          <div class="flex flex-col">
            <p class="font-semibold text-base">{content?.name}</p>
            <p class="text-base">{content?.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dots({ slides, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel col-span-full gap-3 z-10">
        {slides?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-2 h-2 rounded-full group-disabled:animate-progress dot"
                  style={{ animationDuration: `${interval}s` }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <div class="flex gap-4">
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="flex items-center justify-center btn-circle border border-base-content">
          <Icon
            class="text-base-content"
            size={24}
            id="ArrowRight"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="flex items-center justify-center btn-circle border border-base-content">
          <Icon
            class="text-base-content"
            size={24}
            id="ArrowLeft" 
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </div>
  );
}

function Carousel(props: Props) {
  const id = useId();
  const { title, slides, interval } = { ...DEFAULT_PROPS, ...props };

  return (
    <section id={props.id} class="relative py-16 md:py-24 bg-white">
      
      <div class="container mx-auto px-4 relative z-10">
        {/* Título Padronizado */}
        <div class="flex flex-col items-center mb-16">
          <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 bg-green-100 rounded-full">
            <span class="text-sm font-medium text-green-800">Depoimentos</span>
          </div>
          
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 text-center mb-8 max-w-4xl">
            {title}
          </h2>
          
          <div class="flex items-center gap-3 justify-center mb-10">
            <div class="h-1 w-10 bg-green-500 rounded-full"></div>
            <div class="h-1 w-16 bg-green-700 rounded-full"></div>
            <div class="h-1 w-10 bg-green-500 rounded-full"></div>
          </div>
          
          {props.subtitle && (
            <div class="max-w-3xl mx-auto text-center">
              <p class="text-lg text-gray-700 mb-8">{props.subtitle}</p>
            </div>
          )}
        </div>
        
        {/* Testimonials Carousel */}
        <div class="relative px-4 sm:px-8 lg:px-16">
          <Slider
            class="carousel carousel-center w-full col-span-full row-span-full gap-6"
            rootId={id}
            interval={interval && interval * 1e3}
            infinite
          >
            {slides?.map((slide, index) => (
              <Slider.Item
                index={index}
                class="carousel-item max-w-[600px] w-full"
              >
                <SliderItem
                  slide={slide}
                  id={`${id}::${index}`}
                />
              </Slider.Item>
            ))}
          </Slider>

          <div class="flex justify-between pt-8 lg:px-16">
            {props.dots && <Dots slides={slides} interval={interval} />}{" "}
            {props.arrows && <Buttons />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
