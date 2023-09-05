import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

export default {
  logo: (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{ height: "100%" }}
      >
        <path
          fill="currentColor"
          d="m4.51,7.33c-.12-1.83-.23-3.63-.35-5.48l3.87,3.76c.7-1.66,1.39-3.31,2.09-4.98.33.5.65.98.96,1.45.74,1.13,1.49,2.25,2.23,3.38.06.09.14.11.23.11,3.41,0,6.82,0,10.23,0h.22c-.13.31-.25.61-.38.9-1.08,2.55-2.17,5.09-3.23,7.64-.61,1.46-1.29,2.88-1.97,4.31-.43.9-.87,1.81-1.3,2.71-.02.04-.04.07-.06.12-.38-.13-.76-.25-1.14-.38-.65-.22-1.3-.44-1.95-.65-.05-.02-.12-.02-.18,0-1.23.23-2.46.46-3.7.68-.57.11-1.14.2-1.7.32-.65.14-1.3.31-1.95.48-2.11.55-4.21,1.11-6.32,1.66-.03,0-.07.01-.13.02.08-.21.15-.4.22-.6.48-1.26.96-2.52,1.42-3.79.23-.62.43-1.25.64-1.87.02-.06.02-.14,0-.2-.55-1.5-1.1-3-1.64-4.49-.06-.15-.11-.31-.17-.48.89-.15,1.76-.29,2.66-.44-.53-1.88-1.06-3.74-1.6-5.64,1.01.5,1.98.98,2.98,1.48h0Zm1.43,10.61c.03-.06.04-.08.05-.1,1.14-2.01,2.29-4.02,3.43-6.02.83-1.46,1.66-2.91,2.49-4.37.06-.1.05-.17-.01-.26-.24-.36-.48-.72-.72-1.09-.21-.31-.42-.63-.64-.97-.59,1.4-1.17,2.78-1.75,4.18-.72-.7-1.42-1.38-2.12-2.06-.01,0-.02.01-.03.02.07,1.19.15,2.38.23,3.61-.66-.33-1.3-.64-1.97-.98.32,1.12.62,2.21.94,3.31-.84.14-1.65.27-2.47.41.01.04.02.07.03.09.29.78.55,1.56.86,2.33.21.52.32,1.02.12,1.57-.25.69-.48,1.38-.71,2.07-.06.19-.13.37-.2.57.05,0,.07,0,.08-.01.59-.15,1.19-.31,1.78-.47.79-.21,1.57-.43,2.36-.61.82-.18,1.66-.31,2.49-.47,1.15-.21,2.29-.42,3.44-.65.32-.06.61-.04.91.08.43.17.88.3,1.32.45.11.04.15,0,.19-.09.29-.61.58-1.22.88-1.82.16-.32.31-.65.48-1.01-3.82.76-7.62,1.52-11.44,2.28h0Zm14.84-10.24h-.19c-2.07,0-4.13,0-6.2,0-.13,0-.2.04-.26.15-1.26,2.22-2.53,4.44-3.79,6.66-.07.13-.15.26-.23.41.08-.01.13-.01.18-.02,1.05-.21,2.1-.42,3.16-.63,1.62-.32,3.25-.65,4.87-.98.06-.01.13-.07.15-.12.68-1.6,1.36-3.2,2.03-4.8.09-.22.18-.44.28-.68h0Z"
        />
      </svg>
      <span style={{ marginLeft: ".8em", fontWeight: 500 }}>
        MUREX Robotics Docs
      </span>
      <style jsx>{`
        svg {
          mask-image: linear-gradient(
            60deg,
            black 25%,
            rgba(0, 0, 0, 0.2) 50%,
            black 75%
          );
          mask-size: 400%;
          mask-position: 0%;
        }
        svg:hover {
          mask-position: 100%;
          transition: mask-position 1s ease, -webkit-mask-position 1s ease;
        }
      `}</style>
    </>
  ),
  themeSwitch: {
    useOptions() {
      return {
        light: "Light",
        dark: "Dark",
        system: "System",
      };
    },
  },
  project: {
    link: "https://github.com/murexrobotics/",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – MUREX Robotics Documentation",
      };
    }
  },
  docsRepositoryBase: "https://github.com/murexrobotics/docs-2024",
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  feedback: {
    content: null,
  },
  navigation: {
    prev: true,
    next: true,
  },
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Attempt the impossible. This is MUREX Robotics."
        />
        <meta
          name="og:description"
          content="Attempt the impossible. This is MUREX Robotics."
        />
        <meta
          name="og:title"
          content={
            title
              ? title + " – MUREX Documentation"
              : "MUREX Robotics Documentation"
          }
        />
        <meta property="og:image" content="https://murexrobotics.com/images/logo.png" />
        <meta name="apple-mobile-web-app-title" content="MUREX Robotics" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  gitTimestamp: ({ timestamp }) => (
    <>Last updated on {timestamp.toLocaleDateString()}</>
  ),
  footer: {
    text: (
      <>
        <span>
          SPDX: MIT | {new Date().getFullYear()} ©{" "}
          <a href="https://murexrobotics.com" target="_blank">
            MUREX Robotics
          </a>
          .
        </span>
      </>
    ),
  },
  // ... other theme options
};
