

const participants = [

    {
        name: 'Kauan Afonso',
        description: "",
        image: '',
        github:"https://github.com/KauanAfonso",
        linkedin:"https://www.linkedin.com/in/kauan-afonso-0452a5295/",

    },

    {
        name: 'Israel Santana',
        description: "",
        image: '',
        github:"https://github.com/RaelMorais",
        linkedin:"https://www.linkedin.com/in/israelstnmorais/",

    },


]


export function Card_participant() {


    return(
        <div className="container margin-vert--lg">
            <div className="row">
                {participants.map((participant) => (
                    <div className="col col--4" key={participant.name}>
                        <div className="text--center">
                            <img src={participant.image} alt={participant.name} className="avatar__photo avatar__photo--xl" />
                        </div>
                        <h3>{participant.name}</h3>
                        <p>{participant.description}</p>
                        <a href={participant.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={participant.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                ))}
            </div>
        </div>
    )

}