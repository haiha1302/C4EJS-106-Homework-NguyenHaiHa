// bao gồm: họ tên+ảnh

async function getData(params) {
    const DATA=await fetch('https://reqres.in/api/users')
    let Data=await DATA.json()
    let dataEmail=Data.data
    for(let item of dataEmail){
        document.write('<p>Link:' + item.email.link(item.avatar)+'</p>')
        
        // console.log(item);
    }
}
getData()