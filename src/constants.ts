export const cloudinaryUrl =
  "https://res.cloudinary.com/doeucuf7e/image/upload";

export const models = {
  Blop: `${cloudinaryUrl}/v1721945652/geo.min_pvye6w.glb`,
  BuckMinister01: "",
  BuckMinister03: `${cloudinaryUrl}/v1721945652/03BuckMinister_jqjsjm.glb`,
  Contact3D: `${cloudinaryUrl}/v1721945652/Contact3D_pfb6ap.glb`,
  Cube01: `${cloudinaryUrl}/v1721945652/Cube_gxdrox.glb`,
  Man: `${cloudinaryUrl}/v1721945652/Man_ysczlz.glb`,
  Sphere: `${cloudinaryUrl}/v1721945652/Sphere01_dgjn6s.glb`,
  Torus: `${cloudinaryUrl}/v1721945652/Torus_gnyrxu.glb`,
  Torus01: `${cloudinaryUrl}/v1721945652/Torus01_nr2aza.glb`,
  Hero3D: `/models/Hero3D.glb`, // TODO: Upload after optimization
  Villa01_Partial: `/models/Villa01_Partial.glb`, // TODO: Upload after optimization
};

export const backgroundImages = {
  about: `${cloudinaryUrl}/06_qcvmdm`,
  contact: `${cloudinaryUrl}/07_zzchd2`,
  works: `${cloudinaryUrl}/08_ujpych`,
  hero: `${cloudinaryUrl}/10a_ggzs0j`,
  Joali: `${cloudinaryUrl}/jb-arrival-jetty_cm8ri2`,
  Emaar: `${cloudinaryUrl}/emaar-square-mall_cihdim`,
};

export type Project = {
  slug: string;
  text: string;
  src: string;
  year: string;
};

export type CarouselImage = string;

export type CarouselImagesDict = {
  [key: string]: CarouselImage[];
};

export const projects: Project[] = [
  {
    slug: "mixed-use",
    text: "MIXED USE DEVELOPMENT",
    src: `${cloudinaryUrl}/01AnaPerspektif_binjqw`,
    year: "2022",
  },
  {
    slug: "v01",
    text: "PRIVATE VILLA",
    src: `${cloudinaryUrl}/Image01_a3wraq`,
    year: "2024",
  },
  {
    slug: "v02",
    text: "VILLA 02",
    src: `${cloudinaryUrl}/05_gtdpby`,
    year: "2023",
  },
  {
    slug: "carport",
    text: "CARPORT",
    src: `${cloudinaryUrl}/03_nkgusl`,
    year: "2023",
  },
];

export const carouselImages: CarouselImagesDict = {
  "mixed-use": [
    "01_eeawce",
    "02_xymtfe",
    "03_xt9bya",
    "04_kjzdrf",
    "05_v0rakv",
    "06_drlbsl",
    "07_c6b709",
    "08_lkepdd",
    "09_jku5ky",
    "10_kjk4jm",
    "11_i0kqvs",
    "12_kg0lku",
    "13_iwpr2m",
    "14_ttfjta",
  ],
  "mixed-use-interiors": [
    "01_jgcdmc",
    "02_g791wd",
    "03_tc2n8q",
    "04_fbi5ex",
    "05_a4oj2e",
    "06_angqvg",
    "07_yjurnu",
    "08_tyqp51",
    "09_qih6jl",
    "10_nf18qr",
    "11_ooib8e",
    "12_bu7fcm",
    "13_t6tcrk",
    "14_abndqv",
  ],
  v01: ["01_jbrka2", "02_ecagfl"],
  "v01-interiors": [
    "01_qvs6o6",
    "02_unf9bn",
    "03_thddbt",
    "04_lzdmla",
    "05_xt5x99",
    "06_pxkbhy",
    "07_lqv66x",
    "08_fnshdd",
    "09_vcjuaa",
    "10_j9znbd",
    "11_f5exxr",
    "12_neutjg",
  ],
  v02: ["01_fqdknk", "02_cgg764"],
  "v02-interiors": [
    "01_jnhttt",
    "02_lh8pio",
    "03_joff6o",
    "04_f2nvvy",
    "08_zjs868",
    "09_rnsqk8",
  ],
  carport: ["01_mdair3", "02_zpdcqp", "03_rrylxv", "04_fjtups", "05_mdfjwp"],
};
