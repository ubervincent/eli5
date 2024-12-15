import Link from "next/link";

export default function Home() {

  return (
    <div className="main">
      <div className="header">
        <h1>Eli5 Programming</h1>
        <button>Menu</button> 
      </div>
      <div>

      <Profile></Profile>
      <QuestionSection></QuestionSection>
      </div>
      <QuestionBox></QuestionBox>
    </div>
  );
}

function Profile() {
 return (
    <section className="profile">
      <h1>Date</h1>
    </section>
  )
}

async function QuestionSection() {
  const response = await fetch('http://localhost:8000/questions');
  const concepts = await response.json();

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

function QuestionBox() {
  return (
    <form className="question-form">
      <input name="question" placeholder="What's Your Stupid Question?"></input>
    </form>
  )
}