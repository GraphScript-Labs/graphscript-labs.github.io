import { Navbar } from "@components/Navbar"
import { Hero } from "@components/Hero"
import { Future } from "@components/Future"
import { Ecosystem } from "@components/Ecosystem"
import { GSAbout } from "@components/GSAbout"

export function App() {
  return (<>
    <Navbar />
    <Hero />
    <Future />
    <Ecosystem />
    <GSAbout />
  </>)
}

