const PRODUCTS = [
  {
    title: 'ДокПоток',
    description: 'Экосистема решений для автоматизации и ускорения гибридного документооборота',
  },
  {
    title: 'По отрасли',
    list: [
      'Здравоохранение (госпитали и больницы)',
      'Гос учреждения (МЧС, МВД)',
      'Учебные учреждения (медицинские вузы)',
    ],
  },
  {
    title: 'Велес',
    description: 'ИИ для компьютерного зрения (распознавание документов) и поддержка принятия решений',
  },
  {
    title: 'По функциональной задаче',
    list: [
      'Ускорение и автоматизация документооборота',
      'Корпоративные системы управления знаниями (электронные библиотеки)',
      'Учебные учреждения (медицинские вузы)',
      'Автоматизация оцифровки первичных документов (компьютерное зрение)',
      'Поддержка принятия решений (врачебных, управленческих)',
      'Big Data, аналитика данных на большой выборке (в том числе клинические исследования)',
    ],
  },
]

const CARD_BASE_CLASSES =
  'flex h-full flex-col justify-between rounded-[28px] border border-highlight/80 p-8 text-white/80'

export function ProductsSection() {
  return (
    <section id="products" className="relative bg-surface-deep text-white">
      <div className="absolute inset-0 bg-surface-base" />
      <div className="relative mx-auto max-w-6xl space-y-10 px-6 py-10 lg:px-12 lg:py-14">
        <header className="space-y-3">
          <h3 className="heading-section">Продуктовая IT-разработка</h3>
          <p className="body-text max-w-2xl">Собственные решения на базе платформы 1С</p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PRODUCTS.map((product) => (
            <article
              key={product.title}
              className={CARD_BASE_CLASSES}
            >
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white lg:text-[1.4rem]">{product.title}</h4>
                {product.description ? <p className="body-text text-white/80">{product.description}</p> : null}
                {product.list ? (
                  <ul className="space-y-2">
                    {product.list.map((item) => (
                      <li
                        key={item}
                        className="body-text relative pl-5 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-highlight/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="mt-8 h-px w-full rounded-full bg-gradient-to-r from-highlight/70 via-transparent to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
