# Telesoccer RP — Documentação Inicial

Este pacote contém a documentação base para começar o desenvolvimento do Telesoccer RP: um jogo mobile-first online de futebol RP, 11vs11, baseado em decisões simultâneas, cenas visuais, atributos, clubes, carreira e legado.

## Decisões já aprovadas

- O jogo começa como aplicação web mobile-first, funcionando no navegador.
- Depois de estável, pode ser empacotado como APK Android.
- A partida será 11vs11 desde o MVP.
- Cada clube terá 11 titulares e 12 reservas relacionados por partida.
- Cada clube poderá ter até 40 jogadores no elenco total.
- Goleiro será player real desde o começo.
- Presidente é função separada e não joga pelo clube.
- Técnico é função separada e não joga pelo clube.
- Técnico controla escalação, banco, formação e substituições.
- A partida representa 90 minutos de futebol, mas dura cerca de 30 minutos reais.
- Cada cena tem 15 segundos para decisão.
- Jogador offline vira bot com penalidade de -30% nos atributos efetivos.
- Jogador online que não responde em 15 segundos vira bot temporário com penalidade de -15% naquela cena.
- O jogo será free-to-play sem pay-to-win.
- Monetização permitida apenas em cosméticos.
- Posições completas entram desde o MVP.
- O personagem começa com uma posição principal.
- Posições secundárias serão desbloqueadas futuramente por treino/adaptação.

## Arquivos do pacote

1. `01_GAME_VISION.md` — visão do produto e conceito central.
2. `02_MVP_SCOPE.md` — escopo da primeira versão jogável.
3. `03_MATCH_ENGINE.md` — regras de partida, cenas, tempo, bot e cálculo.
4. `04_CLUBS_ROLES_SQUADS.md` — clubes, cargos, elenco e escalação.
5. `05_CAREER_LEGACY.md` — carreira, idade, aposentadoria e legado.
6. `06_F2P_COSMETICS.md` — monetização sem pay-to-win.
7. `07_DATABASE_MODEL.md` — modelo inicial de banco de dados.
8. `08_APP_SCREENS.md` — telas principais do app.
9. `09_ADMIN_MODERATION_ANTICHEAT.md` — painel admin, denúncia e anti-trapaça.
10. `10_ROADMAP.md` — fases de desenvolvimento.
11. `11_TECH_STACK_GITHUB.md` — stack técnica e estrutura do repositório.
12. `12_CODEX_PROMPT.md` — prompt para iniciar o projeto no Codex.
13. `13_DECISION_LOG.md` — registro das decisões de design já fechadas.

## Objetivo imediato

A primeira entrega não deve tentar criar todo o jogo definitivo. O objetivo inicial é provar que o núcleo funciona:

**partida 11vs11 por cenas + decisões simultâneas + cálculo autoritativo no servidor + progressão inicial + clubes básicos.**
