import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { Suspense } from "react";

type WorkDetails = {
  title: string;
  year: string;
  size?: string;
  carouselIndex: number;
  links: {
    text: string;
    href: string;
  }[];
};

type WorksData = {
  [key: string]: WorkDetails;
};

const ClientComponent = dynamic(() => import("./client"), { ssr: false });

// This is a mock function. Replace it with your actual data fetching logic.
async function getWorkData(slug: string): Promise<WorkDetails | null> {
  // Simulating data for different routes
  const worksData: WorksData = {
    "mixed-use": {
      title: "Mixed Use Development",
      year: "2022",
      size: "16000 sqm",
      carouselIndex: 0,
      links: [{ text: "Interiors", href: "/works/mixed-use-interiors" }],
    },
    "mixed-use-interiors": {
      title: "Mixed Use Interiors",
      year: "2022",
      carouselIndex: 1,
      links: [{ text: "Exteriors", href: "/works/mixed-use" }],
    },
    v01: {
      title: "Villa 01",
      year: "2023",
      size: "375 sqm",
      carouselIndex: 2,
      links: [
        { text: "Interiors", href: "/works/v01-interiors" },
        { text: "3D Partial", href: "/works/v01-3d-partial" },
      ],
    },
    "v01-interiors": {
      title: "Villa 01 Interiors",
      year: "2022",
      carouselIndex: 3,
      links: [
        { text: "Exteriors", href: "/works/v01" },
        { text: "3D Partial", href: "/works/v01-3d-partial" },
      ],
    },
    "v01-3d": {
      title: "Villa 01 3D",
      year: "2023",
      carouselIndex: 6,
      links: [
        { text: "Exteriors", href: "/works/v01" },
        { text: "Interiors", href: "/works/v01-interiors" },
      ],
    },
    v02: {
      title: "Villa 02",
      year: "2023",
      size: "150 sqm",
      carouselIndex: 4,
      links: [{ text: "Interiors", href: "/works/v02-interiors" }],
    },
    "v02-interiors": {
      title: "Villa 02 Interiors",
      year: "2022",
      carouselIndex: 5,
      links: [{ text: "Exteriors", href: "/works/v02" }],
    },
    carport: {
      title: "Carport",
      year: "2023",
      carouselIndex: 7,
      links: [],
    },
  };

  return worksData[slug] || null;
}

export default async function WorkPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getWorkData(params.slug);

  if (!data) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientComponent workDetails={data} slug={params.slug} />
    </Suspense>
  );
}
