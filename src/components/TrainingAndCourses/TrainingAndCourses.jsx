import React from 'react'
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const TrainingAndCourses = () => {
    return (
        <section className='pb-4 pt-2 px-3 bg-[#FFF] lg:px-24'>
            <h2 className='text-[#173e49] text-center text-2xl py-4 md:text-3xl'>Capacitación y cursos</h2>
            <div className=' space-y-5'>
                <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="accordion-title">
                        <p>Curso de Acompañante Terapéutico</p>
                    </div>
                    <div className="collapse-content space-y-5 text-[#101010] text-sm">
                        <p>El Rol del acompañante terapéutico.</p>
                        <p>Marco legal.</p>
                        <p>Psicopatología y psicofarmacología.</p>
                        <p>Acompañamiento terapéutico en niños, adolescentes, adultos y tercera edad.</p>
                        <p>Marco conceptual: Trastorno Mental severo, Trastorno por consumo de sustancias, discapacidad Intelectual.</p>
                        <p>Articulación con Familia.</p>
                        <p>Articulación con Instituciones y dispositivos de Rehabilitación Psicosocial.</p>
                        <p>Confección y elaboración de Informes.</p>
                        <p>Trabajo de Campo, casos clínicos.</p>
                        <p>Manejo de contingencias, urgencias y emergencias.</p>
                        <div className=' flex justify-start '>
                            <Link to='/contact' className=' contact-button'>
                                <MdEmail className='text-xl mr-2'></MdEmail>
                                Contactar para más información
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" />
                    <div className="accordion-title">
                        <p>Curso de Operador Terapéutico especializado en Salud Mental</p>
                    </div>
                    <div className="collapse-content space-y-5 text-[#101010] text-sm">
                        <p>La Salud Mental y su Marco Normativo.</p>
                        <p>Derechos de los pacientes.</p>
                        <p>Dispositivos de rehabilitación e inclusión psicosocial comunitaria.</p>
                        <p>El rol y la función del operador terapéutico en los diferentes dispositivos de rehabilitación psicosocial.</p>
                        <p>Aspectos conceptuales del abordaje del usuario con problemáticas relacionadas a la salud mental y discapacidad intelectual.</p>
                        <p>Psicopatología y psicofármacos.</p>
                        <p>Noción de apoyos.</p>
                        <p>Abordaje interdisciplinario.</p>
                        <p>Manejo de crisis y contingencias.</p>
                        <p>Trabajo de campo.</p>
                        <div className=' flex justify-start '>
                            <Link to='/contact' className=' contact-button'>
                                <MdEmail className='text-xl mr-2'></MdEmail>
                                Contactar para más información
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" />
                    <div className="accordion-title">
                        <p>Programa de capacitación en Dispositivos Residenciales de Rehabilitación Psicosocial destinado a Profesionales de la Salud Mental</p>
                    </div>
                    <div className="collapse-content space-y-5 text-[#101010] text-sm">
                        <p>El Dispositivo Residencial (DR) en Salud Mental.</p>
                        <p>Inserción de DR en el Sistema de salud.</p>
                        <p>Marco jurídico de los DR.</p>
                        <p>Redes y Modelos de Atención Sociocomunitaria.</p>
                        <p>Funcionamiento Institucional.</p>
                        <p>Equipo interdiciplinario.</p>
                        <p>Articulación con otros dispositivos de rehabilitación.</p>
                        <p>Recorrido del Usuario en el DR. Confección y desarrollo del Programa Individualizado de Rehabilitación.</p>
                        <p>Articulación con Operadores terapéuticos, rol y función.</p>
                        <p>Elementos conceptuales de abordaje terapéutico de usuarios con TMS.</p>
                        <p>Proyectos de egreso asistido: empleo con apoyo, inclusión en emprendimientos sociales, inclusión laboral. </p>
                        <p>Abordaje familiar.</p>
                        <p>Elaboración de Informes.</p>
                        <div className=' flex justify-start '>
                            <Link to='/contact' className=' contact-button'>
                                <MdEmail className='text-xl mr-2'></MdEmail>
                                Contactar para más información
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" />
                    <div className="accordion-title">
                        <p>Asesoramiento y capacitación en la creación y gestión de Dispositivos Residenciales destinado a instituciones y organizaciones de salud</p>
                    </div>
                    <div className="collapse-content space-y-5 text-[#101010] text-sm">
                        <p>Asesoramiento en la creación y gestión de los dispositivos según requerimiento de apoyos: bajo, mediano y alto.</p>
                        <p>Planificación de Recursos físicos y humanos necesarios.</p>
                        <p>Marco Administrativo.</p>
                        <p>Marco legal.</p>
                        <p>Perfil de los profesionales.</p>
                        <p>Perfil de inclusión de los usuarios según dispositivo.</p>
                        <p>Elaboración del Proyecto Institucional.</p>
                        <p>Elaboración de Procedimientos y Protocolos de Actuación.</p>
                        <p>Articulación con organismos intervinientes judiciales y extrajudiciales.</p>
                        <p>Manejo de contingencias.</p>
                        <div className=' flex justify-start '>
                            <Link to='/contact' className=' contact-button'>
                                <MdEmail className='text-xl mr-2'></MdEmail>
                                Contactar para más información
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default TrainingAndCourses