# 🖥 Backend Node.js - DevOps Seed Project

Este repositorio contiene el código fuente del backend de la aplicación desplegada sobre **AWS ECS Fargate**, utilizando una arquitectura serverless con **CloudFront** y dominio personalizado.

---

## 🚀 Flujo de despliegue

1️⃣ Código versionado en GitHub  
2️⃣ Build automático vía **GitHub Actions**:
- Construcción de imagen Docker  
- Push a Amazon ECR  

3️⃣ Despliegue al ECS Fargate vía:
- Nueva Task Definition  
- Actualización de servicio ECS  

4️⃣ Actualización automática del DNS:
- **Workflow adicional** actualiza el registro `ecs-origin.projects-zahid.com` con la nueva IP pública de ECS  
- **CloudFront** usa este subdominio como origen estable para servir el backend con **HTTPS**  

*El proceso de infraestructura (ECS, VPC, CloudFront, Route 53, ACM) es gestionado en el repositorio de [Infraestructura IaC](https://github.com/zahiduck97/iac-aws-infrastructure).*

---

## 🛠 Tecnologías usadas

- Node.js 18+  
- Docker  
- GitHub Actions (Build + Deploy + Update DNS)  
- Amazon ECR  
- Amazon ECS Fargate  
- Amazon Route 53 + ACM (Certificado SSL)  
- Amazon CloudFront (Distribución global + HTTPS)  

---

## 🔧 Variables sensibles

Las variables AWS Access Key / Secret están gestionadas como **secrets** en GitHub Actions.

---

## 🏗 Flujo CI/CD

- **Build de imagen:** `docker build`  
- **Push:** `docker push` hacia ECR  
- **Registro de nueva Task Definition**  
- **Despliegue sobre ECS Fargate**  
- **Actualización automática del registro DNS** (`ecs-origin.projects-zahid.com`) para mantener el origen actualizado en CloudFront.

---


## 🔗 Autor

Zahid - [GitHub](https://github.com/zahiduck97)
