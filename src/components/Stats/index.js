const stats = [
  { id: 1, name: 'Sales since 2001', value: '$3B+' },
  { id: 2, name: 'Square meters sold', value: '25M' },
  { id: 3, name: 'Estate Agents', value: '20' },
   { id: 4, name: 'Sales since 2001', value: '920' },
  
]

export default function Stats() {
  return (
    <div className="py-16 sm:pt-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4 pt-32">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-white">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
