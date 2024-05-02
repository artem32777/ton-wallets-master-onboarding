# mycontract

Онбординг проект по доке https://tonhelloworld.com/01-wallet/

-   `npm run start` - далее выбираем исполняемый файл
-   `deployFirstContract` - создаёт интерфейс деплоя нового контракта, который нужно активировать с помощью одного из тон-кошельков на выбор
-   `addingCounter` - создаёт транзакцию на данный контракт и ещё отправляет сообщение, которое увеличивает тестовый счётчик на +5
-   `gettingCouter` - показывает текущее значение тестового счётчика

# Офф.ридми:
## Project structure

-   `contracts` - source code of all the smart contracts of the project and their dependencies.
-   `wrappers` - wrapper classes (implementing `Contract` from ton-core) for the contracts, including any [de]serialization primitives and compilation functions.
-   `tests` - tests for the contracts.
-   `scripts` - scripts used by the project, mainly the deployment scripts.

## How to use

### Build

`npx blueprint build` or `yarn blueprint build`

### Test

`npx blueprint test` or `yarn blueprint test`

### Deploy or run another script

`npx blueprint run` or `yarn blueprint run`

### Add a new contract

`npx blueprint create ContractName` or `yarn blueprint create ContractName`
