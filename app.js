require('./bootstrap');


Route:get('skills',function () {
    return('Laravel', 'Vue', 'PHP', 'Javascript', 'Tooling')

    axios.get('/skils'.then(response => console.log(response.data)));
    //Vue Resource

    this.$http.post('/skills',());
});