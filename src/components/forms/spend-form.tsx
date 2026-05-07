'use client'

import { useState } from 'react'
import type { Tool } from '@/lib/audit/types'
import { Button } from '@/components/ui/button'
import { CATEGORIES } from '@/lib/audit/categories'

interface SpendFormProps {
  onSubmit: (tool: Omit<Tool, 'id'>) => void
}

export function SpendForm({ onSubmit }: SpendFormProps) {
  const [form, setForm] = useState({
    name: '',
    category: CATEGORIES[0],
    plan: '',
    pricePerSeat: 0,
    seats: 1,
    billingCycle: 'monthly' as Tool['billingCycle'],
  })

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(form)
      }}
    >
      <input
        required
        placeholder="Tool name"
        className="border-input w-full rounded-md border px-3 py-2 text-sm"
        value={form.name}
        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
      />
      <select
        className="border-input w-full rounded-md border px-3 py-2 text-sm"
        value={form.category}
        onChange={(e) => setForm((f) => ({ ...f, category: e.target.value as Tool['category'] }))}
      >
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <input
        required
        type="number"
        min={0}
        placeholder="Price per seat"
        className="border-input w-full rounded-md border px-3 py-2 text-sm"
        value={form.pricePerSeat}
        onChange={(e) => setForm((f) => ({ ...f, pricePerSeat: Number(e.target.value) }))}
      />
      <input
        required
        type="number"
        min={1}
        placeholder="Seats"
        className="border-input w-full rounded-md border px-3 py-2 text-sm"
        value={form.seats}
        onChange={(e) => setForm((f) => ({ ...f, seats: Number(e.target.value) }))}
      />
      <select
        className="border-input w-full rounded-md border px-3 py-2 text-sm"
        value={form.billingCycle}
        onChange={(e) => setForm((f) => ({ ...f, billingCycle: e.target.value as Tool['billingCycle'] }))}
      >
        <option value="monthly">Monthly</option>
        <option value="annual">Annual</option>
      </select>
      <Button type="submit" className="w-full">Add Tool</Button>
    </form>
  )
}
