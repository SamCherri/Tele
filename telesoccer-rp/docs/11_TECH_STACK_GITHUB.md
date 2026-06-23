# 11 — Stack Técnica e GitHub

## Stack recomendada

- **Next.js:** aplicação web responsiva.
- **TypeScript:** segurança de tipos e manutenção.
- **Tailwind CSS:** construção rápida de interface mobile-first.
- **Supabase:** backend gerenciado inicial.
- **PostgreSQL:** banco relacional principal.
- **Supabase Auth:** autenticação.
- **Supabase Realtime:** atualizações em tempo real para partidas e lobby.
- **Supabase Storage:** arquivos, imagens e cosméticos.
- **Drizzle ou Prisma:** modelagem e migrations do banco.
- **Capacitor:** futuro APK Android quando a web estiver estável.

## Estrutura de branches sugerida

- `main`: versão estável e revisada.
- `develop`: integração das próximas funcionalidades.
- `feature/nome-da-funcionalidade`: trabalho em funcionalidades específicas.
- `fix/nome-do-ajuste`: correções pontuais.
- `docs/nome-do-documento`: mudanças de documentação.

## Organização de commits

Sugestão de padrão simples:

- `docs: cria visão inicial do jogo`
- `feat: adiciona criação de personagem`
- `fix: corrige validação de escalação`
- `test: adiciona testes do motor de cenas`
- `chore: configura ferramentas do projeto`

Commits devem ser pequenos, claros e fáceis de revisar.

## Separação entre pacotes

- `apps/web`: frontend web e rotas da aplicação.
- `packages/game-engine`: regras do motor de cenas e cálculos do servidor.
- `packages/shared`: tipos, constantes e contratos compartilhados.
- `packages/ui`: componentes visuais reutilizáveis.
- `packages/database`: schema, migrations e utilitários de banco.

Essa separação evita misturar interface visual com regra crítica de partida.
