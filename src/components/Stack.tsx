import { stack } from '../data/profile'
import { Reveal, Section } from './ui'

export const Stack = () => (
    <Section
        id="stack"
        title="Stack"
        intro="O que uso no dia a dia, agrupado pela parte do sistema onde entra."
    >
        <dl className="grid gap-x-12 border-t border-line md:grid-cols-2">
            {stack.map((group, i) => (
                <Reveal
                    key={group.group}
                    delay={(i % 2) * 90}
                    className="grid gap-4 border-b border-line py-6 sm:grid-cols-[10.5rem_1fr] sm:items-start"
                >
                    <dt className="pt-1.5 font-semibold text-lilac">{group.group}</dt>
                    <dd>
                        <ul className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <li
                                    key={item.name}
                                    className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[15px] transition duration-300 hover:-translate-y-0.5 hover:border-violet hover:bg-violet/10"
                                >
                                    {item.logo && (
                                        <img
                                            src={item.logo}
                                            alt=""
                                            loading="lazy"
                                            className={`size-5 object-contain ${item.mono ? 'brightness-0 invert' : ''}`}
                                        />
                                    )}
                                    {item.icon && <item.icon className="size-[18px] text-violet" aria-hidden />}
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </dd>
                </Reveal>
            ))}
        </dl>
    </Section>
)
