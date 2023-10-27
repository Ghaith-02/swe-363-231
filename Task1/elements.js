let exercises = [
    {
        "header" : "Chest day",
        "description" : "Bench press, Inclined bench press, Declined bench press, Pec flies, Tricep extensions, Dips"

    },

    {
        "header" : "Back day",
        "description" : "Pull ups, Wide pull ups, Chin ups, Low rows, Med rows, Hyperextension, Bicep curls, Hammer curls"

    },

    {
        "header" : "Shoulders day",
        "description" : "Lateral raises, Shoulder press, Front raises, Rear delt, Traps"

    },
    {
        "header" : " Legs day",
        "description" : "Leg extensions, Leg press, Hamstring, Calves, Squat, Set ups"

    }
]



function fillServicesInThePage(){
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

fillServicesInThePage()

function fillProjectsInThePage(){
    document.getElementById("container").innerHTML = ""

 
}
