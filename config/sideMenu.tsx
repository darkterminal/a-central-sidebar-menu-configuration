import { FileArchive, Landmark, Map } from "lucide-react";

import { NavItems } from "@/types/sidebar";
import { Icons } from "@/components/icons";

export const sideMenu: NavItems[] = [
  {
    label: "Komponen",
    icon: undefined,
    link: "javascript:;",
    isParent: false,
  },
  {
    label: "Kecamatan",
    icon: <Map className="h-4 w-4" />,
    link: "/dashboard/kecamatan",
    isParent: false,
  },
  {
    label: "Kelurahan",
    icon: <Map className="h-4 w-4" />,
    link: "/dashboard/kelurahan",
    isParent: false,
  },
  {
    label: "TPS",
    icon: <Landmark className="h-4 w-4" />,
    link: "/dashboard/tps",
    isParent: false,
  },
  {
    label: "DPS/DPT",
    icon: <FileArchive className="h-4 w-4" />,
    link: "/dashboard/dps-dpt",
    isParent: false,
  },
  {
    label: "Master Data",
    icon: undefined,
    link: "javascript:;",
    isParent: false,
  },
  {
    label: "Master Korcam",
    icon: <Icons.userSquare className="h-4 w-4" />,
    link: "/dashboard/master-korcam",
    isParent: false,
  },
  {
    label: "Master Kordes",
    icon: <Icons.userSquare className="h-4 w-4" />,
    link: "/dashboard/master-kordes",
    isParent: false,
  },
  {
    label: "Master Korlap",
    icon: <Icons.userSquare className="h-4 w-4" />,
    link: "/dashboard/master-korlap",
    isParent: false,
  },
  {
    label: "Master Pemilih",
    icon: <Icons.userSquare className="h-4 w-4" />,
    link: "/dashboard/master-pemilih",
    isParent: false,
  },
  {
    label: "Settings",
    icon: <Icons.settings className="h-4 w-4" />,
    link: "javascript:;",
    isParent: true,
    subMenu: [
      {
        label: "Profile",
        link: "/settings/profile",
      },
      {
        label: "Preferences",
        link: "/settings/preferences",
      },
    ],
  },
];
