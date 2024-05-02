// landing page heading section
const title = document.getElementById("title")
const descri = document.getElementById("description")
const url = document.getElementById("link")
const img = document.getElementById("image")

// apikey
const apiKey = import.meta.env.VITE_API_KEY

// landing page section of news
const leftCol = document.getElementById("leftCol")
const middleCol = document.getElementById('middleCol')
const rightCol = document.getElementById('rightCol')

// indian heading news
async function headFetch() {
  try {
     
    const response = await fetch(`https://gnews.io/api/v4/search?q=headlines&lang=en&country=in&max=1&apikey=${apiKey}`);  
    const data = await response.json();
     // get the data from api
    const articles = data.articles;
    console.log(articles);
    //  append content to the heading 
      for (let i = 0; i < articles.length; i++) {
        const news = articles[i];
        title.textContent = news.title
        descri.textContent = news.description
        url.href = news.url
        img.src = news.image
    }
}
catch (error) {
  console.error('Error fetching data:', error);
}
}

// landing page left side news
async function leftFetch() {
    try {
       
      const response = await fetch(`https://gnews.io/api/v4/search?q=business&lang=en&country=in&max=7&apikey=${apiKey}`);
      
      const data = await response.json();
      
      // console.log( data);
      const articles = data.articles;
      for (let i = 0; i < articles.length; i++) {
        const news = articles[i];
        // creating a div and append to the leftcol
        const leftDiv =document.createElement('div')
        leftCol.appendChild(leftDiv)
        // creating article tag and append to the div
        const leftarticle = document.createElement('article')
        leftDiv.appendChild(leftarticle)
        // creating a link tag for news url and append to article
        const leftLink = document.createElement ('a')
        leftLink.href = news.url
        leftarticle.appendChild (leftLink)
        // created img tag and append to link
        const leftImg = document.createElement ('img')
        leftImg.classList.add ('articleImage')
        leftImg.src = news.image
        leftLink.appendChild (leftImg)
        // created h3 tag for title and append to link
        const leftTitle = document.createElement('h3')
        leftTitle.textContent = news.title
        leftLink.appendChild(leftTitle)
      }
  // Process the data further or update UI here
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // middle news section
  async function middleFetch() {
    try {
      const response = await fetch(`https://gnews.io/api/v4/search?q=sports&lang=en&country=in&max=6&apikey=${apiKey}`)
    const data = await response.json();
    const articles = data.articles

    for (let i = 0; i < articles.length; i++) {
      const trendingNews = articles[i];

      // creating a div and append to the middlecol
      const middleDiv =document.createElement('div')
      middleCol.appendChild(middleDiv)
      // creating article tag and append to the div
      const middlearticle = document.createElement('article')
      middlearticle.classList.add('articleSec')
      middleDiv.appendChild(middlearticle)
      // creating a link tag for news url and append to article
      const middleLink = document.createElement ('a')
      middleLink.href = trendingNews.url
      middlearticle.appendChild (middleLink)
       // created img tag and append to link
      const middleImg = document.createElement ('img')
      middleImg.classList.add ('articleImage')
      middleImg.src = trendingNews.image
      middleLink.appendChild (middleImg)
      // created h3 tag for title and append to link
      const middleTitle = document.createElement('h3')
      middleTitle.classList.add('articleTitle')
      middleTitle.textContent = trendingNews.title
      middleLink.appendChild(middleTitle)
  }
    }
  catch (error) {
    console.error('Error fetching data:', error);
  }
}

// right news section
  async function rightFetch() {
    try {
      const response = await fetch(`https://gnews.io/api/v4/search?q=market&lang=en&country=in&max=7&apikey=${apiKey}`);
      
      const data = await response.json();
      const articles = data.articles

      for (let i = 0; i < articles.length; i++) {
        const indianNews = articles[i];

        // creating a div and append to the middlecol
        const rightDiv =document.createElement('div')
        rightCol.appendChild(rightDiv)
        // creating article tag and append to the div
        const rightarticle = document.createElement('article')
        rightDiv.appendChild(rightarticle)
        // creating a link tag for news url and append to article
        const rightLink = document.createElement ('a')
        rightLink.href = indianNews.url
        rightarticle.appendChild (rightLink)
        // created img tag and append to link
        const rightImg = document.createElement ('img')
        rightImg.classList.add ('articleImage')
        rightImg.src = indianNews.image
        rightLink.appendChild (rightImg)
        // created h3 tag for title and append to link
        const rightTitle = document.createElement('h3')
        rightTitle.textContent = indianNews.title
        rightLink.appendChild(rightTitle)  
      }

    }
    catch (error) {
      console.error('Error fetching data:', error);

    }
  }

headFetch();
leftFetch();
middleFetch();
rightFetch();
  