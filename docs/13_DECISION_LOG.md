# 13 — Registro de Decisões de Design

Este arquivo registra decisões já tomadas para evitar confusão durante o desenvolvimento.

## Partida

- O jogo começa com 11vs11.
- Reservas existem desde o MVP.
- Goleiro é player real desde o começo.
- Partida é em tempo real.
- O relógio do jogo mostra 45 + 45 minutos.
- A duração real padrão será cerca de 30 minutos.
- Cada cena tem 15 segundos para decisão.

## Ausência e bot

- Jogador offline vira bot.
- Bot por ausência sofre -30% nos atributos efetivos.
- Jogador online que não responde em 15 segundos vira bot temporário.
- Bot por timeout sofre -15% naquela cena.
- Se o jogador voltar, reassume nas próximas cenas.

## Clube

- Cada clube pode ter até 40 jogadores.
- Por partida, o clube relaciona 23 jogadores.
- São 11 titulares e 12 reservas.
- Técnico controla escalação e substituições.
- Técnico é função separada e não joga pelo próprio clube.
- Presidente é função separada e não joga pelo próprio clube.
- Capitão é jogador em campo.

## Posições

- Posições completas entram no MVP.
- O jogador começa com uma posição principal.
- Posição secundária será desbloqueada futuramente.
- Improvisos terão penalidade.

## Monetização

- O jogo será free-to-play.
- Não pode ter pay-to-win.
- Monetização apenas cosmética.

## Plataforma

- Primeiro será web mobile-first.
- APK Android fica para depois.

## Tecnologia

- Stack recomendada para o MVP: Next.js, TypeScript, Tailwind CSS, Railway e PostgreSQL.
- Railway será a plataforma principal de deploy do MVP.
- Railway PostgreSQL será o banco principal do MVP.
- Supabase não será usado no MVP inicial, salvo nova decisão futura registrada neste arquivo.
- Drizzle ORM será usado para schema e migrations, salvo impedimento técnico.
- Auth.js ou Better Auth será avaliado antes de implementar autenticação.
- Futuro APK recomendado via Capacitor.

## Escopo

- O MVP deve provar o núcleo de jogo.
- Não implementar tudo de uma vez.
- Carreira avançada, legado, transferências e campeonatos complexos ficam para fases futuras.
