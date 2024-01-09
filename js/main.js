class Customer {
    constructor(name, company, phone, email, country, status) {
        this.name = name
        this.company = company
        this.phone = phone
        this.email = email
        this.country = country
        this.status = status
    }
}

let customers = [
    new Customer('Jane Cooper', 'Microsoft', '(225) 555-0118', 'jane@microsoft.com', 'United States', 'Active'),
    new Customer('Floyd Miles', 'Yahoo', '(205) 555-0100', 'floyd@yahoo.com', 'Kiribati', 'Inactive'),
    new Customer('Ronald Richards', 'Adobe', '(302) 555-0107', 'ronald@adobe.com', 'Israel', 'Inactive'),
    new Customer('Marvin McKinney', 'Tesla', '(252) 555-0126', 'marvin@tesla.com', 'Iran', 'Active'),
    new Customer('Jerome Bell', 'Google', '(629) 555-0129', 'jerome@google.com', 'Réunion', 'Active'),
    new Customer('Kathryn Murphy', 'Microsoft', '(406) 555-0120', 'kathryn@microsoft.com', 'Curaçao', 'Active'),
    new Customer('Jacob Jones', 'Yahoo', '(208) 555-0112', 'jacob@yahoo.com', 'Brazil', 'Active'),
    new Customer('Kristin Watson', 'Facebook', '(704) 555-0127', 'kristin@facebook.com', 'Åland Islands', 'Inactive'),
]

let customersList = document.getElementById('customers-table__list')

function newCustomerTR(customer) {
    let customerTR = document.createElement('tr');
    let nameTD = document.createElement('td');
    let companyTD = document.createElement('td');
    let phoneTD = document.createElement('td');
    let emailTD = document.createElement('td');
    let countryTD = document.createElement('td');
    let statusTD = document.createElement('td');

    nameTD.textContent = customer.name;
    companyTD.textContent = customer.company;
    phoneTD.textContent = customer.phone;
    emailTD.textContent = customer.email;
    countryTD.textContent = customer.country;
    statusTD.textContent = customer.status;

    customerTR.append(nameTD)
    customerTR.append(companyTD)
    customerTR.append(phoneTD)
    customerTR.append(emailTD)
    customerTR.append(countryTD)
    customerTR.append(statusTD)

    if(customer.status == 'Active') {
        statusTD.classList.add('customers-table__active')
    } else {
        statusTD.classList.add('customers-table__inactive')
    }

    return customerTR;
}

function render() {
    let customersCopy = [...customers]
    for (const customer of customersCopy) {
        customersList.append(newCustomerTR(customer))
    }
}
render()
