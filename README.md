# transceiver-db

> **[🚀 Live Demo](https://transceiver-db-demo.pages.dev)** — Try it in your browser, no installation needed.

[![npm version](https://img.shields.io/npm/v/transceiver-db.svg)](https://www.npmjs.com/package/transceiver-db)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-green.svg)](#)

Open-source optical transceiver database for network engineers, tooling developers, and infrastructure automation.

**159 products. 42 IEEE/MSA standards. 16 form factors. 9 speed tiers.**

From 1G SFP to 800G OSFP. Zero dependencies.

## Why?

> **[🚀 Live Demo](https://transceiver-db-demo.pages.dev)** — Try it in your browser, no installation needed.

No open-source transceiver database existed. Network engineers, inventory systems, and automation tools had to maintain their own fragmented lists. Now there is a single, typed, searchable source of truth.

## Install

```bash
npm install transceiver-db
```

## Quick Start

```typescript
import { searchTransceivers, getBySpeed, getStandard } from 'transceiver-db';

// Search by any keyword
const results = searchTransceivers('100G LR');
console.log(results.map(t => `${t.standard} (${t.formFactor}) - ${t.reachLabel}`));

// Filter by speed
const optics400g = getBySpeed('400G');
console.log(`Found ${optics400g.length} 400G transceivers`);

// Look up an IEEE standard
const standard = getStandard('400GBASE-DR4');
console.log(standard?.notes); // "4x100G parallel SMF. THE key 400G data center optic."
```

## API Reference

### Transceivers

```typescript
import {
  transceivers,          // All 159 transceivers (readonly array)
  searchTransceivers,    // Full-text search across all fields
  getByFormFactor,       // Filter by form factor ("SFP+", "QSFP-DD", etc.)
  getBySpeed,            // Filter by speed tier ("10G", "100G", "400G", etc.)
  getByReach,            // Filter by minimum reach in meters
  getByCategory,         // Filter by category ("DataCenter", "Coherent", etc.)
  getById,               // Get single transceiver by ID
} from 'transceiver-db';
```

### Standards

```typescript
import {
  standards,             // All 42 IEEE/MSA standards
  getStandard,           // Find by exact or partial name
  searchStandards,       // Search by keyword
} from 'transceiver-db';
```

### Competitors

```typescript
import {
  competitors,           // 12 major vendors (Cisco, Juniper, Arista, etc.)
  getCompetitor,         // Find by name
} from 'transceiver-db';
```

### Breakout Cables

```typescript
import { breakouts } from 'transceiver-db'; // 11 breakout configurations
```

### Types

```typescript
import type {
  Transceiver,
  Standard,
  Competitor,
  Breakout,
  FormFactor,      // "SFP" | "SFP+" | "QSFP-DD" | "OSFP" | ...
  FiberType,       // "MMF" | "SMF" | "Copper" | "N/A"
  ConnectorType,   // "LC" | "MPO-12" | "MPO-16" | "RJ45" | ...
  ProductCategory, // "DataCenter" | "Metro" | "Coherent" | "DAC" | ...
  PriceTier,       // "Budget" | "Standard" | "Premium"
  MarketStatus,    // "Mainstream" | "Growth" | "Emerging" | "Legacy"
} from 'transceiver-db';
```

## Coverage

| Speed | Products | Form Factors |
|-------|----------|-------------|
| 1G    | 9        | GBIC, SFP   |
| 10G   | 13       | XFP, SFP+   |
| 25G   | 6        | SFP28       |
| 40G   | 4        | QSFP+       |
| 50G   | 2        | SFP56       |
| 100G  | 20       | QSFP28, CFP, CFP2, CFP4, CXP |
| 200G  | 4        | QSFP56      |
| 400G  | 18       | QSFP-DD, OSFP, CFP2-DCO |
| 800G  | 5        | OSFP        |
| DAC   | 6        | SFP+ to OSFP |
| AOC   | 3        | SFP+ to QSFP-DD |

Each transceiver includes: standard, form factor, speed, reach, fiber type, wavelengths, connector, power consumption, temperature range, vendor compatibility patterns, use case description, and tags.

## Data Sources

All data comes from publicly available sources:
- IEEE 802.3 standards (802.3z, 802.3ae, 802.3ba, 802.3bs, 802.3cd, 802.3cu, 802.3cm, 802.3df, etc.)
- OIF standards (400ZR, 800ZR)
- Multi-Source Agreements (100G CWDM4 MSA, 100G PSM4 MSA, 100G Lambda MSA, OpenZR+)
- Vendor datasheets and public documentation

## Contributing

Contributions welcome. To add a new transceiver:

1. Fork the repo
2. Add the entry to `src/database.ts` following the existing format
3. Include all required fields from the `Transceiver` type
4. Add relevant vendor compatibility patterns
5. Submit a PR with a description of what you added

To add a new standard, update `src/standards.ts`.

## License

MIT
