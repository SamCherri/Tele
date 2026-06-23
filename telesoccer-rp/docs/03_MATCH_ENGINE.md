# 03 — Motor de Partida

## Princípio central

A partida é 11vs11, mas as decisões acontecem por cenas envolvendo poucos jogadores diretamente relacionados ao lance.

A partida completa tem 22 jogadores titulares em campo, goleiros reais, reservas disponíveis e técnico comandando substituições. Porém, em cada cena, o sistema chama apenas os jogadores relevantes.

## Tempo da partida

- Relógio do jogo: 90 minutos.
- Primeiro tempo: 45 minutos.
- Segundo tempo: 45 minutos.
- Duração real: cerca de 30 minutos.
- Intervalo: 1 a 2 minutos reais.
- Timer por cena: 15 segundos.

O relógio do jogo avança por eventos relevantes, não segundo a segundo.

## Exemplo de avanço de relógio

- 00:00 — Início.
- 03:20 — Saída de bola trabalhada.
- 07:10 — Disputa no meio.
- 12:45 — Ataque pela ponta.
- 18:30 — Finalização.
- 26:15 — Falta perigosa.
- 33:00 — Defesa do goleiro.
- 45:00 — Fim do primeiro tempo.

## Status de presença

| Status | Decisão | Penalidade |
|---|---|---:|
| Online e respondeu | Player real | 0% |
| Online e não respondeu em 15s | Bot temporário | -15% na cena |
| Offline | Bot automático | -30% na cena |
| Caiu da partida | Bot automático | -30% até voltar |
| Voltou durante a partida | Player reassume | 0% nas próximas cenas |

## Regra de bot offline

Se um player estiver offline, o personagem continua em campo controlado por bot. O bot sofre penalidade de 30% nos atributos efetivos.

Fórmula:

```txt
atributo_efetivo = atributo_original * 0.70
```

## Regra de não resposta

Se o player está online, mas não responde em até 15 segundos, o sistema escolhe uma decisão automática para aquela cena e aplica penalidade de 15%.

Fórmula:

```txt
atributo_efetivo = atributo_original * 0.85
```

## Camadas do motor

### 1. Simulação macro

Controla:

- Tempo de jogo.
- Placar.
- Posse de bola.
- Zona do campo.
- Formação.
- Cansaço.
- Postura tática.
- Pressão.
- Escolha da próxima cena.
- Jogadores envolvidos.

### 2. Cena micro

Controla:

- Jogador com a bola.
- Marcador direto.
- Apoio ofensivo, se houver.
- Cobertura defensiva, se houver.
- Goleiro, se for finalização.
- Decisões disponíveis.
- Timer.
- Cálculo do resultado.
- Narração.
- Estatísticas.

## Tipos de cena do MVP

### Construção

- Zagueiro saindo jogando.
- Volante recebendo sob pressão.
- Meia procurando passe.

### Duelo de ponta

- Ponta contra lateral.
- Opções: driblar, cruzar, cortar para dentro, tocar, proteger.

### Disputa no meio

- Meia contra volante.
- Opções: tocar, lançar, driblar, proteger, chutar de longe.

### Finalização

- Atacante contra zagueiro/goleiro.
- Opções: chutar forte, chutar colocado, driblar goleiro, tocar, cabecear.

### Defesa do goleiro

- Goleiro decide contra chute, cruzamento, 1v1, pênalti ou rebote.

### Bola parada simples

- Escanteio.
- Falta lateral.
- Falta frontal.
- Pênalti.

## Decisões do atacante

- Driblar.
- Chutar.
- Cruzar.
- Tocar.
- Proteger a bola.
- Lançar.
- Cortar para dentro.
- Cabecear.

## Decisões do defensor

- Dar bote.
- Cercar.
- Fechar chute.
- Fechar passe.
- Fechar cruzamento.
- Dar carrinho.
- Recuar linha.
- Pressionar.

## Decisões do goleiro

### Contra chute

- Saltar no canto esquerdo.
- Saltar no canto direito.
- Ficar centralizado.
- Espalmar.
- Tentar encaixar.

### Contra cruzamento

- Sair no cruzamento.
- Ficar na linha.
- Socar a bola.
- Tentar encaixar.
- Fechar primeiro pau.

### Reposição

- Passe curto.
- Lançamento longo.
- Bola no lateral.
- Bola no volante.
- Chutão seguro.

## Matriz base de vantagem

| Ação ofensiva | Ação defensiva | Vantagem inicial |
|---|---|---|
| Chutar | Fechar chute | Defensor |
| Chutar | Fechar passe | Atacante |
| Driblar | Fechar chute | Atacante |
| Driblar | Cercar | Defensor leve |
| Driblar | Dar bote | Disputa direta |
| Cruzar | Fechar cruzamento | Defensor |
| Cruzar | Fechar chute | Atacante |
| Tocar | Fechar passe | Defensor |
| Tocar | Dar bote | Atacante leve |
| Proteger | Dar bote | Atacante leve |
| Proteger | Cercar | Lance desacelera |

## Fórmula conceitual

```txt
pontuacao =
  atributo_principal
+ atributo_secundario * 0.50
+ atributo_mental * 0.30
+ bonus_decisao
+ bonus_contexto
+ bonus_entrosamento
+ bonus_moral
- penalidade_cansaco
- penalidade_improviso
- penalidade_bot
+ sorte_controlada
```

## Sorte controlada

A sorte existe para gerar imprevisibilidade, mas não deve mandar no jogo.

Recomendação inicial:

```txt
sorte_controlada = número entre -5 e +5
```

A decisão correta e os atributos devem pesar mais que a sorte.

## Resultado da cena

Cada cena gera:

- Vencedor do duelo.
- Narração textual.
- Atualização da posse.
- Atualização da zona do campo.
- Alteração de cansaço.
- Estatísticas individuais.
- Possível falta/cartão.
- Possível finalização/gol.
- Registro no histórico.

## Estatísticas mínimas

Jogador de linha:

- Gols.
- Assistências.
- Passes certos.
- Passes errados.
- Dribles tentados.
- Dribles certos.
- Desarmes.
- Faltas cometidas.
- Finalizações.
- Finalizações no alvo.
- Cenas vencidas.
- Cenas perdidas.

Goleiro:

- Defesas.
- Defesas difíceis.
- Gols sofridos.
- Saídas do gol certas.
- Saídas do gol erradas.
- Reposições certas.
- Pênaltis defendidos.

## Segurança

- Cliente só envia decisão.
- Cliente nunca envia resultado.
- Servidor valida cena, jogador, tempo e decisão.
- Servidor calcula e grava resultado.
- Logs de decisão devem ser preservados.
