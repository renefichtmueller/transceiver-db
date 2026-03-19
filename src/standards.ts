/**
 * IEEE 802.3 and MSA standards reference — 42 standards.
 */

import type { Standard } from "./types";

export const standards: readonly Standard[] = [
  // 1G
  { standard: "1000BASE-SX", ieeeReference: "IEEE 802.3z", speed: "1G", lanes: 1, laneRate: "1.25 Gbaud", modulation: "NRZ", fiberType: "MMF (OM1-OM4)", wavelength: "850nm", maxReachMeters: 550, maxReachLabel: "220m (OM1) / 550m (OM2+)", connector: "LC/SC", fecRequired: false, formFactors: ["SFP", "GBIC"], yearRatified: 1998, notes: "Original Gigabit Ethernet multimode standard." },
  { standard: "1000BASE-LX", ieeeReference: "IEEE 802.3z", speed: "1G", lanes: 1, laneRate: "1.25 Gbaud", modulation: "NRZ", fiberType: "SMF", wavelength: "1310nm", maxReachMeters: 10000, maxReachLabel: "10km", connector: "LC/SC", fecRequired: false, formFactors: ["SFP", "GBIC"], yearRatified: 1998, notes: "Standard 1G single-mode. Also works on MMF with mode conditioning patch cable." },
  { standard: "1000BASE-ZX", ieeeReference: "Vendor-defined (not IEEE)", speed: "1G", lanes: 1, laneRate: "1.25 Gbaud", modulation: "NRZ", fiberType: "SMF", wavelength: "1550nm", maxReachMeters: 80000, maxReachLabel: "70-80km", connector: "LC", fecRequired: false, formFactors: ["SFP"], yearRatified: 0, notes: "Not an IEEE standard. Vendor-defined. Uses 1550nm for extended reach." },
  { standard: "1000BASE-T", ieeeReference: "IEEE 802.3ab", speed: "1G", lanes: 4, laneRate: "250 Mbaud", modulation: "PAM5", fiberType: "Copper (Cat5e+)", wavelength: "N/A", maxReachMeters: 100, maxReachLabel: "100m", connector: "RJ45", fecRequired: false, formFactors: ["SFP"], yearRatified: 1999, notes: "Gigabit over copper. SFP form factor draws ~1W." },
  { standard: "1000BASE-BX10", ieeeReference: "IEEE 802.3ah", speed: "1G", lanes: 1, laneRate: "1.25 Gbaud", modulation: "NRZ", fiberType: "SMF (single fiber)", wavelength: "1310/1490nm", maxReachMeters: 10000, maxReachLabel: "10km", connector: "LC", fecRequired: false, formFactors: ["SFP"], yearRatified: 2004, notes: "Bidirectional over single fiber strand. Sold in pairs." },

  // 10G
  { standard: "10GBASE-SR", ieeeReference: "IEEE 802.3ae", speed: "10G", lanes: 1, laneRate: "10.3125 Gbaud", modulation: "NRZ", fiberType: "MMF (OM3/OM4)", wavelength: "850nm", maxReachMeters: 400, maxReachLabel: "300m (OM3) / 400m (OM4)", connector: "LC", fecRequired: false, formFactors: ["SFP+", "XFP"], yearRatified: 2002, notes: "Most deployed 10G optic worldwide." },
  { standard: "10GBASE-LR", ieeeReference: "IEEE 802.3ae", speed: "10G", lanes: 1, laneRate: "10.3125 Gbaud", modulation: "NRZ", fiberType: "SMF", wavelength: "1310nm", maxReachMeters: 10000, maxReachLabel: "10km", connector: "LC", fecRequired: false, formFactors: ["SFP+", "XFP"], yearRatified: 2002, notes: "Standard 10G single-mode. Backbone of campus and metro networks." },
  { standard: "10GBASE-ER", ieeeReference: "IEEE 802.3ae", speed: "10G", lanes: 1, laneRate: "10.3125 Gbaud", modulation: "NRZ", fiberType: "SMF", wavelength: "1550nm", maxReachMeters: 40000, maxReachLabel: "40km", connector: "LC", fecRequired: false, formFactors: ["SFP+", "XFP"], yearRatified: 2002, notes: "Extended reach 10G for metro rings and inter-city links." },
  { standard: "10GBASE-ZR", ieeeReference: "Vendor-defined (not IEEE)", speed: "10G", lanes: 1, laneRate: "10.3125 Gbaud", modulation: "NRZ", fiberType: "SMF", wavelength: "1550nm", maxReachMeters: 80000, maxReachLabel: "80km", connector: "LC", fecRequired: false, formFactors: ["SFP+", "XFP"], yearRatified: 0, notes: "Not an IEEE standard. Vendor-defined. 80km reach with high-power laser." },
  { standard: "10GBASE-T", ieeeReference: "IEEE 802.3an", speed: "10G", lanes: 4, laneRate: "2.5 Gbaud", modulation: "PAM16/DSQ128", fiberType: "Copper (Cat6a/Cat7)", wavelength: "N/A", maxReachMeters: 100, maxReachLabel: "100m (Cat6a)", connector: "RJ45", fecRequired: false, formFactors: ["SFP+"], yearRatified: 2006, notes: "10G over copper. 30m on Cat6, 100m on Cat6a." },
  { standard: "10GBASE-LRM", ieeeReference: "IEEE 802.3aq", speed: "10G", lanes: 1, laneRate: "10.3125 Gbaud", modulation: "NRZ", fiberType: "MMF (legacy OM1/OM2)", wavelength: "1310nm", maxReachMeters: 220, maxReachLabel: "220m", connector: "LC", fecRequired: false, formFactors: ["SFP+"], yearRatified: 2006, notes: "10G over legacy multimode fiber." },

  // 25G
  { standard: "25GBASE-SR", ieeeReference: "IEEE 802.3by", speed: "25G", lanes: 1, laneRate: "25.78125 Gbaud", modulation: "NRZ", fiberType: "MMF (OM3/OM4)", wavelength: "850nm", maxReachMeters: 100, maxReachLabel: "70m (OM3) / 100m (OM4)", connector: "LC", fecRequired: true, formFactors: ["SFP28"], yearRatified: 2016, notes: "Standard 25G data center server access." },
  { standard: "25GBASE-LR", ieeeReference: "IEEE 802.3cc", speed: "25G", lanes: 1, laneRate: "25.78125 Gbaud", modulation: "NRZ", fiberType: "SMF", wavelength: "1310nm", maxReachMeters: 10000, maxReachLabel: "10km", connector: "LC", fecRequired: false, formFactors: ["SFP28"], yearRatified: 2017, notes: "25G single-mode for campus/metro. Critical for 5G fronthaul (eCPRI)." },
  { standard: "25GBASE-ER", ieeeReference: "IEEE 802.3cc", speed: "25G", lanes: 1, laneRate: "25.78125 Gbaud", modulation: "NRZ", fiberType: "SMF", wavelength: "1310nm", maxReachMeters: 30000, maxReachLabel: "30km", connector: "LC", fecRequired: true, formFactors: ["SFP28"], yearRatified: 2017, notes: "Extended reach 25G for metro and 5G midhaul." },

  // 40G
  { standard: "40GBASE-SR4", ieeeReference: "IEEE 802.3ba", speed: "40G", lanes: 4, laneRate: "10.3125 Gbaud", modulation: "NRZ", fiberType: "MMF (OM3/OM4)", wavelength: "850nm", maxReachMeters: 150, maxReachLabel: "100m (OM3) / 150m (OM4)", connector: "MPO-12", fecRequired: false, formFactors: ["QSFP+"], yearRatified: 2010, notes: "4x10G parallel optics. Can break out to 4x10GBASE-SR." },
  { standard: "40GBASE-LR4", ieeeReference: "IEEE 802.3ba", speed: "40G", lanes: 4, laneRate: "10.3125 Gbaud", modulation: "NRZ", fiberType: "SMF", wavelength: "1310nm (4 CWDM wavelengths)", maxReachMeters: 10000, maxReachLabel: "10km", connector: "LC", fecRequired: false, formFactors: ["QSFP+"], yearRatified: 2010, notes: "4 CWDM wavelengths over duplex LC." },
  { standard: "40GBASE-ER4", ieeeReference: "IEEE 802.3bm", speed: "40G", lanes: 4, laneRate: "10.3125 Gbaud", modulation: "NRZ", fiberType: "SMF", wavelength: "1310nm (4 CWDM wavelengths)", maxReachMeters: 40000, maxReachLabel: "40km", connector: "LC", fecRequired: false, formFactors: ["QSFP+"], yearRatified: 2015, notes: "Extended reach 40G for metro ring and DCI." },

  // 100G
  { standard: "100GBASE-SR4", ieeeReference: "IEEE 802.3bm", speed: "100G", lanes: 4, laneRate: "25.78125 Gbaud", modulation: "NRZ", fiberType: "MMF (OM3/OM4)", wavelength: "850nm", maxReachMeters: 100, maxReachLabel: "70m (OM3) / 100m (OM4)", connector: "MPO-12", fecRequired: true, formFactors: ["QSFP28"], yearRatified: 2015, notes: "4x25G parallel. Breakout to 4x25GBASE-SR." },
  { standard: "100GBASE-SR2", ieeeReference: "100G Lambda MSA", speed: "100G", lanes: 2, laneRate: "26.5625 Gbaud", modulation: "PAM4", fiberType: "MMF (OM4)", wavelength: "850nm", maxReachMeters: 100, maxReachLabel: "100m (OM4)", connector: "LC", fecRequired: true, formFactors: ["QSFP28"], yearRatified: 2018, notes: "MSA-defined. 2x50G PAM4 over duplex LC." },
  { standard: "100GBASE-DR", ieeeReference: "IEEE 802.3cd", speed: "100G", lanes: 1, laneRate: "53.125 Gbaud", modulation: "PAM4", fiberType: "SMF", wavelength: "1310nm", maxReachMeters: 500, maxReachLabel: "500m", connector: "LC", fecRequired: true, formFactors: ["QSFP28", "SFP-DD"], yearRatified: 2018, notes: "Single-lambda 100G. Key for leaf-spine architectures." },
  { standard: "100GBASE-FR1", ieeeReference: "IEEE 802.3cu", speed: "100G", lanes: 1, laneRate: "53.125 Gbaud", modulation: "PAM4", fiberType: "SMF", wavelength: "1310nm", maxReachMeters: 2000, maxReachLabel: "2km", connector: "LC", fecRequired: true, formFactors: ["QSFP28"], yearRatified: 2021, notes: "Single-lambda 100G for 2km." },
  { standard: "100GBASE-LR1", ieeeReference: "IEEE 802.3cu", speed: "100G", lanes: 1, laneRate: "53.125 Gbaud", modulation: "PAM4", fiberType: "SMF", wavelength: "1310nm", maxReachMeters: 10000, maxReachLabel: "10km", connector: "LC", fecRequired: true, formFactors: ["QSFP28"], yearRatified: 2021, notes: "Single-lambda 100G for 10km. New IXP standard replacing LR4." },
  { standard: "100GBASE-LR4", ieeeReference: "IEEE 802.3ba", speed: "100G", lanes: 4, laneRate: "25.78125 Gbaud", modulation: "NRZ", fiberType: "SMF", wavelength: "1310nm (4 LAN-WDM wavelengths)", maxReachMeters: 10000, maxReachLabel: "10km", connector: "LC", fecRequired: false, formFactors: ["QSFP28", "CFP", "CFP2", "CFP4"], yearRatified: 2010, notes: "4x25G LAN-WDM over duplex LC. Being replaced by LR1 single-lambda." },
  { standard: "100GBASE-CWDM4", ieeeReference: "100G CWDM4 MSA", speed: "100G", lanes: 4, laneRate: "25.78125 Gbaud", modulation: "NRZ", fiberType: "SMF", wavelength: "1271/1291/1311/1331nm", maxReachMeters: 2000, maxReachLabel: "2km", connector: "LC", fecRequired: false, formFactors: ["QSFP28"], yearRatified: 2014, notes: "MSA-defined. Lower-cost alternative to LR4 for 2km." },
  { standard: "100GBASE-PSM4", ieeeReference: "100G PSM4 MSA", speed: "100G", lanes: 4, laneRate: "25.78125 Gbaud", modulation: "NRZ", fiberType: "SMF (parallel)", wavelength: "1310nm", maxReachMeters: 500, maxReachLabel: "500m", connector: "MPO-12", fecRequired: false, formFactors: ["QSFP28"], yearRatified: 2014, notes: "MSA-defined. 4x25G parallel single-mode." },
  { standard: "100GBASE-ZR", ieeeReference: "IEEE 802.3ct", speed: "100G", lanes: 1, laneRate: "~64 Gbaud", modulation: "DP-QPSK (coherent)", fiberType: "SMF (DWDM)", wavelength: "C-band (tunable)", maxReachMeters: 80000, maxReachLabel: "80km+ (DWDM amplified)", connector: "LC", fecRequired: true, formFactors: ["QSFP28"], yearRatified: 2021, notes: "Coherent 100G over DWDM systems." },

  // 200G
  { standard: "200GBASE-SR4", ieeeReference: "IEEE 802.3cd", speed: "200G", lanes: 4, laneRate: "26.5625 Gbaud", modulation: "PAM4", fiberType: "MMF (OM4)", wavelength: "850nm", maxReachMeters: 100, maxReachLabel: "70m (OM3) / 100m (OM4)", connector: "MPO-12", fecRequired: true, formFactors: ["QSFP56", "QSFP-DD"], yearRatified: 2018, notes: "4x50G PAM4 parallel." },
  { standard: "200GBASE-DR4", ieeeReference: "IEEE 802.3cd", speed: "200G", lanes: 4, laneRate: "26.5625 Gbaud", modulation: "PAM4", fiberType: "SMF (parallel)", wavelength: "1310nm", maxReachMeters: 500, maxReachLabel: "500m", connector: "MPO-12", fecRequired: true, formFactors: ["QSFP56", "QSFP-DD"], yearRatified: 2018, notes: "4x50G parallel SMF. Can break out to 2x100G-DR or 4x50G." },
  { standard: "200GBASE-FR4", ieeeReference: "IEEE 802.3cu", speed: "200G", lanes: 4, laneRate: "26.5625 Gbaud", modulation: "PAM4", fiberType: "SMF", wavelength: "1310nm (4 CWDM wavelengths)", maxReachMeters: 2000, maxReachLabel: "2km", connector: "LC", fecRequired: true, formFactors: ["QSFP56", "QSFP-DD"], yearRatified: 2021, notes: "4x50G CWDM over duplex LC for 2km reach." },
  { standard: "200GBASE-LR4", ieeeReference: "IEEE 802.3cu", speed: "200G", lanes: 4, laneRate: "26.5625 Gbaud", modulation: "PAM4", fiberType: "SMF", wavelength: "1310nm (4 CWDM wavelengths)", maxReachMeters: 10000, maxReachLabel: "10km", connector: "LC", fecRequired: true, formFactors: ["QSFP56", "QSFP-DD"], yearRatified: 2021, notes: "4x50G CWDM over duplex LC for 10km reach." },

  // 400G
  { standard: "400GBASE-SR8", ieeeReference: "IEEE 802.3cm", speed: "400G", lanes: 8, laneRate: "26.5625 Gbaud", modulation: "PAM4", fiberType: "MMF (OM4)", wavelength: "850nm", maxReachMeters: 100, maxReachLabel: "100m (OM4)", connector: "MPO-16", fecRequired: true, formFactors: ["QSFP-DD", "OSFP"], yearRatified: 2020, notes: "8x50G PAM4 parallel." },
  { standard: "400GBASE-SR4.2", ieeeReference: "IEEE 802.3cm", speed: "400G", lanes: 4, laneRate: "26.5625 Gbaud", modulation: "PAM4", fiberType: "MMF", wavelength: "850nm + 910nm (BiDi)", maxReachMeters: 100, maxReachLabel: "100m", connector: "MPO-12", fecRequired: true, formFactors: ["QSFP-DD", "OSFP"], yearRatified: 2020, notes: "BiDi 400G over MPO-12 using two wavelengths." },
  { standard: "400GBASE-DR4", ieeeReference: "IEEE 802.3bs", speed: "400G", lanes: 4, laneRate: "53.125 Gbaud", modulation: "PAM4", fiberType: "SMF (parallel)", wavelength: "1310nm", maxReachMeters: 500, maxReachLabel: "500m", connector: "MPO-12", fecRequired: true, formFactors: ["QSFP-DD", "OSFP"], yearRatified: 2017, notes: "4x100G parallel SMF. THE key 400G data center optic." },
  { standard: "400GBASE-FR4", ieeeReference: "IEEE 802.3cu", speed: "400G", lanes: 4, laneRate: "53.125 Gbaud", modulation: "PAM4", fiberType: "SMF", wavelength: "1271/1291/1311/1331nm (CWDM4)", maxReachMeters: 2000, maxReachLabel: "2km", connector: "LC", fecRequired: true, formFactors: ["QSFP-DD", "OSFP"], yearRatified: 2021, notes: "4x100G CWDM over duplex LC." },
  { standard: "400GBASE-LR4-10", ieeeReference: "IEEE 802.3cu", speed: "400G", lanes: 4, laneRate: "53.125 Gbaud", modulation: "PAM4", fiberType: "SMF", wavelength: "1271/1291/1311/1331nm (CWDM4)", maxReachMeters: 10000, maxReachLabel: "10km", connector: "LC", fecRequired: true, formFactors: ["QSFP-DD", "OSFP"], yearRatified: 2021, notes: "4x100G CWDM for 10km. Standard for metro/IXP 400G." },
  { standard: "400GBASE-ZR (OIF 400ZR)", ieeeReference: "OIF-400ZR-01.0", speed: "400G", lanes: 1, laneRate: "~60 Gbaud", modulation: "DP-16QAM (coherent)", fiberType: "SMF", wavelength: "C-band (tunable, 75 GHz DWDM grid)", maxReachMeters: 120000, maxReachLabel: "up to 120km (amplified)", connector: "LC", fecRequired: true, formFactors: ["QSFP-DD", "OSFP", "CFP2-DCO"], yearRatified: 2020, notes: "OIF interoperable coherent 400G. Collapses IP/optical layers." },

  // 800G
  { standard: "800GBASE-SR8", ieeeReference: "IEEE 802.3df", speed: "800G", lanes: 8, laneRate: "106.25 Gbaud", modulation: "PAM4", fiberType: "MMF (OM4)", wavelength: "850nm", maxReachMeters: 50, maxReachLabel: "50m (OM3) / 100m (OM4)", connector: "2x MPO-12", fecRequired: true, formFactors: ["OSFP"], yearRatified: 2024, notes: "8x100G PAM4 parallel." },
  { standard: "800GBASE-DR8", ieeeReference: "IEEE 802.3df", speed: "800G", lanes: 8, laneRate: "106.25 Gbaud", modulation: "PAM4", fiberType: "SMF (parallel)", wavelength: "1310nm", maxReachMeters: 500, maxReachLabel: "500m", connector: "2x MPO-12", fecRequired: true, formFactors: ["OSFP", "QSFP-DD800"], yearRatified: 2024, notes: "Primary 800G DC optic. 8x100G parallel SMF." },
  { standard: "OIF 800ZR", ieeeReference: "OIF-800ZR", speed: "800G", lanes: 1, laneRate: "~90 Gbaud", modulation: "DP-16QAM / DP-64QAM (coherent)", fiberType: "SMF", wavelength: "C-band (tunable)", maxReachMeters: 120000, maxReachLabel: "up to 120km+ (amplified)", connector: "LC", fecRequired: true, formFactors: ["OSFP", "QSFP-DD800", "CFP2-DCO"], yearRatified: 2024, notes: "800G pluggable coherent. Building on 400ZR success for DCI." },
];

/** Find a standard by exact or partial name. */
export function getStandard(name: string): Standard | undefined {
  const q = name.toLowerCase();
  return standards.find((s) => s.standard.toLowerCase() === q) ||
    standards.find((s) => s.standard.toLowerCase().includes(q));
}

/** Search standards by keyword (speed, modulation, IEEE reference, etc.). */
export function searchStandards(query: string): Standard[] {
  const q = query.toLowerCase();
  return standards.filter(
    (s) =>
      s.standard.toLowerCase().includes(q) ||
      s.speed.toLowerCase().includes(q) ||
      s.ieeeReference.toLowerCase().includes(q) ||
      s.modulation.toLowerCase().includes(q) ||
      s.notes.toLowerCase().includes(q)
  );
}
