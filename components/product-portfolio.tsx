"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Calendar, Linkedin, Github, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import StatsSection from "./stats-section"

// Product type definition
type Product = {
  id: number
  title: string
  description: string
  shortDescription: string
  imageUrl: string
  year?: number
  users?: number
  growth?: string
}

// Sample product data
const products: Product[] = [
  {
    id: 1,
    title: "Mithrir",
    shortDescription: "AI-powered business copilot for startups and SMBs.",
    description:
      "Founder and product designer of Mithrandir AI — a decision-support platform that helps small businesses turn raw sales and catalog data into actionable pricing strategies. Designed the full product, including data ingestion, pre-aggregated analysis, and smart recommendations. Built around real-time API workflows, auto-alerting, and Slack integrations. Focus is on automation, not just visualization.",
    imageUrl: "/mithrandir.png",
    year: 2025,
    users: 3,
    growth: "300%"
  },
  {
    id: 2,
    title: "RB Consulting – Web Platform & UX",
    shortDescription: "Strategic UX overhaul for a global ops consultancy.",
    description:
      "Led the redesign of RB Consulting’s client-facing web platform and digital workflows. Introduced a modular architecture to simplify lead capture, client onboarding, and content delivery. Focused on creating a scalable experience that could support growth while keeping operations lean.",
    imageUrl: "/rbconsulting.png",
    year: 2024
  },
  {
    id: 3,
    title: "Homely – Booking UX Optimization",
    shortDescription: "LatAm home services marketplace.",
    description:
      "Redesigned critical flows in Homely’s booking and service matching process. Simplified steps, clarified CTAs, and restructured scheduling logic to reduce user drop-off. Resulted in a measurable boost in conversions and repeat usage across key markets.",
    imageUrl: "/homely.png",
    year: 2021,
    users: 150000,
    growth: "78%"
  },
  {
    id: 4,
    title: "Aliada – Ops Workflow Redesign",
    shortDescription: "Scalable domestic services platform.",
    description:
      "Worked with Aliada’s team to map and redesign their internal operations system. Identified inefficiencies in service assignment, worker routing, and admin tools. Delivered a redesign proposal focused on scalability, usability, and error reduction in day-to-day ops.",
    imageUrl: "/aliada.png",
    year: 2020,
    users: 350000,
    growth: "60%"
  },
  {
    id: 5,
    title: "DEV.F – Product-Led Learning Enhancements",
    shortDescription: "UX improvements for Latin America's largest coding bootcamp.",
    description:
      "Improved DEV.F’s digital learning experience with new student tools, better facilitator controls, and subtle gamification. Proposed features to increase retention and reduce support load. Also helped evaluate new product lines during their expansion phase.",
    imageUrl: "/devf.png",
    year: 2019,
    users: 100000,
    growth: "95%"
  },
]

export default function ProductPortfolio() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [open, setOpen] = useState(false)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setOpen(true)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <section className="mb-16 pt-16">
        <h1 className="text-6xl mb-6">🚀</h1>
        <h1 className="text-5xl mb-1 font-black">José Luis Rosas Baza</h1>
        <h2 className="text-2xl text-muted-foreground mb-8">Head of product</h2>

        <div className="space-y-6">
          <p>
            I'm a product designer and entrepreneur focused on building tech that solves real problems—fast. I blend design, data, and AI to create tools that are not just usable, but truly useful. My work lives where strategy meets execution, always aiming for clarity, impact, and momentum.
          </p>

          <p>
            I've led product from zero to one, bootstrapped startups, and built interfaces that feel as good as they function. I care about clean UX, systems that scale, and helping teams make better decisions by design not by chance.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-3 py-1 bg-muted rounded-full text-sm">Product Design</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">UX/UI</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">AI</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">Data-Driven Design</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">Prototyping</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">Systems Thinking</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">Web & Mobile</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">Startup Strategy</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">User Research</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">Digital Transformation</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">Product-Led Growth</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">3x founder</span>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild>
              <a href="https://calendly.com/jlrosasb/30min" target="_blank">
                <Calendar className="h-4 w-4 mr-2" />
                Book a call
              </a>
            </Button>
            <Button variant='outline' asChild>
              <a href="/José Luis Roas Baza - Product.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/jlrosasb/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/bazaescribe" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* <StatsSection /> */}

      <hr />

      <header className="mt-16 mb-12">
        <h2 className="text-3xl font-bold mb-3">Selected Work</h2>
        <p className="text-muted-foreground">
          A collection of products I've designed, led, or launched. From lean MVPs to complex systems, always focused on clarity, value, and execution.
        </p>
      </header>

      <section className="space-y-8">
        <div className="w-full overflow-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 pr-4 font-medium text-muted-foreground">Year</th>
                <th className="text-left py-3 pr-4 font-medium">Title</th>
                <th className="text-right py-3 font-medium text-muted-foreground">Users</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr 
                  key={product.id} 
                  className="border-b border-muted hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={() => handleProductClick(product)}
                >
                  <td className="py-4 pr-4 text-muted-foreground">{product.year}</td>
                  <td className="py-4 pr-4">
                    <div>
                      <h3 className="font-medium">{product.title}</h3>
                      <p className="text-sm text-muted-foreground">{product.shortDescription}</p>
                    </div>
                  </td>
                  <td className="py-4 text-right">
                    {product.users && (
                      <div>
                        <div className="font-medium">{product.users.toLocaleString()}</div>
                        {product.growth && (
                          <div className="text-sm text-emerald-500">+{product.growth}</div>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        {selectedProduct && (
          <DialogContent className="max-w-3xl p-0 overflow-hidden">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 z-10 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
              <Image
                src={selectedProduct.imageUrl || "/placeholder.svg"}
                alt={selectedProduct.title}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-medium">{selectedProduct.title}</DialogTitle>
              </DialogHeader>
              <DialogDescription className="mt-4 text-base leading-relaxed">
                {selectedProduct.description}
              </DialogDescription>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
