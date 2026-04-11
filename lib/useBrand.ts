"use client";
import { useState, useEffect } from "react";

export type BrandConfig = {
  name: string;       // e.g. "Atlas TV" or "Lenscraft"
  isAtlas: boolean;
};

export function useBrand(): BrandConfig {
  const [config, setConfig] = useState<BrandConfig>({ name: "Lenscraft", isAtlas: false });

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hostname.includes("atlasstv.com")) {
      setConfig({ name: "Atlas TV", isAtlas: true });
    }
  }, []);

  return config;
}
