# Squadra Soccer — Protótipo focado no jogador

Protótipo responsivo em HTML, CSS e JavaScript, com navegação mobile-first e identidade laranja, preto e branco da Squadra Soccer.

## Escopo desta versão

- Jogador: dashboard, evolução técnica, avaliação física, histórico, metas numéricas, feedbacks e privacidade.
- Perfil: nome fixo, apelido, foto, data de nascimento e idade calculada.
- Horários: grade informativa separada por nove unidades, sem confirmação, reserva ou registro de participação.
- Menus independentes: Squadra Cup, Squadra Experience, ranking, enquetes e produtos.
- Professor: jogadores, pendências e avaliação mensal em três etapas.
- Gestão: cobertura das avaliações, feedbacks identificados, enquetes e interesses.

## Avaliações

- Técnica: passe, domínio, condução, drible, finalização, marcação, posicionamento, visão, decisão e jogo coletivo.
- Escala de 1 a 5, com a opção “não observado”.
- Física mensal: peso, força medida pelo dinamômetro em kgf e explosão medida pelo tempo no percurso de corrida Squadra.
- O jogador pode definir metas numéricas próprias para força e tempo de explosão.
- Peso é privado e não entra no ranking.
- Não existe uma nota geral única; os indicadores são apresentados separadamente.

## Squadra Experience e produtos

- O Experience representa um projeto separado, com time, treinos dedicados, amistosos e campeonatos.
- O aplicativo registra somente a manifestação de interesse.
- Produtos também funcionam como catálogo de interesse, com tamanho, cor e quantidade.
- Não existe cobrança ou pagamento dentro do protótipo.

## Feedbacks, enquetes e ranking

- O jogador escolhe entre feedback do professor e feedback da gestão/Squadra geral.
- O feedback é identificado para a gestão e anonimizado quando apresentado ao professor.
- A gestão identifica quem participou das enquetes; jogadores veem o resultado agregado.
- O ranking considera evolução, metas e experiências. Peso e dados sensíveis não pontuam.

## Abrir localmente

Abra `dist/index.html` no navegador. Não há instalação nem etapa de build.

## Limites do protótipo

Os dados são fictícios e ficam no `localStorage` do navegador. Não há backend, autenticação real, notificações, inscrição confirmada, reserva de treino ou processamento financeiro. O seletor de perfis existe somente para demonstrar as experiências de Jogador, Professor e Gestão.

As informações esportivas, critérios de avaliação, unidades, horários, regulamento do Cup e formato do Experience devem ser validados pela Squadra antes da implementação de produção.

## Verificação

Foram executadas verificação de sintaxe JavaScript, integridade das referências locais e validação do pacote estático. A interface foi preparada para celular, tablet e desktop.
