import './about.css'

const developers = [
    {
        firstname: "Kfir",
        lastname: "Tayar",
        id: 208991430,
        email:"kfirtayar145@gmail.com"
    },
    {
        firstname: "Adi",
        lastname: "",
        id: 1,
        email:""
    }
];

function AboutPage() {
    return (
        <div className="developers">
            {developers.map((developer) => (
                <>
                    firstname={developer.firstname}
                    lastname={developer.lastname}
                    id={developer.id}
                    email={developer.email}
               </>
            ))};
        </div>
    );
}

export default AboutPage();