# Disruption GreenCoin — MVP Business Case (v0.1)

Date: 2025-08-31
Scope: MVP pilot focused on Humboldt Penguin at partner zoo; initial mint = 5 coins; UTEC campus circulation.

## 1) Problem & Opportunity
- Conservation funding is lumpy and insufficient; verification of living biodiversity is costly and continuous.
- Incentives aren’t aligned for ongoing care, transparent reporting, or community participation.
- Opportunity: tokenize a living, verified biodiversity unit (DNA-backed) so stakeholders fund care and share upside from survival and reproduction.

## 2) Product — GreenCoin (one animal = one coin)
- Each coin represents one living individual with on-chain provenance (DNA hash, lab docs, annual verifications).
- MVP species: Humboldt Penguin (Peru). Initial mint: 5 coins.
- Fractions: 10,000 fractions per coin to enable accessibility and campus payments.
- Treasury & floor: $10,000 treasury → floor ≈ $2,000/coin ($0.20 per fraction) backing vendor redemptions.

## 3) Verification & Data Pipeline
- Annual life verification via DNA testing: $300/year, 10-year life → $3,000 baseline.
- Workflow: sampling at zoo; electrophoresis and Sanger sequencing at certified lab (US); hash and publish reports on-chain.
	- Chain-of-custody & logistics: cold-chain shipping where required, export permits (e.g., CITES) if applicable, and documented custody from sampling to lab.
	- Turnaround: target 5–10 business days post-receipt at US lab; all raw data and reports are hashed on-chain.
	- Cost coverage: the $300/year verification budget includes US lab fees and reasonable shipping/admin overhead for the MVP.
- Public audit trail: lineage genealogy tree kept on-chain (parents, offspring, dates, labs, hashes).

## 4) Pricing & Economics
- Economic base (cost recovery): $3,000/coin (10 × $300 verification baseline).
- Conservation/admin premium: $1,000 (≈33%) → Initial List Price (ILP) ≈ $4,000/coin ($0.40/fraction).
- Survival bonus: +7%/year appreciation upon confirmed annual verification.
- Offspring proceeds split: when an offspring coin is minted and sold, Parent A receives 20% of ILP and Parent B receives 20% of ILP; 60% of ILP goes to the partner zoo (care, custody, issuance pipeline).
- Redemption: campus vendors redeem fractions at par (≥ treasury-backed floor) funded by treasury; SLA ≤ 48h.

## 5) Animal Onboarding (Coin Minting) Policy (beyond initial 5)
- Biological trigger: mint a new coin only when a new, verified individual (birth/adoption/acquisition) is onboarded and fully documented (sampling, US lab reports, on-chain hashes).
- Readiness checks: partner capacity and welfare confirmed; annual verification schedule set ($300/yr); legal/MOU and data rights in place; chain-of-custody defined.
- Treasury/ops coverage: post-mint coverage ≥ 1.0–1.2×; vendor redemption SLA healthy (< 5% backlog); monitoring/dashboard ready.
- Cadence guardrail: ≤ 1 new animal per 30 days (or per completed verification packet) to avoid operational overload.

### Fraction Sale Pacing (for existing coins)
- Release next fraction tranche when demand is sustained and system is healthy:
	- Market price ≥ 1.5× floor for 14 consecutive days.
	- Waitlist or unsatisfied buy interest > 20% of circulating fractions.
	- Turnover (volume/circulating) > 10% for 10 of the last 14 days.
	- Vendor redemption backlog < 5% (health check).
- Tranche size: list 10–20% of remaining fractions; reassess after each tranche.
- Pause tranches if metrics fall below thresholds or SLA degrades.

## 6) Pilot Budget ($10,000) — Use of Funds
- Treasury reserve for redemptions: $10,000 (backs floor and redemption SLA). Note: with 5 initial coins, treasury floor ≈ $2,000/coin ($0.20/fraction), which is below the $3,000 economic base; the ILP and ongoing allocations cover verification.
- Note: operational costs (US lab verification, shipping/logistics, integration) are covered from ILP proceeds (primarily the zoo’s 60% allocation); consider increasing treasury or reducing initial coins if you want the redemption floor to match the $3,000 economic base.

## 7) Go-to-Market (UTEC campus first)
- On-campus stores accept fractions; medallion cards for easy POS usage.
- Student outreach and partner showcase (zoo collaboration story; penguin profile).
- Transparent issuance note and weekly dashboard (redemptions, price, coverage, verifications).

## 8) KPIs
- Primary: vendor redemptions count; redemption SLA compliance.
- Secondary: adoption (unique buyers), transaction volume, on-chain verification events, partner participation, waitlist size.

## 9) Risks & Mitigations
- Early death: value shock → communicate risk upfront; maintain treasury; survival bonus only after verification.
- Over-minting/inflation: issuance guardrails and partner sign-off.
- Oracle/custody risk: dual-lab policy, public hashes, reproducible sampling.
- Regulatory: treat as access/funding token with utility; obtain counsel; avoid profit guarantees.

## 10) Financial Model (per coin, simplified)
- Inputs: Treasury-backed floor ≈ $2,000/coin ($0.20/fraction) with $10,000 treasury and 5 coins; Economic base $3,000; ILP $4,000; fractions 10,000; annual test $300; survival bonus 7%.
- Year 0: sell 8,000 fractions @ $0.40 = $3,200 proceeds; 2,000 fractions retained (team/partners/treasury).
- Year 1+: if verified, mark-to-model +7%; example price path: $0.40 → $0.428 → $0.458 → …
- Offspring event: new coin ILP $4,000; Parent A receives $800 (20%), Parent B receives $800 (20%), partner zoo allocation = $2,400 (60%) earmarked for care/custody and issuance pipeline.

## 11) Roadmap
- Month 0: finalize labs, contracts, issuance policy, and dashboards.
- Month 1: mint 5 penguin coins; open sale; kick off verifications.
- Month 2+: evaluate demand triggers; consider 1 new issuance if criteria met.

---
Assumptions are placeholders for MVP; we’ll refine with real lab quotes, zoo MOU, and campus vendor terms.
