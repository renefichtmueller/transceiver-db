/**
 * transceiver-db — Open-source optical transceiver database
 *
 * 159 products, 42 IEEE/MSA standards, 16 form factors, 9 speed tiers.
 * From 1G SFP to 800G OSFP. Zero dependencies.
 */

export {
  transceivers,
  searchTransceivers,
  getByFormFactor,
  getBySpeed,
  getByReach,
  getByCategory,
  getById,
} from "./database";

export { standards, getStandard, searchStandards } from "./standards";

export { competitors, getCompetitor } from "./market";

export { breakouts } from "./breakouts";

export type {
  Transceiver,
  Standard,
  Competitor,
  Breakout,
  FormFactor,
  FiberType,
  ConnectorType,
  TempRange,
  ProductCategory,
  PriceTier,
  MarketStatus,
  VendorCompat,
} from "./types";
