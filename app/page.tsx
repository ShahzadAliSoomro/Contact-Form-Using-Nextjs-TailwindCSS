import Image from 'next/image'
import ContactForm from './component/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen lg:p-24 p-0">
      <ContactForm />
    </main>
  )
}
