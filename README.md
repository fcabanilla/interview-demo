# Proyecto de Automatización con Playwright y POM

Este proyecto tiene como objetivo automatizar pruebas de interfaz de usuario (UI) para una "Practice Page" utilizando Playwright con TypeScript. Se implementa el patrón Page Object Model (POM) para lograr mayor modularidad, mantenibilidad y escalabilidad en las pruebas.

## Objetivos

- Automatizar pruebas UI de manera robusta y escalable.
- Implementar el patrón POM para separar responsabilidades.
- Integrar Allure para la generación de reportes detallados.

## Estructura del Proyecto

- **Capa de Objetos de Página (Page Objects):**

  - **BasePage:** Clase base para encapsular acciones comunes como la navegación.
  - **PracticePage:** Gestiona interacciones con elementos de la página, incluyendo:
    - Radio Buttons (seleccionados con atributos combinados).
    - Checkboxes (accedidos por su id).
    - Dropdown (`<select>` identificado por su id).
    - Alertas y confirmaciones (manejo de diálogos de JavaScript en Playwright).
    - Mouse Hover (para visualizar contenidos adicionales).
  - **TableHandler:** Maneja la extracción de datos de tablas a través de selectores específicos.
  - **PageObjectManager:** Centraliza la instancia de las páginas para facilitar la reutilización en los tests.

- **Capa de Pruebas (Tests):**
  - Los tests se encuentran en la carpeta `tests/demo` y utilizan los Page Objects para ejecutar escenarios de prueba.

## Integración con Allure

El proyecto utiliza Allure para generar reportes detallados:

- Se configura Allure en `playwright.config.ts` para recoger resultados en el directorio `allure-results`.
- Se utiliza `allure.step` en los métodos del POM para documentar cada acción significativa y facilitar el diagnóstico de errores en los reportes.

## Ejecución de Pruebas y Reportes

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
npx playwright test
```

Para generar y visualizar el reporte de Allure, ejecuta:

```bash
npx allure generate allure-results && npx allure open allure-report
```

## Resumen del Proyecto

1. **Objetivo y Alcance:**
   Automatización de pruebas UI para una "Practice Page" mediante Playwright y TypeScript, aplicando el patrón POM.

2. **Estructura del Proyecto:**

   - Page Objects: BasePage, PracticePage, TableHandler.
   - Tests ubicados en `tests/demo` y gestión centralizada con PageObjectManager.

3. **Integración con Allure:**
   Reportes detallados configurados mediante `playwright.config.ts` y uso de `allure.step`.

4. **Ventajas:**
   - Modularidad y mantenibilidad.
   - Reportes claros y detallados.
   - Reutilización de código para múltiples escenarios de prueba.

## Contexto

El proyecto fue inicialmente desarrollado como parte de una entrevista de trabajo y ahora se utiliza como parte del portfolio en GitHub, demostrando habilidades en automatización de pruebas y buenas prácticas en ingeniería de software.

## Requisitos

- Node.js
- npm
- Playwright
- Allure Commandline

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/fcabanilla/interview-demo
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura Playwright (si es necesario, ejecuta):

   ```bash
   npx playwright install
   ```

## Estructura de Directorios

- `/tests/demo`: Contiene los archivos de prueba.
- `/pages`: Contiene los Page Objects.
- `/allure-results`: Directorio generado para los resultados de Allure.
- `/allure-report`: Directorio generado para los reportes de Allure.

Aquí tienes el contenido modificado y completado:

---

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, por favor abre un issue para discutir los cambios importantes o envía un pull request con tus propuestas. Asegúrate de seguir las buenas prácticas de desarrollo, incluir pruebas y documentar adecuadamente tus cambios.

## Licencia

Este proyecto se distribuye bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.

## Contacto

Para consultas, sugerencias o colaboraciones, puedes contactarme a través de mi perfil de GitHub: [fcabanilla](https://github.com/fcabanilla) o enviarme un correo a [federico.cabanilla@gmail.com](mailto:federico.cabanilla@gmail.com).

## Página de Pruebas

Las pruebas fueron realizadas para la siguiente página web:  
[Practice Page](https://rahulshettyacademy.com/AutomationPractice/)
