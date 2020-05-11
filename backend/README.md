# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para recuperar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, e-mail e senha;

**RN**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha o usuário deve informar a senha antiga;
- Para atualizar sua senha o usuário deve confirmar a nova senha;


# Agendamento de serviçoes

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias disponiveis com pelo menos um hororaio de um prestador.
- O usuário deve poder listar os horários dísponiveis em um dia especifico de um prestador.
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente
- Os agendamentos deve estar disponivel entre 8h ás 18h (Primeiro ás 8h, último as 17h);
- O usuário não pode agendar em horário já ocupado;
- O usuário não pode agendar em um horário que ja passou;
- O usuário não pode agendar serviçoes consigo mesmo;

# Painel do prestador

**RF**

- O usuário deve poder listar os agendamentos de um dia especifico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia deve ser armazenados em cache.
- As notificações do prestador deve ser armazenada no MongoDB.
- As notificações do prestador deve ser enviadas em tempo-real utilizando Socket.io.

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;
