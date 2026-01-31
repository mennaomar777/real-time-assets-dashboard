"use client";
import { useState } from "react";
import AssetsTable from "./_components/assetsTable/AssetsTable";
import { AssetType } from "./_interfaces/asset";
import { data } from "./_lib/data";

export default function Home() {
  const [assets, setAssets] = useState<AssetType[]>(data);

  return (
    <main>
      <div className="container mx-auto max-w-[90%]">
        <AssetsTable assets={assets} />
      </div>
    </main>
  );
}
