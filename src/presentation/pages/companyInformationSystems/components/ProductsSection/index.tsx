const PRODUCTS = [
  {
    title: 'ДокПоток',
    description: 'Экосистема решений для автоматизации и ускорения гибридного документооборота',
    layout: 'col-span-2',
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
    layout: 'col-span-2',
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
  'flex h-full flex-col justify-between rounded-[28px] border border-bronze/30 bg-[#1E1F1D] p-6 text-sm text-white/80 shadow-[0_30px_70px_-50px_rgba(0,0,0,0.85)]'

export function ProductsSection() {
  return (
    <section className="relative bg-[#1D1E1C] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl space-y-10 px-6 py-16 lg:px-12 lg:py-24">
        <header className="space-y-3">
          <h3 className="text-3xl font-semibold uppercase tracking-tight">Продуктовая IT-разработка</h3>
          <p className="max-w-2xl text-sm text-white/70">Собственные решения на базе платформы 1С</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((product) => (
            <article
              key={product.title}
              className={`${CARD_BASE_CLASSES} ${product.layout === 'col-span-2' ? 'lg:col-span-2' : ''}`}
            >
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white">{product.title}</h4>
                {product.description ? <p className="text-white/70">{product.description}</p> : null}
                {product.list ? (
                  <ul className="space-y-2 text-white/70">
                    {product.list.map((item) => (
                      <li key={item} className="pl-4 leading-relaxed before:absolute before:-ml-4 before:mt-[0.45rem] before:h-1 before:w-1 before:rounded-full before:bg-white/70 relative">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <span className="mt-6 block h-[2px] w-3/4 rounded-full bg-gradient-to-r from-bronze/70 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
