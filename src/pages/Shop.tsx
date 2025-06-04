import { PropertyList } from "@/components/property-list"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Filter from "@/components/filter"
export default function Shop() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-1">
        <aside className="w-0 sm:w-1/5 md:w-1/5 lg:w-1/6 xl:w-1/6 p-12 border-r border-red-200 overflow-y-auto" style={{ height: "calc(100vh - 12rem)" }}>
          <Filter />
        </aside>
        <section className="p-12 w-full sm:w-4/5 md:w-4/5 lg:w-4/6 xl:w-4/6 overflow-y-auto" style={{ height: "calc(100vh - 12rem)" }}>
          <PropertyList />
        </section>
      </main>
      <Footer />
    </div>
  )
}
