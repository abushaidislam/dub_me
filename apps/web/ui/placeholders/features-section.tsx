"use client";

import { ExpandingArrow } from "@dub/ui";
import { cn, createHref, UTMTags } from "@dub/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PropsWithChildren } from "react";
import Markdown from "react-markdown";
import { Analytics } from "./feature-graphics/analytics";
import { Collaboration } from "./feature-graphics/collaboration";
import { Domains } from "./feature-graphics/domains";
import { Personalization } from "./feature-graphics/personalization";
import { QR } from "./feature-graphics/qr";

export function FeaturesSection({
  utmParams,
}: {
  utmParams: Partial<Record<(typeof UTMTags)[number], string>>;
}) {
  const { domain } = useParams() as { domain: string };
  return (
    <div className="mt-20" id="services">
      <div className="mx-auto w-full max-w-xl px-4 text-center">
        <div className="mx-auto flex h-7 w-fit items-center rounded-full border border-neutral-200 bg-white px-4 text-xs text-neutral-800">
          What is RenderX?
        </div>
        <h2 className="font-display mt-2 text-balance text-3xl font-medium text-neutral-900">
          Comprehensive Tech & IT Solutions for Modern Businesses
        </h2>
        <p className="mt-3 text-pretty text-lg text-neutral-500">
          RenderX builds custom software, scalable IT infrastructure, engaging web designs, and innovative digital products tailored to your goals.
        </p>
      </div>
      <div className="mx-auto mt-14 grid w-full max-w-screen-lg grid-cols-1 px-4 sm:grid-cols-2">
        <div className="contents divide-neutral-200 max-sm:divide-y sm:divide-x">
          <FeatureCard
            title="Web Development"
            description="Build robust, high-performance web applications using modern stacks like Next.js, React, Node.js, and cloud-native services."
            linkText="Explore Web Dev"
            href="#contact"
          >
            <Domains />
          </FeatureCard>
          <FeatureCard
            title="IT Services & Infrastructure"
            description="Manage and scale your business technology with secure cloud computing, DevOps automation, API integrations, and enterprise IT consulting."
            linkText="Discover IT Services"
            href="#contact"
          >
            <QR />
          </FeatureCard>
        </div>

        <FeatureCard
          className="border-y border-neutral-200 pt-12 sm:col-span-2"
          graphicClassName="sm:h-96"
          title="Custom E-Product & Digital Software Building"
          description="From conceptualization to product design, prototyping, and full-stack development, RenderX builds market-ready SaaS and digital e-products."
          linkText="Book a Product Demo"
          href="#contact"
        >
          <div className="group block size-full">
            <div className="size-full transition-[filter,opacity] duration-300">
              <Analytics />
            </div>
          </div>
        </FeatureCard>

        <div className="contents divide-neutral-200 max-sm:divide-y sm:divide-x [&>*]:border-t [&>*]:border-neutral-200">
          <FeatureCard
            title="Web Design & UI/UX"
            description="Craft intuitive, user-centric interfaces and responsive web layouts that maximize user engagement and conversion rates."
            linkText="View Designs"
            href="#contact"
          >
            <Personalization />
          </FeatureCard>
          <FeatureCard
            title="Dedicated Tech Partnership"
            description="Partner with our dedicated team of engineers, designers, and system architects to continuously scale your digital platform."
            linkText="Partner With Us"
            href="#contact"
          >
            <Collaboration />
          </FeatureCard>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  linkText,
  href,
  children,
  className,
  graphicClassName,
}: PropsWithChildren<{
  title: string;
  description: string;
  linkText: string;
  href: string;
  className?: string;
  graphicClassName?: string;
}>) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-10 px-4 py-14 sm:px-12",
        className,
      )}
    >
      <div
        className={cn(
          "absolute left-1/2 top-1/3 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[50px]",
          "bg-[conic-gradient(from_270deg,#F4950C,#EB5C0C,transparent,transparent)]",
        )}
      />
      <div
        className={cn(
          "relative h-64 overflow-hidden sm:h-[302px]",
          graphicClassName,
        )}
      >
        {children}
      </div>
      <div className="relative flex flex-col">
        <h3 className="text-lg font-medium text-neutral-900">{title}</h3>
        <Markdown
          className={cn(
            "mt-2 text-neutral-500 transition-colors",
            "[&_a]:font-medium [&_a]:text-neutral-600 [&_a]:underline [&_a]:decoration-dotted [&_a]:underline-offset-2 hover:[&_a]:text-neutral-800",
          )}
          components={{
            a: ({ children, href }) => {
              if (!href) return null;
              return (
                <Link href={href} target="_blank">
                  {children}
                </Link>
              );
            },
          }}
        >
          {description}
        </Markdown>
        <Link
          href={href}
          className={cn(
            "mt-6 w-fit whitespace-nowrap rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm font-medium leading-none text-neutral-900 transition-colors duration-75",
            "outline-none hover:bg-neutral-50 focus-visible:border-neutral-900 focus-visible:ring-1 focus-visible:ring-neutral-900 active:bg-neutral-100",
          )}
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}
