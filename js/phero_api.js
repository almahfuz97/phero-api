const loadApi = async () => {
    const url = 'https://openapi.programming-hero.com/api/course/curriculum';
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.data);
        showMilestones(data.data);
    }
    catch (err) { console.log(err); }
}

// show milestone function
const showMilestones = data => {
    const milestoneDetails = document.getElementById('milestone-details');
    showImage(data[0].image);

    data.forEach(milestone => {
        const div = document.createElement('div');
        // div.classList.add(['d-flex', 'justify-content-center']);
        // div.classList.add('col-5');

        milestone.modules.forEach(module => {
            console.log(module.name)
        })


        div.innerHTML = `
    <div class="accordion" id="accordionExample${milestone._id}">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne${milestone._id}">
      <button class="accordion-button bg-danger text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne${milestone._id}" aria-expanded="false" aria-controls="collapseOne${milestone._id}" onclick="showImage('${milestone.image}')">
      ${milestone.name}
      </button>
    </h2>
    <div id="collapseOne${milestone._id}" class="accordion-collapse collapse" aria-labelledby="headingOne${milestone._id}" data-bs-parent="#accordionExample${milestone._id}">
      <div class="accordion-body">
      ${milestone.modules.map(module => {
            return `
                            <p class="my-1 border rounded p-2"> ${module.name} </p>
                        `
        }).join("")}
      </div>
    </div>
  </div>
</div>
    `
        milestoneDetails.appendChild(div);
    });

}
const showImage = image => {
    const milestoneImage = document.getElementById('milestone-image');
    milestoneImage.setAttribute("src", image);
}
loadApi();
