# Documentacion tecnica de cambios

Fecha: 2026-08-16  
Colaborador: Gabriel Cuello

## Alcance
Este documento resume cambios implementados en frontend, UX de contacto, navegacion, SEO base y contenido comercial.

## Cambios implementados

### Navegacion y header
- Navbar fija sobre viewport con jerarquia visual estable.
- Se retiro el montaje de navbar dentro del wrapper absoluto del slider.
- Ajustes de contraste en header (fondo translucido y blur) para lectura sobre imagen.
- Ajuste de altura de logo para evitar desborde visual.
- Menu mobile con scroll interno cuando el contenido supera la altura disponible.
- CTA de agenda disponible tambien en mobile.

Archivos:
- src/Components/NavBar.tsx
- src/Components/ui/ImagesSlider.tsx

### Contacto centralizado por WhatsApp
- Reemplazo progresivo de flujos dependientes de mailto por WhatsApp contextual.
- Implementacion de modal reutilizable para capturar nombre y contexto antes de abrir WhatsApp.
- Boton flotante actualizado para solicitar nombre previo y enviar mensaje contextual.
- CTA de planes y servicios conectados a mensajes con contexto.
- CTA de "Trabaja con nosotros" migrado a WhatsApp.
- Formulario de contacto configurado para convertir datos ingresados en mensaje de WhatsApp.

Archivos:
- src/Components/WhatsAppLeadModal.tsx
- src/Components/WhatsAppButton.tsx
- src/Components/Plans.tsx
- src/Components/PlanCard.tsx
- src/Components/Services.tsx
- src/Components/Contact.tsx
- src/Components/TrabajaConNosotros.tsx

### Planes: limpieza de precio en UI y contenido
- Eliminacion de texto de estado "Proximamente" en cards de planes.
- Eliminacion del render de linea `pricing` dentro del modal de plan.
- Eliminacion de prop `pricing` en la interfaz y en el uso del componente `PlanCard`.
- Limpieza de referencias monetarias en ES y EN (USD, desde/from USD, montos explicitos).

Archivos:
- src/Components/PlanCard.tsx
- src/Components/Plans.tsx
- src/translation/es/global.json
- src/translation/en/global.json

### Modales funcionales agregados
- Modal de agenda con captura de nombre, dia preferido y franja horaria.
- Modal de contacto por WhatsApp reutilizable en secciones clave.
- Modal de redes en seccion "Mas de mi".
- Modal legal desde footer.
- Modal de formulario de contacto.

Archivos:
- src/Components/WhatsAppLeadModal.tsx
- src/Components/LegalModal.tsx
- src/Components/ContactFormModal.tsx
- src/Components/AboutMe.tsx
- src/Components/Footer.tsx

### Footer, enlaces y consistencia de salida
- Footer con derechos reservados clickeables y acceso a modal legal.
- Correccion de enlaces de redes y ajustes de consistencia de contacto.
- Sustitucion de enlace de correo del footer por canal de WhatsApp.

Archivos:
- src/Components/Footer.tsx
- src/Components/AboutMe.tsx

### SEO tecnico base
- Definicion de idioma inicial del documento.
- Alta de meta description, author, robots y canonical.
- Alta de metadatos Open Graph y Twitter Card.
- Alta de datos estructurados JSON-LD (ProfessionalService).
- Alta de archivos de rastreo e indexacion.

Archivos:
- index.html
- public/robots.txt
- public/sitemap.xml

## Estado tecnico verificado
- Archivos modificados sin errores de TypeScript/JSON en la validacion de cambios aplicada.
- Sin coincidencias activas de cadenas monetarias en src para USD/desde USD/from USD/Proximamente.

## Firma
Gabriel Cuello
