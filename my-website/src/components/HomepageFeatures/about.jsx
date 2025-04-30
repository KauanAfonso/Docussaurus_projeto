import estilos from './about.module.css';

const participants = [
  {
    name: 'Kauan Afonso',
    description: 'Desenvolvedor Back-end e estudante de Ciência da computação.',
    image: 'https://avatars.githubusercontent.com/u/144381805?v=4',
    github: 'https://github.com/KauanAfonso',
    linkedin: 'https://www.linkedin.com/in/kauan-afonso-0452a5295/',
  },
  {
    name: 'Israel Santana',
    description: 'Desenvolvedor UI/UX e estudante de Gestão da Tecnologia.',
    image: 'https://avatars.githubusercontent.com/u/125073383?v=4',
    github: 'https://github.com/RaelMorais',
    linkedin: 'https://www.linkedin.com/in/israelstnmorais/',
  },
];

export function Card_participant() {
  return (
    <div className={estilos.div}>
      <h1 >Participantes</h1>
      <div className={estilos.div_main}>
        {participants.map((participant) => (
          <div key={participant.name} className={estilos.card}>
            <img src={participant.image} alt={`Imagem de ${participant.name}`} />
            <div className={estilos.div_content}>
              <h3>{participant.name}</h3>
              <p>{participant.description}</p>
              <div className={estilos.links}>
                <a href={participant.github} target="_blank" rel="noreferrer">
                  <img src="https://img.icons8.com/?size=100&id=LdLe251oM94s&format=png&color=000000" alt="GitHub" />
                </a>
                <a href={participant.linkedin} id='linkedin' target="_blank" rel="noreferrer">
                  <img src="https://img.icons8.com/?size=100&id=114445&format=png&color=000000" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
