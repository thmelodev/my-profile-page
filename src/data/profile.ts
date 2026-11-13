// Todo o conteúdo do site fica aqui: para atualizar textos, cargos ou projetos,
// edite este arquivo em vez dos componentes.

import docker from '../assets/docker.webp'
import figma from '../assets/figma.webp'
import jenkins from '../assets/jenkins.webp'
import mongo from '../assets/mongo.webp'
import nest from '../assets/nest.svg'
import postgres from '../assets/pg.webp'
import react from '../assets/react.webp'
import tailwind from '../assets/tailwind.webp'
import typescript from '../assets/typescript.webp'
import queroQuero from '../assets/quero-quero.webp'
import megawork from '../assets/megawork.png'
import superAcougueWilde from '../assets/projects/super-acougue-wilde.jpg'
// Ícones da stack: devicon (MIT), https://devicon.dev
import astro from '../assets/stack/astro.svg'
import datadog from '../assets/stack/datadog.svg'
import dotnet from '../assets/stack/dotnet.svg'
import flutter from '../assets/stack/flutter.svg'
import git from '../assets/stack/git.svg'
import githubActions from '../assets/stack/githubactions.svg'
import go from '../assets/stack/go.svg'
import jest from '../assets/stack/jest.svg'
import kafka from '../assets/stack/kafka.svg'
import kubernetes from '../assets/stack/kubernetes.svg'
import linux from '../assets/stack/linux.png'
import nodejs from '../assets/stack/nodejs.svg'
import redis from '../assets/stack/redis.svg'
import sqlServer from '../assets/stack/sqlserver.svg'
import vite from '../assets/stack/vite.svg'
import zustand from '../assets/stack/zustand.png'
import { Blocks, Bot, Boxes, Layers, Network, Zap, type LucideIcon } from 'lucide-react'

export const profile = {
    name: 'Thiago Melo',
    fullName: 'Thiago Melo de Assis Pereira',
    role: 'Desenvolvedor de Software Pleno',
    location: 'Vila Velha, ES',
    /** Mostra o selo "Aberto a novas oportunidades" no topo. Desligado: o empregador atual também vê o site. */
    openToWork: false,
    email: 'thiagomelo0509@gmail.com',
    linkedin: 'https://www.linkedin.com/in/thmelodev/',
    github: 'https://github.com/thmelodev',
    repo: 'https://github.com/thmelodev/my-profile-page',
    cv: '/docs/Thiago_Melo_CV.pdf',
    cvFileName: 'Thiago_Melo_CV.pdf',
}

/** Frases que se alternam no hero, depois de "Construo". */
export const heroPhrases = [
    'APIs em NestJS e Go',
    'aplicações de ponta a ponta',
    'microsserviços orientados a eventos',
    'integrações com VTEX e Microsoft Project',
]

export const orbitLogos = [
    { name: 'React', src: react },
    { name: 'NestJS', src: nest },
    { name: 'TypeScript', src: typescript },
    { name: 'Docker', src: docker },
    { name: 'PostgreSQL', src: postgres },
    { name: 'MongoDB', src: mongo },
    { name: 'Tailwind CSS', src: tailwind },
    { name: 'Jenkins', src: jenkins },
]

export type Job = {
    role: string
    company: string
    logo: string
    /** Fundo atrás do logo: branco para logos com fundo branco, violeta para os vazados. */
    logoBg: 'white' | 'violet'
    start: string
    end: string
    current?: boolean
    location: string
    highlights: string[]
    tech: string[]
}

export const jobs: Job[] = [
    {
        role: 'Desenvolvedor de Software Pleno',
        company: 'Megawork Consultoria',
        logo: megawork,
        logoBg: 'white',
        start: 'jul 2026',
        end: 'atual',
        current: true,
        location: 'Vitória (ES), híbrido',
        highlights: [
            'Conduzo de ponta a ponta a aplicação que vai substituir o Microsoft Project Web App (PWA) na organização.',
            'Levanto requisitos lado a lado com a área de negócio.',
            'Desenvolvo o front-end em React e Vite, o back-end em NestJS e o banco de dados em SQL Server.',
            'Desenvolvi um plugin em .NET que integra o Microsoft Project à nova solução.',
            'Estruturei o CI/CD com deploy automatizado em VMs Windows.',
            'Uso agentes de IA no fluxo de desenvolvimento para entregar mais rápido sem abrir mão da qualidade.',
        ],
        tech: ['NestJS', 'React', 'Vite', 'SQL Server', '.NET', 'Docker', 'CI/CD'],
    },
    {
        role: 'Desenvolvedor de Software',
        company: 'Lojas Quero-Quero',
        logo: queroQuero,
        logoBg: 'violet',
        start: 'out 2023',
        end: 'jul 2026',
        location: 'Remoto, sede em Cachoeirinha (RS)',
        highlights: [
            'Desenvolvi microsserviços do e-commerce integrados à VTEX, incluindo um integrador de preços em Go.',
            'Construí aplicações em NestJS e Go para o ecossistema de e-commerce.',
            'Participei da migração da plataforma Wevo para sistemas próprios da empresa.',
            'Atuei nos sistemas de autenticação e autorização com JWT e Ingress.',
            'Atuei na plataforma de cadastro de produtos com workflows customizados.',
            'Na sustentação, analisei sistemas, corrigi bugs e resolvi problemas junto à área de negócio.',
        ],
        tech: ['NestJS', 'Go', 'TypeScript', 'VTEX', 'JWT', 'Ingress'],
    },
    {
        role: 'Estagiário de Desenvolvimento de Software',
        company: 'Lojas Quero-Quero',
        logo: queroQuero,
        logoBg: 'violet',
        start: 'ago 2022',
        end: 'out 2023',
        location: 'Remoto',
        highlights: [
            'Concluí o programa QQ-Tech: capacitação intensiva de três meses, encerrada com um projeto prático.',
            'Fui aprovado e integrado a um time de desenvolvimento mobile.',
            'Desenvolvi em Flutter um app para visitas técnicas, com trajeto até a loja, registro de atividades, fotos e geração de evidências, o que melhorou o processo de auditoria.',
        ],
        tech: ['Flutter', 'Dart'],
    },
]

export const education = [
    {
        course: 'Análise e Desenvolvimento de Sistemas',
        school: 'Universidade Vila Velha (UVV)',
        period: 'fev 2023 – mar 2025',
    },
    {
        course: 'Técnico em Informática',
        school: 'Instituto Federal do Espírito Santo (IFES)',
        period: 'fev 2020 – jul 2022',
    },
]

export const languages = [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Intermediário' },
]

export type StackItem = {
    name: string
    /** Logo da tecnologia (imagem). */
    logo?: string
    /** Para logos escuros, que somem no fundo roxo: renderiza em branco. */
    mono?: boolean
    /** Para conceitos sem logo oficial: um ícone do lucide. */
    icon?: LucideIcon
}

export const stack: { group: string; items: StackItem[] }[] = [
    {
        group: 'Back-end',
        items: [
            { name: 'Node.js', logo: nodejs },
            { name: 'NestJS', logo: nest },
            { name: 'Go', logo: go },
            { name: 'TypeScript', logo: typescript },
            { name: '.NET', logo: dotnet },
            { name: 'Jest', logo: jest },
        ],
    },
    {
        group: 'Front-end',
        items: [
            { name: 'React', logo: react },
            { name: 'Vite', logo: vite },
            { name: 'Tailwind CSS', logo: tailwind },
            { name: 'Zustand', logo: zustand },
            { name: 'Astro', logo: astro, mono: true },
        ],
    },
    {
        group: 'Dados e mensageria',
        items: [
            { name: 'PostgreSQL', logo: postgres },
            { name: 'SQL Server', logo: sqlServer, mono: true },
            { name: 'MongoDB', logo: mongo },
            { name: 'Redis', logo: redis },
            { name: 'Kafka', logo: kafka, mono: true },
        ],
    },
    {
        group: 'Infra e observabilidade',
        items: [
            { name: 'Docker', logo: docker },
            { name: 'Kubernetes', logo: kubernetes },
            { name: 'Jenkins', logo: jenkins },
            { name: 'CI/CD', logo: githubActions },
            { name: 'Linux', logo: linux },
            { name: 'Git', logo: git },
            { name: 'DataDog', logo: datadog },
        ],
    },
    {
        group: 'Arquitetura e práticas',
        items: [
            { name: 'Microsserviços', icon: Network },
            { name: 'Eventos com Kafka', icon: Zap },
            { name: 'Clean Architecture', icon: Layers },
            { name: 'DDD', icon: Boxes },
            { name: 'SOLID', icon: Blocks },
            { name: 'Agentes de IA no desenvolvimento', icon: Bot },
        ],
    },
    {
        group: 'Mobile e design',
        items: [
            { name: 'Flutter', logo: flutter },
            { name: 'Figma', logo: figma },
        ],
    },
]

export type Project = {
    name: string
    url: string
    displayUrl: string
    summary: string
    decisions: string[]
    tech: string[]
    /** Print da página inicial, em src/assets/projects/ (proporção 16:10). */
    image: string
}

export const projects: Project[] = [
    {
        name: 'Super Açougue Wilde',
        url: 'https://www.superacouguewilde.com.br/',
        displayUrl: 'superacouguewilde.com.br',
        summary:
            'Site de um açougue de bairro com mais de 50 anos em Vila Velha (ES). Mostra os cortes, os horários com status de aberto agora e como chegar, e leva o pedido direto para o WhatsApp.',
        decisions: [
            'HTML estático gerado no build com Astro: o conteúdo aparece inteiro sem JavaScript, inclusive para o Google.',
            'JavaScript só onde é necessário: status "Aberto agora", barra fixa, mapa que carrega quando a seção se aproxima e banner de cookies.',
            'GSAP baixado só na primeira interação, e nunca para quem pediu menos movimento.',
            'GTM e Meta Pixel adiados até a primeira interação ou 4 s após o carregamento.',
            'Fontes auto-hospedadas e deploy na Vercel via GitHub Actions e Vercel CLI.',
        ],
        tech: ['Astro', 'Tailwind CSS', 'GSAP', 'Vercel', 'GitHub Actions'],
        image: superAcougueWilde,
    },
]
