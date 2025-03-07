fetch("cv.json")

.then(function(response){
    return response.json();
})

.then(function(data){
    let workPlaceholder = document.querySelector('#data-output-work');
    let educationPlaceholder = document.querySelector('#data-output-education');
    
    let workOut = "";
    let educationOut = "";

    data.arbetslivserfarenhet.forEach(function(experience) {
        workOut += `
            <tr>
                <td><strong>${experience.anställningsform}</strong></td>
                <td>${experience.befattning}</td>
            </tr>
            <tr>
                <td class="date">${experience.period}</td>
            </tr>
        `;
    });

    
        data.utbildning.forEach(function(education) {
            educationOut += `
                <tr>
                    <td class="education"><strong>${education.utbildning}</strong></td>
                    <td>${education.period}</td>
                </tr>
            `;
        });


    workPlaceholder.innerHTML = workOut;
    educationPlaceholder.innerHTML = educationOut;
})