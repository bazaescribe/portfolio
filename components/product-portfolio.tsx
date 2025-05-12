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
}

// Sample product data
const products: Product[] = [
  {
    id: 1,
    title: "Mithrandir AI",
    shortDescription: "AI-powered business copilot for startups and SMBs.",
    description:
      "Founder and lead designer of Mithrandir AI — a platform that turns messy business data into strategic decisions. I designed the full product experience, from ingestion to insights. The UI avoids traditional dashboards and instead surfaces contextual actions, with real-time API integration and Slack alerts. The brand identity is minimalist and brutalist, inspired by Gandalf’s staff and Helvetica, with a nod to Palantir’s visual system.",
    imageUrl: "/mithrandir.png",
  },
  {
    id: 2,
    title: "RB Consulting – Brand & UX Refresh",
    shortDescription: "Visual identity and web presence for a global consultancy.",
    description:
      "Led a full rebranding and UX overhaul for RB Consulting, a boutique strategy and ops firm. Developed a clean, confident brand system, including a responsive website and sleek pitch materials. Balanced corporate polish with a personal tone to reflect the firm’s hands-on approach.",
    imageUrl: "/rbconsulting.png",
  },
  {
    id: 3,
    title: "Homely – UX Optimization",
    shortDescription: "Latin American home services marketplace.",
    description:
      "Worked on improving Homely’s user experience, especially around booking and service matching flows. Proposed UX changes that reduced user drop-off and improved retention. Also helped align tone and visuals to reflect trust and professionalism for both sides of the marketplace.",
    imageUrl: "/homely.png",
  },
  {
    id: 4,
    title: "Aliada – Ops Redesign Proposal",
    shortDescription: "Scalable domestic services platform.",
    description:
      "Collaborated with the Aliada team to identify bottlenecks in user and operations workflows. Delivered a redesign proposal that clarified the internal operating system and improved platform scalability. Focused on reducing ambiguity for admins while maintaining a seamless experience for workers and clients.",
    imageUrl: "/aliada.png",
  },
  {
    id: 5,
    title: "DEV.F – Learning Experience Design",
    shortDescription: "Latin America's leading coding bootcamp.",
    description:
      "Contributed to various learning experience improvements at DEV.F, including UI for student platforms and facilitator tools. Proposed subtle gamification features and design adjustments to boost engagement. Also participated in strategic discussions about new product opportunities and expansion.",
    imageUrl: "/devf.png",
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
        <h1 className="text-4xl mb-1 font-black">José Luis Rosas Baza</h1>
        <h2 className="text-2xl text-muted-foreground mb-8">Head of product</h2>

        <div className="space-y-6">
          <p>
            I'm a product designer and entrepreneur focused on building tech that solves real problems—fast. I blend design, data, and AI to create tools that are not just usable, but truly useful. My work lives where strategy meets execution, always aiming for clarity, impact, and momentum.
          </p>

          <p>
            I've led product from zero to one, bootstrapped startups, and built interfaces that feel as good as they function. I care about clean UX, systems that scale, and helping teams make better decisions by design—not by chance.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-3 py-1 bg-muted rounded-full text-sm">Product Design</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">UX/UI</span>
            <span className="px-3 py-1 bg-muted rounded-full text-sm">AI for Business</span>
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
          A collection of products I’ve designed, led, or launched. From lean MVPs to complex systems, always focused on clarity, value, and execution.
        </p>
      </header>

      <section className="space-y-16">
        {products.map((product) => (
          <article key={product.id} className="group cursor-pointer" onClick={() => handleProductClick(product)}>
            <div className="overflow-hidden mb-4">
              <Image
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="text-xl font-medium mb-2">{product.title}</h2>
            <p className="text-muted-foreground">{product.shortDescription}</p>
          </article>
        ))}
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
