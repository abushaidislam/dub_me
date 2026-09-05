import { ButtonLink } from "@/ui/placeholders/button-link";
import { CTA } from "@/ui/placeholders/cta";
import { FeaturesSection } from "@/ui/placeholders/features-section";
import { Hero } from "@/ui/placeholders/hero";
import { LearnMoreButton } from "@/ui/placeholders/learn-more-button";
import { Logo } from "@dub/ui";
import { cn, constructMetadata } from "@dub/utils";
import { BubbleIcon } from "../../ui/placeholders/bubble-icon";
import { BrowserGraphic } from "./browser-graphic";

export const revalidate = false; // cache indefinitely

export async function generateMetadata(props: {
  params: Promise<{ domain: string }>;
}) {
  const title = "RenderX - Web Development, IT Services & Digital Solutions";
  const description = "RenderX crafts high-performance web applications, custom IT infrastructure, web design, and cutting-edge digital products to scale your business.";

  return constructMetadata({
    title,
    description,
  });
}
// @see: https://nextjs.org/docs/app/api-reference/functions/generate-static-params#all-paths-at-runtime
export function generateStaticParams() {
  return [];
}

const UTM_PARAMS = {
  utm_source: "Custom Domain",
  utm_medium: "Welcome Page",
};

export default function CustomDomainPage() {
  return (
    <div>
      <Hero>
        <div className="relative mx-auto flex w-full max-w-xl flex-col items-center">
          <BubbleIcon>
            <Logo className="size-10" />
          </BubbleIcon>
          <div className="mt-16 w-full">
            <BrowserGraphic />
          </div>
          <h1
            className={cn(
              "font-display mt-2 text-center text-4xl font-medium text-neutral-900 sm:text-5xl sm:leading-[1.15]",
              "animate-slide-up-fade motion-reduce:animate-fade-in [--offset:20px] [animation-duration:1s] [animation-fill-mode:both]",
            )}
          >
            RenderX &ndash; Next-Gen Tech & Web Development Solutions
          </h1>
          <p
            className={cn(
              "mt-5 text-balance text-base text-neutral-700 sm:text-xl",
              "animate-slide-up-fade motion-reduce:animate-fade-in [--offset:10px] [animation-delay:200ms] [animation-duration:1s] [animation-fill-mode:both]",
            )}
          >
            We craft high-performance web applications, custom IT infrastructure, web design, and cutting-edge digital products to scale your business.
          </p>
        </div>

        <div
          className={cn(
            "xs:flex-row relative mx-auto mt-8 flex max-w-fit flex-col items-center gap-4",
            "animate-slide-up-fade motion-reduce:animate-fade-in [--offset:5px] [animation-delay:300ms] [animation-duration:1s] [animation-fill-mode:both]",
          )}
        >
          <ButtonLink variant="primary" href="#contact">
            Book a Demo
          </ButtonLink>
          <LearnMoreButton utmParams={UTM_PARAMS} />
        </div>
      </Hero>
      <div className="mt-20">
        <FeaturesSection utmParams={UTM_PARAMS} />
      </div>
      <div className="mt-32">
        <CTA utmParams={UTM_PARAMS} />
      </div>
    </div>
  );
}
