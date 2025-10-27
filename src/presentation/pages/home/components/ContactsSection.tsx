export function ContactsSection() {
  return (
    <footer id="contacts" className="bg-forest-950 border-t border-forest-800/80">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-12 lg:py-20">
        <h2 className="text-2xl font-semibold text-white lg:text-3xl">Контакты</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm text-forest-100/90">Телефон</p>
            <p className="mt-2 text-lg font-semibold text-white">8 000 000 00 00</p>
            <p className="mt-6 text-sm text-forest-100/90">Email</p>
            <a href="mailto:email@email.ru" className="mt-2 block text-lg font-semibold text-bronze">
              email@email.ru
            </a>
          </div>
          <div className="space-y-4 text-sm text-forest-100/90">
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
          <div className="space-y-4 text-sm text-forest-100/90">
            <div>
              <p className="font-semibold text-white">ООО «Ветеран. Системный инжиниринг»</p>
              <p>ИНН / КПП</p>
              <p>Юридический адрес</p>
            </div>
            <div>
              <p className="font-semibold text-white">ООО «Ветеран. Продвижение и визуализация»</p>
              <p>ИНН / КПП</p>
              <p>Юридический адрес</p>
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs text-forest-600">
          © {new Date().getFullYear()} Экосистема «Ветеран». Все права защищены.
        </p>
      </div>
    </footer>
  )
}
