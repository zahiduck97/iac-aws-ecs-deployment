# 🖥 Backend Node.js - DevOps Seed Project

Este repositorio contiene el código fuente del backend de la aplicación desplegada sobre AWS ECS Fargate.

---

## 🚀 Flujo de despliegue

1️⃣ Código versionado en GitHub  
2️⃣ Build automático vía **GitHub Actions**:
- Construcción de imagen Docker
- Push a Amazon ECR

3️⃣ Despliegue indirecto al ECS Fargate vía:
- Nueva Task Definition
- Actualización de servicio ECS

*El proceso de infraestructura (ECS, ALB, VPC, etc) es gestionado en el repositorio de [Infraestructura IaC](https://github.com/zahiduck97/iac-aws-infrastructure)*

---

## 🛠 Tecnologías usadas

- Node.js 18+
- Docker
- GitHub Actions
- Amazon ECR
- Amazon ECS Fargate (Infraestructura gestionada externamente vía Terraform)

---

## 🔧 Variables sensibles

Las variables AWS Access Key / Secret están gestionadas como secrets en GitHub Actions.

---

## 🏗 Flujo CI/CD

- Build de imagen: `docker build`
- Push: `docker push` hacia ECR
- Registro de nueva Task Definition
- Despliegue sobre ECS Fargate

---

## 🔗 Autor

Zahid - [GitHub](https://github.com/zahiduck97)
