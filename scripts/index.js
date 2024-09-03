
function latestNews(){
    fetch("http://localhost:3000/getTimeStories",{
        method: 'GET'
    }).then((result)=>{
        result.json().then((res)=>{
            console.log(res);
            getLatestNews(res)
        })
    })
}

latestNews()

function getLatestNews(arr){

    arr.map((e)=>{
        let div = document.createElement('div');
        div.setAttribute('id', 'latestnews')

        

        let title = document.createElement('a');
        title.innerText = e.name;
        title.href=e.url;
        

        let link1 = document.createElement('a');
        link1.href = e.url;
 
        let news = document.createElement('h3');
        news.innerText = e.selection2;

        let link2 = document.createElement('a');
        link2.innerText = e.name;
        link2.href = e.url;

        div.append(title, link1, news)
        document.getElementById('right_div').append(div)
    })

}

function homeNews(){
    fetch("http://localhost:3000/homenews",{
        method: 'GET'
    }).then((result)=>{
        result.json().then((res)=>{
            console.log(res);
            gethomeNews(res)
        })
    })
}

homeNews()

function gethomeNews(arr){

    arr.map((e)=>{
        let div = document.createElement('div');
        div.setAttribute('id', 'latestnews')

        let title = document.createElement('a');
        title.innerText = e.name;
        title.href=e.url;

        let link1 = document.createElement('a');
        link1.href = e.url;


        let news = document.createElement('a');
        news.innerText = e.selection2;
        news.href=e.selection2_url;

        let link2 = document.createElement('a');
        link2.href = e.selection2_url;

        
        div.append(title, link1, news)
        document.getElementById('left_div').append(div)
    })

}