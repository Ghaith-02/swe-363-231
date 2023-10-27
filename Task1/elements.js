



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
   
    const writeExercises = exercises.map((exercise) => `
            <div>
                <h3>${exercise.header}</h3>
                <p>${exercise.description}</p>
            </div>`).join('');
           
    document.getElementById("Days").innerHTML = writeExercises;
}
write();