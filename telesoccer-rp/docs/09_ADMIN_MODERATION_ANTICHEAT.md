# 09 — Administração, Moderação e Anti-Cheat

## Moderação

Por ser um jogo online competitivo e social, Telesoccer RP precisa de moderação desde cedo. A moderação deve proteger a comunidade sem interferir injustamente no resultado esportivo.

## Denúncias

Usuários devem poder denunciar:

- Ofensas e assédio.
- Manipulação de resultado.
- Abandono intencional.
- Uso de contas falsas.
- Exploração de bugs.
- Condutas contra as regras da comunidade.

## Banimento

Banimentos devem ser registrados com motivo, duração, responsável pela ação e evidências relacionadas.

Tipos possíveis:

- Advertência.
- Suspensão temporária.
- Banimento permanente.
- Restrição de chat.
- Restrição de participação competitiva.

## Logs

O sistema deve registrar logs de:

- Decisões de partida.
- Cenas processadas.
- Penalidades por offline ou sem resposta.
- Ações administrativas.
- Alterações de clube e elenco.
- Denúncias e revisões.

## Anti-cheat

O anti-cheat deve começar pela arquitetura correta:

- Cliente não calcula resultado.
- Cliente não define atributos finais.
- Cliente não altera placar.
- Servidor valida decisões, tempo e contexto.
- Logs permitem auditoria posterior.

## Regras contra manipulação de resultado

O jogo deve monitorar padrões suspeitos, como:

- Jogadores ficando offline repetidamente em momentos decisivos.
- Decisões anormais combinadas entre clubes.
- Contas recém-criadas usadas para prejudicar partidas.
- Substituições ou escalações abusivas se regras futuras proibirem.

## Servidor como fonte da verdade

O servidor deve ser a fonte da verdade para qualquer informação competitiva. O frontend deve ser tratado como interface visual, não como autoridade de regra.
