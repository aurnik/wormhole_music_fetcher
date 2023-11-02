console.log(`running your task...`);
fetch(`${process.env.SERVER_PRIVATE_DOMAIN}/api/admin/updateAll`, {method: 'POST'})
