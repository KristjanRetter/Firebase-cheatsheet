import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: "Firecheat",
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
          }}
          href="https://x.com/KristjanRetter"
          target="_blank"
        >
          <span
            style={{
              fontSize: "12px",
            }}
          >
            Made with ☕ by{" "}
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
};

export default config;
