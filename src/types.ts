/**
 * Core type definitions for the transceiver database.
 */

export type FormFactor =
  | "SFP"
  | "SFP+"
  | "SFP28"
  | "SFP56"
  | "QSFP+"
  | "QSFP28"
  | "QSFP56"
  | "QSFP-DD"
  | "OSFP"
  | "CFP"
  | "CFP2"
  | "CFP4"
  | "CFP2-DCO"
  | "XFP"
  | "GBIC"
  | "CXP"
  | "SFP-DD"
  | "SFP56-DD"
  | "QSFP-DD800"
  | "OSFP-XD";

export type FiberType = "MMF" | "SMF" | "MMF/SMF" | "Copper" | "N/A";

export type ConnectorType =
  | "LC"
  | "SC"
  | "MPO-12"
  | "MPO-16"
  | "MPO-24"
  | "RJ45"
  | "None"
  | "CS"
  | "SN"
  | "2xMPO-12";

export type TempRange = "COM" | "IND";

export type ProductCategory =
  | "DataCenter"
  | "Metro"
  | "LongHaul"
  | "DCI"
  | "Access"
  | "Coherent"
  | "CWDM"
  | "DWDM"
  | "BiDi"
  | "AOC"
  | "DAC"
  | "Breakout"
  | "Legacy"
  | "IXP"
  | "5G"
  | "AI";

export type PriceTier = "Budget" | "Standard" | "Premium";

export type MarketStatus = "Mainstream" | "Growth" | "Emerging" | "Legacy" | "EOL";

export interface VendorCompat {
  vendor: string;
  partPattern: string;
}

export interface Transceiver {
  id: string;
  standard: string;
  ieeeReference?: string;
  formFactor: FormFactor;
  speed: string;
  speedGbps: number;
  lanes?: number;
  laneRate?: string;
  modulation?: string;
  reachMeters: number;
  reachLabel: string;
  fiberType: FiberType;
  wavelengths: string;
  connector: ConnectorType;
  powerConsumptionW: number;
  tempRange: TempRange;
  category: ProductCategory;
  priceTier: PriceTier;
  useCase: string;
  vendors: VendorCompat[];
  tags: string[];
  generation?: string;
  marketStatus?: MarketStatus;
  yearIntroduced?: number;
  breakoutCapable?: boolean;
  breakoutTo?: string;
}

export interface Standard {
  standard: string;
  ieeeReference: string;
  speed: string;
  lanes: number;
  laneRate: string;
  modulation: string;
  fiberType: string;
  wavelength: string;
  maxReachMeters: number;
  maxReachLabel: string;
  connector: string;
  fecRequired: boolean;
  formFactors: string[];
  yearRatified: number;
  notes: string;
}

export interface Competitor {
  name: string;
  type: "OEM" | "Whitebox" | "Manufacturer" | "Distributor" | "Compatible";
  headquarters: string;
  marketPosition: string;
  formFactorsOffered: string[];
  speedTiersOffered: string[];
  strengths: string[];
  weaknesses: string[];
}

export interface Breakout {
  id: string;
  from: string;
  to: string;
  formFactor: string;
  description: string;
  cableType: "Passive" | "Active";
  maxLength: string;
  speedPerLane: string;
}
