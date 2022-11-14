let thead = document.querySelector('thead')
let tbody = document.querySelector('tbody')

fetch("https://northwind.vercel.app/api/customers/")
.then((response) => response.json())
.then((data) => {
            console.log(data)
            for(let i = 0; i < data.length; i++){
                console.log(data[i]);
                tbody.innerHTML += `<tr>
                                        <td>${data[i].id}</td>
                                        <td>${data[i].companyName}</td>
                                        <td>${data[i].contactTitle}</td>
                                        <td>${data[i].address.street}</td>
                                        <td>${data[i].address.country}</td>
                                    </tr>`
            }         
})