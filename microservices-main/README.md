# Projeto de Microserviços com Spring Boot, Eureka e Gateway

Este é um projeto de microserviços utilizando o Spring Boot como framework principal, Eureka para o registro e descoberta de serviços, e um Gateway para roteamento e controle de tráfego. Além disso, há um pacote comum chamado "common" que contém funcionalidades compartilhadas entre os microserviços.

## Estrutura do Projeto

```plaintext
microservices-project
│
├── service1
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com.example.service1
│   │   │   │       └── Service1Application.java
│   │   └── resources
│   │       └── application.properties
│
├── service2
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com.example.service2
│   │   │   │       └── Service2Application.java
│   │   └── resources
│   │       └── application.properties
│
├── eureka-server
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com.example.eurekaserver
│   │   │   │       └── EurekaServerApplication.java
│   │   └── resources
│   │       └── application.properties
│
├── gateway
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com.example.gateway
│   │   │   │       └── GatewayApplication.java
│   │   └── resources
│   │       └── application.properties
│
└── README.md
```

## Descrição dos Módulos

- **common**: Este módulo contém classes utilitárias, modelos comuns, ou qualquer código que seja compartilhado entre os microserviços.

- **service1** e **service2**: São os microserviços principais que podem depender do módulo comum. Cada um deles é um serviço independente com sua própria lógica de negócios.

- **eureka-server**: É o servidor Eureka que atua como um serviço de descoberta para os microserviços. Eles se registram no Eureka Server durante a inicialização e podem descobrir outros serviços registrados.

- **gateway**: Este é o gateway que gerencia o roteamento do tráfego para os microserviços. Ele também pode incluir lógica adicional, como autenticação e autorização.

## Inicializando o Projeto

1. Inicie o Eureka Server executando `EurekaServerApplication.java` no módulo `eureka-server`.

2. Inicie os microserviços `Service1Application.java` e `Service2Application.java` nos módulos `service1` e `service2` respectivamente.

3. Inicie o Gateway executando `GatewayApplication.java` no módulo `gateway`.

Certifique-se de ajustar as configurações nos arquivos `application.properties` de cada módulo conforme necessário.

## Acesso aos Serviços

- **Eureka Server**: [http://localhost:8761/](http://localhost:8761/)
- **Service1**: [http://localhost:8081/](http://localhost:8081/)
- **Service2**: [http://localhost:8082/](http://localhost:8082/)
- **Gateway**: [http://localhost:8080/](http://localhost:8080/)

Lembre-se de que essas são as portas padrão e podem ser alteradas nas configurações do `application.properties` de cada módulo.

Este é um esboço básico para começar um projeto de microserviços com Spring Boot, Eureka e Gateway. Certifique-se de personalizar e expandir conforme necessário para atender aos requisitos específicos do seu projeto.