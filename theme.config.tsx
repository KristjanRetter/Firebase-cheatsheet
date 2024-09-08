import { DocsThemeConfig } from "nextra-theme-docs";
import SvgComponent from "./components/SvgComponent";

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        display: "flex",
      }}
    >
      <SvgComponent /> Firecheat{" "}
    </div>
  ),
  project: {
    link: "https://github.com/KristjanRetter/Firebase-cheatsheet",
  },
  docsRepositoryBase:
    "https://github.com/KristjanRetter/Firebase-cheatsheet/blob/main/",

  navbar: {
    extraContent: (
      <>
        <a
          style={{
            fontSize: "12px",
            marginLeft: "48px",
            marginRight: "30px",
          }}
          href="https://x.com/KristjanRetter"
          target="_blank"
        >
          <span
            style={{
              fontSize: "13px",
            }}
          >
            Made with <span style={{ fontSize: "16px" }}>☕</span> by{" "}
          </span>{" "}
          <span
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "2px 10px",
              borderRadius: "20px",

              fontSize: "12px",
            }}
          >
            Kristjan
            <span style={{ fontSize: "16px", marginLeft: "4px" }}>𝕏</span>
          </span>
        </a>
      </>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Firecheat" />
      <meta property="og:description" content="Firebase cheat sheet" />

      <link rel="icon" href="/favicon.ico" sizes="any" />
    </>
  ),
};

export default config;
