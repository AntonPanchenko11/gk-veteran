interface ContactsSectionProps {
  className?: string
  contentClassName?: string
}

export function ContactsSection({ className, contentClassName }: ContactsSectionProps = {}) {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contacts" className={`border-t border-highlight/20 bg-surface-base ${className ?? ''}`.trim()}>
      <div className={`mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14 ${contentClassName ?? ''}`.trim()}>
        <h2 className="heading-section text-2xl lg:text-3xl">Контакты</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          <div>
            <p className="body-text">Телефон</p>
            <p className="mt-2 text-lg font-semibold text-white">8 000 000 00 00</p>
            <p className="mt-6 body-text">Email</p>
            <a href="mailto:email@email.ru" className="mt-2 block text-lg font-semibold text-highlight">
              email@email.ru
            </a>
          </div>

          <div className="space-y-4 body-text">
            <div>
              <p className="font-semibold text-white">ООО «Ветеран. Информационные системы»</p>
              <p>ИНН / КПП</p>
              <p>Юридический адрес</p>
            </div>
            <div>
              <p className="font-semibold text-white">ООО «Ветеран. Защита интересов»</p>
              <p>ИНН / КПП</p>
              <p>Юридический адрес</p>
            </div>
          </div>

          <div className="space-y-4 body-text">
            <div>
              <p className="font-semibold text-white">ООО «Ветеран. Системный инжиниринг»</p>
              <p>ИНН / КПП</p>
              <p>Юридический адрес</p>
            </div>
            <div>
              <p className="font-semibold text-white">ООО «Ветеран. Учебный цетер»</p>
              <p>ИНН / КПП</p>
              <p>Юридический адрес</p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-white/40">© {currentYear} Экосистема «Ветеран». Все права защищены.</p>
      </div>
    </footer>
  )
}
