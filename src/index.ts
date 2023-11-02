console.log(`running your task...`);
console.log(process.env);
fetch(`${process.env.SERVER_PRIVATE_DOMAIN}/api/admin/updateAll`, {
  method: 'POST',
});
