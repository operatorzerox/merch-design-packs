const rows = [
  { feature: 'Number of Designs', starter: '10', growth: '50', ultimate: '101' },
  { feature: 'High-Res PNG Files (300 DPI)', starter: true, growth: true, ultimate: true },
  { feature: 'Transparent Backgrounds', starter: true, growth: true, ultimate: true },
  { feature: 'Full Commercial License', starter: true, growth: true, ultimate: true },
  { feature: 'Instant Download', starter: true, growth: true, ultimate: true },
  { feature: 'Organized by Category', starter: false, growth: true, ultimate: true },
  { feature: 'Priority Support', starter: false, growth: false, ultimate: true },
  { feature: 'Price', starter: '$29', growth: '$79', ultimate: '$129' },
  { feature: 'Cost Per Design', starter: '$2.90', growth: '$1.58', ultimate: '$1.28', highlight: true },
]

function Cell({ value, isHighlight }) {
  if (value === true) {
    return (
      <svg className="w-5 h-5 text-cyan mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    )
  }
  if (value === false) {
    return <span className="text-text-muted">&mdash;</span>
  }
  return <span className={`text-sm font-medium ${isHighlight ? 'text-cyan' : 'text-text-primary'}`}>{value}</span>
}

export default function Comparison() {
  return (
    <section className="py-24 md:py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">
            Side-by-Side Comparison
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Not sure which pack? See exactly what each tier includes and find your best fit.
          </p>
        </div>

        <div className="rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface">
                  <th className="text-left p-4 text-text-muted font-medium min-w-[180px]">Feature</th>
                  <th className="p-4 text-text-primary font-semibold text-center">
                    <span className="block">Starter</span>
                    <span className="text-xs font-normal text-text-muted">10 designs</span>
                  </th>
                  <th className="p-4 text-center border-x border-cyan/20 bg-cyan-glow">
                    <span className="block text-cyan font-bold">Growth</span>
                    <span className="text-xs font-normal text-cyan/60">50 designs</span>
                  </th>
                  <th className="p-4 text-text-primary font-semibold text-center">
                    <span className="block">Ultimate</span>
                    <span className="text-xs font-normal text-text-muted">101 designs</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.feature} className={`${i % 2 === 0 ? 'bg-bg' : 'bg-surface/50'} ${row.highlight ? 'bg-cyan-glow/30' : ''}`}>
                    <td className={`p-4 ${row.highlight ? 'text-text-primary font-medium' : 'text-text-secondary'}`}>
                      {row.feature}
                    </td>
                    <td className="p-4 text-center"><Cell value={row.starter} isHighlight={row.highlight} /></td>
                    <td className="p-4 text-center border-x border-cyan/10"><Cell value={row.growth} isHighlight={row.highlight} /></td>
                    <td className="p-4 text-center"><Cell value={row.ultimate} isHighlight={row.highlight} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-center text-xs text-text-muted mt-6">
          All packs include lifetime access — buy once, download anytime, use forever.
        </p>
      </div>
    </section>
  )
}
