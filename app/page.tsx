import { Navbar } from "@/components/navbar"
import ProductPortfolio from "@/components/product-portfolio"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12 px-4">
        <ProductPortfolio />
      </main>
    </>
  )
}
