/* eslint-disable react/no-unescaped-entities */
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/icons/social";
import Image from "next/image";
export default function Home() {
  return (
    <div className="mx-5 sm:mx-0 flex flex-col space-y-5 max-w-xl">
      
      <Image
        src="/profile.jpeg"
        alt="Profile Picture"
        width={60}
        height={60}
        className="rounded-full size-16"
      />
      <h1 className="text-5xl font-bold tracking-tighter">
        Programmer. Writer. Player.
      </h1>
      <p className="mt-6 text-base text-zinc-600">
        Hey, I'm Constantin. I'm the founder and CEO of{" "}
        <a
          href="https://rathon.vercel.app/"
          target="_blank"
          className="underline underline-offset-4 text-zinc-800 font-semibold"
        >
          Rathon
        </a>{" "}
        – a full-service agency specializing in website and software design, development, and hosting.
      </p>

      <p className="mt-6 text-base text-zinc-600">
        In my daily programming activities i use different languages and frameworks to create well designed and functional softwares.{" "}
       {" "}
        But am likely to use{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="underline underline-offset-4 text-zinc-800 font-semibold"
        >
          Nextjs
        </a>
        ,{" "}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          className="underline underline-offset-4 text-zinc-800 font-semibold"
        >
          Typescript
          </a>
        ,{" "}
        <a
          href="https://www.prisma.io/"
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4 text-zinc-800 font-semibold"
        >
          Prisma
        </a>
        , and{" "}
        <a
          href="https://www.postgresql.org/"
          target="_blank"
          className="underline underline-offset-4 text-zinc-800 font-semibold"
        >
          Postgress
        </a>
        .
      </p>
      <div className="mt-6 flex gap-6">
        <a href="https://x.com/le_con82546" target="_blank">
          <TwitterIcon className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
        <a href="https://github.com/leconstantin" target="_blank">
          <GitHubIcon className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
        <a
          href="www.linkedin.com/in/leoconstantin"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInIcon className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
      </div>
    </div>
  );
}