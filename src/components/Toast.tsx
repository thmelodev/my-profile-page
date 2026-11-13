import { Check } from 'lucide-react'

export type ToastMessage = { id: number; text: string }

/** Aviso rápido no rodapé da tela. A região fica sempre montada para leitores de tela anunciarem a mudança. */
export const Toast = ({ message }: { message: ToastMessage | null }) => (
    <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
        {message && (
            <div
                key={message.id}
                className="flex animate-toast-in items-center gap-2.5 rounded-full border border-violet/40 bg-surface-2 px-5 py-3 font-medium shadow-[0_12px_40px_-12px_var(--color-violet)]"
            >
                <Check className="size-4 text-live" aria-hidden />
                {message.text}
            </div>
        )}
    </div>
)
