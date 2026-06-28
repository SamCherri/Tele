# 10 — Roadmap de Desenvolvimento

## Fase 0 — Pré-produção fechada

Objetivo: transformar ideia em escopo executável.

Entregas:

- Documentação inicial.
- Matriz de decisões.
- Lista de atributos.
- Modelo de banco.
- Fluxo de telas.
- Prompt para Codex.
- Estrutura GitHub.

## Fase 1 — Fundação técnica

Objetivo: criar base web do projeto.

Entregas:

- Repositório GitHub.
- App web mobile-first.
- Deploy preparado para Railway.
- Railway PostgreSQL configurado como banco principal.
- Drizzle configurado para schema e migrations.
- Schema inicial de usuários, perfis, jogadores e atributos.
- Migration inicial versionada.
- Layout base.
- Autenticação a avaliar com Auth.js ou Better Auth.
- Fluxo visual de login em fase posterior.
- Fluxo visual de perfil em fase posterior.
- Criação de jogador no app em fase posterior.

## Fase 2 — Clubes e cargos

Objetivo: permitir organização social.

Entregas:

- Criar clube.
- Entrar em clube.
- Presidente.
- Técnico.
- Capitão.
- Elenco até 40 jogadores.
- Relacionar 23 por partida.

## Fase 3 — Motor de cenas

Objetivo: provar o núcleo do gameplay.

Entregas:

- Criar partida.
- Escalação 4-3-3.
- Cena de disputa.
- Decisão simultânea.
- Timer de 15 segundos.
- Bot offline -30%.
- Bot timeout -15%.
- Cálculo no servidor.
- Narração.

## Fase 4 — Partida 11vs11 MVP

Objetivo: jogar partida completa.

Entregas:

- Relógio 45 + 45.
- Duração real aproximada de 30 minutos.
- Goleiro player real.
- Substituições.
- Cansaço básico.
- Estatísticas.
- Placar.
- Resultado final.

## Fase 5 — Progressão e ranking

Objetivo: gerar retenção inicial.

Entregas:

- XP básico.
- Estatísticas de carreira.
- Ranking de jogadores.
- Ranking de clubes.
- Artilharia.
- Assistências.
- Defesas.

## Fase 6 — Admin e moderação

Objetivo: operar comunidade com segurança.

Entregas:

- Painel admin básico.
- Denúncias.
- Suspensão/banimento.
- Logs de partida.
- Auditoria de decisões.

## Fase 7 — Cosméticos iniciais

Objetivo: iniciar personalização sem pay-to-win.

Entregas:

- Inventário.
- Loja cosmética.
- Itens visuais básicos.
- Equipar cosméticos.

## Fase 8 — Temporadas e campeonatos simples

Objetivo: organizar competição.

Entregas:

- Liga por pontos.
- Tabela.
- Calendário simples.
- Premiações básicas.

## Fase 9 — Carreira avançada

Objetivo: aprofundar vida do atleta.

Entregas:

- Envelhecimento.
- Fases da carreira.
- Propostas.
- Contratos simples.
- Moral avançada.
- Reputação.

## Fase 10 — Legado e Hall da Fama

Objetivo: fechar ciclo de vida do personagem.

Entregas:

- Aposentadoria.
- Novo personagem.
- Legado narrativo.
- Hall da Fama.
- Títulos familiares.

## Fase 11 — APK Android

Objetivo: transformar a web em app mobile.

Entregas:

- PWA madura.
- Empacotamento Android.
- Testes em dispositivos.
- Push notifications.
- Publicação controlada.

## Atualização PR #5

Concluído nesta etapa:

- Cadastro/login/logout.
- Perfil básico protegido por sessão.
- Criação do primeiro personagem.
- Geração de atributos iniciais por posição no servidor.

Próximo passo recomendado: melhorar onboarding pós-cadastro e, depois, iniciar a base de clubes somente quando o fluxo de personagem estiver validado.
