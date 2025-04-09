import React, { useEffect, useState } from "react";
import axios from 'axios'
import './styles.css'

const ModalProfessores = ({
  isOpen,
  onClose,
  professorSelecionado,
  up,
  setUp
}) => {
  if (!isOpen) return null

  const [id, setId] = useState(professorSelecionado?.id || '')
  const [ni, setNi] = useState(professorSelecionado?.ni || '')
  const [nome, setNome] = useState(professorSelecionado?.nome || '')
  const [email, setEmail] = useState(professorSelecionado?.email || '')
  const [cel, setCel] = useState(professorSelecionado?.cel || '')
  const [ocup, setOcup] = useState(professorSelecionado?.ocup || '')
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (professorSelecionado) {
      setId(professorSelecionado.id || '')
      setNi(professorSelecionado.ni || '')
      setNome(professorSelecionado.nome || '')
      setEmail(professorSelecionado.email || '')
      setCel(professorSelecionado.cel || '')
      setOcup(professorSelecionado.ocup || '')
    } else {
      setId('')
      setNi('')
      setNome('')
      setCel('')
      setEmail('')
      setOcup('')
    }
  }, [])

  const upDate = async () => {
    console.log("Professor email: ", professorSelecionado)
    debugger
    const response = await axios.put(`http://127.0.0.1:8000/api/professores`,
      {
        ni: professorSelecionado.ni,
        nome: professorSelecionado.nome,
        email: professorSelecionado.email,
        cel: professorSelecionado.cel,
        ocup: professorSelecionado.ocup
      }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    )
    console.log("Response: ", response.data)
    onClose()
    setUp(!up)

  }

  const newTeacher = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/professores',
        {
          ni: ni,
          nome: nome,
          email: email,
          cel: cel,
          ocup: ocup
        }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      onClose()
      setUp(!up)
    } catch (error) {

    }

  }

  const handleSubmit = () => {
    console.log("Professor S: ", professorSelecionado)
debugger
    // e.preventDefault();
    
    if (professorSelecionado) {
      upDate()
    } else {
      newTeacher()
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal_container">
        <button className="close_button" onClick={onClose}>X</button>
        <h2>{professorSelecionado ? "Editar" : "Cadastrar"}</h2>
        <div className="body_modal">
          <div className="caixa1">
            <form onSubmit={handleSubmit}>

              <input
                className="ni_modal"
                value={ni}
                onChange={(e) => setNi(e.target.value)}
                placeholder="NI"
              />
              <input
                className="nome_modal"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="NOME"
              />
              <input
                className="email_modal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL"
              />
              <input
                className="cel_modal"
                value={cel}
                onChange={(e) => setCel(e.target.value)}
                placeholder="CELULAR"
              />
              <input
                className="ocup_modal"
                value={ocup}
                onChange={(e) => setOcup(e.target.value)}
                placeholder="OCUP"
              />
              <button type="submit" onClick={professorSelecionado ? upDate : newTeacher}>{professorSelecionado ? "Atualizar" : "Salvar"}</button>
            </form>
          </div>
          <div className="caixa2">
            <div className="foto">

            </div>
          </div>
        </div>
      </div>
    </div>
  )

}


export default ModalProfessores
