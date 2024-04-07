import { useEffect, useState } from "react";

import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import {
  createTheme,
  ThemeProvider as MaterialThemeProvider,
} from "@mui/material";

const cacheRtl = createCache({
  key: "mui-rtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: "rtl",
});

const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <MaterialThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
    </MaterialThemeProvider>
  );
};

export default ThemeProviders;
