# WhatsApp Bot Project with Persistent Authentication

This project implements a WhatsApp bot using the `whatsapp-web.js` library, focusing on maintaining the user's session active between server restarts, thus eliminating the need to repeatedly scan the QR Code. The bot is capable of responding to simple messages and can be expanded to meet various automation and interaction needs via WhatsApp.

## Dashboard

- [ ]  Atributos do processo: Numero , CPF do cliente e estado atual ,histórico, notificações
- [ ]  

## **RFS (Requisitos funcionais)**

- [ ]  Deve ser possível cadastrar cliente.
- [ ]  Deve ser possível cadastrar processo.
- [ ]  Será possível relacionado um cliente para vários processos ( 1 - N ).
- [ ]  O cadastro do cliente deve ter nome, CPF e número do processos associados.
- [ ]  O cadastro do processo deve ter estados sobre em qual se encontra a situação atual.
- [ ]  Será possível visualizar todo o histórico nas alterações do estado.
- [ ]  Cada alteração será enviada por mensagem via whatsapp para o Nº do cliente associado ao processo
- [ ]  Deve haver um bot que envie mensagens sobre o estado atual do processo

## **RNFs (Requisitos não-funcionais)** :

- [ ]  A senha do usuário precisa estar criptografada;
- [ ]  Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ]  Todas listas de dados precisam estar paginadas com 20 itens por página;~~
- [ ]  O usuário deve ser identificado por um JWT (JSON Web Token);
- [ ]   