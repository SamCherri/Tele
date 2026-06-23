# 07 — Modelo Inicial de Banco de Dados

Este documento lista tabelas iniciais prováveis para o Telesoccer RP. O schema final será definido durante a implementação, validação técnica e criação das migrations.

## Lista inicial de tabelas

- users
- profiles
- players
- clubs
- club_members
- matches
- match_scenes
- decisions
- cosmetics
- inventory
- reports
- admin_logs

## users

Representa a conta base de autenticação. Em uma implementação com Supabase Auth, parte desses dados pode ficar no sistema nativo de autenticação do Supabase.

## profiles

Armazena informações públicas e sociais do usuário, como nome de exibição, avatar, preferências e dados de perfil.

## players

Representa o personagem jogador criado pelo usuário, incluindo posição principal, atributos futuros, histórico e estado de carreira.

## clubs

Representa clubes do jogo, com nome, identidade, presidente, técnico, status e informações administrativas.

## club_members

Relaciona jogadores e usuários aos clubes, incluindo função, status no elenco e histórico de participação.

## matches

Armazena partidas, clubes participantes, placar, status, horário, duração e dados gerais.

## match_scenes

Registra cenas de uma partida, tipo da cena, jogadores envolvidos, contexto e resultado calculado pelo servidor.

## decisions

Guarda decisões enviadas por jogadores em cada cena, incluindo tempo de resposta, opção escolhida e se houve uso de bot.

## cosmetics

Catálogo de itens cosméticos disponíveis, sem impacto competitivo.

## inventory

Itens cosméticos que cada usuário possui ou pode equipar.

## reports

Denúncias feitas por usuários contra comportamento abusivo, manipulação, fraude ou problemas de conduta.

## admin_logs

Logs de ações administrativas e eventos importantes para auditoria, moderação e segurança.

## Observação

Este modelo é apenas uma base inicial. A estrutura definitiva deve considerar integridade, índices, políticas de segurança, Row Level Security, performance e regras de negócio do MVP.
