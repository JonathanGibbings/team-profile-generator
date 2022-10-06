const otherData = other => {
    if (Object.keys(other)[0] === 'officeNumber') {
        return `Office Number: ${Object.values(other)[0]}`;
    } else if (Object.keys(other)[0] === 'github') {
        return `Github: <a href='https://github.com/${Object.values(other)[0]}' target='_blank'>${Object.values(other)[0]}</a>`;
    }else if (Object.keys(other)[0] === 'school') {
        return `School: ${Object.values(other)[0]}`;
    }
};

const roleData = role => {
    if (role === 'Manager') {
        return `<i class="fa fa-coffee" aria-hidden="true"></i> ${role}`;
    } else if (role === 'Engineer') {
        return `<i class="fa fa-code" aria-hidden="true"></i> ${role}`;
    } else if (role === 'Intern') {
        return `<i class="fa fa-graduation-cap" aria-hidden="true"></i> ${role}`;
    }
};

const generateCards = teamArray => {
    return `
    ${teamArray.map(({ name, role, id, email, ...other }) => {
        return `
        <div class='card col-3 m-3 p-0'>
            <div class='card-title pl-2'>
                <h2>${name}</h2>
                <h3>${roleData(role)}</h3>
            </div>
            <div class='card-body p-2'>
                <p>ID: ${id}</p>
                <p>Email: <a href='mailto:'${email}'>${email}</a></p>
                <p>${otherData(other)}</p>
            </div>
        </div>
        `;
    }).join('')}
`
};

module.exports = teamData => {
    // const { manager, engineers, interns} = teamData;

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
<header class='p-4 text-white mb-2'>
    <h1 class='text-center font-weight-bold'>My Team</h1>
</header>
<main class='row mx-5 justify-content-center'>
    ${generateCards(teamData)}
</main>
</body>
</html>
    `;
};