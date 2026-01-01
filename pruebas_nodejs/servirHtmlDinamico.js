const express = require('express');
const app = express();

// 1. Decirle a Express que use EJS
app.set('view engine', 'ejs');

app.get('/usuario/:nombre', (req, res) => {
    const nombreUsuario = req.params.nombre;
    
    // Simulamos datos que podrían venir de una base de datos
    const datosParaLaVista = {
        nombre: nombreUsuario,
        rol: "Desarrollador Fullstack",
        habilidades: ['Node.js', 'Express', 'EJS', 'JavaScript']
    };

    // 2. Usar res.render en lugar de sendFile
    // No hace falta poner "views/perfil.ejs", Express ya sabe dónde buscar
    res.render('perfil', datosParaLaVista);
});

app.listen(3000, () => {
    console.log("Servidor dinámico en http://localhost:3000/usuario/TuNombre");
});