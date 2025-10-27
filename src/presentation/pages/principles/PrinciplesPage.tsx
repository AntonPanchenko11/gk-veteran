import { PrinciplesSection } from '../home/components/PrinciplesSection'
import { MissionsSection } from '../home/components/MissionsSection'

export function PrinciplesPage() {
  return (
    <main className="bg-forest-900 text-forest-100">
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-0 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-bronze">Базовые принципы</p>
        <h1 className="mt-6 text-4xl font-semibold text-white lg:text-5xl">Что лежит в основе экосистемы</h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-forest-100">
          Мы строим работу вокруг трёх ключевых направлений: лидерство и командная культура, цифровая компетентность и
          внимание к медицинской и социальной поддержке. Каждое направление подкреплено программами и сервисами.
        </p>
      </section>
      <PrinciplesSection />
      <MissionsSection />
    </main>
  )
}
