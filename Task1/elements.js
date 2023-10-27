



function details(header, description) {
        this.header = header;
        this.description = description;
}





let exercises = [
        new details("Chest day","Bench press, Inclined bench press, Declined bench press, Pec flies, Tricep extensions, Dips"),
        new details("Back day","Pull ups, Wide pull ups, Chin ups, Low rows, Med rows, Hyperextension, Bicep curls, Hammer curls"),
        new details("Shoulders day","Lateral raises, Shoulder press, Front raises, Rear delt, Traps"),
        new details("Legs day","Leg extensions, Leg press, Hamstring, Calves, Squat, Set ups")
]

function write(){
    document.getElementById("Days")
    for(let exercise of exercises){
        let content = `
                <div>
                    <h2>${exercise.header}</h2>
                    <p>${exercise.description}</p>
                </div>`

        document.getElementById("Days").innerHTML += content

    }
}
write()
