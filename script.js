

function fetchApi() {
  fetch("https://restcountries.com/v3.1/all").then((response) => {
    response
      .json()
      .then((data) => {
        const datas = data.sort((a, b) =>
          a.name.common.toLowerCase() > b.name.common.toLowerCase() ? 1 : -1
        );
        datas.forEach((element) => {
          const body = document.querySelector('body')
          const container = document.createElement("div");
          container.className = "container";
          body.appendChild(container);
          const country = document.createElement("p");
          country.innerText = element.name.common
          country.className='txt'
          console.log('direct1 ==>',element)
          container.appendChild(country);
          const img = document.createElement("img");
          img.src = `${element.flags.png}? ${element.flags.png} :''`;
          img.className='img'
          container.appendChild(img);
          const row = document.createElement('div')
          row.className='row'
          container.appendChild(row)
          const capital = document.createElement('p')
          capital.innerText='Capital :'
          capital.className='txt'
          row.appendChild(capital)
          const cap = document.createElement('p')
          cap.innerHTML= element.capital
          cap.className='txt1'
          row.appendChild(cap)
          const row1 = document.createElement('div')
          row1.className='row1'
          container.appendChild(row1)
          const codes = document.createElement('p')
          codes.innerText='Country Codes : '
          codes.className='txt'
          row1.appendChild(codes)
          const codeData = document.createElement('p')
          codeData.innerHTML= `${element.cca2},   ${ element.cca3}`
          codeData.className='txt2'
          row1.appendChild(codeData)
          const row2 = document.createElement('div')
          row2.className='row1'
          container.appendChild(row2)
          const region = document.createElement('p')
          region.innerText='Region : '
          region.className='txt3'
          row2.appendChild(region)
          const regData = document.createElement('p')
          regData.innerHTML= element.region
          regData.className='txt2'
          row2.appendChild(regData)
          const row3 = document.createElement('div')
          row3.className='row1'
          container.appendChild(row3)
          const lat = document.createElement('p')
          lat.innerText='Lat,Long : '
          lat.className='txt3'
          row3.appendChild(lat)
          const latData = document.createElement('p')
          latData.innerHTML= element.latlng
          latData.className='txt2'
          row3.appendChild(latData)
        });
          
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

fetchApi();

