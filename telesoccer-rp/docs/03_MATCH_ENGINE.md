# 03 — Motor de Partida

## Sistema de cenas

A partida será dividida em cenas visuais. Cada cena representa uma situação de futebol, como passe, drible, chute, cruzamento, defesa, goleiro ou bola parada.

O objetivo do MVP é simular decisões importantes, e não controlar cada movimento do jogador em campo.

## Decisões simultâneas

Quando uma cena começa, os jogadores envolvidos recebem opções de decisão. As decisões são enviadas ao servidor e processadas em conjunto.

Exemplos:

- Um meia decide entre passe curto, passe em profundidade ou drible.
- Um zagueiro decide entre bote, contenção ou cobertura.
- Um goleiro decide entre sair do gol, ficar posicionado ou fechar ângulo.

## Timer de 15 segundos

Cada cena terá 15 segundos para decisão. Ao final do tempo, o servidor processa a cena com as respostas recebidas.

Se um jogador não responder dentro do prazo, o servidor assume uma decisão de bot temporário.

## Jogador offline como bot com -30%

Se o jogador estiver offline no momento da cena, o servidor deve usar um bot com penalidade de -30% nos cálculos relacionados ao personagem.

Essa regra reduz abandono sem remover o jogador da partida automaticamente.

## Jogador sem resposta como bot com -15%

Se o jogador estiver online, mas não responder em até 15 segundos, o servidor deve usar um bot temporário com penalidade de -15%.

Essa penalidade é menor que a do offline porque o jogador ainda está presente, mas falhou em tomar a decisão no tempo da cena.

## Servidor autoritativo

O cliente nunca deve calcular o resultado da partida. O cliente apenas:

- Mostra a cena.
- Mostra opções disponíveis.
- Envia a decisão do jogador.
- Recebe o resultado calculado pelo servidor.

O servidor deve ser a fonte da verdade para:

- Resultado de cenas.
- Atributos usados.
- Penalidades.
- Placar.
- Estatísticas.
- Logs de auditoria.

## Exemplo de cálculo conceitual

Exemplo simples de uma cena de drible:

1. Atacante escolhe driblar.
2. Defensor escolhe dar bote.
3. Servidor coleta atributos relevantes, como drible, técnica, marcação e desarme.
4. Servidor aplica modificadores de condição, contexto e presença online.
5. Se algum jogador estiver offline, aplica -30%.
6. Se algum jogador online não respondeu, aplica -15%.
7. Servidor calcula uma chance ponderada e define o resultado.
8. Resultado gera nova cena: avanço, falta, perda de bola ou manutenção da posse.

Este exemplo é conceitual. A fórmula final será definida durante a implementação do motor.

## Tipos de cena

- **Passe:** troca de bola, passe curto, lançamento ou passe em profundidade.
- **Drible:** confronto direto entre atacante e defensor.
- **Chute:** finalização de curta, média ou longa distância.
- **Cruzamento:** bola lançada na área para disputa ofensiva e defensiva.
- **Defesa:** ações de marcação, interceptação, cobertura e desarme.
- **Goleiro:** posicionamento, defesa, saída do gol e reação a chutes.
- **Bola parada:** falta, escanteio, pênalti e lateral em zonas importantes.
