import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  Shield, 
  Cpu, 
  Database, 
  Cloud, 
  LineChart, 
  Binary 
} from "lucide-react";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Bethrass | Enterprise Infrastructure, Engineered for Trust",
  description:
    "Bethrass builds trusted digital infrastructure, secure systems, and analytics for institutions and organizations.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-y-24 md:gap-y-32 pb-24">
      
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 border-b border-slate-900 bg-linear-to-b from-slate-950 to-slate-900">
        {/* Subtle grid pattern background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.05),transparent_50%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(2,6,23,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(2,6,23,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" aria-hidden="true" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* Technical System Status Header (Mono tag) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="font-mono-brand text-xs tracking-wider uppercase text-amber-500">
                System Registry // Status: Active
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl font-bold tracking-tight text-stone-50 sm:text-5xl md:text-6xl leading-tight">
              Enterprise Infrastructure, <br />
              <span className="bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Engineered for Trust.
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="font-body mt-8 text-lg md:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
              Bethrass builds the trusted digital infrastructure, enterprise software, and secure intelligent systems required by modern institutions. We engineer core system integrity, robust traceability, and high-performance reliability into digital operations.
            </p>

            {/* Hero CTAs */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
              >
                Explore Our Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900/40 px-6 py-3.5 text-sm font-semibold text-stone-200 transition-colors hover:bg-slate-900 hover:text-stone-50"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: THE PROBLEM WE SOLVE */}
      <section className="scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading & Explanation */}
            <div className="lg:col-span-5">
              <span className="font-mono-brand text-xs tracking-widest uppercase text-amber-500 block mb-3">
                01 // Challenges We Solve
              </span>
              <h2 className="font-display text-3xl font-bold text-stone-50 md:text-4xl leading-tight mb-6">
                The Cost of Fragmented Systems
              </h2>
              <p className="font-body text-stone-300 text-lg leading-relaxed mb-6">
                Many public and private institutions operate on legacy architectures or modern silos. This environment breeds systemic vulnerabilities that compromise operations and hinder growth.
              </p>
              <p className="font-body text-stone-400 text-base leading-relaxed">
                Bethrass designs core systems to eliminate these gaps, transforming fragmented and manual processes into unified, high-integrity digital architectures.
              </p>
            </div>

            {/* Right Column: Problem Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Fragmented Information",
                  desc: "Crucial records and datasets are siloed across disconnected platforms, causing delays and inconsistencies."
                },
                {
                  title: "Manual Verification",
                  desc: "Verification processes rely heavily on human intervention, making them slow and vulnerable to error."
                },
                {
                  title: "Insecure Data Channels",
                  desc: "Traditional databases lack tamper-evident features, risking undetected manipulation of critical logs."
                },
                {
                  title: "Systemic Friction",
                  desc: "Inefficient data workflows and a lack of real-time visibility slow down operational output."
                }
              ].map((prob, i) => (
                <div key={i} className="border border-slate-900 bg-slate-950/40 p-6 rounded-lg hover:border-slate-800 transition-colors">
                  <span className="font-mono-brand text-xs text-stone-600 block mb-2">01.{i+1}</span>
                  <h3 className="font-display text-base font-semibold text-stone-200 mb-2">{prob.title}</h3>
                  <p className="font-body text-sm text-stone-400 leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: CORE CAPABILITIES */}
      <section className="scroll-mt-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono-brand text-xs tracking-widest uppercase text-amber-500 block mb-3">
              02 // Core Capabilities
            </span>
            <h2 className="font-display text-3xl font-bold text-stone-50 md:text-4xl tracking-tight">
              Institutional Capabilities
            </h2>
            <p className="font-body mt-4 text-stone-300 text-lg">
              We leverage advanced software engineering and analytical frameworks to establish robust digital ecosystems for enterprises and institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Trusted Digital Infrastructure",
                desc: "We build high-security digital registries, immutable records systems, and identity validation layers designed to establish mathematical verification, traceability, and trust."
              },
              {
                icon: Cpu,
                title: "Enterprise Software",
                desc: "We design and deploy complex, high-throughput software architectures tailored to institutional requirements and compliance standards."
              },
              {
                icon: Binary,
                title: "Artificial Intelligence",
                desc: "We engineer highly focused, deterministic machine learning models and AI systems that solve real-world automation challenges."
              },
              {
                icon: Cloud,
                title: "Cloud Solutions",
                desc: "We construct reliable, scalable, and secure cloud environments designed for continuous availability and complete data security."
              },
              {
                icon: LineChart,
                title: "Business Intelligence",
                desc: "We implement operational dashboards and executive intelligence tools that aggregate complex performance metrics into clear views."
              },
              {
                icon: Database,
                title: "Data & Analytics",
                desc: "We structure large-scale data workflows, enabling automated stream-processing, rigorous data compliance, and deep audits."
              }
            ].map((cap, i) => {
              const IconComp = cap.icon;
              return (
                <div key={i} className="group relative border border-slate-900 bg-slate-950/20 p-8 rounded-lg hover:border-slate-800 hover:bg-slate-950/40 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-900 border border-slate-800 text-amber-500 group-hover:border-amber-500/30 transition-colors mb-6">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-stone-200 mb-3 group-hover:text-amber-500 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="font-body text-sm text-stone-400 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SECTION 4: FEATURED SOLUTIONS */}
      <section id="solutions" className="scroll-mt-24 border-y border-slate-900 bg-slate-950/30 py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono-brand text-xs tracking-widest uppercase text-amber-500 block mb-3">
              03 // Featured Solutions
            </span>
            <h2 className="font-display text-3xl font-bold text-stone-50 md:text-4xl tracking-tight">
              Institutional Solutions & Systems
            </h2>
            <p className="font-body mt-4 text-stone-300 text-lg">
              Engineered systems built to secure, measure, and scale institutional operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* 1. URS - FLAGSHIP */}
            <div className="flex flex-col justify-between border border-amber-500/10 bg-slate-950/40 p-8 md:p-10 rounded-xl hover:border-amber-500/20 transition-all">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono-brand text-[10px] tracking-wider uppercase font-semibold text-amber-500 border border-amber-500/20 bg-amber-500/5 px-2.5 py-1 rounded">
                    Flagship Infrastructure
                  </span>
                  <span className="font-mono-brand text-xs text-stone-600">SYS // URS</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-stone-50 mb-4">
                  Unified Record System (URS)
                </h3>
                <p className="font-body text-stone-300 text-base leading-relaxed mb-6">
                  The URS is a trusted verification layer for lifelong academic, professional, and corporate credentials. By establishing a secure, tamper-evident digital schema, it secures critical achievements and enables instant, frictionless verification for institutions and employers worldwide.
                </p>
                <div className="border-t border-slate-900 pt-6 mb-8">
                  <h4 className="font-mono-brand text-xs text-stone-500 uppercase tracking-wider mb-3">Key Technical Protocols</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-400 font-body">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      Cryptographic Record Hashing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      Instant API Resolution
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      Lifetime Credential Wallets
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      Institutional Multi-Signatures
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href="/solutions/urs"
                className="inline-flex items-center gap-2 font-mono-brand text-sm font-medium text-amber-500 hover:text-amber-400 group pt-2"
              >
                Explore URS Platform
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* 2. LIN */}
            <div className="flex flex-col justify-between border border-slate-900 bg-slate-950/40 p-8 md:p-10 rounded-xl hover:border-slate-800 transition-all">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono-brand text-[10px] tracking-wider uppercase font-semibold text-stone-400 border border-slate-800 bg-slate-900 px-2.5 py-1 rounded">
                    Registry System
                  </span>
                  <span className="font-mono-brand text-xs text-stone-600">SYS // LIN</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-stone-50 mb-4">
                  Land Identification Number (LIN)
                </h3>
                <p className="font-body text-stone-300 text-base leading-relaxed mb-6">
                  A foundational digital indexing framework designed to standardize, secure, and resolve land registry coordinates. The LIN platform binds physical geolocations with secure digital identity schemas, facilitating instant lookup and reducing administrative overhead in property transactions.
                </p>
                <div className="border-t border-slate-900 pt-6 mb-8">
                  <h4 className="font-mono-brand text-xs text-stone-500 uppercase tracking-wider mb-3">Key Technical Protocols</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-400 font-body">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
                      Spatial Coordinate Anchoring
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
                      Immutable Ownership History
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
                      Identity Anchor Integration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
                      Public-Private Trust Bridging
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 font-mono-brand text-sm font-medium text-stone-400 hover:text-stone-300 group pt-2"
              >
                View Architecture
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* 3. ANALYTICS STUDIO */}
            <div className="flex flex-col justify-between border border-slate-900 bg-slate-950/40 p-8 md:p-10 rounded-xl hover:border-slate-800 transition-all">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono-brand text-[10px] tracking-wider uppercase font-semibold text-stone-400 border border-slate-800 bg-slate-900 px-2.5 py-1 rounded">
                    Business Intelligence
                  </span>
                  <span className="font-mono-brand text-xs text-stone-600">SYS // BAS</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-stone-50 mb-4">
                  Bethrass Analytics Studio
                </h3>
                <p className="font-body text-stone-300 text-base leading-relaxed mb-6">
                  An advanced operational analytics suite designed for deep computational processing of enterprise workflows. It processes heterogeneous datasets in real-time, delivering immediate executive visibility, and predictive modeling for high-scale institutional environments.
                </p>
                <div className="border-t border-slate-900 pt-6 mb-8">
                  <h4 className="font-mono-brand text-xs text-stone-500 uppercase tracking-wider mb-3">Key Technical Protocols</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-400 font-body">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
                      Real-Time Processing Engine
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
                      Heterogeneous Stream Fusion
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
                      Predictive Forecasting Models
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
                      Audit-Ready Metric Exports
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 font-mono-brand text-sm font-medium text-stone-400 hover:text-stone-300 group pt-2"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* 4. ACADEMY */}
            <div className="flex flex-col justify-between border border-slate-900 bg-slate-950/40 p-8 md:p-10 rounded-xl hover:border-slate-800 transition-all">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono-brand text-[10px] tracking-wider uppercase font-semibold text-stone-400 border border-slate-800 bg-slate-900 px-2.5 py-1 rounded">
                    Skills Development
                  </span>
                  <span className="font-mono-brand text-xs text-stone-600">SYS // BAC</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-stone-50 mb-4">
                  Bethrass Academy
                </h3>
                <p className="font-body text-stone-300 text-base leading-relaxed mb-6">
                  An enterprise capacity-building and specialized training platform. The academy provides structured curricula enabling engineering teams to master modern cloud operations, secure AI architectures, high-performance database management, and advanced systems administration.
                </p>
                <div className="border-t border-slate-900 pt-6 mb-8">
                  <h4 className="font-mono-brand text-xs text-stone-500 uppercase tracking-wider mb-3">Key Technical Protocols</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-400 font-body">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
                      Custom Syllabus Outlines
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
                      Active Lab Environments
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
                      Secure Systems Training
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-stone-500" />
                      Professional Accreditation
                    </li>
                  </ul>
                </div>
              </div>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 font-mono-brand text-sm font-medium text-stone-400 hover:text-stone-300 group pt-2"
              >
                Explore Academy
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: TRUSTED DIGITAL INFRASTRUCTURE */}
      <section id="infrastructure" className="scroll-mt-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center mb-16">
            <span className="font-mono-brand text-xs tracking-widest uppercase text-amber-500 block mb-3">
              04 // Architectural Trust
            </span>
            <h2 className="font-display text-3xl font-bold text-stone-50 md:text-4xl leading-tight">
              Our Approach to Trusted Systems
            </h2>
            <p className="font-body mt-4 text-stone-300 text-lg">
              Engineering technology requires more than writing functional code. We design systems to ensure institutional accountability, end-to-end data integrity, and complete process transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-slate-900 bg-slate-950/20 p-8 rounded-lg">
              <span className="font-mono-brand text-xs text-amber-500 block mb-4">{"// DATA INTEGRITY"}</span>
              <h3 className="font-display text-lg font-semibold text-stone-200 mb-3">Immutable Foundations</h3>
              <p className="font-body text-sm text-stone-400 leading-relaxed">
                Critical records are managed using mathematical verification schemas and digital hashing protocols. Once recorded, any unauthorized attempt at alteration is instantly flagged and isolated.
              </p>
            </div>
            <div className="border border-slate-900 bg-slate-950/20 p-8 rounded-lg">
              <span className="font-mono-brand text-xs text-amber-500 block mb-4">{"// ACCOUNTABILITY"}</span>
              <h3 className="font-display text-lg font-semibold text-stone-200 mb-3">Institutional Binding</h3>
              <p className="font-body text-sm text-stone-400 leading-relaxed">
                We bind actions to cryptographic identities. Actions must be explicitly signed off by designated authority roles, eliminating deniability and building a rigorous record of validation.
              </p>
            </div>
            <div className="border border-slate-900 bg-slate-950/20 p-8 rounded-lg">
              <span className="font-mono-brand text-xs text-amber-500 block mb-4">{"// TRACEABILITY"}</span>
              <h3 className="font-display text-lg font-semibold text-stone-200 mb-3">Continuous Auditing</h3>
              <p className="font-body text-sm text-stone-400 leading-relaxed">
                Our architectures maintain clear lineages for all managed datasets. From the moment of initial registration to final retrieval, a transparent operational history is fully preserved.
              </p>
            </div>
          </div>

          {/* Graphical/Schmatic Flow of Record Trust */}
          <div className="mt-12 border border-slate-900 bg-slate-950/50 p-8 rounded-xl">
            <h4 className="font-mono-brand text-xs text-stone-500 uppercase tracking-wider mb-6 text-center">
              Tamper-Evident Registration & Verification Flow
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {[
                { step: "01", label: "Institutional Action", desc: "Authorized sign-off generates a new record event" },
                { step: "02", label: "Secure Schema Binding", desc: "Data is validated against schemas and cryptographically hashed" },
                { step: "03", label: "Registry Recording", desc: "Records are anchored inside the global resolving layer" },
                { step: "04", label: "Verification Resolving", desc: "Public API immediately validates the record state on demand" }
              ].map((flow, i) => (
                <div key={i} className="relative z-10 bg-slate-950 p-5 rounded-lg border border-slate-900/60 text-center">
                  <div className="font-mono-brand text-xs text-amber-500 mb-2">{flow.step}</div>
                  <h5 className="font-display text-sm font-semibold text-stone-200 mb-2">{flow.label}</h5>
                  <p className="font-body text-xs text-stone-400 leading-relaxed">{flow.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 6: HOW WE WORK (BCDS) */}
      <section className="scroll-mt-24 border-t border-slate-900 bg-slate-950/10 py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono-brand text-xs tracking-widest uppercase text-amber-500 block mb-3">
              05 // Process Methodology
            </span>
            <h2 className="font-display text-3xl font-bold text-stone-50 md:text-4xl tracking-tight">
              The Bethrass Client Delivery System
            </h2>
            <p className="font-body mt-4 text-stone-300 text-lg">
              A structured, highly disciplined process cycle designed to guide complex technology projects from inception to continuous operational excellence.
            </p>
          </div>

          {/* Steps Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
            {[
              { num: "01", name: "Discover", desc: "Audit existing workflows, systems, and architectural challenges." },
              { num: "02", name: "Define", desc: "Draft technical requirements, APIs, and security rules." },
              { num: "03", name: "Design", desc: "Model database schemas, security flows, and architecture maps." },
              { num: "04", name: "Build", desc: "Write clean, highly scalable, and modular enterprise software." },
              { num: "05", name: "Validate", desc: "Execute automated unit tests, stress, and security tests." },
              { num: "06", name: "Deploy", desc: "Roll out to target secure, high-availability cloud setups." },
              { num: "07", name: "Improve", desc: "Monitor continuous telemetry to optimize system performance." }
            ].map((step, i) => (
              <div key={i} className="border border-slate-900/60 bg-slate-950/40 p-5 rounded-lg flex flex-col justify-between">
                <div>
                  <span className="font-mono-brand text-xs text-amber-500/60 block mb-2">{step.num}</span>
                  <h3 className="font-display text-sm font-semibold text-stone-200 mb-2">{step.name}</h3>
                </div>
                <p className="font-body text-xs text-stone-400 leading-relaxed mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 7: TECHNOLOGY AND INTELLIGENCE */}
      <section className="scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side */}
            <div className="lg:col-span-5">
              <span className="font-mono-brand text-xs tracking-widest uppercase text-amber-500 block mb-3">
                06 // Unified Technology Ecosystem
              </span>
              <h2 className="font-display text-3xl font-bold text-stone-50 md:text-4xl leading-tight mb-6">
                Unified Tech Ecosystem
              </h2>
              <p className="font-body text-stone-300 text-base leading-relaxed mb-4">
                At Bethrass, we reject the notion that software engineering, artificial intelligence, and data analytics operate as isolated layers. 
              </p>
              <p className="font-body text-stone-400 text-sm leading-relaxed">
                By integrating structured software backbones with secure artificial intelligence and business intelligence engines, we deliver unified systems that perform seamlessly under heavy enterprise demands.
              </p>
            </div>

            {/* Right side */}
            <div className="lg:col-span-7 border border-slate-900 bg-slate-950/40 p-8 rounded-xl">
              <div className="space-y-6">
                {[
                  {
                    title: "Modern Core Engineering",
                    desc: "Type-safe languages and clean-code architectures form the secure foundation for all user and data touchpoints."
                  },
                  {
                    title: "Focused Operational Intelligence",
                    desc: "Deterministic AI pipelines analyze trends, detect anomalies, and process massive transaction fields."
                  },
                  {
                    title: "Resilient Infrastructure Architecture",
                    desc: "Highly isolated, containerized cloud environments ensure complete reliability and data privacy."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-amber-500 text-xs font-mono">
                      {i+1}
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-semibold text-stone-200 mb-1">{item.title}</h4>
                      <p className="font-body text-xs text-stone-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 8: CLOSING CTA */}
      <section className="scroll-mt-24 pt-12">
        <Container>
          <div className="relative overflow-hidden rounded-xl border border-amber-500/10 bg-linear-to-b from-slate-900 to-slate-950 p-8 md:p-12 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(245,158,11,0.03),transparent_60%)]" aria-hidden="true" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="font-mono-brand text-xs tracking-widest uppercase text-amber-500 block mb-3">
                07 // Connect with Us
              </span>
              <h2 className="font-display text-3xl font-bold text-stone-50 md:text-4xl leading-tight mb-4">
                Secure Your Organization&apos;s Future
              </h2>
              <p className="font-body text-stone-300 text-base leading-relaxed mb-8">
                Whether you are looking to integrate the Unified Record System, deploy specialised enterprise solutions, or modernize your data architecture, our engineering team is ready to build with you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#solutions"
                  className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900/40 px-6 py-3 text-sm font-semibold text-stone-200 transition-colors hover:bg-slate-900"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}