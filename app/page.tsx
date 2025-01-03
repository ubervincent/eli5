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

type Question = {
  name: string
  href: string
}

async function QuestionSection() {
  const response = await fetch('https://eli5-198172538965.us-central1.run.app/questions');
  const questions = await response.json();

  return (
    <section className="concept-section">
        {
          questions.map((question: Question) => (
            <Concept
              name={question.name}
              href={question.href}
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