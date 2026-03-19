/**
 * Breakout cable configurations.
 * Maps high-speed ports to multiple lower-speed connections.
 */

import type { Breakout } from "./types";

export const breakouts: readonly Breakout[] = [
  { id: "40g-4x10g-sr", from: "40GBASE-SR4", to: "4x 10GBASE-SR", formFactor: "QSFP+ to 4x SFP+", description: "Break out one 40G QSFP+ port into four 10G SFP+ ports. Uses MPO-to-LC harness.", cableType: "Passive", maxLength: "5m (passive) / 100m (active)", speedPerLane: "10G" },
  { id: "40g-4x10g-aoc", from: "40GBASE-SR4", to: "4x 10GBASE-SR", formFactor: "QSFP+ to 4x SFP+ AOC", description: "Active optical breakout cable from 40G QSFP+ to four 10G SFP+.", cableType: "Active", maxLength: "1-30m", speedPerLane: "10G" },
  { id: "100g-4x25g-sr", from: "100GBASE-SR4", to: "4x 25GBASE-SR", formFactor: "QSFP28 to 4x SFP28", description: "Break out one 100G QSFP28 port into four 25G SFP28 ports.", cableType: "Passive", maxLength: "5m (passive) / 100m (active)", speedPerLane: "25G" },
  { id: "100g-4x25g-dac", from: "100G QSFP28", to: "4x 25G SFP28", formFactor: "QSFP28 to 4x SFP28 DAC", description: "Passive copper breakout DAC from 100G QSFP28 to four 25G SFP28.", cableType: "Passive", maxLength: "1-5m", speedPerLane: "25G" },
  { id: "400g-4x100g-dr", from: "400GBASE-DR4", to: "4x 100GBASE-DR", formFactor: "QSFP-DD to 4x QSFP28 (MPO-12 to 4x LC)", description: "Break out one 400G DR4 port into four 100G DR ports. Parallel SMF to duplex LC.", cableType: "Passive", maxLength: "500m (fiber reach)", speedPerLane: "100G" },
  { id: "400g-4x100g-fr", from: "400GBASE-XDR4", to: "4x 100GBASE-FR1", formFactor: "QSFP-DD to 4x QSFP28", description: "Break out one 400G XDR4 port into four 100G FR1 ports. 2km reach per lane.", cableType: "Passive", maxLength: "2km (fiber reach)", speedPerLane: "100G" },
  { id: "400g-4x100g-lr", from: "400G-PLR4", to: "4x 100GBASE-LR1", formFactor: "QSFP-DD to 4x QSFP28", description: "Break out one 400G PLR4 port into four 100G LR1 ports. 10km reach per lane.", cableType: "Passive", maxLength: "10km (fiber reach)", speedPerLane: "100G" },
  { id: "800g-2x400g-dr", from: "800GBASE-DR8", to: "2x 400GBASE-DR4", formFactor: "OSFP to 2x QSFP-DD", description: "Break out one 800G DR8 port into two 400G DR4 ports.", cableType: "Passive", maxLength: "500m (fiber reach)", speedPerLane: "100G" },
  { id: "800g-8x100g-dr", from: "800GBASE-DR8", to: "8x 100GBASE-DR", formFactor: "OSFP to 8x QSFP28", description: "Break out one 800G DR8 port into eight 100G DR ports.", cableType: "Passive", maxLength: "500m (fiber reach)", speedPerLane: "100G" },
  { id: "200g-4x50g-sr", from: "200GBASE-SR4", to: "4x 50GBASE-SR", formFactor: "QSFP56 to 4x SFP56", description: "Break out one 200G SR4 port into four 50G SR ports.", cableType: "Passive", maxLength: "100m (OM4)", speedPerLane: "50G" },
  { id: "200g-2x100g-dr", from: "200GBASE-DR4", to: "2x 100GBASE-DR", formFactor: "QSFP56 to 2x QSFP28", description: "Break out one 200G DR4 port into two 100G DR ports.", cableType: "Passive", maxLength: "500m (fiber reach)", speedPerLane: "50G" },
];
