#Tareas:

● Diagrama de relaciones en Mongoose:

Se debe elaborar un diagrama que muestre cómo estarán relacionadas las
colecciones en Mongoose.
Se debe indicar si las relaciones serán embebidas o referenciadas (Population) y
justifica la elección de cada una.

● Implementación en Mongoose:

Desarrollar los esquemas y modelos en Mongoose siguiendo las decisiones tomadas
en los diagramas.
Incluir un modelo de autenticación de empleados para que puedan acceder a la
aplicación con credenciales.

#Contexto

Un comercio de suministros de limpieza requiere que cada uno de sus empleados pueda
registrar sus ventas de forma individual. Además, los empleados deben tener acceso a la
aplicación utilizando credenciales.

#Campos
employee:
-fullname: nombre y apellido del usuario
-email: que el email de cada empleado sea unico
-password: contraseña para ingresar ventas
sales:
-name_product: nombre del producto que se vendio
-price_product: el precio del producto
-date_sale: fecha de venta
-id_employee: relacion con el empleado

#Razon de la relacion:
●La relación entre los modelos Empleado y Venta es referenciada. Un empleado puede realizar múltiples ventas, pero cada venta está asociada a un solo empleado.
