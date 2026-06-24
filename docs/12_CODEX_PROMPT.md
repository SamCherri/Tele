# 12 — Prompt para Codex

Use este prompt quando for iniciar o projeto no Codex.

---

Você é o Codex trabalhando no projeto Telesoccer RP.

Crie a base inicial de uma aplicação web mobile-first para um jogo online de futebol RP narrativo por cenas.

## Conceito do jogo

Telesoccer RP é um jogo de futebol online 11vs11 em que todos os atletas são players reais. A partida não tem controle livre. Ela acontece por cenas visuais, decisões simultâneas e cálculo por atributos no servidor.

## Stack desejada

- Next.js.
- TypeScript.
- Tailwind CSS.
- Railway para deploy.
- Railway PostgreSQL.
- PostgreSQL.
- Drizzle ORM para schema e migrations.
- Auth.js ou Better Auth a avaliar para autenticação futura.

## Regras do MVP

- O jogo começa como aplicação web mobile-first.
- Não criar APK agora.
- Partida 11vs11 desde o MVP.
- Cada clube tem até 40 jogadores.
- Para cada partida, o técnico relaciona 23 jogadores: 11 titulares e 12 reservas.
- Goleiro é player real desde o começo.
- Presidente é função separada e não joga pelo clube.
- Técnico é função separada e não joga pelo clube.
- Técnico controla escalação e substituições.
- Cada partida representa 90 minutos, mas dura cerca de 30 minutos reais.
- Cada cena tem timer de 15 segundos.
- Jogador offline vira bot com -30% nos atributos efetivos.
- Jogador online sem resposta vira bot temporário com -15% naquela cena.
- O cliente nunca calcula resultado.
- O cliente apenas envia decisões.
- O servidor valida e calcula resultados.
- Não implementar pay-to-win.

## Funcionalidades iniciais

Crie:

1. Estrutura de pastas.
2. App web mobile-first.
3. Preparação para autenticação futura com Auth.js ou Better Auth, sem implementar login antes da decisão técnica.
4. Perfil do usuário.
5. Criação de personagem jogador.
6. Posições completas: GOL, LD, LE, ZAG, VOL, MC, MEI, PD, PE, SA, ATA.
7. Sistema básico de clubes.
8. Cargos: presidente, técnico, capitão, jogador.
9. Tela de elenco.
10. Tela de escalação 4-3-3.
11. Criação de partida.
12. Lobby de partida.
13. Cena de partida.
14. Timer de 15 segundos.
15. Envio de decisão.
16. Função de cálculo de resultado no servidor.
17. Histórico de cenas.
18. Placar.
19. Estatísticas básicas.
20. Tela de resultado final.

## Arquitetura obrigatória

Separe:

- Interface.
- Tipos compartilhados.
- Motor de partida.
- Acesso ao banco.
- Rotas/ações do servidor.

O motor de partida deve ficar em um pacote separado, por exemplo:

```txt
packages/game-engine
```

## Entidades de banco iniciais

Planeje modelos/tabelas conceituais para Railway PostgreSQL/Drizzle:

- users/profiles.
- players.
- player_attributes.
- clubs.
- club_members.
- matches.
- match_lineups.
- match_scenes.
- match_decisions.
- match_scene_results.
- player_match_stats.
- reports.
- moderation_actions.

## Motor de cena inicial

Implementar uma primeira versão simples com:

- Cena de ataque vs defesa.
- Cena de finalização vs goleiro.
- Matriz de decisão.
- Atributos principais.
- Bônus de decisão.
- Penalidade de cansaço.
- Penalidade de posição improvisada.
- Penalidade de bot offline.
- Penalidade de timeout.
- Sorte controlada entre -5 e +5.

## Não implementar agora

Não implemente ainda:

- APK.
- Mercado de transferências completo.
- Contratos avançados.
- Salários complexos.
- Legado completo.
- Aposentadoria completa.
- Campeonatos internacionais.
- Passe de temporada avançado.
- Skins complexas.
- Animações avançadas.

## Resultado esperado

Entregar uma base funcional e documentada, com README explicando:

- Como instalar.
- Como configurar variáveis de ambiente.
- Como rodar localmente.
- Como funciona o motor inicial.
- Como criar uma partida de teste.
- Como rodar testes.
