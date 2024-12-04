// Gemini Api
// let heading = ""

let jobSuggestionsDisplayContainer = document.getElementById("jobSuggestionsDisplayContainer");


// import { GoogleGenerativeAI } from "@google/generative-ai";
// const API_KEY = "AIzaSyBTh7fVMKeJzscSQ4W5xIKgw4VJWOaHqF4";

// const genAI = new GoogleGenerativeAI(API_KEY);

// let prompt = "";

// async function Search(prompt, heading) {
//     // For text-only input, use the gemini-pro model
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();
//     const md = window.markdownit(); // Create a new instance of markdown-it
//     // console.log(md.render(text));
//     jobSuggestionsDisplayContainer.innerHTML = `<h1 id="jobSuggestionsDisplayContainerHeading" class="text-2xl font-bold text-blue-600">${heading}</h1><br>${md.render(text)}`;
//     jobSuggestionsDisplayContainer.style.justifyContent = "center"
// }

// document.getElementById("jobSuggestionButton").addEventListener("click", () => {
//     // let skills_dsp = document.querySelectorAll(".skills-items");

//     prompt = "";
//     let skills_dsp = document.querySelectorAll(".skills-items .preview-item .preview-item-val");
//     //   console.log(skills_dsp);
//     heading = "Jobs Suggestion :-"
//     skills_dsp.forEach(element => {
//         prompt = prompt + element.innerHTML + " ";
//     })
//     prompt += "  jobs suggestions with reference links"

//     Search(prompt, heading);

//     console.log(prompt);

// })

document.getElementById("jobSuggestionButton").addEventListener("click", async function getJobSuggestions() {

    const url = 'https://linkedin-jobs-api2.p.rapidapi.com/active-jb-7d?title_filter=%22Data%20Engineer%22&location_filter=%22United%20States%22';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'acf9fff77fmsh32a838509a556b4p106c28jsn5e7252ac09ae',
            'x-rapidapi-host': 'linkedin-jobs-api2.p.rapidapi.com'
        }
    };

    jobSuggestionsDisplayContainer.innerHTML = ''
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)

        if (result.length > 0) {
            result.slice(0, 10).forEach(job => { // Limit to 10 projects
                jobSuggestionsDisplayContainer.innerHTML += `
                     <div class=" job-suggestion bg-slate-50 border-solid border-neutral-950 p-5 mr-3 mb-4 w-full ">
                        <h2 class="text-blue-800 text-4xl ">${job.title}</h2>
                        <p class="text-2xl"> ${job.organization}</p>
                        <p>Location: ${job.locations_raw[0]['address'].addressCountry} ${job.locations_raw[0]['address'].addressLocality}</p>
                        <p>Type: ${job.employment_type}</p>
                        <p class=" mb-2" rows="7">${job.linkedin_org_description}</p>
                        <a href="${job.url}" target="_blank" class="bg-sky-600 p-2 m-4 text-white">Apply Here</a>
                    </div>
                `;
            });
        } else {
            jobSuggestionsDisplayContainer.innerHTML = '<p>No job recommendations found.</p>';
        }

    }
    catch (error) {
        jobSuggestionsDisplayContainer.innerHTML = error;
    }
})



// document.getElementById("roadmapSuggestionButton").addEventListener("click", () => {

//     prompt = "";

//     heading = "RoadMap with how you can enhance your skills :-"

//     let skills_dsp = document.querySelectorAll(".skills-items .preview-item .preview-item-val");
//     //   console.log(skills_dsp);
//     skills_dsp.forEach(element => {
//         prompt = prompt + element.innerHTML + " ";
//     })
//     prompt += " Advance roadMap with these skils"

//     Search(prompt, heading);

//     console.log(prompt);

// })


document.getElementById('roadmapSuggestionButton').addEventListener("click",
    async function getProjectRecommendations() {
        const url = 'https://github-repos.p.rapidapi.com/search?user=samuk-a';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'acf9fff77fmsh32a838509a556b4p106c28jsn5e7252ac09ae',
                'x-rapidapi-host': 'github-repos.p.rapidapi.com'
            }
        };
        jobSuggestionsDisplayContainer.innerHTML = ''


        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result)


            const repositories = result.repositories || [];

            if (repositories.length > 0) {
                repositories.slice(0, 10).forEach(project => { // Limit to 10 projects
                  jobSuggestionsDisplayContainer.innerHTML += `
                    <div class="project-recommendation bg-slate-50 border-solid border-neutral-950 p-4 mr-3 mb-4 w-full h-1/4">
                        <h4 class="text-blue-800 text-2xl p-3">${project.name}</h4>
                        <p class="text-blue-700 text-xl p-3">Description: ${project.description || 'No description available'}</p>
                        <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="bg-sky-600 p-2 m-4 text-white">View Project</a>
                    </div>
                `;
                });
            } else {
              jobSuggestionsDisplayContainer.innerHTML = '<p>No project recommendations found.</p>';
            }
        } catch (error) {
            console.error('Error fetching project recommendations:', error);
            jobSuggestionsDisplayContainer.innerHTML = '<p>Error fetching project recommendations. Please try again later.</p>';
        }

    }
)













