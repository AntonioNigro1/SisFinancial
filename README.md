# SisFinancial

### Requisitos

#### Modulo de autenticação

- 1 - Login [x] [ ]
- 2 - Signin [x] [ ]

#### Modulo transações bancárias

- 3 - Base autenticada -> Carteira pessoal [x] [ ]
- 4 - Deposito [ ] [ ]
- 5 - Saque [ ] [ ]
- 6 - transferência [ ] [ ]
- 7 - reverter operações [ ] [ ]

O sistema é capaz de criar usuarios, permite deposito e saque da carteira, transferência entre usuarios e reversão de operações assim como apresenta o historico de operações realizadas.

## Deploy

O deploy inicial esta sendo feito através da vercel, foi automatizado com a integração github - vercel, assim utilizando gitflow quando é feito o pull request para a branch main (produção) é feito o deploy automático para o seguinte link [SisFinancial](https://sis-financial.vercel.app/app/login)

## Metodologia de Desenvolvimento

O projeto foi separado em módulos como descrito acima, primeiro esta sendo feito toda a parte visual e as validações locais do frontend, assim que o mesmo estiver completo, sera feito a API NEXTJS, e por fim a integração.

Esta sendo usado gitflow para o processo de desenvolvimento, assim é possível identificar cada commit/branch/pullrequest e o correlacionar a funcionalidade facilmente seguindo o seguinte modelo.

PREFIXO/NUMERO_MODULO-FUNCIONALIDADE_DESENVOLVIDA

lista de prefixos:

- fix: correções no sistema
- feat: inclusão de nova funcionalidade
- config: configurações de ambiente/build/deploy
- docs: alteração na documentação do projeto

Conforme o andamento do desenvolvimento esta documentação é atualizada e é feito o checkmark nos módulos que estão finalizados, assim, a primeira caixa simboliza a parte visual e a segunda a integração com a API NEXTJS.
