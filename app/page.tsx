import Image from "next/image";
import Link from "next/link";
import concepts from "./mockData.json"

export default function Home() {

  return (
    <>
      <div className="header">
        <h1>Eli5 Programming</h1>
        <button>Menu</button> 
      </div>
      <main className="main">
        <Profile></Profile>
        <ConceptSection></ConceptSection>
      </main>
    </>
  );
}

function Profile() {
 return (
    <section className="profile">
      <h1>Hello World</h1>
    </section>
  )
}

function ConceptSection() {
  return (
    <section className="concept-section">
        {
          concepts.map(concept => (
            <Concept
              name={concept.name}
              href={concept.href}
            ></Concept>
          ))
        }
    </section>
  )
}

function Concept({ name, href }: { name: string; href: string }) {
  return (
    <div className="concept-item">
      <span>👉</span>
      <Link href={href}>{name}</Link>
    </div>
  )
}

