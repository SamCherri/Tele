# 09 — Administração, Moderação e Anti-Trapaça

## Painel administrativo

O painel administrativo permite operar o jogo, moderar comunidade, corrigir abusos e acompanhar partidas.

## Funções admin do MVP

- Listar usuários.
- Ver perfil do usuário.
- Listar personagens.
- Listar clubes.
- Ver partidas.
- Ver cenas de partida.
- Ver decisões registradas.
- Ver denúncias.
- Suspender usuário.
- Banir usuário.
- Editar nomes ofensivos.
- Gerenciar cosméticos.
- Ver logs básicos.

## Sistema de denúncia

Jogadores podem denunciar:

- Ofensa.
- Nome impróprio.
- Abandono intencional.
- Trapaça.
- Combinação de resultado.
- Assédio.
- Spam.
- Abuso de cargo.

## Fluxo da denúncia

1. Usuário cria denúncia.
2. Sistema registra contexto.
3. Moderação analisa.
4. Admin aplica ação ou arquiva.
5. Ação fica registrada.

## Ações de moderação

- Aviso.
- Suspensão temporária.
- Banimento.
- Remoção de nome ofensivo.
- Remoção de clube ofensivo.
- Bloqueio de chat futuro.
- Restrição de criação de clube.

## Anti-trapaça

### Princípio

O servidor é a fonte da verdade.

O cliente nunca pode:

- Calcular resultado.
- Informar vencedor da cena.
- Alterar atributo.
- Alterar cansaço.
- Alterar XP.
- Criar estatística final.
- Definir gol.

O cliente só pode:

- Autenticar.
- Mostrar estado permitido.
- Enviar decisão válida dentro do tempo.

## Logs obrigatórios por cena

- match_id.
- scene_id.
- player_id.
- status online/offline.
- decisão enviada.
- tempo de resposta.
- decisão manual ou bot.
- penalidade aplicada.
- atributos usados no cálculo.
- resultado.
- timestamp.

## Riscos de trapaça

- Bot externo escolhendo decisões.
- Multi-conta.
- Combinação entre clubes.
- Farming de XP.
- Abandono intencional.
- Manipulação de presença.
- Exploração de bug de substituição.
- Exploração de timing.

## Proteções do MVP

- Autenticação obrigatória.
- Rate limit em ações críticas.
- Validação de participação na cena.
- Timer calculado no servidor.
- Resultado calculado no servidor.
- Logs completos de partida.
- Penalidade para offline.
- Histórico de ausências.
- Denúncia manual.
- Painel admin.

## Sinais suspeitos futuros

- Taxa de decisão perfeita anormal.
- Respostas sempre no mesmo milissegundo.
- Contas conectadas sempre do mesmo padrão.
- Jogadores que farmam contra os mesmos clubes.
- Clubes com resultados combinados.
- Abandono repetido em momentos específicos.
