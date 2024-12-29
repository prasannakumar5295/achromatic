import { CircleChevronRight } from 'lucide-react'

const technologies = [
  {
    name: "Next 15",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" viewBox="0.5 -0.2 1023 1024.1" fill="currentColor">
        <path d="M478.5.6c-2.2.2-9.2.9-15.5 1.4C317.7 15.1 181.6 93.5 95.4 214c-48 67-78.7 143-90.3 223.5C1 465.6.5 473.9.5 512s.5 46.4 4.6 74.5C32.9 778.6 169.6 940 355 999.8c33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5L487 587.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5C991.1 245.4 854.4 84 669 24.2 636.3 13.6 601.5 6.3 562.5 1.9c-9.6-1-75.7-2.1-84-1.3z"/>
      </svg>
    )
  },
  {
    name: "React 19",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" viewBox="-11.5 -10.232 23 20.463">
        <circle r="2.05" fill="#61dafb"/>
        <g fill="none" stroke="#61dafb">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )
  },
  {
    name: "Auth.js 5",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="auto" fill="none" viewBox="0 0 210 232">
        <path fill="url(#paint0_linear_128_61)" fillRule="evenodd" d="M208.687 31.859L30.095 167.73C8.164 127.966.568 79.998 0 51.228v-17.61c0-2.561 2.779-4.055 4.169-4.482C33.562 20.278 93.247 2.306 96.838 1.28 100.429.256 103.464 0 104.534 0h.097c1.069 0 4.104.256 7.696 1.28 3.591 1.025 63.276 18.998 92.669 27.856 1.034.317 2.836 1.225 3.691 2.723z" clipRule="evenodd"/>
        <defs>
          <linearGradient id="paint0_linear_128_61" x1="19.57" x2="97.527" y1="96.564" y2="15.078" gradientUnits="userSpaceOnUse">
            <stop stopColor="#45FFC8"/>
            <stop offset="1" stopColor="#1DBBF1"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: "Prisma",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="auto" fill="none" viewBox="0 0 159 194">
        <path fill="#2D3748" fillRule="evenodd" d="M2.397 122.867a9.632 9.632 0 00.077 10.192l35.622 56.193a9.633 9.633 0 0010.905 4.069l102.797-30.839c5.61-1.683 8.432-7.941 5.98-13.26L91.695 5.872c-3.222-6.99-12.938-7.564-16.961-1.001L2.397 122.867zM89.94 38.644c-1.404-3.25-6.16-2.75-6.857.722L57.64 166.044c-.537 2.671 1.964 4.952 4.575 4.173l71.025-21.202a3.61 3.61 0 002.282-4.894L89.94 38.644z" clipRule="evenodd"/>
      </svg>
    )
  },
  {
    name: "react-email",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 180 180">
        <path fill="#242323" d="M36.5-.5h102c21.496 3.49 35.163 15.823 41 37v104c-4.762 21.762-18.095 34.762-40 39h-102c-21.214-5.214-33.88-18.547-38-40v-102c4.886-19.887 17.22-32.553 37-38z"/>
        <path fill="#e9e9e8" d="M52.5 41.5a45.188 45.188 0 0116 2.5A118.773 118.773 0 0189 54.5 107.213 107.213 0 01115.5 42c15.355-.978 22.189 6.189 20.5 21.5a93.656 93.656 0 01-12.5 26 109.629 109.629 0 0112.5 25c1.483 18.184-6.683 25.351-24.5 21.5a185.074 185.074 0 01-23-11.5c-8.42 6.04-17.753 10.206-28 12.5-15.963.331-22.13-7.502-18.5-23.5 2.861-8.724 7.028-16.724 12.5-24-5.477-7.286-9.644-15.286-12.5-24-3.22-11.207.28-19.207 10.5-24z"/>
      </svg>
    )
  },
  {
    name: "nuqs",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 1024 1024">
        <rect width="1024" height="1024" fill="#000" rx="512"/>
        <path fill="#fff" d="M284.192 203.6l3.36 74.88-9.119-3.36c3.52-27.2 12.639-46.88 27.359-59.04 14.721-12.16 33.441-18.24 56.16-18.24 27.521 0 48.96 8.64 64.32 25.92 15.68 17.28 23.52 40.8 23.52 70.56V458h-72.48V318.32c0-14.72-1.28-26.56-3.839-35.52-2.24-8.96-6.24-15.68-12-20.16-5.76-4.8-13.441-7.2-23.041-7.2-15.36 0-27.04 5.28-35.039 15.84-7.68 10.56-11.521 26.24-11.521 47.04V458h-72.96V203.6h65.28z"/>
      </svg>
    )
  },
  {
    name: "safe-action",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="auto" fill="none" viewBox="0 0 352 352">
        <rect width="352" height="352" fill="url(#paint0_linear_3_26)" rx="62"/>
        <path fill="#fff" fillRule="evenodd" d="M202.763 9.901a11.163 11.163 0 016.63 12.102L189.2 143h98.617c4.236 0 8.109 2.39 10.004 6.173a11.155 11.155 0 01-1.058 11.694L162.582 339.534a11.19 11.19 0 01-13.345 3.564 11.16 11.16 0 01-6.63-12.1L162.8 210H64.182c-4.235 0-8.107-2.39-10.001-6.173a11.152 11.152 0 011.055-11.693L189.418 13.468A11.192 11.192 0 01202.763 9.9z" clipRule="evenodd"/>
        <defs>
          <linearGradient id="paint0_linear_3_26" x1="176" x2="176" y1="0" y2="352" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F79F2D"/>
            <stop offset="1" stopColor="#FF8E0A"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: "Stripe",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
        <rect width="28" height="28" fill="#6772e5" rx="6" ry="6"/>
        <path fill="#fff" d="M13.3 11.2c0-.69.57-1 1.49-1a9.84 9.84 0 014.37 1.13V7.24a11.6 11.6 0 00-4.36-.8c-3.56 0-5.94 1.86-5.94 5 0 4.86 6.68 4.07 6.68 6.17 0 .81-.71 1.07-1.68 1.07A11.06 11.06 0 019 17.25v4.19a12.19 12.19 0 004.8 1c3.65 0 6.17-1.8 6.17-5 .03-5.21-6.67-4.27-6.67-6.24z"/>
      </svg>
    )
  },
  {
    name: "Tailwind",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="auto" viewBox="0 0 54 33">
        <g clipPath="url(#prefix__clip0)">
          <path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd"/>
        </g>
      </svg>
    )
  },
  {
    name: "shadcn/ui",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="28" height="auto">
        <rect width="256" height="256" fill="none"/>
        <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      </svg>
    )
  },
  {
    name: "Typescript",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 512 512">
        <rect width="512" height="512" fill="#3178c6" rx="50"/>
        <path fill="#fff" fillRule="evenodd" d="M316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386S368.637 470 380.949 470c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65S470 415.559 470 403.044c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894a97.514 97.514 0 0113.694 4.928c4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492S415.797 238 404.112 238c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zM232.78 284.082H297V243H118v41.082h63.906V467h50.874z" clipRule="evenodd"/>
      </svg>
    )
  },
  {
    name: "zod",
logo: (
  <svg width="28" height="auto" viewBox="0 0 256 203">
    <defs>
      <path id="path-1" d="M200.42 0H53.63L0 53.355l121.76 146.624 9.714-10.9L252 53.857 200.42 0zm-5.362 12.562l39.84 41.6-112.8 126.558L17 54.162l41.815-41.6h136.243z"/>
    </defs>
    <g transform="translate(2 1.51)">
      <path fill="#18253F" d="M58.8162023 12.5220497L195.093896 12.5220497 235.027464 54.2130202 122.038097 180.765999 16.9574282 54.2130202z"/>
      <use fill="#3068B7" href="#path-1"/>
    </g>
  </svg>


    )
  }
]

const features = [
  {
    name: "shadcn/ui",
    description: "for sleek, customizable components"
  },
  {
    name: "react-hook-form",
    description: "for efficient, secure form handling"
  },
  {
    name: "react-table",
    description: "for powerful, flexible data grids"
  },
  {
    name: "recharts",
    description: "for stunning, interactive visualizations"
  },
  {
    name: "zod",
    description: "for robust, type-safe data validation"
  }
]

export function TechStack() {
  return (
    <section className="container mx-auto py-24 sm:px-4 sm:py-32">
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">
      <div className="order-1 space-y-8 lg:mt-12 lg:max-w-lg">
        <h2 className="text-3xl font-bold leading-tight">Solid foundation</h2>
        <div className="text-lg font-light text-muted-foreground">
          <p>
            <strong className="font-semibold text-foreground">Achromatic</strong>
            {' '}uses top-tier libraries and tools to make development easier and faster, including
          </p>
          <ul className="mt-4 space-y-1 text-base sm:text-lg lg:mt-3 lg:space-y-0.5">
            {features.map((feature) => (
              <li key={feature.name} className="flex items-start">
                <CircleChevronRight className="mr-2 mt-1.5 h-4 w-4 shrink-0" />
                <span>
                  <strong className="font-semibold text-foreground">{feature.name}</strong>
                  {' '}
                  <span className="hidden sm:inline">for {feature.description}.</span>
                  <span className="sm:hidden">for {feature.description.split(',')[0]}.</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="order-2">
        <div className="relative z-10 col-span-1 flex w-full flex-col justify-between rounded-xl border p-3">
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="relative z-20 flex aspect-square items-center justify-center rounded-xl bg-neutral-50 text-card-foreground dark:bg-neutral-900 lg:aspect-auto"
              >
                <div className="relative flex flex-col items-center gap-4 p-2 lg:p-4 xl:p-6">
                  <div className="h-7 max-h-7 shrink-0">
                    {tech.logo}
                  </div>
                  <p className="whitespace-nowrap text-sm font-medium">{tech.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
