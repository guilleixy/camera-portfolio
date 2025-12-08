import { Footer, Layout, Navbar, ThemeSwitch } from "nextra-theme-blog";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-blog/style.css";
import type { Metadata } from "next";
import type { FC, ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    absolute: "",
    template: "%s - Guillermo Bernal",
  },
};
const RootLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  const pageMap = await getPageMap();

  //   const banner = (
  //     <Banner storageKey="4.0-release">
  //       🎉 Nextra 4.0 is released.{" "}
  //       <a
  //         href="#"
  //         style={{
  //           textDecoration: "underline",
  //           textUnderlinePosition: "from-font",
  //         }}
  //       >
  //         Read more →
  //       </a>
  //     </Banner>
  //   );

  return (
    //   <Head backgroundColor={{ dark: "#0f172a", light: "#fefce8" }} />
    <div>
      {/* <Layout banner={banner}> */}
      <Layout>
        <Navbar pageMap={await getPageMap()}>
          <Search />
          {/* <ThemeSwitch /> */}
        </Navbar>

        {children}

        <Footer>
          <abbr
            title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
            style={{ cursor: "help" }}
          >
            CC BY-NC 4.0
          </abbr>{" "}
          {new Date().getFullYear()} © Guillermo Bernal.
        </Footer>
      </Layout>
    </div>
  );
};

export default RootLayout;
