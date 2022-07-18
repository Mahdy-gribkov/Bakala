const serverUrl = `http://127.0.0.1:3000/customers/response`;

// 1) Get all customers
function getAllCustomers() {
    fetch(`${serverUrl}/get-all-customers.json`)
        // `http://127.0.0.1:3000/customers/response/get-all-customers.json`

        .then(res => res.json())

        .then(customers => {
            console.log(customers);

            let html = '';
            customers.forEach(singleCustomer => {
                html += `<tr>
                    <td>${singleCustomer.id}</td>
                    <td>${singleCustomer.name}</td>
                    <td>${singleCustomer.email}</td>
                </tr>`;
            });
            console.log(customers);


            document.getElementById(`customers-table`).innerHTML = html;
        })

        .catch(error => {
            throw Error(error);
        })
}
document.getElementById(`get-all-customers-button`)
    .addEventListener('click', getAllCustomers);


// 2) Get customer by id
// function getCustomerById() {
//     const id = document.getElementById(`get-customer-id-field`).value;

//     fetch(`${serverUrl}/get-customer.json?${id}`)

//         .then(res => res.json())
//         .then(customers => {
//             let html = '';
//             customers.forEach(singleCustomer => {
//                 html += `<tr>
//                     <td>${singleCustomer.id}</td>
//                     <td>${singleCustomer.name}</td>
//                     <td>${singleCustomer.email}</td>
//                 </tr>`;
//             });
//             document.getElementById(`get-customer-table`).innerHTML = html;
//         })

//         .catch(error => {
//             throw Error(error);
//         })
// }
// document.getElementById(`get-customer-button`)
//     .addEventListener('click', getCustomerById);


// 3) Add new customer
function addCustomer() {
    const name = document.getElementById(`add-customer-name`).value;
    const email = document.getElementById(`add-customer-email`).value;
    const data = { name: name.trim(), email: email.trim() };

    fetch(`${serverUrl}/add-customer.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

        .then(res => res.json())
        .then(json => {
            document.getElementById(`add-customer-result`)
                .innerHTML = `New customer added. ${JSON.stringify(json)}`;
        })
        .catch(error => {
            throw Error(error);
        })
}
document.getElementById(`add-customer-button`)
    .addEventListener(`click`, addCustomer);