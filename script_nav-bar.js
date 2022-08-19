
function navInicio(){
    document.getElementById('inicio').className="menu-inicio menu-bar_focus";
    document.getElementById('proximas').className="menu-inicio";
    document.getElementById('cultivos').className="menu-inicio";
    document.getElementById('campos').className="menu-inicio";
    document.getElementById('perfil').className="menu-inicio";
    setTimeout(() => {
        return(
            ReactDOM.render(
                <div className="ventana_inicio">
                    <div className="return-button">
                        <img className="return-button-img" src="images/return.svg"/>
                    </div>
                    <p className="inicio_bienvenida">Bienvenido a la plataforma
                    de la finca Experimental profesor André Vloebergh</p>
                    <div className="inicio_iconos">
                        <div className="inicio_icono-boton" onclick="navCultivos()">
                            <img className="img-comun" src='images/add.svg' alt="Add-Icon"/>
                            <p>Añadir cultivo</p>
                        </div>
                        <div className="inicio_icono-boton">
                            <img className="img-comun" src='images/book.svg' alt="Book-Icon"/>
                            <p>Ver cultivos</p>
                        </div>
                        <div className="inicio_icono-boton">
                            <img className="img-comun" src='images/users.svg' alt="Users-Icon"/>
                            <p>Administrar perfiles</p>
                        </div>
                    </div>
                </div>,
                document.getElementById('root'))
            );
    }, 150);
    
}

function navProximas(){
    document.getElementById('inicio').className="menu-inicio";
    document.getElementById('proximas').className="menu-inicio menu-bar_focus";
    document.getElementById('cultivos').className="menu-inicio";
    document.getElementById('campos').className="menu-inicio";
    document.getElementById('perfil').className="menu-inicio";
    setTimeout(() => {
        return(
        ReactDOM.render(
            <div>
                <p className="titulo_proximas_actividades">
                    Estas son las próximas actividades a realizar en la finca, de todos los campos y cultivos
                </p>
                <div className="return-button">
                    <img className="return-button-img" src="images/return.svg"/>
                </div>
                <div className="lista_proximas_actividades"> 
                        <ul className="encabezado_actividades">
                            <li>Actividad</li>
                            <li>Cultivo</li>
                            <li>Campo</li>
                            <li>Fecha programada</li>
                            <li>Responsable</li> 
                        </ul>
                        <ul className="actividad">
                            <li>Fertilizacion</li>
                            <li>Maíz</li>
                            <li>2 Este</li>
                            <li>28/11/2022</li>
                            <li>No asignado</li>
                        </ul>
                        <div className="linea_horizontal"></div>
                        {/* El c[odigo encerrado en estos comentarios es relleno] */}
                        <ul className="actividad">
                            <li>Cruce con rasta transversa mediana</li>
                            <li>Yautía</li>
                            <li>2 Oeste </li>
                            <li>29/11/2022</li>
                            <li>No asignado</li>
                        </ul>
                        <div className="linea_horizontal"></div>
                        <ul className="actividad">
                            <li>Fumigación bombeada</li>
                            <li>Yuca</li>
                            <li>4 Norte</li>
                            <li>30/11/2022</li>
                            <li>No asignado</li>
                        </ul>
                        <div className="linea_horizontal"></div>
                        <ul className="actividad">
                            <li>Mureo</li>
                            <li>Maíz</li>
                            <li>4 Norte</li>
                            <li>30/11/2022</li>
                            <li>No asignado</li>
                        </ul>
                        <div className="linea_horizontal"></div>
                        <ul className="actividad">
                            <li>Riego</li>
                            <li>Sandia</li>
                            <li>6</li>
                            <li>30/11/2022</li>
                            <li>No asignado</li>
                        </ul>
                        <div className="linea_horizontal"></div>
                        <ul className="actividad">
                            <li>Arado</li>
                            <li>Piña</li>
                            <li>4 Norte</li>
                            <li>30/11/2022</li>
                            <li>No asignado</li>
                        </ul>
                        <div className="linea_horizontal"></div>
                        {/* Fin de relleno */}
                </div>
            </div>,
        document.getElementById('root'))
        )}
        , 150);
}

function navCultivos(){
    document.getElementById('inicio').className="menu-inicio";
    document.getElementById('proximas').className="menu-inicio";
    document.getElementById('cultivos').className="menu-inicio menu-bar_focus";
    document.getElementById('campos').className="menu-inicio";
    document.getElementById('perfil').className="menu-inicio";
    setTimeout(() => {
    return(
        ReactDOM.render(
            <div>
                <div className="return-button">
                    <img className="return-button-img" src="images/return.svg"/>
                </div>
                <div className="seccion_cultivos">
                    <div className="seccion_cultivos_btn-agregar">
                        <img className="img-comun" src='images/add.svg' alt="Add-Icon"/>
                        <p>Añadir cultivo</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>,
        document.getElementById('root'))
    )
    }, 150);
}

function navCampos(){
    document.getElementById('inicio').className="menu-inicio";
    document.getElementById('proximas').className="menu-inicio";
    document.getElementById('cultivos').className="menu-inicio";
    document.getElementById('campos').className="menu-inicio menu-bar_focus";
    document.getElementById('perfil').className="menu-inicio";
    setTimeout(() => {
    return(
        ReactDOM.render(
            <div>
                <div className="return-button">
                    <img className="return-button-img" src="images/return.svg"/>
                </div>
            </div>,
        document.getElementById('root'))
    )
    }, 150);
}

function navPerfil(){
    document.getElementById('inicio').className="menu-inicio";
    document.getElementById('proximas').className="menu-inicio";
    document.getElementById('cultivos').className="menu-inicio";
    document.getElementById('campos').className="menu-inicio";
    document.getElementById('perfil').className="menu-inicio  menu-bar_focus";
    setTimeout(() => {
    return(
        ReactDOM.render(
            <div>
                <div className="return-button">
                    <img className="return-button-img" src="images/return.svg"/>
                </div>
            </div>,
        document.getElementById('root'))
    )
    }, 150);
}
navInicio();