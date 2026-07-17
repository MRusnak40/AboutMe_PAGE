import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Scene3D from "./SceneFor3D"
import Navigator from "./Navigator"
import RollingMenu from "./RollingMenu"

export default function Contact() {

  const formRef = useRef<HTMLFormElement>(null)
  const [copied, setCopied] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    emailjs.sendForm(
      'service_sdb5qmb',
      'template_nk1gsiz',
      formRef.current,
      'KJAMTJY7c1NtwNI0_'
    )
      .then(() => {
        alert('zprava odeslana')
        formRef.current?.reset() // Vyčistí políčka po odeslání
      })
      .catch((err) => {
        alert('zprava se nepodarila odeslat')
        console.error(err)
      })
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('rusnak.matyas07@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Třída pro přebití bílého autofillu od prohlížeče
  const autofillFix = "[&:-webkit-autofill]:[-webkit-box-shadow:0_0_0_100px_black_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white]"

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden">

        <div className="absolute top-0 left-0 w-full z-50 pointer-events-auto">
          <RollingMenu>
            <Navigator />
          </RollingMenu>
        </div>

        <div className="absolute inset-0 z-0 pointer-events-auto">
          <Scene3D />
        </div>

        <main className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-20 min-[1700px]:px-32 pointer-events-none">

          {/* Změna: max-w-lg zaručí, že se formulář na velkých monitorech neroztáhne */}
          <div className="w-full max-w-lg min-[1700px]:max-w-2xl space-y-6 min-[1700px]:space-y-8 text-white pointer-events-auto">
            <div>

              <h2 className="text-3xl min-[1700px]:text-5xl font-extrabold mb-4 min-[1700px]:mb-8">
                Contact <span className="text-red-500">Me</span>
              </h2>

              {/* Kontaktní vizitka */}
              <div className="mb-6 min-[1700px]:mb-10 space-y-3 min-[1700px]:space-y-4 border-l-2 border-red-500 pl-4">

                <div className="flex items-center gap-3 text-sm min-[1700px]:text-base text-gray-300">
                  <svg className="w-4 h-4 min-[1700px]:w-5 min-[1700px]:h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="font-semibold text-white">Matyáš Rusňak</span>
                </div>

                <a href="tel:+420722903550" className="flex items-center gap-3 text-sm min-[1700px]:text-base text-gray-300 hover:text-red-500 transition-colors w-fit">
                  <svg className="w-4 h-4 min-[1700px]:w-5 min-[1700px]:h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +420 722 903 550
                </a>

                {/* E-mail + fallback tlačítko na zkopírování, protože mailto: nemusí u všech fungovat */}
                <div className="flex items-center gap-3 text-sm min-[1700px]:text-base text-gray-300 w-fit">
                  <a href="mailto:rusnak.matyas07@gmail.com" className="flex items-center gap-3 hover:text-red-500 transition-colors">
                    <svg className="w-4 h-4 min-[1700px]:w-5 min-[1700px]:h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    rusnak.matyas07@gmail.com
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="text-xs text-gray-500 hover:text-red-500 transition-colors underline underline-offset-2 shrink-0"
                  >
                    {copied ? 'Copied ✓' : 'Copy'}
                  </button>
                </div>

              </div>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-4 min-[1700px]:space-y-6">

                {/* Jméno */}
                <div className="flex flex-col space-y-1 min-[1700px]:space-y-2">
                  <label className="text-xs min-[1700px]:text-sm uppercase tracking-wider text-gray-400">Name</label>
                  <input
                    type="text"
                    name='name'
                    placeholder='Steven Klinger'
                    required
                    className={`bg-black/50 border border-zinc-700 rounded-lg p-3 min-[1700px]:p-4 text-white min-[1700px]:text-lg focus:outline-none focus:border-red-500 transition-colors ${autofillFix}`}
                  />
                </div>

                {/* E-mail */}
                <div className="flex flex-col space-y-1 min-[1700px]:space-y-2">
                  <label className="text-xs min-[1700px]:text-sm uppercase tracking-wider text-gray-400">E-mail</label>
                  <input
                    type="email"
                    name='email'
                    placeholder='steven@gmail.com'
                    required
                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                    className={`bg-black/50 border border-zinc-700 rounded-lg p-3 min-[1700px]:p-4 text-white min-[1700px]:text-lg focus:outline-none focus:border-red-500 transition-colors ${autofillFix}`}
                  />
                </div>

                {/* Telefon */}
                <div className="flex flex-col space-y-2 min-[1700px]:space-y-3">
                  <label className="text-xs min-[1700px]:text-sm text-gray-500 uppercase tracking-widest">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+420 123 456 789"
                    required
                    className={`bg-black/50 border border-zinc-800 rounded-lg p-3 min-[1700px]:p-4 text-white min-[1700px]:text-lg focus:outline-none focus:border-red-600 transition-colors ${autofillFix}`}
                  />
                </div>

                {/* Text zprávy */}
                <div className="flex flex-col space-y-1 min-[1700px]:space-y-2">
                  <label className="text-xs min-[1700px]:text-sm uppercase tracking-wider text-gray-400">Email text</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder='Text me about what you want'
                    required
                    className="bg-black/50 border border-zinc-700 rounded-lg p-3 min-[1700px]:p-4 text-white min-[1700px]:text-lg focus:outline-none focus:border-red-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Tlačítko */}
                <button
                  type='submit'
                  className="w-full bg-red-800 hover:bg-red-500 font-bold py-3 min-[1700px]:py-4 min-[1700px]:text-lg rounded-lg transition-colors cursor-pointer active:scale-95 mt-2">
                  SEND MESSAGE &rarr;
                </button>

                {/* Poznámka, že formulář posílá email přímo */}
                <div className="flex items-center justify-center gap-2 text-xs min-[1700px]:text-sm text-gray-500 pt-2">
                  <svg className="w-3.5 h-3.5 min-[1700px]:w-4 min-[1700px]:h-4 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>This will be sent to my Email - You dont have to do anything </span>
                </div>

              </form>
            </div>

          </div>

        </main >
      </div >
    </>
  )
}