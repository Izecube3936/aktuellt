
//let url = 'http://www.omdbapi.com/?apikey=[yourkey]&s=star trek';

const about = document.querySelectorAll('#main-nav a');
const content = document.getElementById('content');

for(let link of about) {
    link.addEventListener('click', fetchData);
}

async function fetchData(e) {
    e.preventDefault();	//Länkarna ska ej ladda om sidan

    	try {
        const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=fea0eaf6&t=casino&y=1995'); 
        if(!response.ok) {
            throw new Error('Something went wrong with the server');
        }
        		 
		const data = await response.json();
		// Nedan: Har använt &nbsp; nedan så att rubrikerna flyttas in lite
		//Nedan: Om någon property förekommer två gånger, som. t.ex. 'Plot', har jag valt att ha med den vid ett tillfälle
		content.innerHTML = `		
            <h1 style="color: blue"> &nbsp; &nbsp; Show movie, year, runtime and other things </h1> 
			<ul>
				<li> <p> <b> Title: </b> ${data.Title}  </p> </li>
			    <li> <p> <b> Year:  </b> ${data.Year}   </p> </li>
				<li> <p> <b> Runtime:  </b> ${data.Runtime}  </p> </li>
			    <li> <p> <b> Rated:  </b> ${data.Rated}  </p> </li>
				<li> <p> <b> Released: </b> ${data.Released}  </p> </li>
				<li> <p> <b> Genre: </b> ${data.Genre}  </p> </li>
			</ul>
			<hr> 
			<h1 style="color: blue"> &nbsp; &nbsp; Show director, writer, actors and other things </h1> 
			<ul>
				<li> <p> <b> Director: </b> ${data.Director}  </p> </li>
			    <li> <p> <b> Writer:  </b> ${data.Writer}   </p> </li>
				<li> <p> <b> Actors:  </b> ${data.Actors}  </p> </li>
			    <li> <p> <b> Plot:  </b> ${data.Plot}  </p> </li>
				<li> <p> <b> Language: </b> ${data.Language}  </p> </li>
				<li> <p> <b> Awards: </b> ${data.Awards}  </p> </li>
				<li> <p> <b> BoxOffice: </b> ${data.BoxOffice}  </p> </li>
				<li> <p> <b> Country: </b> ${data.Country}  </p> </li>
				<li> <p> <b> DVD Released: </b> ${data.DVD}  </p> </li>
				<li> <p> <b> Production: </b> ${data.Production}  </p> </li>
				
			</ul>
			<hr>
			<h1 style="color: blue"> &nbsp; &nbsp; Show ratings, type and website </h1>	
			<ul>
				<p> <li> <b> Source:  </b> ${data.Ratings[0].Source}  </li> 
				<li> <b> imdbID:  </b> ${data.imdbID}  </li>
				<li> <b> imdbVotes:  </b> ${data.imdbVotes}  </li>
				<li> <b> Value:  </b> ${data.Ratings[0].Value}  </li> </p>
				
				<p> <li> <b> Source:  </b> ${data.Ratings[1].Source}  </li> 
				<li> <b> Value:  </b> ${data.Ratings[1].Value}  </li> </p>
				
				<p> <li> <b> Source:  </b> ${data.Ratings[2].Source}  </li> 
				<li> <b> Value:  </b> ${data.Ratings[2].Value}  </li> </p>
				
				<p> <li> <b> Type:  </b> ${data.Type}  </li> </p>
				<p> <li> <b> Website:  </b> ${data.Website}  </li> </p>
			</ul> `
						
	}

	catch(error) {
        console.log(error);
        }
		
	}

		
		




		
      					
		
	

 



