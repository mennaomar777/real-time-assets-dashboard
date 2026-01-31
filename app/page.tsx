"use client";
import { useState } from "react";
import AssetsTable from "./_components/assetsTable/AssetsTable";
import { AssetType } from "./_interfaces/asset";
import { data } from "./_lib/data";
import Sort from "./_components/sort/Sort";

export default function Home() {
  const [assets, setAssets] = useState<AssetType[]>(data);
  const [sortBy, setSortBy] = useState<string>("");
  let newAssets: AssetType[] = structuredClone(assets);

  // Sort
  if (sortBy === "price-asc")
    newAssets = newAssets.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc")
    newAssets = newAssets.sort((a, b) => b.price - a.price);
  if (sortBy === "change-asc")
    newAssets = newAssets.sort((a, b) => a.change - b.change);
  if (sortBy === "change-desc")
    newAssets = newAssets.sort((a, b) => b.change - a.change);

  return (
    <main>
      <div className="container mx-auto max-w-[90%]">
        <div className="bg-blue-50 mt-3 px-6 py-4 border-b  rounded-xl border-gray-300 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Assets Overview
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Total assets: {assets.length}
            </p>
          </div>
          <div>
            <Sort onSort={setSortBy} />
          </div>
        </div>

        <AssetsTable assets={newAssets} />
      </div>
    </main>
  );
}
